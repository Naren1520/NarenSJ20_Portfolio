"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PrinterCard from "@/components/ui/PrinterCard";

interface ResumeButtonProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function ResumeButton({
  children = "Resume",
  className,
  style,
}: ResumeButtonProps) {
  const [printing, setPrinting] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (printing) return;
    setPrinting(true);
    setTimeout(() => {
      setPrinting(false);
      router.push("/resume");
    }, 5000);
  };

  return (
    <>
      {/* Fullscreen overlay with centered PrinterCard */}
      {printing && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
          aria-live="polite"
          aria-label="Preparing your resume"
        >
          {/* Scale the printer up — it's 190px wide by default, scale to ~1.8× */}
          <div style={{ transform: "scale(1.8)", transformOrigin: "center center" }}>
            <PrinterCard />
          </div>

          <p style={{
            fontFamily: "var(--font-heading)",
            fontSize: "0.9375rem",
            fontWeight: 600,
            color: "#86868b",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            marginTop: "3rem", // compensate for scale overflow
          }}>
            Preparing Resume…
          </p>
        </div>
      )}

      <button
        onClick={handleClick}
        className={className}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          ...style,
        }}
        aria-label="View resume"
      >
        {children}
      </button>
    </>
  );
}
