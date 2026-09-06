"use client";

import { useEffect, useRef } from "react";
import ContactForm from "@/components/ui/ContactForm";

/* ── Contact constants — single source of truth ── */
export const CONTACT = {
  email:     "narensonu1520@gmail.com",
  phone:     "+91 8296833381",
  github:    "https://github.com/Naren1520",
  linkedin:  "https://www.linkedin.com/in/narensj20",
  instagram: "https://www.instagram.com/naren_s.j._/",
};

/* Small icon components */
function IconArrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12.14a19.79 19.79 0 0 1-3-8.59A2 2 0 0 1 3.44 1.5h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16.5Z" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2ZM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { /* section visible */ } },
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const PROFILES = [
    { label: "GitHub",    href: CONTACT.github,    icon: <IconGitHub />,    external: true  },
    { label: "LinkedIn",  href: CONTACT.linkedin,  icon: <IconLinkedIn />,  external: true  },
    { label: "Instagram", href: CONTACT.instagram, icon: <IconInstagram />, external: true  },
    { label: "Resume (PDF)", href: "/resume",      icon: <IconArrow />,     external: false },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-white text-[#1d1d1f] border-t border-[#d2d2d7]"
      aria-label="Contact"
    >
      <div className="container-page section-pad">
        <div className="eyebrow-tag">Let&apos;s Connect</div>

        <h2 className="section-heading" style={{ maxWidth: "24ch" }}>
          Let&apos;s build something remarkable together.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: "clamp(2rem, 5vw, 5rem)", alignItems: "start" }}>

          {/* ── Left — Form ── */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* ── Right — Contact details ── */}
          <div className="lg:col-span-5 flex flex-col" style={{ gap: "1rem" }}>

            {/* Email */}
            <div className="card">
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.625rem" }}>
                <span style={{ color: "#86868b" }}><IconMail /></span>
                <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "var(--font-heading)" }}>
                  Email
                </span>
              </div>
              <a
                href={`mailto:${CONTACT.email}`}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(0.875rem, 1.5vw, 1.1875rem)",
                  fontWeight: 700,
                  color: "#1d1d1f",
                  textDecoration: "none",
                  wordBreak: "break-all",
                  display: "block",
                }}
              >
                {CONTACT.email}
              </a>
            </div>

            {/* Phone */}
            <div className="card">
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.625rem" }}>
                <span style={{ color: "#86868b" }}><IconPhone /></span>
                <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "var(--font-heading)" }}>
                  Phone
                </span>
              </div>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(0.9375rem, 1.5vw, 1.25rem)",
                  fontWeight: 700,
                  color: "#1d1d1f",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                {CONTACT.phone}
              </a>
            </div>

            {/* Profiles */}
            <div className="card">
              <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "var(--font-heading)", display: "block", marginBottom: "1rem" }}>
                Profiles &amp; Documents
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {PROFILES.map(({ label, href, icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.625rem",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "#1d1d1f",
                      textDecoration: "none",
                      fontFamily: "var(--font-heading)",
                      transition: "color 0.15s ease",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#0066cc"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#1d1d1f"; }}
                  >
                    <span style={{ color: "#86868b", display: "flex", alignItems: "center" }}>{icon}</span>
                    {label}
                    <span style={{ marginLeft: "auto" }}><IconArrow /></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="card">
              <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "var(--font-heading)", display: "block", marginBottom: "0.5rem" }}>
                Location &amp; Availability
              </span>
              <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1d1d1f", lineHeight: 1.5 }}>
                Mangaluru, India
                <span style={{ display: "block", fontWeight: 400, color: "#86868b", marginTop: "0.25rem" }}>
                  Open to remote &amp; on-site opportunities globally
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="w-full border-t border-[#d2d2d7] bg-white flex flex-wrap items-center justify-between"
        style={{ gap: "1rem", padding: "1.75rem var(--container-pad-x)" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", backgroundColor: "#1d1d1f", display: "block" }} />
          <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.875rem", fontWeight: 700, color: "#1d1d1f" }}>
            Naren S J
          </span>
        </div>
        <p style={{ fontSize: "0.75rem", color: "#86868b" }}>
          © {new Date().getFullYear()} Naren S J. Built with TypeScript &amp; Next.js.
        </p>
      </footer>
    </section>
  );
}
