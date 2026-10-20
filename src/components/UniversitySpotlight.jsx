import { useState, useEffect } from "react";
import {
  MapPin,
  GraduationCap,
  Calendar,
  Users,
  ExternalLink,
  Sparkles,
  BookOpen,
  Award,
  Play,
  X,
} from "lucide-react";
import university from "../data/university";

const TAB_ICONS = {
  MapPin,
  BookOpen,
  Calendar,
  Award,
};

export default function UniversitySpotlight() {
  const [activeTabId, setActiveTabId] = useState("campus");
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (!activeVideo) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  const currentTab =
    university.tabs.find((t) => t.id === activeTabId) || university.tabs[0];

  return (
    <section id="university" className="section university-section">
      <div className="container">
        <div className="section-head text-center">
          <span className="code-tag">
            <Sparkles size={13} /> {university.eyebrow}
          </span>
          <h2 className="section-title">{university.subheading}</h2>
          <p className="section-desc">
            Exploring my educational journey at Lovely Professional University,
            where I've grown both academically and personally.
          </p>
        </div>

        <div className="card university-experience-card">
          <div className="university-experience-image">
            <img
              src={university.image}
              alt={university.name}
              data-title="Lovely Professional University — Main Campus"
            />
          </div>

          <div className="university-experience-content">
            <h3 className="university-experience-title">{university.name}</h3>

            <div className="university-meta-grid">
              <div className="university-meta-item">
                <MapPin size={16} className="university-meta-icon" />
                <span>{university.location}</span>
              </div>
              <div className="university-meta-item">
                <GraduationCap size={16} className="university-meta-icon" />
                <span>{university.degree}</span>
              </div>
              <div className="university-meta-item">
                <Calendar size={16} className="university-meta-icon" />
                <span>{university.period}</span>
              </div>
              <div className="university-meta-item">
                <Users size={16} className="university-meta-icon" />
                <span>{university.studentsCount}</span>
              </div>
            </div>

            <p className="university-experience-text">{university.paragraph}</p>

            <div className="university-experience-actions">
              <a
                className="btn btn-purple"
                href={university.websiteUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visit University Website
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="card uni-showcase-card">
          <div className="uni-tabs-bar" role="tablist" aria-label="University Highlights">
            {university.tabs.map((tab) => {
              const Icon = TAB_ICONS[tab.icon] || MapPin;
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  className={`uni-tab-button ${isActive ? "active" : ""}`}
                  onClick={() => setActiveTabId(tab.id)}
                >
                  <Icon size={17} className="uni-tab-icon" />
                  <span className="uni-tab-label">{tab.label}</span>
                  {isActive && <span className="uni-tab-underline" />}
                </button>
              );
            })}
          </div>

          <div
            className="uni-tab-pane"
            id={`panel-${currentTab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${currentTab.id}`}
            key={currentTab.id}
          >
            <div className="uni-pane-header">
              <h3 className="uni-pane-title">{currentTab.title}</h3>
              <p className="uni-pane-desc">{currentTab.description}</p>
            </div>

            <div className="uni-photos-grid">
              {currentTab.images.map((img) => (
                <div className="uni-photo-wrap" key={img.id}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    data-title={img.title}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div
              className="uni-video-banner"
              onClick={() =>
                setActiveVideo({
                  url: currentTab.banner.videoUrl,
                  title: currentTab.banner.title,
                })
              }
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveVideo({
                    url: currentTab.banner.videoUrl,
                    title: currentTab.banner.title,
                  });
                }
              }}
              aria-label={`Watch ${currentTab.banner.title}`}
            >
              <img
                src={currentTab.banner.src}
                alt={currentTab.banner.alt}
                className="uni-video-banner-img"
                loading="lazy"
              />
              <div className="uni-video-overlay" />

              <div className="uni-play-button-outer">
                <div className="uni-play-button">
                  <Play size={26} fill="#7c3aed" color="#7c3aed" className="uni-play-icon" />
                </div>
              </div>

              <div className="uni-video-caption">
                <span>{currentTab.banner.title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {activeVideo && (
        <div
          className="uni-video-modal-backdrop"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
        >
          <div
            className="uni-video-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="uni-video-modal-close"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video player"
            >
              <X size={20} />
            </button>
            <div className="uni-video-iframe-wrap">
              <iframe
                src={activeVideo.url}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="uni-video-modal-title">
              <h4>{activeVideo.title}</h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
