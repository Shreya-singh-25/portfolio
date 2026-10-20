import { Github, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-head text-center">
          <span className="code-tag">
            <Sparkles size={13} /> Featured Work
          </span>
          <h2 className="section-title">Projects Portfolio</h2>
          <p className="section-desc">
            Showcasing my expertise in full-stack development, AI, and software systems through real-world applications.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="card project-card" data-reveal key={project.id}>
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card-image"
                  loading="lazy"
                />
                <div className="project-image-overlay" />
                {project.featured && (
                  <span className="project-featured-badge">
                    <Sparkles size={12} /> Flagship Project
                  </span>
                )}
              </div>

              <div className="project-body">
                <div className="chip-row">
                  {project.technologies.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {project.features && project.features.length > 0 && (
                  <ul className="project-feature-list">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={14} className="feature-check-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="project-card-actions">
                  {project.github ? (
                    <a
                      className="btn btn-outline btn-sm project-btn"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={15} />
                      <span>Source Code</span>
                    </a>
                  ) : null}

                  {project.liveDemo ? (
                    <a
                      className="btn btn-primary btn-sm project-btn"
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={15} />
                      <span>Live Preview</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
