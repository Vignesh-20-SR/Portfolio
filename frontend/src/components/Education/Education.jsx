import { education } from "../../data/portfolioData";
import Reveal from "../../ui/Reveal";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section section--alt education">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Education</p>
          <h2 className="section-title">Academic timeline</h2>
          <p className="section-sub">
            Every milestone shaped the skills and mindset that drive my passion for technology today.
          </p>
        </Reveal>

        <div className="timeline">
          <div className="timeline-rail" aria-hidden="true" />
          {education.map((item, i) => (
            <Reveal as="div" delay={i * 90} className="timeline-row" key={item.degree}>
              <div className="timeline-marker">
                <span className="timeline-dot" />
              </div>
              <div className="timeline-card card">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-degree">{item.degree}</h3>
                <p className="timeline-inst">{item.institution}</p>
                <div className="timeline-meta">
                  <span className="tag">{item.score}</span>
                  {item.note && <span className="timeline-note">{item.note}</span>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
