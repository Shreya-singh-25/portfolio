import { useState } from "react";
import { Mail, Phone, Linkedin, Github, FileDown, ArrowRight, Sparkles } from "lucide-react";
import personalInfo from "../data/personalInfo";

export default function Hero() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-visual">
          <div className="hero-photo-wrapper">
            <div className="hero-photo-glow" />
            <div className="hero-photo-frame">
              {!imageFailed ? (
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  onError={() => setImageFailed(true)}
                />
              ) : (
                <div className="placeholder-box">
                  {personalInfo.name}
                </div>
              )}
            </div>
            <div className="hero-floating-badge">
              <span className="hero-pulse-dot" />
              <span>Open to Roles</span>
            </div>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-pill-wrapper">
            <span className="hero-eyebrow-pill">
              <Sparkles size={14} className="hero-pill-icon" />
              Software Developer &middot; AI/ML &middot; Problem Solver
            </span>
          </div>

          <h1 className="hero-name">{personalInfo.name}</h1>
          <h2 className="hero-headline">{personalInfo.headline}</h2>
          <p className="hero-intro">{personalInfo.intro}</p>

          <div className="hero-contact-row">
            <a href={`mailto:${personalInfo.email}`} className="hero-contact-item">
              <Mail size={16} />
              <span>Email</span>
            </a>
            <a href={`tel:${personalInfo.phoneRaw}`} className="hero-contact-item">
              <Phone size={16} />
              <span>Phone</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hero-contact-item"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hero-contact-item"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href={personalInfo.resumePath} download>
              <FileDown size={17} />
              Download Resume
            </a>
            <a className="btn btn-outline" href="#contact">
              Let's Connect
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
