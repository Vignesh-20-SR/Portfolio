import { aboutText, profile } from "../../data/portfolioData";
import Reveal from "../../ui/Reveal";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <Reveal className="about-copy">
          <p className="eyebrow">About</p>
          <h2 className="section-title">
            Turning Data into Meaningful Decisions
          </h2>
          <div className="about-paragraphs">
            {aboutText.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="about-panel-wrap">
          <div className="about-panel">
            <div className="about-panel-head">
              <span className="about-avatar">{profile.initials}</span>
              <div>
                <p className="about-panel-name">{profile.name}</p>
                <p className="about-panel-role">{profile.role}</p>
              </div>
            </div>
            <dl className="about-facts">
              {aboutText.facts.map((f) => (
                <div className="about-fact" key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
