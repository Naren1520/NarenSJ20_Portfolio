"use client";

import { useEffect, useRef } from "react";

/* ── Devicons CDN base ─────────────────────────────────────────── */
const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

/* skill → icon src (devicons SVG) */
const ICON: Record<string, string> = {
  // Programming Languages
  "Python":        `${DI}/python/python-original.svg`,
  "Java":          `${DI}/java/java-original.svg`,
  "JavaScript":    `${DI}/javascript/javascript-original.svg`,
  "TypeScript":    `${DI}/typescript/typescript-original.svg`,
  "C":             `${DI}/c/c-original.svg`,
  "Rust":          `${DI}/rust/rust-original.svg`,

  // AI / ML — use generic icons or representative logos
  "Generative AI":       "https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg",
  "Prompt Engineering":  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openal/openal-original.svg",
  "RAG":                 `${DI}/python/python-original.svg`,
  "AI Agents":           "https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg",
  "LLM Integration":     `${DI}/pytorch/pytorch-original.svg`,
  "Computer Vision":     `${DI}/opencv/opencv-original.svg`,

  // Frontend
  "React.js":       `${DI}/react/react-original.svg`,
  "Next.js":        `${DI}/nextjs/nextjs-original.svg`,
  "HTML":           `${DI}/html5/html5-original.svg`,
  "CSS":            `${DI}/css3/css3-original.svg`,
  "Tailwind CSS":   `${DI}/tailwindcss/tailwindcss-original.svg`,
  "Bootstrap":      `${DI}/bootstrap/bootstrap-original.svg`,
  "Figma":          `${DI}/figma/figma-original.svg`,

  // Backend
  "Node.js":        `${DI}/nodejs/nodejs-original.svg`,
  "Express.js":     `${DI}/express/express-original.svg`,
  "REST APIs":      `${DI}/fastapi/fastapi-original.svg`,
  "Socket.io":      `${DI}/socketio/socketio-original.svg`,
  "GitHub API":     `${DI}/github/github-original.svg`,
  "n8n":            "https://avatars.githubusercontent.com/u/45487711?s=48&v=4",

  // Databases
  "MySQL":              `${DI}/mysql/mysql-original.svg`,
  "MongoDB":            `${DI}/mongodb/mongodb-original.svg`,
  "PostgreSQL":         `${DI}/postgresql/postgresql-original.svg`,
  "Redis":              `${DI}/redis/redis-original.svg`,
  "Supabase":           `${DI}/supabase/supabase-original.svg`,
  "Firebase":           `${DI}/firebase/firebase-original.svg`,
  "Database Sharding":  `${DI}/postgresql/postgresql-original.svg`,
  "Bloom Filters":      `${DI}/redis/redis-original.svg`,
  "Apache Kafka":       `${DI}/apachekafka/apachekafka-original.svg`,

  // Cloud / DevOps
  "Docker":         `${DI}/docker/docker-original.svg`,
  "Kubernetes":     `${DI}/kubernetes/kubernetes-original.svg`,
  "AWS":            `${DI}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  "Azure":          `${DI}/azure/azure-original.svg`,
  "Cloudflare R2":  "https://www.cloudflare.com/favicon.ico",
  "Vercel":         `${DI}/vercel/vercel-original.svg`,
  "Netlify":        `${DI}/netlify/netlify-original.svg`,
  "Render":         "https://avatars.githubusercontent.com/u/36424661?s=48&v=4",
  "Railway":        "https://avatars.githubusercontent.com/u/66716858?s=48&v=4",
  "Linux":          `${DI}/linux/linux-original.svg`,

  // Cybersecurity
  "Kali Linux":   `${DI}/linux/linux-original.svg`,
  "Wireshark":    "https://www.wireshark.org/assets/icons/favicon.ico",
  "Honeypots":    `${DI}/linux/linux-original.svg`,

  // Blockchain
  "Solidity":        `${DI}/solidity/solidity-original.svg`,
  "Smart Contracts": `${DI}/solidity/solidity-original.svg`,
  "MetaMask":        "https://avatars.githubusercontent.com/u/11744586?s=48&v=4",
  "Algorand":        "https://avatars.githubusercontent.com/u/46034582?s=48&v=4",

  // Dev Tools
  "Git":      `${DI}/git/git-original.svg`,
  "GitHub":   `${DI}/github/github-original.svg`,
  "Postman":  `${DI}/postman/postman-original.svg`,
};

const SKILL_GROUPS = [
  {
    label: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C", "Rust"],
  },
  {
    label: "AI & Machine Learning",
    skills: ["Generative AI", "Prompt Engineering", "RAG", "AI Agents", "LLM Integration", "Computer Vision"],
  },
  {
    label: "Frontend Development",
    skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Figma"],
  },
  {
    label: "Backend Development",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.io", "GitHub API", "n8n"],
  },
  {
    label: "Databases & Distributed Systems",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Supabase", "Firebase", "Database Sharding", "Bloom Filters", "Apache Kafka"],
  },
  {
    label: "Cloud, DevOps & Infrastructure",
    skills: ["Docker", "Kubernetes", "AWS", "Azure", "Cloudflare R2", "Vercel", "Netlify", "Render", "Railway", "Linux"],
  },
  {
    label: "Cybersecurity",
    skills: ["Kali Linux", "Wireshark", "Honeypots"],
  },
  {
    label: "Blockchain & Web3",
    skills: ["Solidity", "Smart Contracts", "MetaMask", "Algorand"],
  },
  {
    label: "Developer Tools",
    skills: ["Git", "GitHub", "Postman"],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const groupRefs  = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const groups = groupRefs.current.filter(Boolean) as HTMLDivElement[];
    (async () => {
      try {
        const [{ default: gsap }, { default: ST }] = await Promise.all([
          import("gsap"), import("gsap/ScrollTrigger"),
        ]);
        gsap.registerPlugin(ST);
        gsap.fromTo(
          groups,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 0.55, stagger: 0.08, ease: "power2.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
          }
        );
      } catch { /* display as is */ }
    })();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="w-full border-t border-[#d2d2d7] bg-white"
      aria-label="Technology"
    >
      <div className="container-page section-pad">
        <div className="eyebrow-tag">Technology &amp; Tooling</div>
        <h2 className="section-heading">Core Stack.</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2rem, 4vw, 3rem)" }}>
          {SKILL_GROUPS.map((group, gi) => (
            <div
              key={group.label}
              ref={(el) => { groupRefs.current[gi] = el; }}
            >
              {/* Group label */}
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#86868b",
                marginBottom: "0.875rem",
              }}>
                {group.label}
              </h3>

              {/* Skill pills with icons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4375rem",
                      padding: "0.4375rem 0.875rem",
                      borderRadius: "9999px",
                      backgroundColor: "#f5f5f7",
                      border: "1px solid #d2d2d7",
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(0.8125rem, 1vw, 0.9375rem)",
                      fontWeight: 500,
                      color: "#1d1d1f",
                      whiteSpace: "nowrap",
                      transition: "border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.backgroundColor = "#ffffff";
                      el.style.borderColor = "#1d1d1f";
                      el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.07)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.backgroundColor = "#f5f5f7";
                      el.style.borderColor = "#d2d2d7";
                      el.style.boxShadow = "none";
                    }}
                  >
                    {ICON[skill] && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={ICON[skill]}
                        alt=""
                        aria-hidden="true"
                        width={16}
                        height={16}
                        style={{
                          width: "1rem",
                          height: "1rem",
                          objectFit: "contain",
                          flexShrink: 0,
                        }}
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                      />
                    )}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
