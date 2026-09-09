"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { projectsData } from "@/data/projects";

/* ══════════════════════════════════════════════════════════════
   KNOWLEDGE BASE
══════════════════════════════════════════════════════════════ */
const KB: { patterns: RegExp[]; answer: string }[] = [
  {
    patterns: [/who are you|who is naren|introduce|about you|tell me about yourself/i],
    answer:
      "Hi! I'm Naren S J — an AI Engineer and Software Builder from Mangaluru, India. I design and ship AI-powered systems, full-stack web platforms, and high-performance backend infrastructure. I've built over 48 projects ranging from blockchain credential systems to AI criminal network analysis platforms. I'm currently pursuing my BE in Information Science at Sahyadri College, and I serve as Technical Head at ISDC. Ask me about my projects, experience, skills, or anything else.",
  },
  {
    patterns: [/experience|work|job|intern|career|professional/i],
    answer:
      "I have professional experience at three organisations. At Datavex AI, I was an AI/ML Engineering Intern where I built a 2D-to-3D CAD reconstruction pipeline using Gemini Vision and OpenCascade, cutting manual modelling time by 60%. At Sahynex Tech Solutions, I was a Software Developer Intern building platforms for over 10,000 active users and achieving a 25% performance improvement. At ISDC, I started as Web Dev Lead and now serve as Technical Head, overseeing architecture across 10 or more production platforms.",
  },
  {
    patterns: [/skill|technology|stack|language|tool|tech/i],
    answer:
      "My skills span AI and ML — Python, RAG, Generative AI, LLM integration, and computer vision. Full-stack — React, Next.js, Node.js, TypeScript. Systems programming — C, C++, and Rust. Databases — MongoDB, PostgreSQL, Redis, Supabase. Cloud and DevOps — Docker, Kubernetes, AWS, Azure, Cloudflare. Blockchain — Solidity, MetaMask, Algorand. And Java Spring Boot for enterprise backends.",
  },
  {
    patterns: [/education|college|degree|university|school/i],
    answer:
      "I'm pursuing a Bachelor of Engineering in Information Science at Sahyadri College of Engineering and Management, Mangaluru. Before that I completed my PUC from KVG Amarajyothi PU College with 94%, and SSLC from Shree Raja Rajeshwari English Medium High School with 98.8%.",
  },
  {
    patterns: [/achievement|award|win|hackathon|won|prize/i],
    answer:
      "I've won over 7 major hackathons and competitions. Key wins include HackHarbor 3.0 with an AI supply chain platform, GDG TechSprint with a real-time disaster response system, Best Innovative Project at Versathon for a cryptographic offline payment protocol, and finalist positions at BuildForBillion and the AWS AI Prompt Engineering Challenge.",
  },
  {
    patterns: [/all projects|list projects|what projects|how many projects/i],
    answer:
      "I've built 48 projects. Flagship ones include CRIMSON — AI criminal network analysis. SPManager — AI project management with RAG. ALMS — AI marketplace for artisans. Traffix AI — AI traffic management with Java Spring Boot. CredChain — blockchain credential verification. WorkFox — decentralised freelance platform on Algorand. CampusLink — AI campus hub. BrainScript — AI decision pipeline engine. You can say 'show me CRIMSON' or 'open SPManager' to navigate to any project page.",
  },
  {
    patterns: [/crimson/i],
    answer:
      "CRIMSON is my AI-powered criminal network analysis platform. It ingests unstructured investigative data, runs entity resolution using DistilBERT embeddings, builds a PostgreSQL graph database, and exposes a natural language query interface powered by Gemini AI. Analysts can ask plain English questions and get graph-backed answers. It achieves 91% entity resolution accuracy with sub-80ms graph query latency.",
  },
  {
    patterns: [/spmanager|sp manager/i],
    answer:
      "SPManager is an AI-powered project management platform. It uses RAG over a project knowledge base to auto-generate structured tasks from requirement documents, a skill-graph for intelligent task assignment, and Socket.io for real-time board sync. It reduces manual project setup time significantly and achieves 87% assignment accuracy compared to manual assignment.",
  },
  {
    patterns: [/alms/i],
    answer:
      "ALMS is an AI-driven market linkage platform connecting India's marginalized artisans with digital markets. It uses Gemini AI for image enhancement, multilingual product description generation in 6 languages, and AI price discovery from live marketplace data. It's a Progressive Web App with offline support and has helped over 200 artisans list their products digitally.",
  },
  {
    patterns: [/traffix|traffic/i],
    answer:
      "Traffix AI is an AI-powered traffic management system built with Java Spring Boot and TomTom API. It ingests real-time traffic flow data across 50 road segments every 30 seconds, predicts congestion hotspots 15 to 30 minutes in advance using Gemini AI, and pushes updates to an operator dashboard via WebSocket. The prediction model achieves 78% accuracy.",
  },
  {
    patterns: [/credchain|blockchain|credential/i],
    answer:
      "CredChain is a blockchain-enabled academic credential verification platform. Institutions issue credentials as on-chain records in a Solidity smart contract on Ethereum. Anyone can verify a credential in under 2 seconds by querying the contract. It eliminates certificate forgery completely — any alteration invalidates the on-chain hash immediately.",
  },
  {
    patterns: [/workfox|freelance|algorand/i],
    answer:
      "WorkFox is a decentralised freelance marketplace on the Algorand blockchain. Smart contract escrow replaces traditional escrow services. Client funds lock in the contract on job acceptance and release atomically on completion. Transaction fees are around 0.001 dollars — 99.9% cheaper than Ethereum. Reputation is stored on-chain and is fully portable.",
  },
  {
    patterns: [/campuslink|campus/i],
    answer:
      "CampusLink is a unified campus platform built with React and Supabase. It combines real-time announcements, an AI campus assistant powered by Gemini, event discovery, resource library, and role-based access for students, faculty, and admins — all secured by Supabase Row Level Security. The AI assistant is RAG-powered over campus-specific knowledge.",
  },
  {
    patterns: [/brainscript/i],
    answer:
      "BrainScript is a modular AI scripting engine built in Python. Developers define pipelines as directed acyclic graphs where nodes can be AI calls, conditionals, data fetches, or actions. The engine executes graphs asynchronously with parallel branch execution, reducing latency by 60% versus sequential execution. AI outputs are validated against JSON schemas with automatic retry.",
  },
  {
    patterns: [/waf|firewall|transformer|distilbert/i],
    answer:
      "Waf-Transformer is an AI-powered Web Application Firewall prototype combining traditional rule-based detection with a fine-tuned DistilBERT transformer model. It achieves 94.2% classification accuracy with a 1.8% false positive rate and p95 inference latency of 18ms. The hybrid pipeline reduces ML invocations by 73% by only escalating high-risk requests.",
  },
  {
    patterns: [/vanijya|vendor|mandi/i],
    answer:
      "Vanijya AI empowers India's street vendors with real-time commodity price intelligence from mandi portals, AI negotiation scripts in 6 regional languages, smart deal evaluation, and a direct buyer-seller network. Price queries respond in under 3 seconds on 4G. It uses Gemini 1.5 Flash and Serp API for live price scraping.",
  },
  {
    patterns: [/contact|email|phone|reach|hire|available/i],
    answer:
      "You can reach Naren at narensonu1520 at gmail dot com, or call plus 91 82968 33381. He's based in Mangaluru, India and is open to remote and on-site opportunities globally. You can also find him on LinkedIn as narensj20 and GitHub as Naren1520.",
  },
  {
    patterns: [/research|cryptograph|offline payment|chip/i],
    answer:
      "Naren's research explores cryptographic offline payment protocols — systems where financial transactions can be verified locally without network access while preventing double-spend attacks. He also explores chip architecture and hardware security module-based token verification.",
  },
  {
    patterns: [/volunteer|ieee|team challengers/i],
    answer:
      "Naren is a Technical Committee Member at IEEE since January 2026. He's also Full Stack Engineer at Team Challengers, where he built the Aerophilia platform serving 500+ users. He was previously elected Team Builders Captain at his PU college.",
  },
  {
    patterns: [/hello|hi|hey|good morning|good afternoon|good evening/i],
    answer:
      "Hello! I'm Naren's AI voice assistant. I can tell you about his experience, projects, skills, education, and more. You can also say something like 'show me CRIMSON' and I'll navigate you directly to that project. What would you like to know?",
  },
  {
    patterns: [/thank|thanks|bye|goodbye/i],
    answer:
      "You're welcome! Feel free to explore the portfolio or reach out to Naren directly. Have a great day!",
  },
];

/* ── Section navigation map ─────────────────────────────────── */
const SECTION_NAV: { patterns: RegExp[]; sectionId: string; label: string }[] = [
  { patterns: [/experience|work|career/i],   sectionId: "experience",   label: "Experience section" },
  { patterns: [/project|work gallery|engineering/i], sectionId: "engineering", label: "Projects section" },
  { patterns: [/skill|technology|stack/i],   sectionId: "skills",       label: "Skills section" },
  { patterns: [/education|college|degree/i], sectionId: "education",    label: "Education section" },
  { patterns: [/achievement|award|hackathon/i], sectionId: "achievements", label: "Achievements section" },
  { patterns: [/contact|email|reach/i],      sectionId: "contact",      label: "Contact section" },
  { patterns: [/certification|credential/i], sectionId: "certifications", label: "Certifications section" },
  { patterns: [/volunteer|volunteering/i],   sectionId: "volunteering", label: "Volunteering section" },
  { patterns: [/research/i],                 sectionId: "research",     label: "Research section" },
];

/* ── Project navigation detection ──────────────────────────── */
function detectProjectNavigation(query: string): { id: string; title: string } | null {
  const lower = query.toLowerCase();
  const navTriggers = /show|open|navigate|go to|take me to|display|find/i;
  if (!navTriggers.test(query)) return null;

  // Score each project by how well the query matches it
  let bestMatch: { id: string; title: string; score: number } | null = null;

  for (const project of projectsData) {
    const titleLower = project.title.toLowerCase();
    const idLower    = project.id.replace(/-/g, " ");
    let score = 0;

    // Exact full title match — highest priority
    if (lower.includes(titleLower)) {
      score = titleLower.length * 10;
    }
    // Exact ID match (e.g. "spmanager" or "sp manager")
    else if (lower.includes(idLower) || lower.includes(project.id.toLowerCase())) {
      score = idLower.length * 8;
    }
    // Word-level match — only count words > 4 chars to avoid false positives
    else {
      const words = titleLower.split(/\s+/).filter(w => w.length > 4);
      const matchedWords = words.filter(w => lower.includes(w));
      if (matchedWords.length > 0) {
        // Score by total matched characters — longer word matches win
        score = matchedWords.reduce((sum, w) => sum + w.length, 0);
      }
    }

    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { id: project.id, title: project.title, score };
    }
  }

  return bestMatch ? { id: bestMatch.id, title: bestMatch.title } : null;
}

/* ── Section navigation detection ──────────────────────────── */
function detectSectionNavigation(query: string): { sectionId: string; label: string } | null {
  const navTriggers = /show|scroll|go to|take me to|navigate|open/i;
  if (!navTriggers.test(query)) return null;
  for (const s of SECTION_NAV) {
    if (s.patterns.some(p => p.test(query))) return { sectionId: s.sectionId, label: s.label };
  }
  return null;
}

/* ── Project description lookup ─────────────────────────────── */
function getProjectAnswer(title: string, id: string): string {
  // Check KB for named project first
  const lower = (title + " " + id).toLowerCase();
  for (const { patterns, answer } of KB) {
    if (patterns.some(p => p.test(lower))) return answer;
  }
  // Fallback to projects data description
  const proj = projectsData.find(p => p.id === id);
  if (proj) {
    return `${proj.title} is a ${proj.difficulty.toLowerCase()}-level project. ${proj.description} Technologies used include ${proj.tags.slice(0, 5).join(", ")}.`;
  }
  return `I've navigated you to the ${title} project page. You can explore the full details there.`;
}

/* ── General answer ─────────────────────────────────────────── */
function findAnswer(query: string): string {
  for (const { patterns, answer } of KB) {
    if (patterns.some(p => p.test(query))) return answer;
  }
  return "I'm not sure about that. Try asking about Naren's experience, projects, skills, education, or say 'show me CRIMSON' to navigate to a project.";
}

/* ── Types ──────────────────────────────────────────────────── */
type AgentState = "idle" | "listening" | "thinking" | "speaking";

/* ── Waveform ───────────────────────────────────────────────── */
function Waveform({ active }: { active: boolean }) {
  const heights = [1, 0.6, 0.9, 0.4, 0.75, 0.5, 0.85, 0.3, 0.7, 0.55];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "3px", height: "24px" }}>
      <style>{`
        @keyframes va-wave-0{0%,100%{transform:scaleY(0.4)}50%{transform:scaleY(1)}}
        @keyframes va-wave-1{0%,100%{transform:scaleY(0.7)}50%{transform:scaleY(0.3)}}
        @keyframes va-wave-2{0%,100%{transform:scaleY(1)}50%{transform:scaleY(0.5)}}
        @keyframes va-wave-3{0%,100%{transform:scaleY(0.5)}50%{transform:scaleY(0.9)}}
        ${heights.map((_, i) => `.va-bar-${i}{animation:va-wave-${i % 4} 0.8s ease-in-out ${(i * 0.07).toFixed(2)}s infinite;}`).join("")}
      `}</style>
      {heights.map((h, i) => (
        <div key={i} className={active ? `va-bar-${i}` : undefined} style={{
          width: "3px", borderRadius: "9999px",
          backgroundColor: active ? "#0066cc" : "#d2d2d7",
          height: `${h * 24}px`, transition: "background-color 0.3s ease",
        }} />
      ))}
    </div>
  );
}

/* ── Speech recognition types ───────────────────────────────── */
interface ISpeechRecognition {
  lang: string; interimResults: boolean; maxAlternatives: number;
  start(): void; stop(): void;
  onstart: (() => void) | null;
  onresult: ((e: ISpeechRecognitionEvent) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
}
interface ISpeechRecognitionEvent {
  results: { [i: number]: { [j: number]: { transcript: string } } };
}
type SpeechRecogCtor = new () => ISpeechRecognition;

function getSpeechRecog(): SpeechRecogCtor | undefined {
  if (typeof window === "undefined") return undefined;
  return (
    (window as unknown as { SpeechRecognition?: SpeechRecogCtor }).SpeechRecognition ??
    (window as unknown as { webkitSpeechRecognition?: SpeechRecogCtor }).webkitSpeechRecognition
  );
}

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════ */
export default function VoiceAgent() {
  const router = useRouter();

  const [open,        setOpen]        = useState(false);
  const [state,       setState]       = useState<AgentState>("idle");
  const [transcript,  setTranscript]  = useState("");
  const [reply,       setReply]       = useState("");
  const [navInfo,     setNavInfo]     = useState<string | null>(null);
  const [supported,   setSupported]   = useState(true);

  const recogRef = useRef<ISpeechRecognition | null>(null);

  useEffect(() => {
    if (!getSpeechRecog() || !window.speechSynthesis) setSupported(false);
  }, []);

  const speak = useCallback((text: string) => {
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.rate = 0.92; utt.pitch = 1.15; utt.lang = "en-GB";

    const go = () => {
      const voices = window.speechSynthesis.getVoices();
      const preferred =
        voices.find(v => v.name === "Samantha") ??
        voices.find(v => v.name === "Google UK English Female") ??
        voices.find(v => /Aria|Zira|Karen|Moira/i.test(v.name)) ??
        voices.find(v => /female|woman/i.test(v.name) && /en[-_]/i.test(v.lang)) ??
        voices.find(v => /en[-_]/i.test(v.lang));
      if (preferred) utt.voice = preferred;
      utt.onstart = () => setState("speaking");
      utt.onend   = () => setState("idle");
      utt.onerror = () => setState("idle");
      window.speechSynthesis.speak(utt);
    };

    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) go();
    else { window.speechSynthesis.onvoiceschanged = () => { window.speechSynthesis.onvoiceschanged = null; go(); }; }
  }, []);

  const processQuery = useCallback((q: string) => {
    setState("thinking");
    setNavInfo(null);

    setTimeout(() => {
      // 1. Check for project navigation intent
      const projNav = detectProjectNavigation(q);
      if (projNav) {
        const ans = `Opening ${projNav.title} now. ${getProjectAnswer(projNav.title, projNav.id)}`;
        setReply(ans);
        setNavInfo(`Navigating to ${projNav.title}…`);
        speak(ans);
        setTimeout(() => router.push(`/projects/${projNav.id}`), 800);
        return;
      }

      // 2. Check for section scroll intent
      const secNav = detectSectionNavigation(q);
      if (secNav) {
        const ans = `Scrolling to the ${secNav.label}.`;
        setReply(ans);
        setNavInfo(`Scrolling to ${secNav.label}…`);
        speak(ans);
        setTimeout(() => {
          const el = document.getElementById(secNav.sectionId);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 600);
        return;
      }

      // 3. General knowledge base answer
      const ans = findAnswer(q);
      setReply(ans);
      speak(ans);
    }, 400);
  }, [router, speak]);

  const listen = useCallback(() => {
    const SpeechRecog = getSpeechRecog();
    if (!SpeechRecog) return;
    window.speechSynthesis.cancel();
    const recog = new SpeechRecog();
    recog.lang = "en-US";
    recog.interimResults = false;
    recog.maxAlternatives = 1;
    recog.onstart  = () => { setState("listening"); setTranscript(""); setReply(""); setNavInfo(null); };
    recog.onresult = (e: ISpeechRecognitionEvent) => {
      const q = e.results[0][0].transcript;
      setTranscript(q);
      processQuery(q);
    };
    recog.onerror  = () => setState("idle");
    recog.onend    = () => { if (state === "listening") setState("idle"); };
    recogRef.current = recog;
    recog.start();
  }, [processQuery, state]);

  const stop = useCallback(() => {
    recogRef.current?.stop();
    window.speechSynthesis.cancel();
    setState("idle");
  }, []);

  useEffect(() => () => { recogRef.current?.stop(); window.speechSynthesis.cancel(); }, []);

  const stateLabel: Record<AgentState, string> = {
    idle:      "Tap the mic to ask me anything",
    listening: "Listening…",
    thinking:  "Thinking…",
    speaking:  "Speaking…",
  };

  const SUGGESTIONS = [
    "Introduce Naren",
    "Show me CRIMSON",
    "What are your skills?",
    "Show me SPManager",
    "Tell me about experience",
    "Go to Contact section",
  ];

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => { setOpen(o => !o); if (state !== "idle") stop(); }}
        aria-label="Open voice assistant"
        style={{
          position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 9000,
          width: "3.25rem", height: "3.25rem", borderRadius: "9999px",
          backgroundColor: "#1d1d1f", color: "#ffffff", border: "none",
          cursor: "pointer", display: "flex", alignItems: "center",
          justifyContent: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="4" x2="14" y2="14" /><line x1="14" y1="4" x2="4" y2="14" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="3" width="6" height="11" rx="3" />
            <path d="M5 10a7 7 0 0 0 14 0" />
            <line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
          </svg>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div style={{
          position: "fixed", bottom: "5.5rem", right: "1.5rem", zIndex: 9000,
          width: "clamp(290px, 92vw, 380px)",
          backgroundColor: "#ffffff", border: "1px solid #d2d2d7",
          borderRadius: "1.25rem", boxShadow: "0 8px 40px rgba(0,0,0,0.14)",
          overflow: "hidden", display: "flex", flexDirection: "column",
        }}>
          {/* Header */}
          <div style={{
            padding: "1rem 1.25rem", borderBottom: "1px solid #f0f0f0",
            display: "flex", alignItems: "center", gap: "0.625rem",
          }}>
            <div style={{
              width: "2rem", height: "2rem", borderRadius: "9999px",
              backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="3" width="6" height="11" rx="3" />
                <path d="M5 10a7 7 0 0 0 14 0" />
                <line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
              </svg>
            </div>
            <div>
              <p style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "0.875rem", fontWeight: 700, color: "#1d1d1f" }}>
                Naren&apos;s Assistant
              </p>
              <p style={{ margin: 0, fontSize: "0.6875rem", color: "#86868b", fontFamily: "var(--font-heading)" }}>
                Ask anything · Navigate anywhere
              </p>
            </div>
          </div>

          {/* Body */}
          <div style={{
            padding: "1.25rem", flex: 1, display: "flex",
            flexDirection: "column", gap: "0.875rem", minHeight: "160px",
          }}>
            {!supported && (
              <p style={{ fontSize: "0.8125rem", color: "#d93025", fontFamily: "var(--font-body)" }}>
                Your browser doesn&apos;t support Web Speech API. Try Chrome or Edge.
              </p>
            )}

            {supported && (
              <>
                {/* State indicator */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Waveform active={state === "listening" || state === "speaking"} />
                  <span style={{
                    fontSize: "0.8125rem", fontWeight: 500,
                    color: state === "idle" ? "#86868b" : "#1d1d1f",
                    fontFamily: "var(--font-heading)", transition: "color 0.2s ease",
                  }}>
                    {stateLabel[state]}
                  </span>
                </div>

                {/* Navigation badge */}
                {navInfo && (
                  <div style={{
                    display: "flex", alignItems: "center", gap: "0.5rem",
                    padding: "0.5rem 0.875rem",
                    backgroundColor: "#f0f7ff", border: "1px solid #bfdbfe",
                    borderRadius: "0.625rem",
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0066cc" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#0066cc", fontFamily: "var(--font-heading)" }}>
                      {navInfo}
                    </span>
                  </div>
                )}

                {/* Transcript */}
                {transcript && (
                  <div style={{
                    padding: "0.75rem", backgroundColor: "#f5f5f7",
                    borderRadius: "0.75rem", fontSize: "0.8125rem",
                    color: "#515154", fontFamily: "var(--font-body)", lineHeight: 1.5,
                  }}>
                    <span style={{
                      fontSize: "0.625rem", fontWeight: 700, color: "#86868b",
                      textTransform: "uppercase", letterSpacing: "0.06em",
                      display: "block", marginBottom: "0.25rem", fontFamily: "var(--font-heading)",
                    }}>You said</span>
                    {transcript}
                  </div>
                )}

                {/* Reply */}
                {reply && (
                  <div style={{
                    padding: "0.75rem", backgroundColor: "#1d1d1f",
                    borderRadius: "0.75rem", fontSize: "0.8125rem",
                    color: "#ffffff", fontFamily: "var(--font-body)",
                    lineHeight: 1.6, maxHeight: "150px", overflowY: "auto",
                  }}>
                    <span style={{
                      fontSize: "0.625rem", fontWeight: 700, color: "#86868b",
                      textTransform: "uppercase", letterSpacing: "0.06em",
                      display: "block", marginBottom: "0.25rem", fontFamily: "var(--font-heading)",
                    }}>Answer</span>
                    {reply}
                  </div>
                )}

                {/* Suggestions */}
                {state === "idle" && !transcript && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                    {SUGGESTIONS.map(s => (
                      <button
                        key={s}
                        onClick={() => { setTranscript(s); processQuery(s); }}
                        style={{
                          padding: "0.3125rem 0.75rem", borderRadius: "9999px",
                          backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
                          fontSize: "0.6875rem", fontWeight: 500, color: "#515154",
                          cursor: "pointer", fontFamily: "var(--font-heading)",
                          transition: "border-color 0.15s ease",
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#1d1d1f"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#d2d2d7"; }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer */}
          {supported && (
            <div style={{
              padding: "0.875rem 1.25rem", borderTop: "1px solid #f0f0f0",
              display: "flex", gap: "0.625rem", alignItems: "center",
            }}>
              {state === "listening" || state === "speaking" ? (
                <button
                  onClick={stop}
                  style={{
                    flex: 1, padding: "0.625rem", borderRadius: "9999px",
                    backgroundColor: "#d93025", color: "#ffffff", border: "none",
                    cursor: "pointer", fontSize: "0.8125rem", fontWeight: 600,
                    fontFamily: "var(--font-heading)", display: "flex",
                    alignItems: "center", justifyContent: "center", gap: "0.375rem",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                  </svg>
                  Stop
                </button>
              ) : (
                <button
                  onClick={listen}
                  disabled={state === "thinking"}
                  style={{
                    flex: 1, padding: "0.625rem", borderRadius: "9999px",
                    backgroundColor: state === "thinking" ? "#f5f5f7" : "#1d1d1f",
                    color: state === "thinking" ? "#86868b" : "#ffffff",
                    border: "none", cursor: state === "thinking" ? "default" : "pointer",
                    fontSize: "0.8125rem", fontWeight: 600,
                    fontFamily: "var(--font-heading)", display: "flex",
                    alignItems: "center", justifyContent: "center", gap: "0.375rem",
                    transition: "background-color 0.2s ease",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="3" width="6" height="11" rx="3" />
                    <path d="M5 10a7 7 0 0 0 14 0" />
                    <line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
                  </svg>
                  {state === "thinking" ? "Thinking…" : "Ask a question"}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
