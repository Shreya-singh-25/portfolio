import { useEffect, useState } from "react";
import { Menu, X, FileDown, Zap } from "lucide-react";
import personalInfo from "../data/personalInfo";

const NAV_LINKS = [
  { href: "#hero", label: "Home", id: "hero" },
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#internships", label: "Experience", id: "internships" },
  { href: "#education", label: "Education", id: "education" },
  { href: "#certifications", label: "Certifications", id: "certifications" },
  { href: "#university", label: "University", id: "university" },
  { href: "#achievements", label: "Achievements", id: "achievements" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const scrollPosition = window.scrollY + 140;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const sectionId = NAV_LINKS[i].id;
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo" onClick={handleLinkClick}>
          <span className="navbar-logo-text">{personalInfo.name}</span>
          <span className="navbar-badge">
            <Zap size={12} className="navbar-badge-icon" />
            Developer
          </span>
        </a>

        <nav className="navbar-links" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={isActive ? "active" : ""}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="navbar-actions">
          <a
            className="btn btn-primary btn-sm"
            href={personalInfo.resumePath}
            download
          >
            <FileDown size={15} />
            Resume
          </a>
        </div>

        <button
          className="navbar-toggle"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`navbar-mobile ${isOpen ? "is-open" : ""}`}>
        <nav aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.id ? "active" : ""}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
          <a
            className="btn btn-primary btn-block"
            href={personalInfo.resumePath}
            download
            onClick={handleLinkClick}
          >
            <FileDown size={16} />
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
