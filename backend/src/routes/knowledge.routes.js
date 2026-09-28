import { Router } from 'express';
import { body } from 'express-validator';
import {
  listKnowledge,
  createKnowledge,
  updateKnowledge,
  deleteKnowledge,
} from '../controllers/knowledge.controller.js';
import { requireAuth } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = Router();
router.use(requireAuth);

router.get('/', asyncHandler(listKnowledge));
router.post(
  '/',
  [body('question').notEmpty(), body('answer').notEmpty()],
  validate,
  asyncHandler(createKnowledge)
);
router.patch('/:id', asyncHandler(updateKnowledge));
router.delete('/:id', asyncHandler(deleteKnowledge));

export default router;
