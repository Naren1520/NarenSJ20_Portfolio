"use client";

import { useEffect } from "react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  /* Close on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  /* Prevent body scroll while open */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Full image: ${alt}`}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        backgroundColor: "rgba(0, 0, 0, 0.88)",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(1rem, 4vw, 3rem)",
        cursor: "zoom-out",
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close image"
        style={{
          position: "absolute",
          top: "1.25rem",
          right: "1.25rem",
          width: "2.25rem",
          height: "2.25rem",
          borderRadius: "9999px",
          backgroundColor: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#ffffff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 0.15s ease",
          zIndex: 1,
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.25)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.12)"; }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="2" y1="2" x2="12" y2="12" />
          <line x1="12" y1="2" x2="2" y2="12" />
        </svg>
      </button>

      {/* Image — stop click propagation so clicking image doesn't close */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: "min(90vw, 1100px)",
          maxHeight: "90vh",
          cursor: "default",
          borderRadius: "0.875rem",
          overflow: "hidden",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{
            display: "block",
            maxWidth: "100%",
            maxHeight: "90vh",
            objectFit: "contain",
            borderRadius: "0.875rem",
          }}
        />
      </div>

      {/* Hint */}
      <p style={{
        position: "absolute",
        bottom: "1.25rem",
        left: "50%",
        transform: "translateX(-50%)",
        fontSize: "0.75rem",
        color: "rgba(255,255,255,0.35)",
        fontFamily: "var(--font-heading)",
        letterSpacing: "0.06em",
        whiteSpace: "nowrap",
      }}>
        Click anywhere or press Esc to close
      </p>
    </div>
  );
}
