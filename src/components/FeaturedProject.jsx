import { Github, ExternalLink } from "lucide-react";
import projects from "../data/projects";

export default function FeaturedProject() {
  const project = projects.find((p) => p.featured);
  if (!project) return null;

  return (
    <section id="featured-project" className="section featured-section">
      <div className="container">
        <div className="section-head text-center">
          <span className="code-tag">Flagship Project</span>
          <h2 className="section-title">{project.title}</h2>
          <p className="section-desc">{project.description}</p>
        </div>

        <div className="featured-grid" data-reveal>
          <div className="featured-visual">
            {project.image ? (
              <img src={project.image} alt={project.title} />
            ) : (
              <div className="placeholder-box featured-placeholder">
                {project.title}
              </div>
            )}
          </div>

          <div className="featured-details">
            <div className="chip-row">
              {project.technologies.map((tech) => (
                <span className="chip" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <ul className="project-features featured-features">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="project-actions">
              {project.github ? (
                <a
                  className="btn btn-primary"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} />
                  View Code
                </a>
              ) : null}
              {project.liveDemo ? (
                <a
                  className="btn btn-outline"
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
