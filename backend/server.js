// ============================================================
// Tiny backend for the portfolio contact form.
// Receives { name, email, message } from the React frontend and
// emails it to you using Nodemailer.
//
// HOW TO RUN:
//   cd backend
//   npm install
//   cp .env.example .env      ← then fill in your real values
//   npm start
//
// The server listens on http://localhost:5000 by default (see PORT
// below) and exposes one endpoint: POST /api/contact
// ============================================================

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors()); // allows the Vite frontend (different port) to call this API
app.use(express.json());

const PORT = process.env.PORT || 5000;

// ------------------------------------------------------------
// Email credentials come from environment variables — NEVER
// hardcode them here. See .env.example in this folder for what to set.
// ------------------------------------------------------------
const transporter = nodemailer.createTransport({
  service: "gmail", // swap this block for any other SMTP provider if you don't use Gmail
  auth: {
    user: process.env.EMAIL_USER, // the email account that SENDS the message
    pass: process.env.EMAIL_PASS, // a Gmail "App Password" — not your normal password
  },
  // ADDED: fail fast instead of hanging for a long time if credentials
  // are wrong or the SMTP server can't be reached.
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
});

// Minimal HTML-escaping so a message containing "<", ">", "&", etc.
// can't break the HTML email body below.
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};

  // Basic validation — mirrors the checks already done in the frontend,
  // but never trust the client alone.
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Name, email, and message are all required.",
    });
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // must be the authenticated address for Gmail
      replyTo: email, // hitting "reply" in your inbox replies straight to the visitor
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // 👉 where YOU receive messages — set in .env
      subject: `Portfolio contact from ${name}`,
      text: `${message}\n\n— ${name} (${email})`,
      html: `
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        <p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Failed to send contact email:", err.message);
    res.status(500).json({
      success: false,
      error: "Something went wrong sending your message. Please try again shortly.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Contact form backend running on http://localhost:${PORT}`);
});


