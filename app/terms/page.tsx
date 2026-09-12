import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Naren S J",
  description:
    "The terms and conditions that govern your use of Naren S J's portfolio website.",
};

const LAST_UPDATED  = "September 1, 2026";
const SITE_URL      = "https://narensj.netlify.app";
const CONTACT_EMAIL = "narensonu1520@gmail.com";

/* ── Shared primitives ──────────────────────────────────────── */
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

function TermsBlock({
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
export default function TermsPage() {
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

        <PageHeading>Terms of Service.</PageHeading>
        <p
          style={{
            marginTop: "1rem",
            fontSize: "clamp(1rem, 1.4vw, 1.1875rem)",
            color: "#86868b",
            lineHeight: 1.6,
          }}
        >
          Please read these terms carefully before using this portfolio. By
          accessing the Site, you agree to be bound by them.
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

      {/* ── Terms content ─────────────────────────── */}
      <div style={{ ...pad, paddingBottom: "clamp(4rem, 8vw, 7rem)" }}>

        {/* Introduction */}
        <div style={{ paddingBlock: "2.5rem" }}>
          <Body>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of{" "}
            <strong style={{ color: "#1d1d1f" }}>{SITE_URL}</strong> (the
            &quot;Site&quot;), operated by Naren S J (&quot;I&quot;, &quot;me&quot;, or &quot;my&quot;). By visiting or
            using the Site you agree to these Terms. If you do not agree, you
            must not use the Site.
          </Body>
        </div>

        <TermsBlock number="01" title="Acceptance of Terms">
          <Body>
            By accessing this Site, you represent that you are at least 13
            years of age and that you have the legal capacity to enter into
            these Terms. If you are accessing the Site on behalf of an
            organisation, you represent that you have authority to bind that
            organisation to these Terms.
          </Body>
          <Body>
            I reserve the right to revise these Terms at any time. Changes will
            be effective immediately upon posting. Continued use of the Site
            after any changes constitutes your acceptance of the new Terms.
          </Body>
        </TermsBlock>

        <TermsBlock number="02" title="Use of the Site">
          <Body>
            You may use this Site for lawful, personal, and non-commercial
            purposes only. You agree not to:
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
              "Copy, reproduce, or redistribute any part of the Site's content without prior written permission",
              "Use automated tools, bots, or scrapers to extract data from the Site",
              "Attempt to gain unauthorised access to any system or network connected to the Site",
              "Use the Site in any manner that could damage, disable, overburden, or impair it",
              "Transmit any harmful, offensive, or unlawful content through the contact form",
              "Impersonate any person or entity, or misrepresent your affiliation with any person or entity",
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
        </TermsBlock>

        <TermsBlock number="03" title="Intellectual Property">
          <Body>
            All content on this Site — including but not limited to text,
            code, graphics, logos, images, project descriptions, and design —
            is the exclusive intellectual property of Naren S J, unless
            otherwise attributed.
          </Body>
          <Body>
            You may link to this Site or share content from it with proper
            attribution. You may not reproduce, republish, or create derivative
            works without my explicit written permission. Open-source code
            published in linked GitHub repositories is governed by the licence
            stated within each respective repository.
          </Body>

          {/* IP callout card */}
          <div
            style={{
              padding: "1.25rem 1.5rem",
              backgroundColor: "#f5f5f7",
              border: "1px solid #d2d2d7",
              borderRadius: "0.875rem",
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0066cc"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0, marginTop: "0.125rem" }}
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#515154",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Want to reference or feature my work? I&apos;m open to it — just reach
              out at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{ color: "#0066cc", fontWeight: 600 }}
              >
                {CONTACT_EMAIL}
              </a>{" "}
              first.
            </p>
          </div>
        </TermsBlock>

        <TermsBlock number="04" title="Third-Party Links">
          <Body>
            This Site contains links to third-party websites, including GitHub
            repositories, project demos, research papers, and certification
            platforms. These links are provided for convenience and do not
            constitute an endorsement of those sites or their content.
          </Body>
          <Body>
            I have no control over and assume no responsibility for the content,
            privacy policies, or practices of any third-party site. I encourage
            you to review the terms and privacy policies of any third-party
            sites you visit.
          </Body>
        </TermsBlock>

        <TermsBlock number="05" title="Disclaimer of Warranties">
          <Body>
            This Site and all of its content are provided on an{" "}
            <strong style={{ color: "#1d1d1f" }}>&quot;as is&quot;</strong> and{" "}
            <strong style={{ color: "#1d1d1f" }}>&quot;as available&quot;</strong> basis,
            without warranties of any kind, either express or implied. I do
            not warrant that the Site will be uninterrupted, error-free,
            secure, or free of viruses or other harmful components.
          </Body>
          <Body>
            The information on this Site is provided for general informational
            purposes only. It does not constitute professional advice of any
            kind. You should not act on the basis of any content on this Site
            without seeking appropriate professional guidance.
          </Body>
        </TermsBlock>

        <TermsBlock number="06" title="Limitation of Liability">
          <Body>
            To the fullest extent permitted by applicable law, Naren S J shall
            not be liable for any indirect, incidental, special, consequential,
            or punitive damages arising from your access to or use of (or
            inability to access or use) this Site or its content, even if
            advised of the possibility of such damages.
          </Body>
          <Body>
            In no event shall my total liability to you for all claims relating
            to the Site exceed the amount you paid (if any) to access the Site.
          </Body>
        </TermsBlock>

        <TermsBlock number="07" title="Privacy">
          <Body>
            Your use of this Site is also governed by the{" "}
            <Link
              href="/privacy"
              style={{ color: "#0066cc", fontWeight: 600 }}
            >
              Privacy Policy
            </Link>
            , which is incorporated into these Terms by reference. By using the
            Site you also agree to the practices described in the Privacy
            Policy.
          </Body>
        </TermsBlock>

        <TermsBlock number="08" title="Governing Law">
          <Body>
            These Terms shall be governed by and construed in accordance with
            the laws of India, without regard to its conflict of law provisions.
            Any disputes arising under these Terms shall be subject to the
            exclusive jurisdiction of the courts located in India.
          </Body>
        </TermsBlock>

        <TermsBlock number="09" title="Changes to These Terms">
          <Body>
            I may update these Terms from time to time. When I do, I will
            revise the &quot;Effective&quot; date at the top of this page. Your
            continued use of the Site after any changes constitutes your
            acceptance of the updated Terms. It is your responsibility to
            review these Terms periodically.
          </Body>
        </TermsBlock>

        <TermsBlock number="10" title="Contact">
          <Body>
            If you have any questions about these Terms or wish to request
            permission for a use not covered here, please contact me:
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
              style={{ fontSize: "0.8125rem", color: "#86868b" }}
            >
              {SITE_URL}
            </a>
          </div>
        </TermsBlock>
      </div>

      {/* ── Footer ──────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid #d2d2d7",
          backgroundColor: "#fff",
          padding: "1.75rem clamp(1.5rem, 6vw, 3rem)",
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
            href="/privacy"
            style={{
              fontSize: "0.75rem",
              color: "#0066cc",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Privacy Policy
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
