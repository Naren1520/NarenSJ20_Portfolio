"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ── Knowledge base ─────────────────────────────────────────── */
const KB: { patterns: RegExp[]; answer: string }[] = [
  {
    patterns: [/who are you|who is naren|introduce|about you|tell me about/i],
    answer:
      "Hi! I'm Naren S J, an AI Engineer and Software Builder from Mangaluru, India. I build AI infrastructure, high-throughput systems, and full-stack software designed to solve hard problems at production scale. Feel free to ask me about my experience, projects, skills, or education.",
  },
  {
    patterns: [/experience|work|job|intern|career|professional/i],
    answer:
      "Naren has professional experience at three organisations. At Datavex AI, he worked as an AI/ML Engineering Intern from June to September 2024, building a 2D-to-3D CAD reconstruction pipeline using Gemini Vision and OpenCascade, reducing manual CAD modelling time by 60%. At Sahynex Tech Solutions, he was a Software Developer Intern from January to May 2024, developing platforms serving over 10,000 active users and achieving a 25% performance improvement. At ISDC, he served as Web Dev Lead from August 2023 to February 2026, mentoring 8 junior developers and shipping 5 production platforms. He is now Technical Head there, overseeing architecture across 10 or more production platforms.",
  },
  {
    patterns: [/datavex|cad|gemini|opencascade/i],
    answer:
      "At Datavex AI, Naren was an AI/ML Engineering Intern from June to September 2024. He built a 2D-to-3D CAD reconstruction pipeline using Gemini Vision for geometry interpretation and OpenCascade for parametric model generation. He deployed a FastAPI service handling model inference with sub-200 millisecond response times and reduced manual CAD modelling time by 60%.",
  },
  {
    patterns: [/sahynex|software developer|10k|10,000/i],
    answer:
      "At Sahynex Tech Solutions, Naren was a Software Developer Intern from January to May 2024. He developed and maintained platforms serving over 10,000 active users, achieved a 25% performance improvement through query optimisation and caching, and built reusable React component libraries used across three internal products.",
  },
  {
    patterns: [/isdc|web dev lead|technical head/i],
    answer:
      "At ISDC, Naren led the web development vertical as Web Dev Lead from August 2023 to February 2026, mentoring 8 junior developers and shipping 5 production platforms. He is now Technical Head, overseeing architecture and engineering standards across 10 or more production platforms, leading technical interviews and defining engineering standards for security, performance, and accessibility.",
  },
  {
    patterns: [/project|built|system|spmanager|crimson|votestack|alms/i],
    answer:
      "Naren has built over 48 projects. Notable ones include SPManager, an AI-powered project management platform with RAG-based context retrieval. CRIMSON, an AI-powered criminal network analysis platform using graph intelligence. ALMS, an AI-driven marketplace for artisans. VoteStack, a high-performance C++ voting system handling over 10,000 votes per second. And CampusLink, a platform connecting students, faculty and campus services. You can explore all projects in the portfolio.",
  },
  {
    patterns: [/skill|technology|stack|language|tool|tech/i],
    answer:
      "Naren's core skills span multiple domains. In AI and machine learning: Python, RAG, Generative AI, LLM integration, and computer vision. In full-stack development: React, Next.js, Node.js, and TypeScript. In systems programming: C, C++, and Rust. For databases: MongoDB, PostgreSQL, Redis, and Supabase. For cloud and DevOps: Docker, Kubernetes, AWS, Azure, and Cloudflare. He also works with blockchain technologies like Solidity, MetaMask, and Algorand.",
  },
  {
    patterns: [/education|college|degree|university|school|cgpa|grade/i],
    answer:
      "Naren is pursuing a Bachelor of Engineering in Information Science at Sahyadri College of Engineering and Management, Mangaluru. Before that, he completed his PUC from KVG Amarajyothi PU College with 94%, and his SSLC from Shree Raja Rajeshwari English Medium High School with an outstanding 98.8%.",
  },
  {
    patterns: [/achievement|award|win|hackathon|won|prize/i],
    answer:
      "Naren has over 7 major wins and hackathon awards. He won HackHarbor 3.0 with an AI-powered supply chain platform and won GDG TechSprint with a real-time disaster response system. He was a finalist at BuildForBillion and AWS AI Prompt Engineering Challenge. He also received the Best Innovative Project award at Versathon for a cryptographic offline payment protocol.",
  },
  {
    patterns: [/research|cryptograph|offline|payment|chip|hardware/i],
    answer:
      "Naren's research explores cryptographic offline payment protocols — systems where financial transactions can be verified and settled locally without network access while guaranteeing security against double-spend attacks. He also explores chip architecture and secure token verification using hardware security modules.",
  },
  {
    patterns: [/contact|email|phone|reach|hire|available/i],
    answer:
      "You can reach Naren at narensonu1520 at gmail dot com or call plus 91 82968 33381. He is based in Mangaluru, India and is open to remote and on-site opportunities globally. You can also find him on LinkedIn as narensj20 and on GitHub as Naren1520.",
  },
  {
    patterns: [/leetcode|codechef|competitive|coding/i],
    answer:
      "Naren has solved 98 problems on LeetCode, including 35 Easy, 54 Medium, and 9 Hard problems. On CodeChef he has solved 76 problems with 15 active days. He enjoys competitive programming as a way to sharpen algorithmic thinking.",
  },
  {
    patterns: [/volunteer|ieee|team challengers|builders/i],
    answer:
      "Naren is a Technical Committee Member at IEEE since January 2026. He also serves as Full Stack Engineer at Team Challengers, where he built the Aerophilia web platform serving 500 or more active users. Previously, he was elected Team Builders Captain at his PU college with 95% student support.",
  },
  {
    patterns: [/hello|hi|hey|good morning|good afternoon|good evening/i],
    answer:
      "Hello! I'm Naren's AI voice assistant. I can tell you about his professional experience, projects, skills, education, achievements, and more. What would you like to know?",
  },
  {
    patterns: [/thank|thanks|bye|goodbye/i],
    answer:
      "You're welcome! Feel free to explore the portfolio or reach out to Naren directly. Have a great day!",
  },
];

function findAnswer(query: string): string {
  for (const { patterns, answer } of KB) {
    if (patterns.some(p => p.test(query))) return answer;
  }
  return "I'm not sure about that. Try asking about Naren's experience, projects, skills, education, achievements, or how to contact him.";
}

/* ── Types ──────────────────────────────────────────────────── */
type AgentState = "idle" | "listening" | "thinking" | "speaking";

/* ── Waveform bars ──────────────────────────────────────────── */
function Waveform({ active }: { active: boolean }) {
  const heights = [1, 0.6, 0.9, 0.4, 0.75, 0.5, 0.85, 0.3, 0.7, 0.55];

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "3px", height: "24px" }}>
      <style>{`
        @keyframes va-wave-0 { 0%,100%{transform:scaleY(0.4)} 50%{transform:scaleY(1)} }
        @keyframes va-wave-1 { 0%,100%{transform:scaleY(0.7)} 50%{transform:scaleY(0.3)} }
        @keyframes va-wave-2 { 0%,100%{transform:scaleY(1)}   50%{transform:scaleY(0.5)} }
        @keyframes va-wave-3 { 0%,100%{transform:scaleY(0.5)} 50%{transform:scaleY(0.9)} }
        ${heights.map((_, i) => `
          .va-bar-${i} {
            animation: va-wave-${i % 4} 0.8s ease-in-out ${(i * 0.07).toFixed(2)}s infinite;
          }
        `).join("")}
      `}</style>
      {heights.map((h, i) => (
        <div
          key={i}
          className={active ? `va-bar-${i}` : undefined}
          style={{
            width: "3px",
            borderRadius: "9999px",
            backgroundColor: active ? "#0066cc" : "#d2d2d7",
            height: `${h * 24}px`,
            transition: "background-color 0.3s ease",
          }}
        />
      ))}
    </div>
  );
}

/* ── Browser speech type helpers ── */
interface ISpeechRecognition {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  onstart:  (() => void) | null;
  onresult: ((e: ISpeechRecognitionEvent) => void) | null;
  onerror:  (() => void) | null;
  onend:    (() => void) | null;
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

/* ── Main component ─────────────────────────────────────────── */
export default function VoiceAgent() {
  const [open,       setOpen]       = useState(false);
  const [state,      setState]      = useState<AgentState>("idle");
  const [transcript, setTranscript] = useState("");
  const [reply,      setReply]      = useState("");
  const [supported,  setSupported]  = useState(true);

  const recogRef  = useRef<ISpeechRecognition | null>(null);
  const synthRef  = useRef<SpeechSynthesisUtterance | null>(null);

  /* Check browser support */
  useEffect(() => {
    if (!getSpeechRecog() || !window.speechSynthesis) setSupported(false);
  }, []);

  const speak = useCallback((text: string) => {
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.rate  = 0.92;   // slightly slower — clearer, warmer
    utt.pitch = 1.15;   // a touch higher — feminine, bright
    utt.lang  = "en-GB"; // British English — polished accent

    const setVoiceAndSpeak = () => {
      const voices = window.speechSynthesis.getVoices();

      /* Priority list — best female voices across browsers/OS */
      const preferred =
        voices.find(v => v.name === "Samantha")                          // macOS / iOS — very natural
        ?? voices.find(v => v.name === "Google UK English Female")       // Chrome on Windows/Android
        ?? voices.find(v => v.name === "Microsoft Aria Online (Natural) - English (United States)") // Edge
        ?? voices.find(v => v.name === "Microsoft Zira - English (United States)") // Windows fallback
        ?? voices.find(v => v.name === "Karen")                          // macOS Australian
        ?? voices.find(v => v.name === "Moira")                          // macOS Irish
        ?? voices.find(v => /female|woman/i.test(v.name) && /en[-_]/i.test(v.lang))
        ?? voices.find(v => /en[-_](GB|AU|US|IE)/i.test(v.lang) && v.name.toLowerCase().includes("female"))
        ?? voices.find(v => /en[-_]/i.test(v.lang));                     // any English as last resort

      if (preferred) utt.voice = preferred;

      utt.onstart = () => setState("speaking");
      utt.onend   = () => setState("idle");
      utt.onerror = () => setState("idle");

      synthRef.current = utt;
      window.speechSynthesis.speak(utt);
    };

    // Voices may not be loaded yet on first call — wait for them
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      setVoiceAndSpeak();
    } else {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.onvoiceschanged = null;
        setVoiceAndSpeak();
      };
    }
  }, []);

  const listen = useCallback(() => {
    const SpeechRecog = getSpeechRecog();
    if (!SpeechRecog) return;

    window.speechSynthesis.cancel();
    const recog = new SpeechRecog();
    recog.lang           = "en-US";
    recog.interimResults = false;
    recog.maxAlternatives = 1;

    recog.onstart  = () => { setState("listening"); setTranscript(""); setReply(""); };
    recog.onresult = (e: ISpeechRecognitionEvent) => {
      const q = e.results[0][0].transcript;
      setTranscript(q);
      setState("thinking");
      setTimeout(() => {
        const ans = findAnswer(q);
        setReply(ans);
        speak(ans);
      }, 400);
    };
    recog.onerror  = () => setState("idle");
    recog.onend    = () => { if (state === "listening") setState("idle"); };

    recogRef.current = recog;
    recog.start();
  }, [speak, state]);

  const stop = useCallback(() => {
    recogRef.current?.stop();
    window.speechSynthesis.cancel();
    setState("idle");
  }, []);

  /* Cleanup on unmount */
  useEffect(() => () => {
    recogRef.current?.stop();
    window.speechSynthesis.cancel();
  }, []);

  const stateLabel: Record<AgentState, string> = {
    idle:      "Tap the mic to ask me anything",
    listening: "Listening…",
    thinking:  "Thinking…",
    speaking:  "Speaking…",
  };

  return (
    <>
      {/* ── Floating trigger button ── */}
      <button
        onClick={() => { setOpen(o => !o); if (state !== "idle") stop(); }}
        aria-label="Open voice assistant"
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 9000,
          width: "3.25rem",
          height: "3.25rem",
          borderRadius: "9999px",
          backgroundColor: "#1d1d1f",
          color: "#ffffff",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
      >
        {open ? (
          /* X icon */
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="4" x2="14" y2="14" />
            <line x1="14" y1="4" x2="4" y2="14" />
          </svg>
        ) : (
          /* Mic icon */
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="3" width="6" height="11" rx="3" />
            <path d="M5 10a7 7 0 0 0 14 0" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
        )}
      </button>

      {/* ── Panel ── */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "5.5rem",
            right: "1.5rem",
            zIndex: 9000,
            width: "clamp(280px, 90vw, 360px)",
            backgroundColor: "#ffffff",
            border: "1px solid #d2d2d7",
            borderRadius: "1.25rem",
            boxShadow: "0 8px 40px rgba(0,0,0,0.14)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <div style={{
            padding: "1rem 1.25rem",
            borderBottom: "1px solid #f0f0f0",
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
          }}>
            <div style={{
              width: "2rem", height: "2rem",
              borderRadius: "9999px",
              backgroundColor: "#f5f5f7",
              border: "1px solid #d2d2d7",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="3" width="6" height="11" rx="3" />
                <path d="M5 10a7 7 0 0 0 14 0" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
              </svg>
            </div>
            <div>
              <p style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "0.875rem", fontWeight: 700, color: "#1d1d1f" }}>
                Naren&apos;s Assistant
              </p>
              <p style={{ margin: 0, fontSize: "0.6875rem", color: "#86868b", fontFamily: "var(--font-heading)" }}>
                Voice Agent
              </p>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", gap: "1rem", minHeight: "160px" }}>

            {!supported && (
              <p style={{ fontSize: "0.8125rem", color: "#d93025", fontFamily: "var(--font-body)" }}>
                Your browser doesn&apos;t support the Web Speech API. Try Chrome or Edge.
              </p>
            )}

            {supported && (
              <>
                {/* State indicator */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Waveform active={state === "listening" || state === "speaking"} />
                  <span style={{
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: state === "idle" ? "#86868b" : "#1d1d1f",
                    fontFamily: "var(--font-heading)",
                    transition: "color 0.2s ease",
                  }}>
                    {stateLabel[state]}
                  </span>
                </div>

                {/* Transcript */}
                {transcript && (
                  <div style={{
                    padding: "0.75rem",
                    backgroundColor: "#f5f5f7",
                    borderRadius: "0.75rem",
                    fontSize: "0.8125rem",
                    color: "#515154",
                    fontFamily: "var(--font-body)",
                    lineHeight: 1.5,
                  }}>
                    <span style={{ fontSize: "0.625rem", fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "0.25rem", fontFamily: "var(--font-heading)" }}>
                      You asked
                    </span>
                    {transcript}
                  </div>
                )}

                {/* Reply */}
                {reply && (
                  <div style={{
                    padding: "0.75rem",
                    backgroundColor: "#1d1d1f",
                    borderRadius: "0.75rem",
                    fontSize: "0.8125rem",
                    color: "#ffffff",
                    fontFamily: "var(--font-body)",
                    lineHeight: 1.6,
                    maxHeight: "140px",
                    overflowY: "auto",
                  }}>
                    <span style={{ fontSize: "0.625rem", fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "0.25rem", fontFamily: "var(--font-heading)" }}>
                      Answer
                    </span>
                    {reply}
                  </div>
                )}

                {/* Suggestions */}
                {state === "idle" && !transcript && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                    {["Tell me about experience", "What projects did you build?", "What are your skills?", "How to contact you?"].map(s => (
                      <button
                        key={s}
                        onClick={() => {
                          setTranscript(s);
                          setState("thinking");
                          setTimeout(() => {
                            const ans = findAnswer(s);
                            setReply(ans);
                            speak(ans);
                          }, 400);
                        }}
                        style={{
                          padding: "0.3125rem 0.75rem",
                          borderRadius: "9999px",
                          backgroundColor: "#f5f5f7",
                          border: "1px solid #d2d2d7",
                          fontSize: "0.6875rem",
                          fontWeight: 500,
                          color: "#515154",
                          cursor: "pointer",
                          fontFamily: "var(--font-heading)",
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

          {/* Footer — mic / stop */}
          {supported && (
            <div style={{
              padding: "0.875rem 1.25rem",
              borderTop: "1px solid #f0f0f0",
              display: "flex",
              gap: "0.625rem",
              alignItems: "center",
            }}>
              {state === "listening" || state === "speaking" ? (
                <button
                  onClick={stop}
                  style={{
                    flex: 1,
                    padding: "0.625rem",
                    borderRadius: "9999px",
                    backgroundColor: "#d93025",
                    color: "#ffffff",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    fontFamily: "var(--font-heading)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.375rem",
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
                    flex: 1,
                    padding: "0.625rem",
                    borderRadius: "9999px",
                    backgroundColor: state === "thinking" ? "#f5f5f7" : "#1d1d1f",
                    color: state === "thinking" ? "#86868b" : "#ffffff",
                    border: "none",
                    cursor: state === "thinking" ? "default" : "pointer",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    fontFamily: "var(--font-heading)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.375rem",
                    transition: "background-color 0.2s ease",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="3" width="6" height="11" rx="3" />
                    <path d="M5 10a7 7 0 0 0 14 0" />
                    <line x1="12" y1="19" x2="12" y2="23" />
                    <line x1="8" y1="23" x2="16" y2="23" />
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
