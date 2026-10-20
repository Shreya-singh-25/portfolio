import { Trophy, Award, Code2, Star, Sparkles } from "lucide-react";
import achievements from "../data/achievements";

const ICONS = { Trophy, Award, Code2, Star };

const CATEGORY_LABELS = {
  certification: "Professional Certifications",
  training: "Academic & Training Honors",
  project: "Key Project Milestones",
  coding: "Coding & Problem Solving",
};

const CATEGORY_ORDER = ["certification", "training", "project", "coding"];

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="section-head text-center">
          <span className="code-tag">
            <Sparkles size={13} /> Recognition
          </span>
          <h2 className="section-title">Honors &amp; Key Achievements</h2>
          <p className="section-desc">
            Verified accomplishments, merit grades, and competitive milestones.
          </p>
        </div>

        {CATEGORY_ORDER.map((category) => {
          const items = achievements.filter((a) => a.category === category);
          if (!items.length) return null;
          return (
            <div className="achievement-group" key={category}>
              <h3 className="achievement-group-title">{CATEGORY_LABELS[category]}</h3>
              <div className="grid grid-3">
                {items.map((item) => {
                  const Icon = ICONS[item.icon] || Star;
                  return (
                    <div
                      className={`card achievement-card ${item.featured ? "is-featured" : ""}`}
                      data-reveal
                      key={item.id}
                    >
                      <div className="achievement-icon">
                        <Icon size={19} />
                      </div>
                      <div>
                        <div className="achievement-title-row">
                          <h4 className="achievement-name">{item.title}</h4>
                          {item.featured ? (
                            <span className="achievement-featured-pill">Featured</span>
                          ) : null}
                        </div>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
