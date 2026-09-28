import { prisma } from '../config/db.js';

export const listKnowledge = async (req, res) => {
  const entries = await prisma.knowledgeEntry.findMany({
    where: { businessId: req.businessId },
    orderBy: { updatedAt: 'desc' },
  });
  res.json({ entries });
};

export const createKnowledge = async (req, res) => {
  const entry = await prisma.knowledgeEntry.create({ data: { ...req.body, businessId: req.businessId } });
  res.status(201).json({ entry });
};

export const updateKnowledge = async (req, res) => {
  const existing = await prisma.knowledgeEntry.findFirst({
    where: { id: req.params.id, businessId: req.businessId },
  });
  if (!existing) return res.status(404).json({ error: 'Knowledge entry not found' });

  const entry = await prisma.knowledgeEntry.update({ where: { id: req.params.id }, data: req.body });
  res.json({ entry });
};

export const deleteKnowledge = async (req, res) => {
  const existing = await prisma.knowledgeEntry.findFirst({
    where: { id: req.params.id, businessId: req.businessId },
  });
  if (!existing) return res.status(404).json({ error: 'Knowledge entry not found' });

  await prisma.knowledgeEntry.delete({ where: { id: req.params.id } });
  res.status(204).send();
};
