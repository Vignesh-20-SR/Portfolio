# Vignesh S R — Portfolio

A personal portfolio site built with React (Vite). Highlights education, skills,
projects, hackathon participation, a publication, and certifications.

## Quick start

You'll need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

Other commands:

```bash
npm run build     # production build, output in dist/
npm run preview   # preview the production build locally
npm run lint       # check code with ESLint
```

## Backend (contact form)

This `frontend/` folder is one of two top-level project folders — see the
root `README.md` (one level up) for the full picture. The Contact section
emails you directly via a small Express + Nodemailer server that lives in
the sibling **`../backend`** folder — it's a separate Node project, so it
needs its own install and its own terminal:

```bash
cd ../backend
npm install
cp .env.example .env      # then open .env and fill in your real values
npm start
```

You should see `Contact form backend running on http://localhost:5000`. Leave it
running alongside this frontend's `npm run dev` (two terminals, two servers) —
full setup, including how to get a Gmail App Password, is in
**`backend/README.md`**.

This frontend already knows to call `http://localhost:5000/api/contact`. If you
deploy the backend elsewhere, copy this folder's `.env.example` to `.env` and
update `VITE_CONTACT_API_URL` to match.

## Project structure

```
portfolio/                  ← project root (one level up from this file)
  frontend/                 ← you are here
    src/
      data/portfolioData.js   ← all your content lives here (name, projects, links...)
      components/
        Navbar/
        Hero/
        About/
        Education/
        Skills/
        Projects/
        Hackathon/
        Publications/
        Certifications/
        Contact/
        Footer/
      ui/                      ← shared building blocks (Placeholder, Modal, Icons, Reveal, AnimatedBackground)
      hooks/useReveal.js        ← scroll-reveal animation hook
      index.css                 ← design tokens (colors, fonts, spacing) + base styles
      App.jsx
      main.jsx
    public/
      favicon.svg
      resume.pdf                ← add your resume here (see below)
  backend/                  ← sibling folder, separate Node project
    server.js                 ← Express + Nodemailer backend for the contact form
    .env.example               ← copy to .env, fill in your email credentials
    README.md                  ← full backend setup (Gmail App Password, deploying, etc.)
```

Almost everything you'd want to edit content-wise is in **`src/data/portfolioData.js`** —
you shouldn't need to touch the components themselves just to update text, links, or
project details.

## Things to swap in before you publish

1. **Resume** — drop your resume as `public/resume.pdf`. The "Download Resume" /
   "Resume" buttons already link to `/resume.pdf`.
2. **Email, GitHub, LinkedIn, phone** — update the `profile` object at the top of
   `src/data/portfolioData.js`.
3. **Project screenshots, hackathon photos, certificate image** — every image on the
   site is currently a labeled placeholder tile (the `Placeholder` component in
   `src/ui/Placeholder.jsx`) so the layout works before you have real assets. To use a
   real image, swap `<Placeholder ... />` for a normal `<img src="..." alt="..." />` in
   the relevant component (`Projects.jsx`, `Hackathon.jsx`), and drop the image file
   into `src/assets/` or `public/`.
4. **Publication / certificate links** — fill in the empty `url` / `certificateUrl`
   fields in `portfolioData.js` once you have links to share.
5. **Contact form email credentials** — see the "Backend" section above. Without
   this running, the form will show a friendly "couldn't reach the contact server"
   error instead of silently failing.

## Design notes

- **Type**: Sora (headings), Inter (body text), JetBrains Mono (labels, dates, tags) —
  loaded from Google Fonts in `index.html`.
- **Color**: a dark "ink" base across the entire site (no light sections anymore — every
  section is transparent so the animated background shows through identically), with
  amber as the primary accent and teal as the secondary one. All defined as CSS
  variables at the top of `src/index.css` — change them there to retheme the whole site.
- **Signature visual**: a single global animated network (`src/ui/AnimatedBackground.jsx`),
  fixed behind every section so it's the same everywhere instead of being Hero-only. It
  reacts to your mouse (nearby points/links brighten) and to scroll position (the network
  drifts vertically and its color blends from amber near the top to teal near the bottom).
  Plain HTML canvas, no dependencies, and respects `prefers-reduced-motion`.
- **3D tilt**: project cards tilt slightly toward the cursor (`Projects/TiltCard.jsx`).
  It's disabled automatically on touch devices and for reduced-motion users.

## Deploying

This is a static site after `npm run build` — the `dist/` folder can be deployed to
Vercel, Netlify, GitHub Pages, or any static host.
