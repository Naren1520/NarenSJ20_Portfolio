"use client";

import { useRef, useEffect, useState } from "react";

interface Props {
  src: string;
  downloadName?: string;
}

export default function PdfViewer({ src, downloadName = "resume.pdf" }: Props) {
  const wrapRef   = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(900);

  /* Measure the wrapper width and compute A4 height */
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const compute = () => {
      const w = el.getBoundingClientRect().width;
      // A4 ratio = 1 : √2 ≈ 1.4142
      setHeight(Math.round(w * 1.4142));
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      {/* ── Desktop: iframe ── */}
      <div
        ref={wrapRef}
        className="resume-iframe-wrap"
        style={{
          borderRadius: "1rem",
          overflow: "hidden",
          border: "1px solid #d2d2d7",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          backgroundColor: "#f5f5f7",
          overscrollBehavior: "contain",
          isolation: "isolate",
          display: "none", /* shown via media query */
        }}
      >
        <iframe
          src={`${src}#toolbar=1&navpanes=0&scrollbar=0&view=FitH&zoom=page-width`}
          title="Naren S J — Resume"
          width="100%"
          loading="lazy"
          style={{
            display: "block",
            height: `${height}px`,
            border: "none",
          }}
        />
      </div>

      {/* ── Mobile: card with open + download ── */}
      <div
        className="resume-mobile-card"
        style={{
          borderRadius: "1rem",
          border: "1px solid #d2d2d7",
          backgroundColor: "#f5f5f7",
          padding: "2rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          textAlign: "center",
        }}
      >
        {/* PDF icon */}
        <div style={{
          width: "4rem", height: "4rem", borderRadius: "1rem",
          backgroundColor: "#ffffff", border: "1px solid #d2d2d7",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
            stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        </div>

        <div>
          <p style={{
            fontFamily: "var(--font-heading)", fontSize: "1.0625rem",
            fontWeight: 700, color: "#1d1d1f", margin: "0 0 0.375rem",
          }}>
            Naren S J — Resume
          </p>
          <p style={{ fontSize: "0.8125rem", color: "#86868b", margin: 0 }}>
            PDF · Best viewed in a PDF reader
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
          <a href={src} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.75rem 1.5rem", borderRadius: "9999px",
            backgroundColor: "#1d1d1f", color: "#ffffff",
            fontSize: "0.875rem", fontWeight: 600,
            fontFamily: "var(--font-heading)", textDecoration: "none",
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Open PDF
          </a>
          <a href={src} download={downloadName} style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.75rem 1.5rem", borderRadius: "9999px",
            backgroundColor: "#ffffff", border: "1px solid #d2d2d7",
            color: "#1d1d1f", fontSize: "0.875rem", fontWeight: 600,
            fontFamily: "var(--font-heading)", textDecoration: "none",
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .resume-iframe-wrap  { display: block !important; }
          .resume-mobile-card  { display: none  !important; }
        }
      `}</style>
    </>
  );
}
