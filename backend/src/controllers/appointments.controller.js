import { prisma } from '../config/db.js';

export const listAppointments = async (req, res) => {
  const { status, from, to } = req.query;

  const appointments = await prisma.appointment.findMany({
    where: {
      businessId: req.businessId,
      ...(status ? { status } : {}),
      ...(from || to
        ? {
            date: {
              ...(from ? { gte: new Date(from) } : {}),
              ...(to ? { lte: new Date(to) } : {}),
            },
          }
        : {}),
    },
    orderBy: { date: 'asc' },
  });

  res.json({ appointments });
};

export const createAppointment = async (req, res) => {
  const appointment = await prisma.appointment.create({
    data: { ...req.body, businessId: req.businessId, date: new Date(req.body.date) },
  });
  res.status(201).json({ appointment });
};

export const updateAppointment = async (req, res) => {
  const existing = await prisma.appointment.findFirst({
    where: { id: req.params.id, businessId: req.businessId },
  });
  if (!existing) return res.status(404).json({ error: 'Appointment not found' });

  const { date, ...rest } = req.body;
  const appointment = await prisma.appointment.update({
    where: { id: req.params.id },
    data: { ...rest, ...(date ? { date: new Date(date) } : {}) },
  });
  res.json({ appointment });
};

export const deleteAppointment = async (req, res) => {
  const existing = await prisma.appointment.findFirst({
    where: { id: req.params.id, businessId: req.businessId },
  });
  if (!existing) return res.status(404).json({ error: 'Appointment not found' });

  await prisma.appointment.delete({ where: { id: req.params.id } });
  res.status(204).send();
};
