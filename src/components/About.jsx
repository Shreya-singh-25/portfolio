import { Sparkles, GraduationCap, Code2, Award, MapPin } from "lucide-react";
import personalInfo from "../data/personalInfo";
import projects from "../data/projects";
import education from "../data/education";
import certifications from "../data/certifications";

export default function About() {
  const btech = education.find((e) => e.id === "btech");

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-head text-center">
          <span className="code-tag">
            <Sparkles size={13} /> About Me
          </span>
          <h2 className="section-title">Background &amp; Philosophy</h2>
          <p className="section-desc">
            Passionate about architecting reliable software, exploring intelligent machine learning algorithms, and engineering high-impact digital solutions.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text" data-reveal>
            {personalInfo.aboutParagraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}

            <div className="about-highlights-row">
              <div className="about-highlight-pill">
                <GraduationCap size={16} />
                <span>B.Tech CSE at LPU</span>
              </div>
              <div className="about-highlight-pill">
                <MapPin size={16} />
                <span>Ballia, Uttar Pradesh</span>
              </div>
              <div className="about-highlight-pill">
                <Code2 size={16} />
                <span>Full-Stack &amp; AI/ML</span>
              </div>
            </div>
          </div>

          <div className="about-stats-grid" data-reveal>
            <div className="about-stat-card">
              <div className="about-stat-icon-wrap">
                <GraduationCap size={22} />
              </div>
              <div className="about-stat-number">{personalInfo.cgpa}</div>
              <div className="about-stat-label">Current CGPA (LPU)</div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon-wrap">
                <Code2 size={22} />
              </div>
              <div className="about-stat-number">{projects.length}+</div>
              <div className="about-stat-label">Production Projects</div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon-wrap">
                <Award size={22} />
              </div>
              <div className="about-stat-number">{certifications.length}</div>
              <div className="about-stat-label">Global Certifications</div>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-icon-wrap">
                <Sparkles size={22} />
              </div>
              <div className="about-stat-number">90%+</div>
              <div className="about-stat-label">Merit Grade in DSA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
