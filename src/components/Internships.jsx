import { ExternalLink, Sparkles, Award, Calendar, Briefcase } from "lucide-react";
import internships from "../data/internships";

export default function Internships() {
  return (
    <section id="internships" className="section experience-section">
      <div className="container">
        <div className="section-head text-center">
          <span className="code-tag">
            <Sparkles size={13} /> Practical Training
          </span>
          <h2 className="section-title">Experience &amp; Specialized Training</h2>
          <p className="section-desc">
            Rigorous hands-on training, industry certifications, and applied software engineering programs.
          </p>
        </div>

        <div className="timeline">
          {internships.map((item) => (
            <div className="timeline-item" data-reveal key={item.id}>
              <div className="timeline-header">
                <span className="timeline-duration">
                  <Calendar size={13} /> {item.duration}
                </span>
                {item.grade && (
                  <span className="timeline-grade-badge">
                    <Award size={13} /> {item.grade}
                  </span>
                )}
              </div>

              <h3 className="timeline-role">{item.role}</h3>
              <span className="timeline-org">
                <Briefcase size={14} /> {item.organization}
              </span>
              <p className="timeline-desc">{item.description}</p>

              <div className="timeline-cert-meta">
                {item.certificateTitle && (
                  <span className="chip">{item.certificateTitle}</span>
                )}
                {item.badge && <span className="chip">{item.badge}</span>}
              </div>

              {item.verifyUrl && (
                <div className="timeline-action-row">
                  <a
                    className="btn btn-outline btn-sm"
                    href={item.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={14} />
                    <span>View Training Certificate</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
