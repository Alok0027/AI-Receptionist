# AI Receptionist — Backend

Node/Express + Prisma API for the dashboard, call logs, appointments, and
knowledge base. Uses Postgres (Neon) for both local dev and production — one
`DATABASE_URL`, no separate local database setup.

## Setup

```bash
npm install
cp .env.example .env   # then fill in DATABASE_URL, JWT_SECRET, VOICE_WEBHOOK_SECRET
npx prisma migrate dev --name init
npm run dev
```

Server runs on `http://localhost:4000`.

## Data model

One `Business` = one registered account (from the Register wizard). Everything
else (`Call`, `Appointment`, `Client`, `KnowledgeEntry`) is scoped to a
`businessId`, enforced in every controller — a token only ever sees its own
business's data.

## Auth

`POST /api/auth/register`, `POST /api/auth/login` return `{ token, business }`.
Send `Authorization: Bearer <token>` on every other request.

## Endpoints

- `/api/calls` — list (filters: `status`, `clientType`, `search`), get one, create, patch
- `/api/calls/stats` — the numbers `Callmanage.jsx` needs (resolution breakdown, client distribution)
- `/api/appointments` — list (filters: `status`, `from`, `to`), create, patch, delete
- `/api/clients` — list (filter: `type`), create, patch
- `/api/knowledge` — FAQ entries (list, create, patch, delete) — this is the source content for the AI's RAG-based answers once the voice pipeline is wired up
- `/api/dashboard/summary` — real, DB-derived metrics only. Deliberately excludes things like "AI accuracy" — those need actual call-outcome logging from the voice pipeline, not invented numbers
- `/api/webhooks/voice/:businessId` — receives Vapi's Server URL webhook and writes a `Call` row from its `end-of-call-report` event (every other Vapi event type is acknowledged and ignored). Authenticated via the `X-Vapi-Secret` header, which must match `VOICE_WEBHOOK_SECRET` — not JWT, since Vapi calls this, not your frontend.

### Wiring up Vapi

1. In your Vapi assistant's settings, set **Server URL** to `https://<your-backend-host>/api/webhooks/voice/<your businessId>` (get your businessId from the `business.id` field returned by `/api/auth/me`).
2. Set the assistant's **Server URL secret** to the same value as your backend's `VOICE_WEBHOOK_SECRET` env var — Vapi echoes it back in the `X-Vapi-Secret` header on every webhook call, which is what authenticates the request.

## Not built yet (next steps)

1. **Frontend wiring**: ~~point `Login.jsx`/`Register.jsx`/`Callmanage.jsx`/`Appointment.jsx`~~ done — see `AI/src`.
2. **RAG over the knowledge base**: the AI currently has no way to actually search `/api/knowledge` entries when answering — that needs an embeddings/retrieval step wired into the Vapi assistant's prompt or a custom LLM endpoint.
3. **Refresh tokens / logout everywhere** if you want sessions beyond a single long-lived JWT.
