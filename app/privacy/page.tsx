import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Naren S J",
  description:
    "How Naren S J collects, uses, and protects your information when you visit this portfolio.",
};

const LAST_UPDATED = "September 1, 2026";
const SITE_URL     = "https://narensj.netlify.app";
const CONTACT_EMAIL = "narensonu1520@gmail.com";

/* ── Shared typography primitives ──────────────────────────── */
function PageHeading({ children }: { children: React.ReactNode }) {
  return (
    <h1
      style={{
        fontFamily: "var(--font-heading)",
        fontSize: "clamp(2.25rem, 5vw, 4rem)",
        fontWeight: 800,
        lineHeight: 1.04,
        letterSpacing: "-0.04em",
        color: "#1d1d1f",
        margin: 0,
      }}
    >
      {children}
    </h1>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "var(--font-heading)",
        fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
        fontWeight: 700,
        letterSpacing: "-0.025em",
        color: "#1d1d1f",
        margin: "0 0 0.75rem",
      }}
    >
      {children}
    </h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
        color: "#515154",
        lineHeight: 1.75,
        margin: "0 0 1rem",
      }}
    >
      {children}
    </p>
  );
}

function PolicyBlock({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article
      style={{
        display: "grid",
        gridTemplateColumns: "2.5rem 1fr",
        gap: "1.25rem",
        paddingBlock: "2.5rem",
        borderTop: "1px solid #d2d2d7",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "0.8125rem",
          fontWeight: 700,
          color: "#86868b",
          paddingTop: "0.2rem",
        }}
      >
        {number}
      </span>
      <div>
        <SectionHeading>{title}</SectionHeading>
        {children}
      </div>
    </article>
  );
}

/* ──────────────────────────────────────────────────────────── */
export default function PrivacyPage() {
  const pad: React.CSSProperties = {
    maxWidth: "52rem",
    marginInline: "auto",
    paddingInline: "clamp(1.5rem, 6vw, 3rem)",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        paddingTop: "var(--nav-h)",
        color: "#1d1d1f",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* ── Hero header ───────────────────────────── */}
      <div
        style={{
          borderBottom: "1px solid #d2d2d7",
          paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
          paddingTop: "clamp(2.5rem, 5vw, 4rem)",
          ...pad,
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            fontSize: "0.8125rem",
            fontWeight: 500,
            color: "#86868b",
            textDecoration: "none",
            marginBottom: "2rem",
            fontFamily: "var(--font-heading)",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden="true"
          >
            <path d="M10 12L6 8l4-4" />
          </svg>
          Back to Portfolio
        </Link>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.3125rem 0.875rem",
            borderRadius: "9999px",
            backgroundColor: "#f5f5f7",
            border: "1px solid #d2d2d7",
            fontFamily: "var(--font-heading)",
            fontSize: "0.6875rem",
            fontWeight: 700,
            color: "#1d1d1f",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            marginBottom: "1.25rem",
          }}
        >
          Legal
        </div>

        <PageHeading>Privacy Policy.</PageHeading>
        <p
          style={{
            marginTop: "1rem",
            fontSize: "clamp(1rem, 1.4vw, 1.1875rem)",
            color: "#86868b",
            lineHeight: 1.6,
          }}
        >
          Your privacy matters. This policy explains exactly what data this
          portfolio collects, why, and how it is handled.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {[
            { label: "Effective", value: LAST_UPDATED },
            { label: "Applies to", value: SITE_URL },
            { label: "Contact", value: CONTACT_EMAIL },
          ].map(({ label, value }) => (
            <div key={label}>
              <p
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  color: "#86868b",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  marginBottom: "0.25rem",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {label}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#1d1d1f",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Policy content ────────────────────────── */}
      <div style={{ ...pad, paddingBottom: "clamp(4rem, 8vw, 7rem)" }}>

        {/* Introduction */}
        <div style={{ paddingBlock: "2.5rem", borderTop: "none" }}>
          <Body>
            This Privacy Policy describes how Naren S J (&quot;I&quot;, &quot;me&quot;, or &quot;my&quot;)
            collects, uses, and shares information about you when you visit{" "}
            <strong style={{ color: "#1d1d1f" }}>{SITE_URL}</strong> (the
            &quot;Site&quot;). By using the Site you agree to the practices
            described here. If you do not agree, please stop using the Site.
          </Body>
        </div>

        <PolicyBlock number="01" title="Information I Collect">
          <Body>
            <strong style={{ color: "#1d1d1f" }}>
              Information you provide directly.
            </strong>{" "}
            When you use the contact form on this Site, you voluntarily share
            your name, email address, and message content. This information is
            used solely to respond to your inquiry.
          </Body>
          <Body>
            <strong style={{ color: "#1d1d1f" }}>
              Information collected automatically.
            </strong>{" "}
            Like most websites, this Site may collect certain information
            automatically when you visit, including your IP address, browser
            type and version, the pages you view, the time and date of your
            visit, and referring URLs. This data is collected through standard
            server logs and, if applicable, third-party analytics services.
          </Body>
          <Body>
            <strong style={{ color: "#1d1d1f" }}>Cookies.</strong> This Site
            may use essential cookies to ensure the site works correctly. No
            advertising or tracking cookies are placed without your explicit
            consent. You can disable cookies in your browser settings at any
            time, though some features may not function as intended.
          </Body>
        </PolicyBlock>

        <PolicyBlock number="02" title="How I Use Your Information">
          <Body>
            Information collected is used only for the following limited
            purposes:
          </Body>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.625rem",
            }}
          >
            {[
              "Responding to contact form submissions and inquiries",
              "Understanding how visitors interact with the Site to improve content and performance",
              "Diagnosing technical issues and maintaining Site security",
              "Complying with applicable legal obligations",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                  fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
                  color: "#515154",
                  lineHeight: 1.65,
                }}
              >
                <span
                  style={{
                    color: "#0066cc",
                    fontWeight: 700,
                    flexShrink: 0,
                    marginTop: "0.15em",
                  }}
                >
                  ↗
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Body>
            I do not sell, rent, or trade your personal information to any
            third party for marketing purposes.
          </Body>
        </PolicyBlock>

        <PolicyBlock number="03" title="Third-Party Services">
          <Body>
            This Site may integrate third-party services to deliver certain
            functionality. These services may collect information under their
            own privacy policies:
          </Body>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              margin: "0 0 1rem",
            }}
          >
            {[
              {
                name: "Vercel",
                role: "Hosting & Edge Network",
                url: "https://vercel.com/legal/privacy-policy",
              },
              {
                name: "Brevo (Sendinblue)",
                role: "Contact Form Email Delivery",
                url: "https://www.brevo.com/legal/privacypolicy",
              },
              {
                name: "GitHub",
                role: "Activity Data Display",
                url: "https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement",
              },
            ].map(({ name, role, url }) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.5rem",
                  padding: "0.875rem 1.125rem",
                  backgroundColor: "#f5f5f7",
                  border: "1px solid #d2d2d7",
                  borderRadius: "0.75rem",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      color: "#1d1d1f",
                      margin: 0,
                    }}
                  >
                    {name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "#86868b",
                      margin: 0,
                    }}
                  >
                    {role}
                  </p>
                </div>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "#0066cc",
                    textDecoration: "none",
                  }}
                >
                  Privacy Policy
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </PolicyBlock>

        <PolicyBlock number="04" title="Data Retention">
          <Body>
            Contact form submissions are retained only as long as necessary to
            respond to your inquiry, typically no longer than 12 months.
            Automatically collected server log data is retained for up to 90
            days before being deleted or anonymised. No personal data is stored
            in databases beyond what is needed for the purpose it was collected.
          </Body>
        </PolicyBlock>

        <PolicyBlock number="05" title="Your Rights">
          <Body>
            Depending on your jurisdiction, you may have rights regarding your
            personal data, including the right to access, correct, or delete
            information I hold about you. If you wish to exercise any of these
            rights, please contact me at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{ color: "#0066cc", fontWeight: 600 }}
            >
              {CONTACT_EMAIL}
            </a>
            . I will respond to all requests within 30 days.
          </Body>
        </PolicyBlock>

        <PolicyBlock number="06" title="Children's Privacy">
          <Body>
            This Site is not directed to children under the age of 13. I do
            not knowingly collect personal information from children. If you
            believe a child has provided personal information through this
            Site, please contact me and I will promptly delete such information.
          </Body>
        </PolicyBlock>

        <PolicyBlock number="07" title="Security">
          <Body>
            I implement industry-standard technical and organisational measures
            to protect your information against unauthorised access, alteration,
            disclosure, or destruction. However, no method of transmission over
            the internet is 100% secure. While I strive to protect your
            information, I cannot guarantee its absolute security.
          </Body>
        </PolicyBlock>

        <PolicyBlock number="08" title="Changes to This Policy">
          <Body>
            I may update this Privacy Policy from time to time. When I do, I
            will revise the &quot;Effective&quot; date at the top of this page.
            Your continued use of the Site after any changes constitutes
            acceptance of the updated policy. I encourage you to review this
            policy periodically.
          </Body>
        </PolicyBlock>

        <PolicyBlock number="09" title="Contact">
          <Body>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or the handling of your data, please reach out:
          </Body>
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              gap: "0.375rem",
              padding: "1.125rem 1.375rem",
              backgroundColor: "#f5f5f7",
              border: "1px solid #d2d2d7",
              borderRadius: "0.875rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1rem",
                fontWeight: 700,
                color: "#1d1d1f",
                margin: 0,
              }}
            >
              Naren S J
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{
                fontSize: "0.9375rem",
                color: "#0066cc",
                fontWeight: 600,
              }}
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={SITE_URL}
              style={{
                fontSize: "0.8125rem",
                color: "#86868b",
              }}
            >
              {SITE_URL}
            </a>
          </div>
        </PolicyBlock>
      </div>

      {/* ── Footer ──────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid #d2d2d7",
          backgroundColor: "#fff",
          padding:
            "1.75rem clamp(1.5rem, 6vw, 3rem)",
          maxWidth: "52rem",
          marginInline: "auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "#86868b", margin: 0 }}>
          © {new Date().getFullYear()} Naren S J. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "1.25rem" }}>
          <Link
            href="/terms"
            style={{
              fontSize: "0.75rem",
              color: "#0066cc",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Terms of Service
          </Link>
          <Link
            href="/"
            style={{
              fontSize: "0.75rem",
              color: "#86868b",
              textDecoration: "none",
            }}
          >
            Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
}
