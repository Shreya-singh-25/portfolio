import { Calendar, ExternalLink, Sparkles } from "lucide-react";
import certifications from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <div className="section-head text-center">
          <span className="code-tag">
            <Sparkles size={13} /> Verified Credentials
          </span>
          <h2 className="section-title">Certifications &amp; Credentials</h2>
          <p className="section-desc">
            Industry-recognized certifications in AI, Data Architecture, Cloud Computing, and Cybersecurity.
          </p>
        </div>

        <div className="grid grid-4 certs-grid">
          {certifications.map((cert) => (
            <article className="card cert-card-v2" data-reveal key={cert.id}>
              <div className="cert-preview-frame">
                <img src={cert.image} alt={cert.title} loading="lazy" />
              </div>

              <div className="cert-body-v2">
                <h3 className="cert-title-v2">{cert.title}</h3>
                <p className="cert-issuer-v2">{cert.issuer}</p>

                <div className="cert-date-row">
                  <Calendar size={14} className="cert-calendar-icon" />
                  <span>{cert.date}</span>
                </div>

                {cert.verifyUrl ? (
                  <a
                    className="cert-verify-btn"
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={14} />
                    <span>Verify Credential</span>
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
