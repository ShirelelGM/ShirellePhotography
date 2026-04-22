"use client";

import { useEffect } from "react";
import Image from "next/image";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" aria-label="Close" onClick={onClose}>
        ×
      </button>
      <div
        className="lightbox-image-wrapper"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="lightbox-image"
          sizes="100vw"
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </div>
    </div>
  );
}
