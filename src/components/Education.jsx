import { GraduationCap, Calendar, MapPin, Sparkles } from "lucide-react";
import education from "../data/education";

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-head text-center">
          <span className="code-tag">
            <Sparkles size={13} /> Academic Record
          </span>
          <h2 className="section-title">Education &amp; Qualifications</h2>
          <p className="section-desc">
            Academic achievements, degree specialization, and coursework foundations.
          </p>
        </div>

        <div className="education-list">
          {education.map((edu) => (
            <div className="card education-card" data-reveal key={edu.id}>
              <div className="education-main">
                <div className="education-header-row">
                  <div className="education-icon-wrap">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="education-degree">{edu.degree}</h3>
                    <div className="education-sub">
                      <span className="education-institution">{edu.institution}</span>
                      {edu.college && (
                        <span className="education-college">
                          <MapPin size={13} /> {edu.college}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="education-meta-row">
                  <span className="education-years">
                    <Calendar size={13} />
                    {edu.startYear} — {edu.endYear}
                  </span>
                </div>

                {edu.coursework && edu.coursework.length > 0 ? (
                  <div className="education-coursework">
                    {edu.coursework.map((course) => (
                      <span className="chip" key={course}>
                        {course}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="education-cgpa">
                <div className="value">{edu.cgpa}</div>
                <div className="label">{edu.scoreLabel || "Score"}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
