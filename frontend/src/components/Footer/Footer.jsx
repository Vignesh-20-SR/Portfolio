import { profile } from "../../data/portfolioData";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "../../ui/Icons";
import "./Footer.css";

const NAV = ["About", "Education", "Skills", "Projects", "Hackathon", "Certifications", "Contact"];

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div>
            <p className="footer-name">{profile.name}</p>
            <p className="footer-role">{profile.role}</p>
          </div>

          <div className="footer-social">
            {/* ADDED: Phone — uses profile.phone from src/data/portfolioData.js */}
            <a href={`tel:${profile.phone}`} aria-label="Phone">
              <PhoneIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <MailIcon />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <nav className="footer-nav">
          {NAV.map((label) => (
            <button key={label} onClick={() => scrollTo(label.toLowerCase())}>
              {label}
            </button>
          ))}
        </nav>

        <div className="footer-bottom">
          <span>© {year} {profile.name}. Built with React.</span>
          <span className="footer-back" onClick={() => scrollTo("hero")}>
            Back to top ↑
          </span>
        </div>
      </div>
    </footer>
  );
}
