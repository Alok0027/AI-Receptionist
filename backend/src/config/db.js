import { PrismaClient } from '@prisma/client';

// A single shared Prisma instance for the whole process.
export const prisma = new PrismaClient();
