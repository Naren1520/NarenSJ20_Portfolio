/**
 * data/projectDetails.level1.ts
 * ─────────────────────────────────────────────────────────
 * Level 1 — Basic / small projects.
 * Minimal premium page: Hero → Features → Tech → Screenshots → GitHub CTA
 *
 * Add every Basic-difficulty project here.
 * Key = project id from data/projects.ts
 */
import type { Level1Detail } from "@/lib/projectDetail";

export const level1Details: Record<string, Level1Detail> = {

  "weather-app": {
    level: 1,
    tagline: "Real-time weather at a glance.",
    heroImage: "https://images.unsplash.com/photo-1705077031869-51b60754302a?w=1400&q=85",
    features: [
      {
        icon: "map-pin",
        title: "Location-Based Forecast",
        description: "Detects your location via the Geolocation API and fetches current conditions instantly.",
      },
      {
        icon: "calendar",
        title: "5-Day Forecast",
        description: "Extended forecast with daily high/low temperatures and weather condition icons.",
      },
      {
        icon: "zap",
        title: "Live Data",
        description: "Pulls fresh data from the OpenWeather API on every load — always up to date.",
      },
      {
        icon: "smartphone",
        title: "Responsive UI",
        description: "Works across desktop, tablet, and mobile with a clean card-based layout.",
      },
    ],
    techStack: [
      { name: "JavaScript",      category: "Frontend" },
      { name: "HTML5",           category: "Frontend" },
      { name: "CSS3",            category: "Frontend" },
      { name: "OpenWeather API", category: "API" },
      { name: "Geolocation API", category: "Browser API" },
      { name: "Vercel",          category: "Deployment" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1705077031869-51b60754302a?w=1200&q=80",
        alt: "Weather app main screen",
        caption: "Current conditions dashboard",
      },
      {
        src: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
        alt: "5-day forecast view",
        caption: "Extended forecast panel",
      },
    ],
    githubCta: "Built from idea to working product — Explore the code",
  },

  "qr-code-generator": {
    level: 1,
    tagline: "Generate QR codes for anything, instantly.",
    heroImage: "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?w=1400&q=85",
    features: [
      {
        icon: "link",
        title: "URL & Text QR Codes",
        description: "Generate QR codes for URLs, plain text, email addresses, and more in one click.",
      },
      {
        icon: "download",
        title: "One-Click Download",
        description: "Download the generated QR code as a high-resolution PNG instantly.",
      },
      {
        icon: "palette",
        title: "Custom Sizes",
        description: "Choose from multiple size options to fit print or digital use cases.",
      },
    ],
    techStack: [
      { name: "JavaScript", category: "Frontend" },
      { name: "HTML5",      category: "Frontend" },
      { name: "CSS3",       category: "Frontend" },
      { name: "QR Library", category: "Library" },
      { name: "Canvas API", category: "Browser API" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?w=1200&q=80",
        alt: "QR Code Generator",
        caption: "QR code generation interface",
      },
    ],
    githubCta: "Simple utility, clean code — Explore the source",
  },

  "password-generator": {
    level: 1,
    tagline: "Strong passwords, zero effort.",
    heroImage: "https://images.unsplash.com/photo-1603985529862-9e12198c9a60?w=1400&q=85",
    features: [
      {
        icon: "lock",
        title: "Customisable Rules",
        description: "Set length, include/exclude uppercase, numbers, and symbols.",
      },
      {
        icon: "activity",
        title: "Strength Meter",
        description: "Visual indicator shows password strength as you adjust settings.",
      },
      {
        icon: "clipboard",
        title: "Copy to Clipboard",
        description: "One-click copy so you never have to type the password manually.",
      },
    ],
    techStack: [
      { name: "JavaScript", category: "Frontend" },
      { name: "HTML5",      category: "Frontend" },
      { name: "CSS3",       category: "Frontend" },
      { name: "Crypto API", category: "Browser API" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1603985529862-9e12198c9a60?w=1200&q=80",
        alt: "Password Generator UI",
        caption: "Password generator with strength meter",
      },
    ],
    githubCta: "Security utility built from scratch — View the code",
  },

  "analog-clock": {
    level: 1,
    tagline: "The classic, reimagined in canvas.",
    heroImage: "https://images.unsplash.com/photo-1711294545098-2f6b046a7ef4?w=1400&q=85",
    features: [
      {
        icon: "clock",
        title: "Smooth Animations",
        description: "60fps canvas rendering with smooth hand sweep for a premium feel.",
      },
      {
        icon: "zap",
        title: "Real-Time Updates",
        description: "Syncs to system time and updates every second without page refresh.",
      },
      {
        icon: "palette",
        title: "Clean Design",
        description: "Minimal dial design with no unnecessary UI clutter.",
      },
    ],
    techStack: [
      { name: "JavaScript",   category: "Frontend" },
      { name: "HTML5 Canvas", category: "Frontend" },
      { name: "CSS3",         category: "Frontend" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1711294545098-2f6b046a7ef4?w=1200&q=80",
        alt: "Analog Clock",
        caption: "Canvas-rendered analog clock",
      },
    ],
    githubCta: "Pure canvas, no libraries — Explore the code",
  },

  "tic-tac-toe": {
    level: 1,
    tagline: "Classic game, modern interface.",
    heroImage: "https://images.unsplash.com/photo-1627024037944-be4b339ce4f1?w=1400&q=85",
    features: [
      {
        icon: "play",
        title: "Two-Player Mode",
        description: "Play against a friend locally on the same device.",
      },
      {
        icon: "bot",
        title: "AI Opponent",
        description: "Challenge the built-in AI that plays optimally using minimax logic.",
      },
      {
        icon: "bar-chart",
        title: "Score Tracking",
        description: "Keeps a running score across multiple rounds until you reset.",
      },
    ],
    techStack: [
      { name: "JavaScript", category: "Frontend" },
      { name: "HTML5",      category: "Frontend" },
      { name: "CSS3",       category: "Frontend" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1627024037944-be4b339ce4f1?w=1200&q=80",
        alt: "Tic-Tac-Toe game",
        caption: "In-game view with score tracker",
      },
    ],
  },

  "stopwatch": {
    level: 1,
    tagline: "Precise timing, clean interface.",
    heroImage: "https://images.unsplash.com/photo-1600683159910-9230bb2ecce3?w=1400&q=85",
    features: [
      {
        icon: "play",
        title: "Start / Stop / Reset",
        description: "Three-button control for full timing flow.",
      },
      {
        icon: "target",
        title: "Lap Timing",
        description: "Record laps without stopping the main timer.",
      },
      {
        icon: "layout",
        title: "Clean Display",
        description: "Large, readable time display with millisecond precision.",
      },
    ],
    techStack: [
      { name: "JavaScript", category: "Frontend" },
      { name: "HTML5",      category: "Frontend" },
      { name: "CSS3",       category: "Frontend" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1600683159910-9230bb2ecce3?w=1200&q=80",
        alt: "Stopwatch UI",
        caption: "Stopwatch with lap timing",
      },
    ],
  },

  "e-dictionary": {
    level: 1,
    tagline: "Words and meanings, instantly.",
    heroImage: "https://images.unsplash.com/photo-1712732581664-7c8c1a4ab4b6?w=1400&q=85",
    features: [
      {
        icon: "search",
        title: "Instant Search",
        description: "Look up any English word with definitions, phonetics, and part of speech.",
      },
      {
        icon: "mic",
        title: "Pronunciation",
        description: "Audio pronunciation via the Free Dictionary API.",
      },
      {
        icon: "database",
        title: "Word History",
        description: "Recently searched words saved in local storage for quick re-access.",
      },
    ],
    techStack: [
      { name: "JavaScript",     category: "Frontend" },
      { name: "HTML5",          category: "Frontend" },
      { name: "CSS3",           category: "Frontend" },
      { name: "Dictionary API", category: "API" },
      { name: "Local Storage",  category: "Browser API" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1712732581664-7c8c1a4ab4b6?w=1200&q=80",
        alt: "E-Dictionary UI",
        caption: "Word search with definition and pronunciation",
      },
    ],
  },

  "currency-converter": {
    level: 1,
    tagline: "Live exchange rates, zero friction.",
    heroImage: "https://images.unsplash.com/photo-1680762556240-14bf288eb05e?w=1400&q=85",
    features: [
      {
        icon: "refresh-cw",
        title: "Live Rates",
        description: "Fetches real-time exchange rates from a public currency API.",
      },
      {
        icon: "globe",
        title: "150+ Currencies",
        description: "Supports all major world currencies with accurate conversion.",
      },
      {
        icon: "repeat",
        title: "Swap Currencies",
        description: "One-click swap between source and target currencies.",
      },
    ],
    techStack: [
      { name: "JavaScript",   category: "Frontend" },
      { name: "HTML5",        category: "Frontend" },
      { name: "CSS3",         category: "Frontend" },
      { name: "Currency API", category: "API" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1680762556240-14bf288eb05e?w=1200&q=80",
        alt: "Currency Converter",
        caption: "Live currency conversion interface",
      },
    ],
  },

  "notes-app": {
    level: 1,
    tagline: "Your thoughts, always with you.",
    heroImage: "https://images.unsplash.com/photo-1636014708703-36477b887ee4?w=1400&q=85",
    features: [
      {
        icon: "edit",
        title: "Rich Text Editing",
        description: "Supports bold, italic, lists, and basic markdown formatting.",
      },
      {
        icon: "search",
        title: "Search Notes",
        description: "Instantly filter through all your notes by keyword.",
      },
      {
        icon: "server",
        title: "Offline Storage",
        description: "Notes persist in localStorage — no account, no server required.",
      },
    ],
    techStack: [
      { name: "JavaScript",    category: "Frontend" },
      { name: "HTML5",         category: "Frontend" },
      { name: "CSS3",          category: "Frontend" },
      { name: "Local Storage", category: "Browser API" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1636014708703-36477b887ee4?w=1200&q=80",
        alt: "Notes App",
        caption: "Note list and editor",
      },
    ],
  },

  "typing-speed-checker": {
    level: 1,
    tagline: "Measure your typing. Improve your speed.",
    heroImage: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1400&q=85",
    features: [
      {
        icon: "terminal",
        title: "Real-Time WPM",
        description: "Words-per-minute calculated live as you type.",
      },
      {
        icon: "check-circle",
        title: "Accuracy Tracking",
        description: "Percentage accuracy shown alongside speed for full performance insight.",
      },
      {
        icon: "trending-up",
        title: "Session History",
        description: "Best scores stored locally so you can track improvement over time.",
      },
    ],
    techStack: [
      { name: "JavaScript", category: "Frontend" },
      { name: "HTML5",      category: "Frontend" },
      { name: "CSS3",       category: "Frontend" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&q=80",
        alt: "Typing Speed Checker",
        caption: "Live WPM and accuracy test",
      },
    ],
  },

  "piano": {
    level: 1,
    tagline: "Play music right in your browser.",
    heroImage: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1400&q=85",
    features: [
      {
        icon: "music",
        title: "Keyboard Playable",
        description: "Map computer keyboard keys to piano keys for hands-on play.",
      },
      {
        icon: "eye",
        title: "Click to Play",
        description: "Click any key on screen to hear the corresponding note.",
      },
      {
        icon: "activity",
        title: "Accurate Sound",
        description: "Web Audio API ensures precise, low-latency note playback.",
      },
    ],
    techStack: [
      { name: "HTML5",         category: "Frontend" },
      { name: "CSS3",          category: "Frontend" },
      { name: "JavaScript",    category: "Frontend" },
      { name: "Web Audio API", category: "Browser API" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1200&q=80",
        alt: "Browser Piano",
        caption: "Interactive piano keyboard",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     SIMPLE CALCULATOR
  ══════════════════════════════════════════════════════════ */
  "simple-calculator": {
    level: 1,
    tagline: "Arithmetic done right, in the browser.",
    heroImage: "https://images.unsplash.com/photo-1711344397160-b23d5deaa012?w=1400&q=85",
    features: [
      {
        icon: "layout",
        title: "Clean Button Grid",
        description: "Numeric keypad and operators laid out in the standard calculator pattern — instantly familiar, no learning curve.",
      },
      {
        icon: "terminal",
        title: "Keyboard Support",
        description: "Full keyboard input — type numbers and operators directly, hit Enter to evaluate. No mouse required.",
      },
      {
        icon: "activity",
        title: "Expression Display",
        description: "Live expression display shows the full current input before evaluation — no more guessing what you typed.",
      },
      {
        icon: "refresh-cw",
        title: "Clear & Backspace",
        description: "AC clears the full expression; backspace removes the last character — full editing control over your input.",
      },
    ],
    techStack: [
      { name: "JavaScript",        category: "Frontend" },
      { name: "HTML5",             category: "Frontend" },
      { name: "CSS3",              category: "Frontend" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1711344397160-b23d5deaa012?w=1200&q=80",
        alt: "Simple Calculator",
        caption: "Calculator with expression display and keyboard support",
      },
    ],
    githubCta: "Clean implementation, pure JavaScript — Explore the code",
  },

  /* ══════════════════════════════════════════════════════════
     ROCK PAPER SCISSORS
  ══════════════════════════════════════════════════════════ */
  "rock-paper-scissors": {
    level: 1,
    tagline: "The classic game, re-built for the web.",
    heroImage: "https://images.unsplash.com/photo-1614032686099-e648d6dea9b3?w=1400&q=85",
    features: [
      {
        icon: "play",
        title: "Instant Play",
        description: "Click your choice — Rock, Paper, or Scissors — and get the computer's response and result instantly.",
      },
      {
        icon: "bot",
        title: "Computer AI",
        description: "Cryptographically random computer choices via the Web Crypto API — no patterns, no cheating.",
      },
      {
        icon: "bar-chart",
        title: "Score Tracking",
        description: "Running score across rounds — wins, losses, draws — tracked until you reset the session.",
      },
      {
        icon: "activity",
        title: "Win/Loss Animation",
        description: "Animated result reveal — winning choice highlights with a smooth CSS transition for satisfying feedback.",
      },
    ],
    techStack: [
      { name: "JavaScript",    category: "Frontend" },
      { name: "HTML5",         category: "Frontend" },
      { name: "CSS3",          category: "Frontend" },
      { name: "Web Crypto API", category: "Browser API" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1614032686099-e648d6dea9b3?w=1200&q=80",
        alt: "Rock Paper Scissors game",
        caption: "Game interface with score tracker and animated result",
      },
    ],
    githubCta: "Game logic in pure JavaScript — Explore the code",
  },

  /* ══════════════════════════════════════════════════════════
     E-COOKING
  ══════════════════════════════════════════════════════════ */
  "e-cooking": {
    level: 1,
    tagline: "Every recipe, organised and searchable.",
    heroImage: "https://images.unsplash.com/photo-1589714379796-37d4bc8655c0?w=1400&q=85",
    features: [
      {
        icon: "search",
        title: "Recipe Search",
        description: "Search thousands of recipes by ingredient, cuisine, or dish name — powered by a public recipe API.",
      },
      {
        icon: "clipboard",
        title: "Step-by-Step Instructions",
        description: "Clear numbered cooking steps with ingredient quantities and timing — no scrolling through life stories to find the recipe.",
      },
      {
        icon: "activity",
        title: "Nutrition Info",
        description: "Calorie count and macro breakdown per serving displayed alongside every recipe.",
      },
      {
        icon: "star",
        title: "Save Favourites",
        description: "Save recipes to a local favourites list — persisted in localStorage, no sign-up required.",
      },
    ],
    techStack: [
      { name: "JavaScript",  category: "Frontend" },
      { name: "HTML5",       category: "Frontend" },
      { name: "CSS3",        category: "Frontend" },
      { name: "Recipe API",  category: "API" },
      { name: "Local Storage", category: "Browser API" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1589714379796-37d4bc8655c0?w=1200&q=80",
        alt: "E-Cooking app",
        caption: "Recipe search and step-by-step cooking guide",
      },
    ],
    githubCta: "Recipe app built with a real API — Explore the code",
  },

  /* ══════════════════════════════════════════════════════════
     SNAP SEARCH
  ══════════════════════════════════════════════════════════ */
  "snap-search": {
    level: 1,
    tagline: "Web search with instant results and no clutter.",
    heroImage: "https://images.unsplash.com/photo-1616469829718-0faf16324280?w=1400&q=85",
    features: [
      {
        icon: "search",
        title: "Instant Results",
        description: "Results appear as you type — debounced search queries fire on every keystroke pause for real-time discovery.",
      },
      {
        icon: "eye",
        title: "Clean Result Cards",
        description: "Results shown as clean title + snippet + source cards — no ads, no tracking, no noise.",
      },
      {
        icon: "clock",
        title: "Search History",
        description: "Last 10 searches stored locally — one click to re-run a previous query.",
      },
      {
        icon: "zap",
        title: "Keyboard Navigation",
        description: "Arrow keys navigate results, Enter opens the selected link — fully keyboard-driven search experience.",
      },
    ],
    techStack: [
      { name: "JavaScript",  category: "Frontend" },
      { name: "HTML5",       category: "Frontend" },
      { name: "CSS3",        category: "Frontend" },
      { name: "Search API",  category: "API" },
      { name: "Local Storage", category: "Browser API" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1616469829718-0faf16324280?w=1200&q=80",
        alt: "Snap Search",
        caption: "Real-time search results with history",
      },
    ],
    githubCta: "Search UI with instant results — Explore the code",
  },

  /* ══════════════════════════════════════════════════════════
     SGPA & CGPA CALCULATOR
  ══════════════════════════════════════════════════════════ */
  "sgpa-cgpa-calculator": {
    level: 1,
    tagline: "Your grades, calculated correctly every time.",
    heroImage: "https://images.unsplash.com/photo-1657550650283-2fba3a0123fa?w=1400&q=85",
    features: [
      {
        icon: "edit",
        title: "SGPA Calculator",
        description: "Enter subject grades and credit hours — SGPA calculated instantly using the weighted average formula.",
      },
      {
        icon: "trending-up",
        title: "CGPA Calculator",
        description: "Add semester SGPAs and credit totals across multiple semesters to compute cumulative GPA.",
      },
      {
        icon: "bar-chart",
        title: "Grade Visualisation",
        description: "Bar chart showing grade distribution across subjects — identify weak areas at a glance.",
      },
      {
        icon: "download",
        title: "Export Results",
        description: "Download your SGPA/CGPA summary as a formatted PDF for records or applications.",
      },
    ],
    techStack: [
      { name: "JavaScript",      category: "Frontend" },
      { name: "HTML5",           category: "Frontend" },
      { name: "CSS3",            category: "Frontend" },
      { name: "Form Validation", category: "Frontend" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1657550650283-2fba3a0123fa?w=1200&q=80",
        alt: "SGPA CGPA Calculator",
        caption: "Grade entry form with SGPA and CGPA output",
      },
    ],
    githubCta: "Academic calculator built from scratch — Explore the code",
  },

  /* ══════════════════════════════════════════════════════════
     LANGUAGE TRANSLATOR
  ══════════════════════════════════════════════════════════ */
  "language-translator": {
    level: 1,
    tagline: "Any language, instant translation.",
    heroImage: "https://images.unsplash.com/photo-1673515334893-2c20c91d0e93?w=1400&q=85",
    features: [
      {
        icon: "globe",
        title: "100+ Languages",
        description: "Translate between over 100 languages via a real-time translation API — from Afrikaans to Zulu.",
      },
      {
        icon: "zap",
        title: "Instant Translation",
        description: "Translation fires as you type — no submit button, no waiting. Results appear in under 500ms.",
      },
      {
        icon: "eye",
        title: "Language Detection",
        description: "Auto-detects the source language from your input — no need to specify what you're typing in.",
      },
      {
        icon: "repeat",
        title: "Swap Languages",
        description: "One-click swap between source and target languages — reverse a translation instantly.",
      },
    ],
    techStack: [
      { name: "JavaScript",        category: "Frontend" },
      { name: "HTML5",             category: "Frontend" },
      { name: "CSS3",              category: "Frontend" },
      { name: "Translation API",   category: "API" },
      { name: "Language Detection", category: "API" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1673515334893-2c20c91d0e93?w=1200&q=80",
        alt: "Language Translator",
        caption: "Real-time translation with auto language detection",
      },
    ],
    githubCta: "Multilingual translator built with a real API — Explore the code",
  },

  /* ══════════════════════════════════════════════════════════
     NEWYEAR 2026 WISHES
  ══════════════════════════════════════════════════════════ */
  "newyear-2026": {
    level: 1,
    tagline: "Ring in 2026 with a personalised wish.",
    heroImage: "https://images.unsplash.com/photo-1574875390940-63e9dd0e46e5?w=1400&q=85",
    features: [
      {
        icon: "clock",
        title: "Countdown Timer",
        description: "Live countdown to midnight on January 1st 2026 — days, hours, minutes, and seconds updating every second.",
      },
      {
        icon: "activity",
        title: "Fireworks Animation",
        description: "Canvas-rendered fireworks animation that fires at midnight — built with requestAnimationFrame for smooth 60fps playback.",
      },
      {
        icon: "edit",
        title: "Personalised Messages",
        description: "Enter a name to generate a personalised New Year wish — shareable as a screenshot or link.",
      },
      {
        icon: "smartphone",
        title: "Mobile Optimised",
        description: "Full-screen experience on mobile with touch-friendly controls and responsive countdown display.",
      },
    ],
    techStack: [
      { name: "React",        category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "JavaScript",   category: "Frontend" },
      { name: "Canvas API",   category: "Browser API" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1574875390940-63e9dd0e46e5?w=1200&q=80",
        alt: "NewYear 2026 app",
        caption: "Countdown timer with personalised wish and fireworks",
      },
    ],
    githubCta: "Celebration app with canvas animations — Explore the code",
  },
};
