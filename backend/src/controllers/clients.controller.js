import { prisma } from '../config/db.js';

export const listClients = async (req, res) => {
  const { type } = req.query;
  const clients = await prisma.client.findMany({
    where: { businessId: req.businessId, ...(type ? { type } : {}) },
    orderBy: { createdAt: 'desc' },
  });
  res.json({ clients });
};

export const createClient = async (req, res) => {
  const client = await prisma.client.create({ data: { ...req.body, businessId: req.businessId } });
  res.status(201).json({ client });
};

export const updateClient = async (req, res) => {
  const existing = await prisma.client.findFirst({
    where: { id: req.params.id, businessId: req.businessId },
  });
  if (!existing) return res.status(404).json({ error: 'Client not found' });

  const client = await prisma.client.update({ where: { id: req.params.id }, data: req.body });
  res.json({ client });
};
