import bcrypt from 'bcryptjs';
import { prisma } from '../config/db.js';
import { signToken } from '../utils/jwt.js';

const toPublicBusiness = (business) => {
  const { passwordHash, selectedServices, onboarding, ...rest } = business;
  return {
    ...rest,
    selectedServices: JSON.parse(selectedServices),
    onboarding: JSON.parse(onboarding),
  };
};

export const register = async (req, res) => {
  const {
    email, password, firstName, lastName, phone, location, jobTitle, company, industry,
    aiComplexity, supportLevel, selectedServices, onboarding,
  } = req.body;

  const existing = await prisma.business.findUnique({ where: { email } });
  if (existing) {
    return res.status(409).json({ error: 'An account with this email already exists' });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const business = await prisma.business.create({
    data: {
      email, passwordHash, firstName, lastName, phone, location, jobTitle, company, industry,
      aiComplexity: aiComplexity || 'basic',
      supportLevel: supportLevel || 'standard',
      selectedServices: JSON.stringify(selectedServices || []),
      onboarding: JSON.stringify(onboarding || {}),
    },
  });

  const token = signToken(business.id);
  res.status(201).json({ token, business: toPublicBusiness(business) });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const business = await prisma.business.findUnique({ where: { email } });
  if (!business) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const valid = await bcrypt.compare(password, business.passwordHash);
  if (!valid) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const token = signToken(business.id);
  res.json({ token, business: toPublicBusiness(business) });
};

export const me = async (req, res) => {
  const business = await prisma.business.findUnique({ where: { id: req.businessId } });
  if (!business) {
    return res.status(404).json({ error: 'Business not found' });
  }
  res.json({ business: toPublicBusiness(business) });
};
