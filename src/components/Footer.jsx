import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";
import personalInfo from "../data/personalInfo";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <button className="footer-scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
          <ArrowUp size={18} />
        </button>

        <div className="footer-center">
          <div className="footer-brand">{personalInfo.name}</div>
          <p className="footer-tagline">{personalInfo.title}</p>
        </div>
      </div>

      <div className="container footer-inner">
        <div className="footer-copyright">
          © {year} {personalInfo.name}. Built with React &amp; Vite.
        </div>

        <nav className="footer-links" aria-label="Footer">
          <a href={`mailto:${personalInfo.email}`} aria-label="Email">
            <Mail size={17} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={17} />
          </a>
        </nav>
      </div>
    </footer>
  );
}
