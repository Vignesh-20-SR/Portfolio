import { useState } from "react";
import { hackathon } from "../../data/portfolioData";
import { ArrowUpRightIcon, AwardIcon, CalendarIcon, MapPinIcon, TrophyIcon } from "../../ui/Icons";
import Modal from "../../ui/Modal";
import Placeholder from "../../ui/Placeholder";
import Reveal from "../../ui/Reveal";
import "./Hackathon.css";

// Add your hackathon images inside /assets/hackathon/
// (create that folder under /public, e.g. public/assets/hackathon/img1.jpg)
// Add as many or as few paths as you have photos for — the gallery grid
// adapts automatically.
const hackathonImages = [
  "/assets/hackathon/img1.jpeg",
  "/assets/hackathon/img2.jpeg",
  "/assets/hackathon/img3.jpeg",
  "/assets/hackathon/img4.jpeg",
];

// ADDED: tries the real photo first; falls back to the labeled placeholder
// tile if the file isn't there yet (so the gallery never shows a broken image).
function HackathonPhoto({ src, caption, tone }) {
  const [errored, setErrored] = useState(false);

  if (errored || !src) {
    return <Placeholder label={caption} tone={tone} />;
  }

  return <img src={src} alt={caption} className="hack-img" onError={() => setErrored(true)} />;
}

export default function Hackathon() {
  const [certOpen, setCertOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);

  // Pairs each image path with a caption from portfolioData.js (falls back
  // to a generic "Hackathon photo N" if you add more images than captions).
  const photos = hackathonImages.map((src, i) => ({
    src,
    caption: hackathon.gallery[i]?.caption || `Hackathon photo ${i + 1}`,
  }));

  // Paste your certificate link here (e.g. a Google Drive share link) in
  // src/data/portfolioData.js → hackathon.certificateUrl. Once it's set,
  // the button below opens it directly in a new tab; until then it opens
  // a placeholder preview so the layout still looks right.
  const hasCertLink = Boolean(hackathon.certificateUrl);

  return (
    <section id="hackathon" className="section hackathon">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Hackathon</p>
          <h2 className="section-title">Built under pressure</h2>
          <p className="section-sub">
            24 hours, one problem statement, and a team figuring it out as we went.
          </p>
        </Reveal>

        <Reveal className="hack-header card">
          <div className="hack-header-icon">
            <TrophyIcon />
          </div>
          <div className="hack-header-info">
            <h3 className="hack-name">{hackathon.name}</h3>
            <p className="hack-type">{hackathon.type}</p>
            <div className="hack-meta">
              <span><MapPinIcon className="hack-meta-icon" /> {hackathon.organizer}</span>
              <span><CalendarIcon className="hack-meta-icon" /> {hackathon.date}</span>
            </div>
            <p className="hack-desc">{hackathon.description}</p>
          </div>

          {/* CHANGED: links straight out once certificateUrl is filled in,
              otherwise opens the in-page placeholder preview */}
          {hasCertLink ? (
            <a
              className="btn btn-primary btn-sm hack-cert-btn"
              href={hackathon.certificateUrl}
              target="_blank"
              rel="noreferrer"
            >
              <AwardIcon className="btn-icon" />
              View Certificate
              <ArrowUpRightIcon className="btn-icon" />
            </a>
          ) : (
            <button className="btn btn-primary btn-sm hack-cert-btn" onClick={() => setCertOpen(true)}>
              <AwardIcon className="btn-icon" />
              View Certificate
            </button>
          )}
        </Reveal>

        <Reveal delay={100} className="hack-gallery">
          {/* CHANGED: now maps over `photos` (hackathonImages + captions) instead of hackathon.gallery directly */}
          {photos.map((photo, i) => (
            <button
              className="hack-photo"
              key={photo.src}
              onClick={() => setActivePhoto(photo)}
              aria-label={`Open photo: ${photo.caption}`}
            >
              <HackathonPhoto
                src={photo.src}
                caption={photo.caption}
                tone={i % 3 === 0 ? "amber" : i % 3 === 1 ? "teal" : "ink"}
              />
            </button>
          ))}
        </Reveal>
      </div>

      {/* Placeholder preview modal — only used until hackathon.certificateUrl is set above */}
      <Modal open={certOpen} onClose={() => setCertOpen(false)} title="Hackathon certificate">
        <Placeholder label={`${hackathon.name} — Certificate`} sublabel="Add your certificate image here" tone="amber" />
      </Modal>

      <Modal open={!!activePhoto} onClose={() => setActivePhoto(null)} title={activePhoto?.caption}>
        {activePhoto && <HackathonPhoto src={activePhoto.src} caption={activePhoto.caption} tone="teal" />}
      </Modal>
    </section>
  );
}
