import { prisma } from '../config/db.js';

const toPublicCall = (call) => ({ ...call, keywords: JSON.parse(call.keywords) });

export const listCalls = async (req, res) => {
  const { status, clientType, search } = req.query;

  const calls = await prisma.call.findMany({
    where: {
      businessId: req.businessId,
      ...(status ? { status } : {}),
      ...(clientType ? { client: { type: clientType } } : {}),
      ...(search
        ? {
            OR: [
              { caller: { contains: search } },
              { phone: { contains: search } },
              { summary: { contains: search } },
            ],
          }
        : {}),
    },
    include: { client: true },
    orderBy: { timestamp: 'desc' },
  });

  res.json({ calls: calls.map(toPublicCall) });
};

export const getCall = async (req, res) => {
  const call = await prisma.call.findFirst({
    where: { id: req.params.id, businessId: req.businessId },
    include: { client: true },
  });
  if (!call) return res.status(404).json({ error: 'Call not found' });
  res.json({ call: toPublicCall(call) });
};

export const createCall = async (req, res) => {
  const { keywords, ...rest } = req.body;
  const call = await prisma.call.create({
    data: { ...rest, businessId: req.businessId, keywords: JSON.stringify(keywords || []) },
  });
  res.status(201).json({ call: toPublicCall(call) });
};

export const updateCall = async (req, res) => {
  const existing = await prisma.call.findFirst({
    where: { id: req.params.id, businessId: req.businessId },
  });
  if (!existing) return res.status(404).json({ error: 'Call not found' });

  const { keywords, ...rest } = req.body;
  const call = await prisma.call.update({
    where: { id: req.params.id },
    data: { ...rest, ...(keywords ? { keywords: JSON.stringify(keywords) } : {}) },
  });
  res.json({ call: toPublicCall(call) });
};

// Aggregated numbers for the Call Management dashboard (stats + resolution +
// client distribution). Computed from real rows — no invented data.
export const getCallStats = async (req, res) => {
  const businessId = req.businessId;

  const [totalCalls, resolvedCalls, resolvedByKnowledgeBase, resolvedByTransfer, spamBlocked, ratedCalls, clients] =
    await Promise.all([
      prisma.call.count({ where: { businessId } }),
      prisma.call.count({ where: { businessId, resolved: true } }),
      prisma.call.count({ where: { businessId, resolvedBy: 'knowledge-base' } }),
      prisma.call.count({ where: { businessId, resolvedBy: 'transfer' } }),
      prisma.call.count({ where: { businessId, spamBlocked: true } }),
      prisma.call.findMany({ where: { businessId, rating: { not: null } }, select: { rating: true } }),
      prisma.client.findMany({
        where: { businessId },
        select: { type: true, _count: { select: { calls: true } } },
      }),
    ]);

  const durationAgg = await prisma.call.aggregate({
    where: { businessId },
    _avg: { durationSeconds: true },
  });

  const satisfactionScore = ratedCalls.length
    ? ratedCalls.reduce((sum, c) => sum + c.rating, 0) / ratedCalls.length
    : null;

  const distributionTotals = clients.reduce(
    (acc, c) => {
      acc[c.type] = (acc[c.type] || 0) + c._count.calls;
      return acc;
    },
    { new: 0, existing: 0, prospect: 0 }
  );
  const distributionTotalCalls = Object.values(distributionTotals).reduce((a, b) => a + b, 0);

  res.json({
    stats: {
      totalCalls,
      resolvedCalls,
      unresolvedCalls: totalCalls - resolvedCalls,
      resolvedByKnowledgeBase,
      resolvedByTransfer,
      spamBlocked,
      averageHandleTimeSeconds: Math.round(durationAgg._avg.durationSeconds || 0),
      satisfactionScore,
    },
    clientDistribution: Object.entries(distributionTotals).map(([type, value]) => ({
      type,
      value,
      percentage: distributionTotalCalls ? Number(((value / distributionTotalCalls) * 100).toFixed(1)) : 0,
    })),
  });
};
