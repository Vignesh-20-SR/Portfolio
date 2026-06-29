# Contact form backend

A tiny Express server with one job: receive `{ name, email, message }`
from the portfolio's contact form and email it to you via Nodemailer.

## Setup

```bash
cd backend
npm install
cp .env.example .env
```

Then open `.env` and fill in three values:

| Variable     | What it is                                                                 |
|--------------|------------------------------------------------------------------------------|
| `EMAIL_USER` | The email account that **sends** the message (e.g. a Gmail address)         |
| `EMAIL_PASS` | An **app password** for that account — not your normal login password       |
| `EMAIL_TO`   | The address where **you** want to receive contact form messages             |

### Getting a Gmail App Password

This server defaults to Gmail's SMTP service. Gmail requires an "app
password" instead of your real password for this kind of access:

1. Turn on 2-Step Verification on the Google account: https://myaccount.google.com/security
2. Go to https://myaccount.google.com/apppasswords
3. Create a new app password (name it anything, e.g. "Portfolio Contact Form")
4. Copy the 16-character password it gives you into `EMAIL_PASS` in `.env`

Not using Gmail? Open `server.js` and replace the `transporter` block with
your provider's SMTP host/port instead of `service: "gmail"` — Nodemailer's
docs cover this: https://nodemailer.com/smtp/

## Running it

```bash
npm start
```

You should see:

```
Contact form backend running on http://localhost:5000
```

Leave this running in its own terminal while you also run the frontend
(`npm run dev` inside the sibling **`frontend/`** folder) — they're two
separate servers.

## How the frontend finds this server

The React app calls `POST http://localhost:5000/api/contact` by default.
If you change `PORT` above, or deploy this backend somewhere, update
`VITE_CONTACT_API_URL` in the **frontend's** `.env` file (in `frontend/`,
not this folder) to match. See the root project README for details.

## Deploying

This is a plain Node/Express app — it can be deployed to Render, Railway,
Fly.io, a VPS, etc. Whichever you choose, set the same three environment
variables (`EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO`) in that platform's
dashboard instead of a local `.env` file.
