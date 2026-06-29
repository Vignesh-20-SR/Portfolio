import { useEffect, useState } from "react";
import { profile } from "../../data/portfolioData";
import { DownloadIcon } from "../../ui/Icons";
import "./Navbar.css";

const LINKS = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "hackathon", label: "Hackathon" },
  { id: "publications", label: "Publications" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
//internship
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav-inner">
        <a
          href="#hero"
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            handleClick("hero");
          }}
        >
          <span className="nav-logo-mark">{profile.initials}</span>
          <span className="nav-logo-text">Vignesh S R<span className="nav-dot"></span></span>
        </a>

        <nav className={`nav-links ${open ? "nav-links--open" : ""}`}>
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav-link ${active === l.id ? "nav-link--active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(l.id);
              }}
            >
              {l.label}
            </a>
          ))}
          <a href={profile.resumeUrl} className="btn btn-primary btn-sm nav-resume" download>
            <DownloadIcon className="btn-icon" />
            Resume
          </a>
        </nav>

        <button
          className={`nav-burger ${open ? "nav-burger--open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
