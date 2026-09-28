import { prisma } from '../config/db.js';

// Real, DB-derived numbers for the dashboard's top-level metric cards.
// Deliberately does not include figures like "AI accuracy" or "automation rate" —
// those only mean something once the voice pipeline is live and logging call
// outcomes; fabricating them here would just be fake data with extra steps.
export const getDashboardSummary = async (req, res) => {
  const businessId = req.businessId;
  const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  const [totalCalls, callsLast30d, missedCalls, liveCalls, upcomingAppointments, ratedCalls, durationAgg] =
    await Promise.all([
      prisma.call.count({ where: { businessId } }),
      prisma.call.count({ where: { businessId, timestamp: { gte: since } } }),
      prisma.call.count({ where: { businessId, status: 'missed' } }),
      prisma.call.count({ where: { businessId, status: 'live' } }),
      prisma.appointment.count({ where: { businessId, date: { gte: new Date() }, status: { in: ['pending', 'confirmed'] } } }),
      prisma.call.findMany({ where: { businessId, rating: { not: null } }, select: { rating: true } }),
      prisma.call.aggregate({ where: { businessId }, _avg: { durationSeconds: true } }),
    ]);

  const satisfactionScore = ratedCalls.length
    ? Number((ratedCalls.reduce((sum, c) => sum + c.rating, 0) / ratedCalls.length).toFixed(2))
    : null;

  res.json({
    summary: {
      totalCalls,
      callsLast30Days: callsLast30d,
      missedCalls,
      liveCalls,
      upcomingAppointments,
      satisfactionScore,
      averageHandleTimeSeconds: Math.round(durationAgg._avg.durationSeconds || 0),
    },
  });
};
