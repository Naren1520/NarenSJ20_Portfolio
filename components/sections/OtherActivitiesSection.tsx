"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { otherActivitiesData } from "@/data/otherActivities";

export default function OtherActivitiesSection() {
  return (
    <section
      id="other-activities"
      className="w-full border-t border-[#d2d2d7] bg-white"
      aria-label="Other Activities"
    >
      <div className="container-page" style={{ paddingTop: "var(--section-pad-y)" }}>
        <ScrollReveal duration={500}>
          <div className="eyebrow-tag">Beyond Engineering</div>
          <h2 className="section-heading">Other Activities.</h2>
        </ScrollReveal>
      </div>

      {/* Horizontal scroll row */}
      <div
        className="hide-scrollbar"
        style={{
          width: "100%",
          overflowX: "auto",
          paddingInline: "var(--container-pad-x)",
          paddingBottom: "var(--section-pad-y)",
        }}
      >
        <div style={{ display: "flex", gap: "1rem", width: "max-content" }}>
          {otherActivitiesData.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 80} duration={420}>
              <div
                style={{
                  width: "clamp(260px, 30vw, 320px)",
                  flexShrink: 0,
                  backgroundColor: "#f5f5f7",
                  border: "1px solid #d2d2d7",
                  borderRadius: "1.125rem",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxSizing: "border-box",
                }}
              >
                {/* Text block — status + title + org */}
                <div style={{
                  padding: "clamp(1.25rem, 2.5vw, 1.5rem)",
                  paddingBottom: item.image ? "1rem" : undefined,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}>
                  <span style={{
                    alignSelf: "flex-start",
                    padding: "0.1875rem 0.625rem",
                    borderRadius: "9999px",
                    border: "1px solid #d2d2d7",
                    backgroundColor: "#ffffff",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    color: "#515154",
                    fontFamily: "var(--font-heading)",
                    whiteSpace: "nowrap",
                  }}>
                    {item.status}
                  </span>

                  <h3 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: "#1d1d1f",
                    lineHeight: 1.3,
                    margin: 0,
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#0066cc",
                    fontFamily: "var(--font-heading)",
                    margin: 0,
                  }}>
                    {item.organisation}
                  </p>
                </div>

                {/* Rectangle image */}
                {item.image && (
                  <div style={{
                    width: "100%",
                    aspectRatio: "16 / 9",
                    overflow: "hidden",
                    flexShrink: 0,
                    backgroundColor: "#e8e8ed",
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        display: "block",
                      }}
                    />
                  </div>
                )}

                {/* Description */}
                <div style={{
                  padding: "clamp(1rem, 2vw, 1.25rem)",
                  paddingTop: item.image ? "1rem" : 0,
                  borderTop: item.image ? "1px solid #d2d2d7" : "none",
                }}>
                  <p style={{
                    fontSize: "0.875rem",
                    color: "#515154",
                    lineHeight: 1.7,
                    margin: 0,
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
