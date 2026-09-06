"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const ACTIVITIES = [
  {
    id: "emcee",
    title: "College Fest Emcee",
    status: "Event Host / Emcee",
    organisation: "Pre-University College",
    description:
      "Hosted and coordinated a college fest as an Emcee before an audience of 2,000+ attendees, managing stage proceedings, audience engagement, announcements, and event transitions.",
  },
  {
    id: "technical-mentor",
    title: "Technical Session Mentor",
    status: "Mentor / Session Facilitator",
    organisation: "College / Student Community",
    description:
      "Mentored students and conducted technical sessions, helping participants understand development concepts, tools, and practical approaches to building projects.",
  },
  {
    id: "workshop-speaker",
    title: "Technical Workshop Speaker",
    status: "Speaker / Session Facilitator",
    organisation: "College / Student Community",
    description:
      "Delivered technical sessions and interactive workshops, sharing practical knowledge and guiding students through technical concepts and project development.",
  },
  {
    id: "radio-storytelling",
    title: "Radio Storytelling Session",
    status: "Storytelling Speaker",
    organisation: "Radio / Community Platform",
    description:
      "Delivered a storytelling session on radio, engaging listeners through narrative-driven communication and demonstrating public speaking, creativity, and audience engagement.",
  },
];

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

      {/* Horizontal scroll track — full viewport width */}
      <div
        style={{
          width: "100%",
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingBottom: "var(--section-pad-y)",
          /* allow scroll to start/end with container padding */
          paddingLeft: "var(--container-pad-x)",
          paddingRight: "var(--container-pad-x)",
        }}
        /* hide webkit scrollbar */
        className="hide-scrollbar"
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
            /* cards don't shrink — they stay at fixed width and scroll */
            width: "max-content",
          }}
        >
          {ACTIVITIES.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 80} duration={420}>
              <div
                style={{
                  width: "clamp(260px, 30vw, 340px)",
                  flexShrink: 0,
                  backgroundColor: "#f5f5f7",
                  border: "1px solid #d2d2d7",
                  borderRadius: "1.125rem",
                  padding: "clamp(1.5rem, 3vw, 2rem)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                {/* Status pill */}
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

                {/* Title */}
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.0625rem",
                  fontWeight: 700,
                  color: "#1d1d1f",
                  lineHeight: 1.3,
                }}>
                  {item.title}
                </h3>

                {/* Organisation */}
                <p style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#0066cc",
                  fontFamily: "var(--font-heading)",
                }}>
                  {item.organisation}
                </p>

                {/* Description */}
                <p style={{
                  fontSize: "0.875rem",
                  color: "#515154",
                  lineHeight: 1.7,
                  paddingTop: "0.75rem",
                  borderTop: "1px solid #d2d2d7",
                  marginTop: "auto",
                }}>
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
