import { skillGroups } from "../../data/portfolioData";
import Reveal from "../../ui/Reveal";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">Toolkit</h2>
          <p className="section-sub">
            The technologies I use to analyze data, build applications, and explore intelligent solutions.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal as="div" delay={i * 80} className="skill-card card" key={group.category}>
              <h3 className="skill-category">{group.category}</h3>
              <div className="skill-chips">
                {group.items.map((item) => (
                  <span className="skill-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
