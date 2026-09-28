import { Router } from 'express';
import { body } from 'express-validator';
import { listCalls, getCall, createCall, updateCall, getCallStats } from '../controllers/calls.controller.js';
import { requireAuth } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = Router();
router.use(requireAuth);

router.get('/stats', asyncHandler(getCallStats));
router.get('/', asyncHandler(listCalls));
router.get('/:id', asyncHandler(getCall));

router.post(
  '/',
  [
    body('caller').notEmpty(),
    body('phone').notEmpty(),
    body('type').isIn(['incoming', 'outgoing']),
    body('status').isIn(['completed', 'missed', 'live']),
  ],
  validate,
  asyncHandler(createCall)
);

router.patch('/:id', asyncHandler(updateCall));

export default router;
