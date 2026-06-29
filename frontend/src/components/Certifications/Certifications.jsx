import { useState } from "react";
import { certifications } from "../../data/portfolioData";
import { ArrowUpRightIcon, AwardIcon, ChevronIcon } from "../../ui/Icons";
import Reveal from "../../ui/Reveal";
import "./Certifications.css";

// ADDED: how many certifications to show before the "See More" button
// appears. With 4 total certifications in portfolioData.js, this shows
// the top 3 and hides 1 behind the button.
const INITIAL_VISIBLE = 4;

export default function Certifications() {
  // ADDED: only show the first few certifications until "See More" is clicked.
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? certifications : certifications.slice(0, INITIAL_VISIBLE);
  const hasMore = certifications.length > INITIAL_VISIBLE;

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Certifications</p>
          <h2 className="section-title">Credentials</h2>
          <p className="section-sub">
            Structured learning to back up the hands-on work — plus room for what's next.
            {/* Click any card to view its certificate */}
          </p>
        </Reveal>

        <div className="cert-grid">
          {/* CHANGED: maps over `visible` (top 3 by default) instead of all certifications */}
          {visible.map((cert, i) => {
            // CHANGED: cert.link comes from src/data/portfolioData.js.
            // Paste your certificate link here (e.g. a Google Drive link)
            // and the whole card becomes clickable automatically.
            const hasLink = Boolean(cert.link);

            return (
              <Reveal
                as={hasLink ? "a" : "div"}
                href={hasLink ? cert.link : undefined}
                target={hasLink ? "_blank" : undefined}
                rel={hasLink ? "noreferrer" : undefined}
                delay={i * 70}
                key={cert.name + i}
                className={`cert-card card ${cert.placeholder ? "cert-card--placeholder" : ""} ${hasLink ? "cert-card--clickable" : ""}`}
              >
                <div className="cert-icon">
                  <AwardIcon />
                </div>

                {/* ADDED: small "opens externally" arrow, only shown when a link is set */}
                {hasLink && <ArrowUpRightIcon className="cert-link-arrow" />}

                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-note">{cert.note}</p>
              </Reveal>
            );
          })}
        </div>

        {/* ADDED: See More / Show Less — appears whenever there are more
            than INITIAL_VISIBLE certifications. Add as many certifications
            as you like to the array in portfolioData.js; this adapts
            automatically. */}
        {hasMore && (
          <div className="cert-more">
            <button className="btn btn-ghost" onClick={() => setShowAll((v) => !v)}>
              {showAll ? "Show Less" : `See More (${certifications.length - INITIAL_VISIBLE} more)`}
              <ChevronIcon className={`btn-icon cert-more-chevron ${showAll ? "cert-more-chevron--up" : ""}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
