# Vignesh S R — Portfolio

This project is split into two independent folders:

```
frontend/   ← the React (Vite) portfolio site
backend/    ← the Express + Nodemailer server that powers the contact form
```

They're two separate Node projects — each has its own `package.json` and needs
its own `npm install`. You'll run them in two separate terminals.

## Quick start

**Terminal 1 — frontend:**

```bash
cd frontend
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

**Terminal 2 — backend (powers the Contact form's "Send Message" button):**

```bash
cd backend
npm install
cp .env.example .env      # then open .env and fill in your real email credentials
npm start
```

You should see `Contact form backend running on http://localhost:5000`.

The frontend is already configured to call `http://localhost:5000/api/contact`,
so as long as both are running, the contact form works end to end. If the
backend isn't running, the form shows a friendly "couldn't reach the contact
server" error instead of failing silently.

## Where to go next

- **`frontend/README.md`** — full details on the site itself: project
  structure, design tokens, what to swap in before publishing (resume, photos,
  links), etc.
- **`backend/README.md`** — full backend setup: getting a Gmail App Password,
  changing where emails are sent, deploying it somewhere other than your own
  machine.
