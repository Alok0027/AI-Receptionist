import { prisma } from '../config/db.js';

const durationFromTimestamps = (call) => {
  if (!call?.startedAt || !call?.endedAt) return 0;
  const seconds = (new Date(call.endedAt) - new Date(call.startedAt)) / 1000;
  return Number.isFinite(seconds) && seconds > 0 ? Math.round(seconds) : 0;
};

// Receives Vapi's Server URL webhook. Vapi posts every event for a call
// (status-update, transcript, speech-update, ...) to the same URL, but a Call
// row only needs to be written once the call is actually over, so everything
// except "end-of-call-report" is acknowledged and ignored.
// Auth: Vapi echoes the assistant's configured `server.secret` back verbatim in
// the X-Vapi-Secret header (docs.vapi.ai/server-url/server-authentication).
// businessId comes from the URL itself — each business's Vapi assistant Server
// URL is set to /api/webhooks/voice/<their businessId>, so one shared webhook
// endpoint can serve every tenant without a phone-number lookup table.
export const handleVoiceWebhook = async (req, res) => {
  const secret = req.headers['x-vapi-secret'];
  if (!process.env.VOICE_WEBHOOK_SECRET || secret !== process.env.VOICE_WEBHOOK_SECRET) {
    return res.status(401).json({ error: 'Invalid webhook secret' });
  }

  const { businessId } = req.params;
  const business = await prisma.business.findUnique({ where: { id: businessId } });
  if (!business) {
    return res.status(404).json({ error: 'Unknown business' });
  }

  const message = req.body?.message;
  if (message?.type !== 'end-of-call-report') {
    // Not the event we persist a Call for — acknowledge so Vapi doesn't retry.
    return res.status(200).json({ ignored: message?.type || 'no message' });
  }

  const call = message.call || {};
  const customer = call.customer || {};
  const artifact = message.artifact || {};

  const phone = customer.number || 'unknown';
  const caller = customer.name || phone;
  const type = call.type === 'outboundPhoneCall' ? 'outgoing' : 'incoming';
  const status = ['no-answer', 'voicemail', 'customer-did-not-answer'].includes(message.endedReason)
    ? 'missed'
    : 'completed';

  const created = await prisma.call.create({
    data: {
      businessId,
      caller,
      phone,
      type,
      status,
      durationSeconds: durationFromTimestamps(call),
      summary: message.summary || message.analysis?.summary || null,
      transcript: artifact.transcript || null,
      keywords: JSON.stringify([]),
      recordingUrl: artifact.recording?.stereoUrl || artifact.recording?.url || null,
    },
  });

  res.status(201).json({ call: { ...created, keywords: JSON.parse(created.keywords) } });
};
