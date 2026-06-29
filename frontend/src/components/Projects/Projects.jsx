import { useState } from "react";
import { projects } from "../../data/portfolioData";
import { ArrowUpRightIcon, ChevronIcon, GithubIcon } from "../../ui/Icons";
import Placeholder from "../../ui/Placeholder";
import Reveal from "../../ui/Reveal";
import TiltCard from "./TiltCard";
import "./Projects.css";

// CHANGED: was 3 — lowered to 2 so that "featured (1) + grid (2) = top 3"
// matches the "show only top 3–4 initially" requirement, and the See More
// button is immediately visible/testable with the current 4 total projects
// instead of only appearing once a 5th project is added.
const INITIAL_VISIBLE = 3;

// ADDED: tries to render the real project image; if it's missing (e.g. you
// haven't added it to /assets/projects/ yet) it falls back to the labeled
// placeholder tile instead of a broken-image icon.
function ProjectMedia({ project, tone }) {
  const [errored, setErrored] = useState(false);

  if (errored || !project.image) {
    return <Placeholder label={project.title} sublabel="Project screenshot" tone={tone} />;
  }

  return (
    <img
      src={project.image}
      alt={project.title}
      className="proj-img"
      onError={() => setErrored(true)}
    />
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  // ADDED: only show the first few projects until "See More" is clicked.
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? rest : rest.slice(0, INITIAL_VISIBLE);
  const hasMore = rest.length > INITIAL_VISIBLE;

  return (
    <section id="projects" className="section section--alt projects">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Projects</p>
          <h2 className="section-title">Selected work</h2>
          <p className="section-sub">
            Building solutions where data, software, and AI come together.
          </p>
        </Reveal>

        {featured && (
          <Reveal className="proj-featured-wrap">
            <TiltCard className="proj-featured card">
              <div className="proj-featured-media">
                {/* CHANGED: was a static Placeholder, now tries the real image first*/}
                <ProjectMedia project={featured} tone="teal" />
              </div>
              <div className="proj-featured-body">
                <span className="tag proj-flag">Featured project</span>
                <h3 className="proj-title">{featured.title}</h3>
                <p className="proj-subtitle">{featured.subtitle}</p>
                <p className="proj-category">{featured.category}</p>
                <p className="proj-desc">{featured.description}</p>

                <ul className="proj-features">
                  {featured.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <div className="proj-tech">
                  {featured.tech.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="proj-actions">
                  <a className="btn btn-ghost btn-sm" href={featured.github} target="_blank" rel="noreferrer">
                    <GithubIcon className="btn-icon" /> Code
                  </a>
                  {featured.demo && (
                    <a className="btn btn-primary btn-sm" href={featured.demo} target="_blank" rel="noreferrer">
                      Live Demo <ArrowUpRightIcon className="btn-icon" />
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        )}

        <div className="proj-grid">
          {/* CHANGED: maps over `visible` (first 3 by default) instead of all of `rest` */}
          {visible.map((p, i) => (
            <Reveal as="div" delay={i * 90} key={p.title}>
              <TiltCard className="proj-card card">
                <div className="proj-card-media">
                  {/* CHANGED: was a static Placeholder, now tries the real image first */}
                  <ProjectMedia project={p} tone={i % 2 === 0 ? "amber" : "ink"} />
                </div>
                <div className="proj-card-body">
                  <h3 className="proj-card-title">{p.title}</h3>
                  <p className="proj-card-subtitle">{p.subtitle}</p>
                  <p className="proj-card-category">{p.category}</p>
                  <p className="proj-card-desc">{p.description}</p>
                  

                  <ul className="proj-features">
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  <div className="proj-tech">
                    {p.tech.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="proj-actions">
                    <a className="btn btn-ghost btn-sm" href={p.github} target="_blank" rel="noreferrer">
                      <GithubIcon className="btn-icon" /> Code
                    </a>
                    {p.demo && (
                      <a className="btn btn-sm proj-demo-link" href={p.demo} target="_blank" rel="noreferrer">
                        Live demo <ArrowUpRightIcon className="btn-icon" />
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* See More / Show Less — appears whenever there are more than
            INITIAL_VISIBLE non-featured projects. With the current 4
            projects in portfolioData.js (1 featured + 3 others), this
            button is already visible, revealing the 4th project on click. */}
        {hasMore && (
          <div className="proj-more">
            <button className="btn btn-ghost" onClick={() => setShowAll((v) => !v)}>
              {showAll ? "Show Less" : `See More (${rest.length - INITIAL_VISIBLE} more)`}
              <ChevronIcon className={`btn-icon proj-more-chevron ${showAll ? "proj-more-chevron--up" : ""}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
