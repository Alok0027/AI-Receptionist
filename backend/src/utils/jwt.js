import jwt from 'jsonwebtoken';

export const signToken = (businessId) =>
  jwt.sign({ sub: businessId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });

export const verifyToken = (token) => jwt.verify(token, process.env.JWT_SECRET);
