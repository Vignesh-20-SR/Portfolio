import { useState } from "react";
import { profile, stats } from "../../data/portfolioData";
import { ArrowUpRightIcon, DownloadIcon } from "../../ui/Icons";
import "./Hero.css";

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  // ADDED: tracks whether /assets/profile.jpg failed to load, so we can
  // fall back to a clean initials avatar instead of a broken-image icon.
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="hero" className="hero">
      {/* CHANGED: the network canvas + vignette that used to live only
          here are now the global <AnimatedBackground /> rendered once in
          App.jsx, fixed behind every section — so Hero now looks like a
          continuation of the same background as the rest of the site,
          instead of its own separate effect. */}

      {/* CHANGED: container now holds a two-column grid (text + photo)
          instead of just the text block. */}
      <div className="container hero-inner">
        <div className="hero-grid">
          <div className="hero-content">
            <p className="hero-kicker">
              <span className="hero-kicker-dot" /> Open to Data Analytics &amp; Software Development Roless
            </p>

            <h1 className="hero-name">
              {profile.name}
            </h1>

            <p className="hero-role">{profile.role}</p>

            <p className="hero-tagline">{profile.tagline}</p>

            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
                View Projects
                <ArrowUpRightIcon className="btn-icon" />
              </button>
              <a className="btn btn-ghost btn-ghost--dark" href={profile.resumeUrl} download>
                <DownloadIcon className="btn-icon" />
                Download Resume
              </a>
            </div>

            <div className="hero-stats">
              {stats.map((s) => (
                <div className="hero-stat" key={s.label}>
                  <span className="hero-stat-value">{s.value}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ADDED: profile photo + glass contact overlay.
              Drop your photo at public/assets/profile.jpg (path comes
              from profile.photo in src/data/portfolioData.js). */}
          <div className="hero-photo-wrap">
            <div className="hero-photo">
              {!photoError ? (
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="hero-photo-img"
                  onError={() => setPhotoError(true)}
                />
              ) : (
                <div className="hero-photo-fallback">
                  <span>{profile.initials}</span>
                </div>
              )}

              <div className="hero-photo-overlay">
                <a href={`tel:${profile.phone}`} className="hero-overlay-item">
                  <span className="hero-overlay-icon" aria-hidden="true">📞</span>
                  <span className="hero-overlay-text">{profile.phone}</span>
                </a>
                <a href={`mailto:${profile.email}`} className="hero-overlay-item">
                  <span className="hero-overlay-icon" aria-hidden="true">📧</span>
                  <span className="hero-overlay-text">{profile.email}</span>
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="hero-overlay-item">
                  <span className="hero-overlay-icon" aria-hidden="true">💻</span>
                  <span className="hero-overlay-text">GitHub</span>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hero-overlay-item">
                  <span className="hero-overlay-icon" aria-hidden="true">🔗</span>
                  <span className="hero-overlay-text">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="hero-scroll" onClick={() => scrollTo("about")} aria-label="Scroll to About">
        <span className="hero-scroll-line" />
        scroll
      </button>
    </section>
  );
}
