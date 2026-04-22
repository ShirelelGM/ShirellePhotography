"use client";

import { useEffect, useState } from "react";
import { prints } from "@/data/prints";
import { ProgressiveImage } from "@/components/ProgressiveImage";
import { InquiryModal } from "@/components/InquiryModal";
import { Lightbox } from "@/components/Lightbox";

export default function PrintsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [view, setView] = useState<"single" | "grid">("single");

  const print = prints[currentIndex];
  const total = prints.length;
  const isSeries = print.images.length > 1;

  useEffect(() => {
    const lowQualityWidth = 32;
    const lowQuality = 20;
    const nearbyPrints = [
      print,
      prints[(currentIndex + 1) % total],
      prints[(currentIndex - 1 + total) % total],
    ];

    nearbyPrints.forEach((item) => {
      item.images.forEach((src) => {
        const lowQualityImage = new window.Image();
        lowQualityImage.src = `/_next/image?url=${encodeURIComponent(src)}&w=${lowQualityWidth}&q=${lowQuality}`;
      });
    });
  }, [currentIndex, print, total]);

  const goPrev = () => setCurrentIndex((i) => (i === 0 ? total - 1 : i - 1));
  const goNext = () => setCurrentIndex((i) => (i === total - 1 ? 0 : i + 1));

  const selectFromGrid = (index: number) => {
    setCurrentIndex(index);
    setView("single");
  };

  return (
    <div className="prints-page">
      <div className="prints-header">
        <div className="prints-breadcrumb">
          Home » <span>Prints</span>
        </div>
        <button
          className="prints-view-toggle"
          onClick={() => setView(view === "single" ? "grid" : "single")}
        >
          {view === "single" ? "Grid View" : "Single View"}
        </button>
      </div>

      {view === "grid" ? (
        <div className="prints-grid">
          {prints.map((p, i) => (
            <button
              key={p.id}
              className="prints-grid-item"
              onClick={() => selectFromGrid(i)}
            >
              <ProgressiveImage
                src={p.images[0]}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
              <div className="prints-grid-overlay">
                <span className="prints-grid-title">
                  {p.title}
                  {p.images.length > 1 && ` (${p.images.length})`}
                </span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="prints-viewer">
          <button
            className="print-nav-arrow prev"
            onClick={goPrev}
            aria-label="Previous print"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {isSeries ? (
            <div
              className={`prints-series prints-series--${print.images.length}`}
            >
              {print.images.map((img, i) => (
                <div
                  key={i}
                  className="prints-image-container"
                  onClick={() => setLightboxSrc(img)}
                >
                  <ProgressiveImage
                    src={img}
                    alt={`${print.title} — ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 380px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div
              className="prints-image-container"
              onClick={() => setLightboxSrc(print.images[0])}
            >
              <ProgressiveImage
                src={print.images[0]}
                alt={print.title}
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 780px"
                priority={currentIndex === 0}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          )}

          <button
            className="print-nav-arrow next"
            onClick={goNext}
            aria-label="Next print"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="prints-meta">
            <span>
              {currentIndex + 1}/{total}
            </span>
            <span>
              {print.title}
              {isSeries && " — Series"}
            </span>
          </div>

          {print.description && (
            <p className="prints-description">{print.description}</p>
          )}

          <p className="prints-price">{print.price}</p>

          <button
            className="prints-inquire-btn"
            onClick={() => setInquiryOpen(true)}
          >
            Inquire
          </button>
        </div>
      )}

      {lightboxSrc && (
        <Lightbox
          src={lightboxSrc}
          alt={print.title}
          onClose={() => setLightboxSrc(null)}
        />
      )}

      {inquiryOpen && (
        <InquiryModal
          printTitle={print.title}
          onClose={() => setInquiryOpen(false)}
        />
      )}
    </div>
  );
}
