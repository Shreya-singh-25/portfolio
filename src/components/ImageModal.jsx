import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function ImageModal() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const handleImageClick = (e) => {
      const img = e.target.closest("img");
      if (!img) return;

      if (img.naturalWidth < 80 && img.naturalHeight < 80) return;
      if (img.closest(".image-modal-dialog")) return;
      if (img.closest(".uni-video-banner")) return;

      e.preventDefault();
      e.stopPropagation();

      setActiveImage({
        src: img.currentSrc || img.src,
        alt: img.alt || "Preview",
        title: img.getAttribute("data-title") || img.alt || "",
      });
    };

    document.addEventListener("click", handleImageClick);
    return () => document.removeEventListener("click", handleImageClick);
  }, []);

  useEffect(() => {
    if (!activeImage) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  if (!activeImage) return null;

  return (
    <div
      className="image-modal-backdrop"
      onClick={() => setActiveImage(null)}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <div
        className="image-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="image-modal-close"
          onClick={() => setActiveImage(null)}
          aria-label="Close image preview"
        >
          <X size={20} />
        </button>

        <div className="image-modal-content">
          <img src={activeImage.src} alt={activeImage.alt} />
          {activeImage.title ? (
            <div className="image-modal-caption">
              <span>{activeImage.title}</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
