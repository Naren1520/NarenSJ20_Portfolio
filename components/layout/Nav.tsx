"use client";

import { useEffect, useState } from "react";
import ResumeButton from "@/components/ui/ResumeButton";
import { getLenis } from "@/lib/lenis";

interface NavLink {
  label: string;
  href: string;
  sectionId: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Work",         href: "#work",         sectionId: "work"         },
  { label: "Experience",   href: "#experience",   sectionId: "experience"   },
  { label: "Engineering",  href: "#engineering",  sectionId: "engineering"  },
  { label: "Education",    href: "#education",    sectionId: "education"    },
  { label: "Achievements", href: "#achievements", sectionId: "achievements" },
  { label: "Contact",      href: "#contact",      sectionId: "contact"      },
];

/* Nav is 68px tall — keep in sync with NAV_H in CSS and the scroll offset */
const NAV_H = 68;

export default function Nav() {
  const [scrolled,       setScrolled]  = useState(false);
  const [activeSection,  setActive]    = useState("work");
  const [mobileOpen,     setMobileOpen] = useState(false);

  useEffect(() => {
    const TRIGGER = NAV_H + 100;

    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = NAV_LINKS[0].sectionId;
      for (const { sectionId } of NAV_LINKS) {
        const el = document.getElementById(sectionId);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= TRIGGER) current = sectionId;
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const lenis  = getLenis();
    const target = document.querySelector(href) as HTMLElement | null;
    if (!target) return;

    const go = () =>
      lenis
        ? lenis.scrollTo(target, { duration: 0.8 })
        : target.scrollIntoView({ behavior: "smooth" });

    if (mobileOpen) { setMobileOpen(false); setTimeout(go, 120); }
    else go();
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "#ffffff",
        borderBottom: `1px solid ${scrolled ? "#d2d2d7" : "#ebebeb"}`,
        boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.07)" : "none",
        transition: "box-shadow 0.25s ease, border-color 0.25s ease",
        height: `${NAV_H}px`,
        display: "flex",
        alignItems: "center",
      }}
      aria-label="Main navigation"
    >
      <div
        style={{
          maxWidth: "80rem",
          width: "100%",
          marginInline: "auto",
          paddingInline: "clamp(1.25rem, 5vw, 4.5rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* ── Logo ── */}
        <button
          onClick={() => scrollTo("#work")}
          aria-label="Go to top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <span
            style={{
              width: "0.5rem",
              height: "0.5rem",
              borderRadius: "9999px",
              backgroundColor: "#1d1d1f",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.0625rem",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#1d1d1f",
            }}
          >
            Naren S J
          </span>
        </button>

        {/* ── Desktop links ── */}
        <div
          className="hidden md:flex"
          style={{ alignItems: "center", gap: "0.5rem", minWidth: 0 }}
        >
          {/* Pill nav — scrollable on md, full on lg */}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.125rem",
              listStyle: "none",
              margin: 0,
              padding: "0.25rem",
              backgroundColor: "#f5f5f7",
              borderRadius: "9999px",
              border: "1px solid #d2d2d7",
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              maxWidth: "calc(100vw - 220px)",
            }}
          >
            {NAV_LINKS.map(({ label, href, sectionId }) => {
              const active = activeSection === sectionId;
              return (
                <li key={sectionId} style={{ flexShrink: 0 }}>
                  <button
                    onClick={() => scrollTo(href)}
                    aria-current={active ? "true" : undefined}
                    style={{
                      display: "block",
                      padding: "0.375rem 0.875rem",
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      fontWeight: active ? 600 : 500,
                      fontFamily: "var(--font-heading)",
                      letterSpacing: "-0.01em",
                      color: active ? "#1d1d1f" : "#86868b",
                      backgroundColor: active ? "#ffffff" : "transparent",
                      boxShadow: active ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "color 0.15s ease, background-color 0.15s ease",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Resume CTA */}
          <ResumeButton
            style={{
              flexShrink: 0,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.4375rem 0.875rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              fontFamily: "var(--font-heading)",
              backgroundColor: "#1d1d1f",
              color: "#ffffff",
            }}
          >
            Resume
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" />
            </svg>
          </ResumeButton>
        </div>

        {/* ── Mobile controls ── */}
        <div className="flex md:hidden" style={{ alignItems: "center", gap: "0.75rem" }}>
          <ResumeButton
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.375rem 0.875rem",
              borderRadius: "9999px",
              fontSize: "0.8125rem",
              fontWeight: 600,
              fontFamily: "var(--font-heading)",
              backgroundColor: "#1d1d1f",
              color: "#ffffff",
            }}
          >
            Resume
          </ResumeButton>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            style={{
              padding: "0.5rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round">
              {mobileOpen ? (
                <><line x1="4" y1="4" x2="18" y2="18" /><line x1="18" y1="4" x2="4" y2="18" /></>
              ) : (
                <><line x1="3" y1="6" x2="19" y2="6" /><line x1="3" y1="11" x2="19" y2="11" /><line x1="3" y1="16" x2="19" y2="16" /></>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile overlay ── */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
            width: "100vw",
            height: "100vh",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5rem" }}>
            {NAV_LINKS.map(({ label, href, sectionId }) => {
              const active = activeSection === sectionId;
              return (
                <li key={sectionId}>
                  <button
                    onClick={() => scrollTo(href)}
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "2rem",
                      fontWeight: active ? 700 : 500,
                      letterSpacing: "-0.03em",
                      color: active ? "#1d1d1f" : "#86868b",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "color 0.15s ease",
                    }}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
