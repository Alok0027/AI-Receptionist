import { Router } from 'express';
import { body } from 'express-validator';
import {
  listAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} from '../controllers/appointments.controller.js';
import { requireAuth } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = Router();
router.use(requireAuth);

router.get('/', asyncHandler(listAppointments));

router.post(
  '/',
  [body('name').notEmpty(), body('date').isISO8601()],
  validate,
  asyncHandler(createAppointment)
);

router.patch('/:id', asyncHandler(updateAppointment));
router.delete('/:id', asyncHandler(deleteAppointment));

export default router;
