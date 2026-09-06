"use client";

import { useEffect, useRef } from "react";

const NODES = ["Input", "Processing", "Rendering", "Output"];

export default function EngineFlowSVG() {
  const pathsRef = useRef<(SVGPathElement | null)[]>([]);
  const hasPlayed = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (hasPlayed.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const paths = pathsRef.current.filter(Boolean) as SVGPathElement[];

    if (prefersReduced || paths.length === 0) {
      paths.forEach((p) => {
        p.style.strokeDashoffset = "0";
        p.style.opacity = "1";
      });
      return;
    }

    (async () => {
      try {
        const { default: gsap } = await import("gsap");

        paths.forEach((path) => {
          const length = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
            opacity: 1,
          });
        });

        const tl = gsap.timeline({
          onComplete: () => { hasPlayed.current = true; },
        });

        paths.forEach((path, i) => {
          tl.to(
            path,
            { strokeDashoffset: 0, duration: 0.9, ease: "power2.inOut" },
            i * 0.8
          );
        });
      } catch {
        paths.forEach((p) => {
          p.style.strokeDashoffset = "0";
          p.style.opacity = "1";
        });
      }
    })();
  }, []);

  const nodeY = 60;
  const nodeR = 28;
  const spacing = 200;
  const startX = 60;
  const viewW = startX * 2 + spacing * 3;
  const viewH = 130;

  return (
    <svg
      viewBox={`0 0 ${viewW} ${viewH}`}
      fill="none"
      aria-label="Engine flow: Input → Processing → Rendering → Output"
      role="img"
      style={{ width: "100%", maxWidth: "700px", overflow: "visible" }}
    >
      {NODES.slice(0, -1).map((_, i) => {
        const x1 = startX + i * spacing + nodeR;
        const x2 = startX + (i + 1) * spacing - nodeR;
        return (
          <path
            key={`path-${i}`}
            ref={(el) => { pathsRef.current[i] = el; }}
            d={`M ${x1} ${nodeY} L ${x2} ${nodeY}`}
            stroke="#0066cc"
            strokeWidth="2"
            strokeLinecap="round"
            opacity={0}
          />
        );
      })}

      {NODES.map((label, i) => {
        const cx = startX + i * spacing;
        return (
          <g key={label}>
            <circle cx={cx} cy={nodeY} r={nodeR} stroke="#e5e5e7" strokeWidth="2" fill="#ffffff" />
            <text
              x={cx} y={nodeY}
              textAnchor="middle" dominantBaseline="middle"
              fontSize="10" fill="#1d1d1f"
              fontFamily="var(--font-heading)"
              fontWeight="600"
              letterSpacing="0.02em"
            >
              {label}
            </text>
            {i < NODES.length - 1 && (
              <polygon
                points={`${cx + nodeR + 40},${nodeY} ${cx + nodeR + 32},${nodeY - 5} ${cx + nodeR + 32},${nodeY + 5}`}
                fill="#0066cc"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}

