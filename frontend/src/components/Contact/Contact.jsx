import { useState } from "react";
import { profile } from "../../data/portfolioData";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon, MailIcon } from "../../ui/Icons";
import Reveal from "../../ui/Reveal";
import "./Contact.css";

const LINKS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon },
  { label: "GitHub", value: profile.github.replace("https://", ""), href: profile.github, Icon: GithubIcon },
  { label: "LinkedIn", value: profile.linkedin.replace("https://", ""), href: profile.linkedin, Icon: LinkedinIcon },
];

// CHANGED: the form now POSTs to a real backend instead of opening a
// mailto: link. The backend's address is configurable via an env var so
// you can point it at a deployed server later without touching this file
// — see VITE_CONTACT_API_URL in the project's .env (copy .env.example).


// const API_URL = import.meta.env.VITE_CONTACT_API_URL || "http://localhost:5000/api/contact";



export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  // CHANGED: one "status" state instead of a single boolean — tracks the
  // whole lifecycle of the request (idle → sending → success / error).
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Tell me your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email.";
    if (!form.message.trim()) next.message = "Add a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  // ADDED: sends the form to the backend (../backend/server.js) which emails
  // it to you via Nodemailer. See backend/README.md for setup.





const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  setStatus("sending");
  setServerError("");

  const formData = new FormData();

  // formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");

  formData.append(
  "access_key",
  import.meta.env.VITE_WEB3FORMS_KEY
);

  formData.append("name", form.name);
  formData.append("email", form.email);
  formData.append("message", form.message);

  formData.append("subject", "New Portfolio Contact");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      setStatus("success");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    setStatus("error");
    setServerError(
      error.message || "Something went wrong. Please try again."
    );
  }
};





  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!validate()) return;

  //   setStatus("sending");
  //   setServerError("");

  //   // ADDED: abort the request if it takes too long (e.g. backend not
  //   // running, or a slow SMTP failure) so the button never gets stuck
  //   // on "Sending…" forever.
  //   const controller = new AbortController();
  //   const timeout = setTimeout(() => controller.abort(), 15000);

  //   try {
  //     const res = await fetch(API_URL, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(form),
  //       signal: controller.signal,
  //     });
  //     const data = await res.json().catch(() => ({}));

  //     if (!res.ok || !data.success) {
  //       throw new Error(data.error || "Something went wrong sending your message.");
  //     }

  //     setStatus("success");
  //     setForm({ name: "", email: "", message: "" });
  //   } catch (err) {
  //     setStatus("error");
  //     // CHANGED: a network-level failure (backend not running, no internet,
  //     // CORS, etc.) throws a TypeError whose message is just the browser's
  //     // raw "Failed to fetch" — not something a visitor should see. Show a
  //     // friendly explanation instead, and only surface the backend's own
  //     // message when we actually got one back from the server.
  //     setServerError(
  //       err.name === "AbortError"
  //         ? "That took too long. Please check the backend is running and try again."
  //         : err instanceof TypeError
  //         ? "Couldn't reach the contact server. Is the backend running?"
  //         : err.message || "Couldn't reach the contact server. Is the backend running?"
  //     );
  //   } finally {
  //     clearTimeout(timeout);
  //   }
  // };



  return (
    <section id="contact" className="section section--alt contact">
      <div className="container contact-grid">
        <Reveal className="contact-intro">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let's talk data.</h2>
          <p className="section-sub">
            Open to internships, junior analyst roles, and interesting freelance projects.
            Reach out directly or send a note.
          </p>

          <ul className="contact-links">
            {LINKS.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a href={href} target={label !== "Email" ? "_blank" : undefined} rel="noreferrer">
                  <span className="contact-link-icon">
                    <Icon />
                  </span>
                  <span>
                    <span className="contact-link-label">{label}</span>
                    <span className="contact-link-value">{value}</span>
                  </span>
                  <ArrowUpRightIcon className="contact-link-arrow" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="contact-form-wrap">
          <form className="contact-form card" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" value={form.name} onChange={update("name")} placeholder="Your name" />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" value={form.email} onChange={update("email")} placeholder="you@example.com" />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={update("message")}
                placeholder="What would you like to talk about?"
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            {/* CHANGED: button disables + relabels itself while the request is in flight */}
            <button type="submit" className="btn btn-primary contact-submit" disabled={status === "sending"}>
              <MailIcon className="btn-icon" />
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {/* ADDED: success and error feedback, replacing the old "opening your email client" note */}
            {status === "success" && (
              <p className="form-success">Thanks! Your message is on its way — I'll get back to you soon.</p>
            )}
            {status === "error" && <p className="form-submit-error">{serverError}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
