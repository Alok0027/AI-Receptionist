import { Router } from 'express';
import { handleVoiceWebhook } from '../controllers/voiceWebhook.controller.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = Router();

// No requireAuth here — this is called by Vapi, not the frontend. It's protected
// instead by the X-Vapi-Secret header check in the controller. businessId is in
// the path since Vapi's Server URL is set once per assistant, per business.
router.post('/:businessId', asyncHandler(handleVoiceWebhook));

export default router;
