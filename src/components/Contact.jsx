import { useState } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Send, Check, Copy, Sparkles } from "lucide-react";
import personalInfo from "../data/personalInfo";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    setStatus("Thank you! Opening your email client to send your message...");
    
    setTimeout(() => {
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-head text-center">
          <span className="code-tag">
            <Sparkles size={13} /> Get In Touch
          </span>
          <h2 className="section-title">Let's Connect &amp; Collaborate</h2>
          <p className="section-desc">
            Open for software engineering opportunities, internships, AI/ML projects, and technical collaborations.
          </p>
        </div>

        <div className="contact-grid">
          <div data-reveal>
            <div className="contact-info-list">
              <a className="card contact-info-item" href={`mailto:${personalInfo.email}`}>
                <span className="icon-badge">
                  <Mail size={18} />
                </span>
                <span className="contact-info-text">
                  <span className="info-label">Email</span>
                  <span className="info-value">{personalInfo.email}</span>
                </span>
              </a>

              <a className="card contact-info-item" href={`tel:${personalInfo.phoneRaw}`}>
                <span className="icon-badge">
                  <Phone size={18} />
                </span>
                <span className="contact-info-text">
                  <span className="info-label">Phone</span>
                  <span className="info-value">{personalInfo.phone}</span>
                </span>
              </a>

              <a
                className="card contact-info-item"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon-badge">
                  <Linkedin size={18} />
                </span>
                <span className="contact-info-text">
                  <span className="info-label">LinkedIn</span>
                  <span className="info-value">{personalInfo.linkedinHandle}</span>
                </span>
              </a>

              <a
                className="card contact-info-item"
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon-badge">
                  <Github size={18} />
                </span>
                <span className="contact-info-text">
                  <span className="info-label">GitHub</span>
                  <span className="info-value">{personalInfo.githubHandle}</span>
                </span>
              </a>

              <div className="card contact-info-item location-item">
                <span className="icon-badge">
                  <MapPin size={18} />
                </span>
                <span className="contact-info-text">
                  <span className="info-label">Location</span>
                  <span className="info-value">{personalInfo.location}</span>
                </span>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-outline btn-block copy-email-btn"
              onClick={handleCopyEmail}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? "Email Copied to Clipboard!" : "Copy Email Address"}</span>
            </button>
          </div>

          <form className="card contact-form" onSubmit={handleSubmit} data-reveal>
            <div className="form-field">
              <label htmlFor="name">Your Name</label>
              <input id="name" name="name" type="text" placeholder="e.g. Alex Smith" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Your Email</label>
              <input id="email" name="email" type="email" placeholder="alex@example.com" required />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Hi Shreya, I came across your portfolio and would like to discuss..."
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              <Send size={16} />
              Send Message
            </button>
            {status ? <p className="form-status">{status}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}
