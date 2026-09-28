import { Router } from 'express';
import { body } from 'express-validator';
import { listClients, createClient, updateClient } from '../controllers/clients.controller.js';
import { requireAuth } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = Router();
router.use(requireAuth);

router.get('/', asyncHandler(listClients));
router.post('/', [body('name').notEmpty()], validate, asyncHandler(createClient));
router.patch('/:id', asyncHandler(updateClient));

export default router;
