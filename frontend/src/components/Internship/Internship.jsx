// ===== NEW FILE: Internship / Training section =====
// This whole component is new. It's placed after Projects and before
// Hackathon (see src/App.jsx). It loops over the `internships` array in
// src/data/portfolioData.js — add more entries there to show more cards.
import { useState } from "react";
import { internships } from "../../data/portfolioData";
import { ArrowUpRightIcon, AwardIcon, BriefcaseIcon, CalendarIcon } from "../../ui/Icons";
import Modal from "../../ui/Modal";
import Placeholder from "../../ui/Placeholder";
import Reveal from "../../ui/Reveal";
import "./Internship.css";

// Tries the real photo first; falls back to the labeled placeholder tile
// if the file isn't there yet (same pattern as the Hackathon gallery).
function InternshipPhoto({ src, caption, tone }) {
  const [errored, setErrored] = useState(false);

  if (errored || !src) {
    return <Placeholder label={caption} tone={tone} />;
  }

  return <img src={src} alt={caption} className="intern-img" onError={() => setErrored(true)} />;
}

// One internship/training card: header info + photo gallery + certificate button.
function InternshipCard({ item, index }) {
  const [certOpen, setCertOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);

  const hasCertLink = Boolean(item.certificateUrl);
  const photos = (item.images || []).map((src, i) => ({
    src,
    caption: `${item.company} — photo ${i + 1}`,
  }));

  return (
    <Reveal delay={index * 90} className="intern-block">
      <div className="intern-header card">
        <div className="intern-header-icon">
          <BriefcaseIcon />
        </div>
        <div className="intern-header-info">
          <h3 className="intern-name">{item.role}</h3>
          <p className="intern-type">
            {item.type} · {item.company}
          </p>
          <div className="intern-meta">
            <span><CalendarIcon className="intern-meta-icon" /> {item.duration}</span>
          </div>
          <p className="intern-desc">{item.description}</p>
        </div>

        {/* Links straight out once certificateUrl is filled in, otherwise
            opens the in-page placeholder preview — same behavior as Hackathon. */}
        {hasCertLink ? (
          <a
            className="btn btn-primary btn-sm intern-cert-btn"
            href={item.certificateUrl}
            target="_blank"
            rel="noreferrer"
          >
            <AwardIcon className="btn-icon" />
            View Certificate
            <ArrowUpRightIcon className="btn-icon" />
          </a>
        ) : (
          <button className="btn btn-primary btn-sm intern-cert-btn" onClick={() => setCertOpen(true)}>
            <AwardIcon className="btn-icon" />
            View Certificate
          </button>
        )}
      </div>

      {photos.length > 0 && (
        <div className="intern-gallery">
          {photos.map((photo, i) => (
            <button
              className="intern-photo"
              key={photo.src}
              onClick={() => setActivePhoto(photo)}
              aria-label={`Open photo: ${photo.caption}`}
            >
              <InternshipPhoto
                src={photo.src}
                caption={photo.caption}
                tone={i % 3 === 0 ? "amber" : i % 3 === 1 ? "teal" : "ink"}
              />
            </button>
          ))}
        </div>
      )}

      <Modal open={certOpen} onClose={() => setCertOpen(false)} title={`${item.company} — Certificate`}>
        <Placeholder label={`${item.company} — Certificate`} sublabel="Add your certificate image here" tone="amber" />
      </Modal>

      <Modal open={!!activePhoto} onClose={() => setActivePhoto(null)} title={activePhoto?.caption}>
        {activePhoto && <InternshipPhoto src={activePhoto.src} caption={activePhoto.caption} tone="teal" />}
      </Modal>
    </Reveal>
  );
}

export default function Internship() {
  return (
    <section id="internship" className="section internship">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Internship / Training</p>
          <h2 className="section-title">Hands-on experience</h2>
          <p className="section-sub">
            Time spent applying what I've learned in a real, structured environment.
          </p>
        </Reveal>

        {/* Loops over src/data/portfolioData.js → internships. Add more
            entries there to show more cards here — no changes needed in
            this file. */}
        <div className="intern-list">
          {internships.map((item, i) => (
            <InternshipCard item={item} index={i} key={item.company + i} />
          ))}
        </div>
      </div>
    </section>
  );
}
