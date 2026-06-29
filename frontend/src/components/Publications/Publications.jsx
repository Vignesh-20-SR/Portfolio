import { useState } from "react";
import { publication } from "../../data/portfolioData";
import { ArrowUpRightIcon, FileTextIcon } from "../../ui/Icons";
import Modal from "../../ui/Modal";
import Placeholder from "../../ui/Placeholder";
import Reveal from "../../ui/Reveal";
import "./Publications.css";

// ===== Publication image with fallback =====
function PublicationPhoto({ src, caption, tone }) {
  const [errored, setErrored] = useState(false);

  if (errored || !src) {
    return <Placeholder label={caption} tone={tone} />;
  }

  return (
    <img
      src={src}
      alt={caption}
      className="pub-img"
      onError={() => setErrored(true)}
    />
  );
}

export default function Publications() {
  const [activePhoto, setActivePhoto] = useState(null);

  const photos = (publication.images || []).map((src, i) => ({
    src,
    caption: `${publication.title} — Image ${i + 1}`,
  }));

  return (
    <section id="publications" className="section section--alt publications">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Publications</p>
          <h2 className="section-title">Published Research</h2>
        </Reveal>

        <Reveal className="pub-card">
          <div className="pub-icon">
            <FileTextIcon />
          </div>

          <div className="pub-body">
            <span className="tag pub-journal-tag">
              {publication.journal}
            </span>

            {/* Header */}
            <div className="pub-header">
              <div className="pub-title-content">
                <h3 className="pub-title">
                  {publication.title}
                </h3>

                <p className="pub-meta">
                  {publication.volume} · {publication.period}
                </p>
              </div>

              <a
                className="btn btn-primary btn-sm"
                href={publication.url || "#contact"}
                target={publication.url ? "_blank" : undefined}
                rel="noreferrer"
              >
                View Publication
                <ArrowUpRightIcon className="btn-icon" />
              </a>
            </div>

            <p className="pub-desc">
              {publication.description}
            </p>

            {/* Gallery */}
            {photos.length > 0 && (
              <div className="pub-gallery">
                {photos.map((photo, i) => (
                  <button
                    key={photo.src}
                    className="pub-photo"
                    onClick={() => setActivePhoto(photo)}
                    aria-label={`Open image: ${photo.caption}`}
                  >
                    <PublicationPhoto
                      src={photo.src}
                      caption={photo.caption}
                      tone={i % 2 === 0 ? "teal" : "amber"}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      <Modal
        open={!!activePhoto}
        onClose={() => setActivePhoto(null)}
        title={activePhoto?.caption}
      >
        {activePhoto && (
          <PublicationPhoto
            src={activePhoto.src}
            caption={activePhoto.caption}
            tone="teal"
          />
        )}
      </Modal>
    </section>
  );
}