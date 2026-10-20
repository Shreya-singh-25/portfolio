import { FileDown, Eye, Sparkles } from "lucide-react";
import personalInfo from "../data/personalInfo";

export default function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="section-head text-center">
          <span className="code-tag">
            <Sparkles size={13} /> Curriculum Vitae
          </span>
          <h2 className="section-title">Official Resume</h2>
          <p className="section-desc">
            A comprehensive overview of my technical education, real-world projects, programming proficiencies, and verified credentials.
          </p>
        </div>

        <div className="resume-panel-v2" data-reveal>
          <div className="resume-preview-frame">
            <img
              src="/assets/images/resume-preview.png"
              alt={`${personalInfo.name} — Resume Preview`}
              data-title={`${personalInfo.name} — Curriculum Vitae / Resume`}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="placeholder-box resume-preview-fallback" style={{ display: "none" }}>
              {personalInfo.name} — Resume
            </div>
          </div>

          <div className="resume-panel-actions">
            <div className="resume-panel-info">
              <h3 className="resume-info-title">{personalInfo.name} — Resume</h3>
              <p className="resume-info-desc">
                Updated with latest academic coursework, Machine Learning ensemble research, Java system applications, and Oracle/NASSCOM professional certifications.
              </p>
            </div>

            <div className="resume-buttons-group">
              <a
                className="btn btn-outline"
                href={personalInfo.resumePath}
                target="_blank"
                rel="noreferrer"
              >
                <Eye size={17} />
                Preview Document
              </a>
              <a className="btn btn-primary" href={personalInfo.resumePath} download>
                <FileDown size={17} />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
