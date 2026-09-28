import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import authRoutes from './routes/auth.routes.js';
import callsRoutes from './routes/calls.routes.js';
import appointmentsRoutes from './routes/appointments.routes.js';
import clientsRoutes from './routes/clients.routes.js';
import knowledgeRoutes from './routes/knowledge.routes.js';
import dashboardRoutes from './routes/dashboard.routes.js';
import voiceWebhookRoutes from './routes/voiceWebhook.routes.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';

export const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (req, res) => res.json({ ok: true }));

app.use('/api/auth', authRoutes);
app.use('/api/calls', callsRoutes);
app.use('/api/appointments', appointmentsRoutes);
app.use('/api/clients', clientsRoutes);
app.use('/api/knowledge', knowledgeRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/webhooks/voice', voiceWebhookRoutes);

app.use(notFoundHandler);
app.use(errorHandler);
