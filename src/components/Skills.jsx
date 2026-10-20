import { Code2, BrainCircuit, Code, Server, Database, Sparkles } from "lucide-react";
import skills from "../data/skills";

const ICONS = {
  Code2,
  BrainCircuit,
  Code,
  Server,
  Database,
  Sparkles,
};

const SKILL_PILLS = {
  "java-dsa": ["Java", "OOP", "Data Structures", "Algorithms", "Optimization"],
  "ai-ml": ["Scikit-Learn", "Ensemble Models", "Classification", "NumPy", "Pandas"],
  "web-dev": ["React.js", "JavaScript (ES6+)", "HTML5", "Modern CSS3", "Responsive UI"],
  "backend-flask": ["Python", "Flask", "RESTful APIs", "Model Serving", "Backend Architecture"],
  "databases": ["MySQL", "SQLite", "Relational Schema", "SQL Queries", "JDBC"],
  "systems-tools": ["Operating Systems", "Banker's Algorithm", "Git", "GitHub", "VS Code"],
};

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-head text-center">
          <span className="code-tag">
            <Sparkles size={13} /> Technical Stack
          </span>
          <h2 className="section-title">Technical Skills &amp; Proficiencies</h2>
          <p className="section-desc">
            Specialized in Java, Full-Stack development, and AI/ML with strong foundations in Data Structures and scalable backend systems.
          </p>
        </div>

        <div className="grid grid-3 skills-cards-grid">
          {skills.map((skill) => {
            const Icon = ICONS[skill.icon] || Code2;
            const pills = SKILL_PILLS[skill.id] || [];

            return (
              <div className="card tech-skill-card" data-reveal key={skill.id}>
                <div className={`tech-skill-icon-wrap icon-${skill.colorScheme}`}>
                  <Icon size={26} strokeWidth={2} />
                </div>
                <h3 className="tech-skill-title">{skill.title}</h3>
                <p className="tech-skill-desc">{skill.description}</p>

                {pills.length > 0 && (
                  <div className="tech-skill-pills">
                    {pills.map((pill) => (
                      <span className="skill-mini-pill" key={pill}>
                        {pill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
