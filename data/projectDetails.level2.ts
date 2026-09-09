/**
 * data/projectDetails.level2.ts
 * ─────────────────────────────────────────────────────────
 * Level 2 — Intermediate / good projects.
 * Full technical case study:
 * Hero → Problem → Solution → Features → Architecture → Tech → Challenges → Screenshots → CTA
 *
 * Add every Intermediate-difficulty project here.
 * Key = project id from data/projects.ts
 */
import type { Level2Detail } from "@/lib/projectDetail";

export const level2Details: Record<string, Level2Detail> = {

  "taskmatrix": {
    level: 2,
    tagline: "Project management that actually works.",
    overview:
      "TaskMatrix is a full-stack task management platform built with React, Node.js and MongoDB. It supports real-time collaboration, drag-and-drop boards, and detailed progress analytics — all in a clean, distraction-free interface.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=85",
    problem:
      "Most task managers are either too simple (sticky notes, basic todos) or too bloated (Jira, ClickUp) for small teams and solo developers. There's a gap for something that's powerful but doesn't require a 30-minute setup.",
    solution:
      "TaskMatrix gives you Kanban boards, priority queues, team assignment, and real-time sync — all in a single-page app that loads in under 2 seconds. Everything is keyboard-accessible and mobile-friendly.",
    features: [
      {
        icon: "layers",
        title: "Kanban Boards",
        description:
          "Drag-and-drop cards across columns — Backlog, In Progress, Review, Done. State persists in real-time across all connected users.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
      },
      {
        icon: "users",
        title: "Team Assignment",
        description:
          "Assign tasks to team members, set due dates, and attach priority labels. Instant email notifications on assignment.",
      },
      {
        icon: "bar-chart",
        title: "Progress Analytics",
        description:
          "Visual burndown charts, completion rates by team member, and weekly velocity tracking.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      },
      {
        icon: "refresh-cw",
        title: "Real-Time Sync",
        description:
          "Built on Socket.io — all board updates propagate to every connected client within 50ms.",
      },
    ],
    architecture: [
      { layer: "Frontend",   tech: "React + TypeScript", role: "SPA with component-level state, Socket.io client" },
      { layer: "Backend",    tech: "Node.js + Express",  role: "REST API + WebSocket server" },
      { layer: "Database",   tech: "MongoDB Atlas",      role: "Task, user, and board storage with indexed queries" },
      { layer: "Real-Time",  tech: "Socket.io",          role: "Bidirectional event bus for live board updates" },
      { layer: "Auth",       tech: "JWT + bcrypt",        role: "Stateless token auth with hashed passwords" },
      { layer: "Deployment", tech: "Vercel + Railway",   role: "Frontend on Vercel edge, backend on Railway" },
    ],
    techStack: [
      { name: "React",       category: "Frontend" },
      { name: "TypeScript",  category: "Frontend" },
      { name: "Node.js",     category: "Backend" },
      { name: "Express",     category: "Backend" },
      { name: "MongoDB",     category: "Database" },
      { name: "Socket.io",   category: "Real-Time" },
      { name: "JWT",         category: "Auth" },
      { name: "Vercel",      category: "Deployment" },
    ],
    challenges: [
      {
        challenge: "Real-time updates conflicting when two users edit the same task simultaneously.",
        solution:  "Optimistic UI with server-side conflict resolution — last-write-wins with a timestamp diff check.",
      },
      {
        challenge: "Drag-and-drop reorder causing O(n) DB writes on every move.",
        solution:  "Switched to fractional indexing — only the moved card's order value is updated.",
      },
      {
        challenge: "JWT tokens not expiring on the client after server-side invalidation.",
        solution:  "Added a token blocklist in Redis with a 15-minute TTL, checked on every protected route.",
      },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
        alt: "TaskMatrix kanban board",
        caption: "Main Kanban workspace",
      },
      {
        src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
        alt: "Analytics dashboard",
        caption: "Team velocity and progress charts",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        alt: "Task detail modal",
        caption: "Task detail with assignment and history",
      },
    ],
  },

  "live-code-editor": {
    level: 2,
    tagline: "Write code. See results. No setup.",
    overview:
      "A browser-based live code editor supporting HTML, CSS and JavaScript with real-time preview, syntax highlighting, and error detection — no installation required.",
    heroImage: "https://images.unsplash.com/photo-1568716353609-12ddc5c67f04?w=1400&q=85",
    problem:
      "Getting started with web development often means installing VS Code, configuring extensions, and setting up a local server. This is a barrier for beginners and too slow for quick experiments.",
    solution:
      "A zero-install browser editor that compiles and previews HTML/CSS/JS live as you type. The whole experience loads in under a second.",
    features: [
      {
        icon: "zap",
        title: "Live Preview",
        description: "Output panel updates as you type — no save button, no compile step.",
        image: "https://images.unsplash.com/photo-1568716353609-12ddc5c67f04?w=800&q=80",
      },
      {
        icon: "palette",
        title: "Syntax Highlighting",
        description: "Monaco Editor (same engine as VS Code) for a professional editing experience.",
      },
      {
        icon: "alert-circle",
        title: "Error Detection",
        description: "Console errors surface in a dedicated panel so you can debug inline.",
      },
    ],
    architecture: [
      { layer: "Editor",     tech: "Monaco Editor",         role: "Syntax highlighting, intellisense, multi-pane layout" },
      { layer: "Preview",    tech: "sandboxed iframe",       role: "Safe execution of user HTML/CSS/JS in isolation" },
      { layer: "Frontend",   tech: "JavaScript + CSS",       role: "Layout, pane resizing, tab management" },
      { layer: "Deployment", tech: "Vercel",                 role: "Static deployment, CDN edge delivery" },
    ],
    techStack: [
      { name: "JavaScript",     category: "Frontend" },
      { name: "Monaco Editor",  category: "Library" },
      { name: "HTML5",          category: "Frontend" },
      { name: "CSS3",           category: "Frontend" },
      { name: "Sandboxed iframe", category: "Browser API" },
      { name: "Vercel",         category: "Deployment" },
    ],
    challenges: [
      {
        challenge: "Running user JavaScript in the main window risked crashing the editor.",
        solution:  "Sandboxed the preview inside a cross-origin iframe — user code can't access editor state.",
      },
      {
        challenge: "Preview flickering on every keystroke was jarring.",
        solution:  "Debounced the compilation step by 300ms so the preview only refreshes after typing pauses.",
      },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1568716353609-12ddc5c67f04?w=1200&q=80",
        alt: "Live code editor",
        caption: "Three-pane editor with live output",
      },
    ],
  },

  "budget-tracker": {
    level: 2,
    tagline: "Know where every rupee goes.",
    overview:
      "A personal finance tracker that categorises expenses, visualises spending patterns, and helps you stay within budget — all without connecting to a bank.",
    heroImage: "https://images.unsplash.com/photo-1574884280706-7342ca3d4231?w=1400&q=85",
    problem:
      "Most budgeting apps require bank linking or account creation. People who just want a simple way to log daily expenses and see totals have no lightweight option.",
    solution:
      "A local-first budget tracker — log income and expenses by category, view charts, and everything saves to localStorage. No sign-up, no server.",
    features: [
      {
        icon: "edit",
        title: "Add Transactions",
        description: "Log income and expenses with category, amount, date, and note.",
        image: "https://images.unsplash.com/photo-1574884280706-7342ca3d4231?w=800&q=80",
      },
      {
        icon: "bar-chart",
        title: "Category Charts",
        description: "Pie and bar charts show your spending breakdown at a glance.",
      },
      {
        icon: "server",
        title: "Local-First",
        description: "All data stays in your browser — no cloud, no sign-up.",
      },
    ],
    architecture: [
      { layer: "Frontend",  tech: "JavaScript + HTML",  role: "UI, form handling, event listeners" },
      { layer: "Charts",    tech: "Chart.js",           role: "Responsive pie and bar visualisations" },
      { layer: "Storage",   tech: "localStorage",       role: "Persists transaction list across sessions" },
      { layer: "Deployment", tech: "Vercel",            role: "Static deployment" },
    ],
    techStack: [
      { name: "JavaScript",  category: "Frontend" },
      { name: "HTML5",       category: "Frontend" },
      { name: "CSS3",        category: "Frontend" },
      { name: "Chart.js",    category: "Library" },
      { name: "Local Storage", category: "Browser API" },
    ],
    challenges: [
      {
        challenge: "Charts not re-rendering correctly when transactions were deleted.",
        solution:  "Destroyed and re-instantiated the Chart.js instance on every data change.",
      },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1574884280706-7342ca3d4231?w=1200&q=80",
        alt: "Budget Tracker dashboard",
        caption: "Expense breakdown with charts",
      },
    ],
  },

  "ai-image-generator": {
    level: 2,
    tagline: "Text in. Images out.",
    overview:
      "An AI-powered image generation app that turns text prompts into high-quality images using diffusion model APIs — with a clean prompt editor and style controls.",
    heroImage: "https://images.unsplash.com/photo-1695902173528-0b15104c4554?w=1400&q=85",
    problem:
      "Accessing image generation models usually requires technical setup or expensive subscriptions. There's room for a clean, accessible web UI anyone can use.",
    solution:
      "A minimal prompt-to-image UI calling a public diffusion model API. Type a prompt, pick a style, and download the result — no ML background required.",
    features: [
      {
        icon: "pencil",
        title: "Prompt Editor",
        description: "Write natural language prompts with helper suggestions and style presets.",
        image: "https://images.unsplash.com/photo-1695902173528-0b15104c4554?w=800&q=80",
      },
      {
        icon: "palette",
        title: "Style Presets",
        description: "Choose from photorealistic, oil painting, anime, sketch, and more.",
      },
      {
        icon: "download",
        title: "Download Generated Image",
        description: "One-click high-resolution download of generated artwork.",
      },
    ],
    architecture: [
      { layer: "Frontend",  tech: "JavaScript + CSS",   role: "Prompt UI, result gallery, download handler" },
      { layer: "API",       tech: "Diffusion Model API", role: "Text-to-image generation endpoint" },
      { layer: "Deployment", tech: "Vercel",            role: "Static frontend, API proxied via edge function" },
    ],
    techStack: [
      { name: "JavaScript",           category: "Frontend" },
      { name: "HTML5",                category: "Frontend" },
      { name: "CSS3",                 category: "Frontend" },
      { name: "AI Image API",         category: "AI/ML" },
      { name: "Vercel Edge Functions", category: "Deployment" },
    ],
    challenges: [
      {
        challenge: "Generation requests taking 8–15 seconds causing perceived hang.",
        solution:  "Added an animated progress indicator and disabled the button on submit to prevent duplicate requests.",
      },
      {
        challenge: "API key exposed in client-side JavaScript.",
        solution:  "Moved the API call to a Vercel Edge Function so the key never leaves the server.",
      },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1695902173528-0b15104c4554?w=1200&q=80",
        alt: "AI Image Generator",
        caption: "Prompt editor and generated image gallery",
      },
    ],
  },

  "nexstock": {
    level: 2,
    tagline: "Inventory management, engineered in C.",
    overview:
      "NexStock is a stock management system built in C with a web dashboard layer. It handles inventory tracking, transaction logging, and real-time stock alerts through a structured, scalable architecture.",
    heroImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&q=85",
    problem:
      "Small businesses often track stock in spreadsheets or paper — error-prone, unscalable, and with no audit trail. A lightweight, fast management system fills the gap.",
    solution:
      "A C-backed data layer exposed through a Node.js API, with a simple web dashboard for inventory CRUD, transaction history, and Chart.js visualisations.",
    features: [
      {
        icon: "box",
        title: "Inventory CRUD",
        description: "Add, update, and delete stock items with category and unit tracking.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
      },
      {
        icon: "trending-up",
        title: "Stock Alerts",
        description: "Automatic low-stock warnings when quantity falls below a configurable threshold.",
      },
      {
        icon: "bar-chart",
        title: "Transaction History",
        description: "Full audit log of every stock-in and stock-out event with timestamps.",
      },
    ],
    architecture: [
      { layer: "Core Logic",  tech: "C",            role: "Data structures, file I/O, inventory engine" },
      { layer: "API Layer",   tech: "Node.js",       role: "HTTP endpoints bridging C backend to web UI" },
      { layer: "Frontend",    tech: "HTML + CSS",    role: "Dashboard UI for inventory management" },
      { layer: "Charts",      tech: "Chart.js",      role: "Stock level and transaction visualisations" },
    ],
    techStack: [
      { name: "C",          category: "Backend" },
      { name: "Node.js",    category: "Backend" },
      { name: "JavaScript", category: "Frontend" },
      { name: "HTML5",      category: "Frontend" },
      { name: "CSS3",       category: "Frontend" },
      { name: "Chart.js",   category: "Library" },
    ],
    challenges: [
      {
        challenge: "Bridging C data structures to a JavaScript runtime without a standard FFI.",
        solution:  "C program writes to structured JSON files; Node.js reads and serves them — clean, simple interface.",
      },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
        alt: "NexStock dashboard",
        caption: "Inventory overview and stock charts",
      },
    ],
  },

  "sketchon": {
    level: 2,
    tagline: "Digital sketching, right in your browser.",
    overview:
      "SketchOn is a canvas-based drawing app with brush tools, colour palettes, layer support, and export — no install, no sign-in.",
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&q=85",
    problem:
      "Quick digital sketches usually require Photoshop or Procreate. There's a clear need for a fast, zero-friction browser sketchpad for notes, diagrams, and casual art.",
    solution:
      "A full-featured HTML5 Canvas drawing app with pressure-simulated brushes, multiple layers, undo/redo, and PNG export — loads instantly in any browser.",
    features: [
      {
        icon: "pencil",
        title: "Brush Tools",
        description: "Pencil, brush, eraser, and fill tools with adjustable size and opacity.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      },
      {
        icon: "palette",
        title: "Colour Palette",
        description: "Full colour picker with recent colours and hex input.",
      },
      {
        icon: "repeat",
        title: "Undo / Redo",
        description: "Full history stack — step back and forward through your drawing.",
      },
      {
        icon: "server",
        title: "Export PNG",
        description: "Download your sketch as a transparent or white-background PNG.",
      },
    ],
    architecture: [
      { layer: "Canvas",     tech: "HTML5 Canvas API",   role: "All drawing operations, pixel manipulation" },
      { layer: "State",      tech: "JavaScript",         role: "Tool state, history stack, layer management" },
      { layer: "UI",         tech: "CSS3",               role: "Toolbar, palette, responsive layout" },
      { layer: "Deployment", tech: "Vercel",             role: "Static deployment" },
    ],
    techStack: [
      { name: "HTML5 Canvas", category: "Frontend" },
      { name: "CSS3",         category: "Frontend" },
      { name: "JavaScript",   category: "Frontend" },
      { name: "Vercel",       category: "Deployment" },
    ],
    challenges: [
      {
        challenge: "Undo history consuming too much memory on large canvases.",
        solution:  "Capped the history stack at 50 states and stored compressed image data snapshots.",
      },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
        alt: "SketchOn canvas",
        caption: "Drawing canvas with toolbar",
      },
    ],
  },

  "mba-sahyadri": {
    level: 2,
    tagline: "A college MBA program, built for the web.",
    overview:
      "Official MBA program website for Sahyadri College — curriculum, faculty, admissions, and campus life, built with Next.js and Tailwind CSS.",
    heroImage: "https://images.unsplash.com/photo-1562774053-701939374585?w=1400&q=85",
    problem:
      "The existing college website was slow, outdated, and not mobile-friendly — potential students couldn't find admission info easily.",
    solution:
      "A fully responsive Next.js site with ISR for fast page loads, structured content sections, and a clear admission CTA flow.",
    features: [
      {
        icon: "clipboard",
        title: "Curriculum Overview",
        description: "Semester-by-semester course breakdown with downloadable syllabus.",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
      },
      {
        icon: "users",
        title: "Faculty Profiles",
        description: "Each faculty member's expertise, qualifications, and research interests.",
      },
      {
        icon: "edit",
        title: "Admissions CTA",
        description: "Clear application flow with eligibility criteria and key dates.",
      },
    ],
    architecture: [
      { layer: "Frontend",   tech: "Next.js + Tailwind", role: "SSG pages, responsive layout, SEO metadata" },
      { layer: "Deployment", tech: "Vercel",             role: "Edge CDN, ISR for content updates" },
    ],
    techStack: [
      { name: "Next.js",       category: "Frontend" },
      { name: "Tailwind CSS",  category: "Frontend" },
      { name: "JavaScript",    category: "Frontend" },
      { name: "Vercel",        category: "Deployment" },
    ],
    challenges: [
      {
        challenge: "Managing content updates without a CMS.",
        solution:  "Structured all content in typed TypeScript data files — non-technical staff edit JSON, CI redeploys automatically.",
      },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80",
        alt: "MBA website",
        caption: "Program overview and faculty section",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     BLOOD DONOR APPLICATION
  ══════════════════════════════════════════════════════════ */
  "blood-donor": {
    level: 2,
    tagline: "Connecting donors with recipients when it matters most.",
    overview:
      "A full-stack platform that bridges the gap between blood donors and recipients — with donor registration, blood bank inventory management, emergency request broadcasting, and location-based matching built into a single healthcare web application.",
    heroImage: "https://images.unsplash.com/photo-1697192156499-d85cfe1452c0?w=1400&q=85",
    problem:
      "In a medical emergency requiring blood, the bottleneck is almost never availability — it is discovery. Hospitals have blood but don't broadcast it. Donors are willing but don't know who needs them. Family members post frantic requests on WhatsApp and hope someone sees it in time. There is no structured, reliable system connecting these two sides.",
    solution:
      "A centralised platform where donors register with blood type and location, blood banks update their inventory in real time, and recipients post emergency requests that are matched and broadcast to compatible nearby donors — with email and SMS notifications triggered automatically.",
    features: [
      {
        icon: "users",
        title: "Donor Registration & Profiles",
        description:
          "Donors register with blood type, location, availability status, and last donation date. The system enforces the 3-month donation interval and marks donors as eligible/ineligible automatically.",
        image: "https://images.unsplash.com/photo-1697192156499-d85cfe1452c0?w=800&q=80",
      },
      {
        icon: "alert-circle",
        title: "Emergency Request Broadcasting",
        description:
          "Recipients post blood requests with type, units needed, hospital, and urgency. The system finds all eligible donors of the matching type within a configurable radius and sends immediate notifications.",
      },
      {
        icon: "database",
        title: "Blood Bank Inventory",
        description:
          "Blood banks maintain live unit counts per blood type. The system flags critical stock levels and surfaces nearby banks with available inventory to requesting hospitals.",
      },
      {
        icon: "search",
        title: "Donor Finder",
        description:
          "Public search for available donors by blood type and city — for non-emergency situations where family members are organising donations in advance.",
      },
    ],
    architecture: [
      { layer: "Frontend",   tech: "HTML + CSS + JavaScript", role: "Donor portal, request form, blood bank dashboard" },
      { layer: "Backend",    tech: "PHP",                     role: "REST-style endpoints, business logic, email triggers" },
      { layer: "Database",   tech: "MySQL",                   role: "Donors, requests, blood banks, inventory tables" },
      { layer: "Hosting",    tech: "Vercel + PHP server",     role: "Frontend on Vercel, PHP backend on shared hosting" },
    ],
    techStack: [
      { name: "JavaScript", category: "Frontend" },
      { name: "HTML5",      category: "Frontend" },
      { name: "CSS3",       category: "Frontend" },
      { name: "PHP",        category: "Backend" },
      { name: "MySQL",      category: "Database" },
    ],
    challenges: [
      {
        challenge: "Matching donors by blood type and proximity without a geospatial DB.",
        solution:  "Stored city names and used a pre-computed adjacency list of nearby cities — not as precise as GPS radius but practical for the target use case.",
      },
      {
        challenge: "Preventing donors from registering for requests before their 3-month cooldown.",
        solution:  "Added a server-side eligibility check on every donor action — last donation date fetched from DB and compared to current date before any match is made.",
      },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1697192156499-d85cfe1452c0?w=1200&q=80",
        alt: "Blood Donor platform",
        caption: "Donor registration and emergency request flow",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     AI ASSISTANT
  ══════════════════════════════════════════════════════════ */
  "ai-assistant": {
    level: 2,
    tagline: "A conversational AI that actually understands context.",
    overview:
      "A full-featured AI chat assistant with persistent conversation memory, multi-turn context handling, and a clean chat UI — built to demonstrate how NLP APIs can be wrapped into a polished, production-ready product rather than a raw API demo.",
    heroImage: "https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?w=1400&q=85",
    problem:
      "Most AI chat demos are single-turn — ask a question, get an answer, context resets. Real conversations don't work that way. 'What did I just ask you?' should have a coherent answer. Building meaningful conversational AI means solving context persistence, turn management, and graceful degradation when the model loses the thread.",
    solution:
      "A React-based chat application with a Node.js backend that maintains conversation history per session, sends the full context window to the AI API on every turn, and handles streaming responses for a real-time typing effect — making the assistant feel genuinely conversational.",
    features: [
      {
        icon: "bot",
        title: "Multi-Turn Conversation",
        description:
          "Full conversation history is maintained per session and sent as context on every API call — the assistant remembers what was discussed earlier in the same conversation.",
        image: "https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?w=800&q=80",
      },
      {
        icon: "zap",
        title: "Streaming Responses",
        description:
          "AI responses stream token-by-token to the UI via Server-Sent Events — no waiting for the full response, just a natural typing effect.",
      },
      {
        icon: "layout",
        title: "Clean Chat Interface",
        description:
          "Message bubbles, timestamps, typing indicators, and scroll-to-latest — all the UX patterns of a polished messaging app applied to AI chat.",
      },
      {
        icon: "refresh-cw",
        title: "Session Management",
        description:
          "Each conversation is a persisted session — users can start new conversations or return to previous ones. Sessions stored in localStorage with optional server sync.",
      },
    ],
    architecture: [
      { layer: "Frontend",   tech: "JavaScript + HTML/CSS",  role: "Chat UI, message rendering, SSE client for streaming" },
      { layer: "Backend",    tech: "Node.js + Express",      role: "Conversation history, AI API proxy, SSE streaming" },
      { layer: "AI",         tech: "AI Language API",        role: "Multi-turn conversation with full history context" },
      { layer: "Deployment", tech: "Vercel",                 role: "Frontend + serverless API routes" },
    ],
    techStack: [
      { name: "JavaScript", category: "Frontend" },
      { name: "HTML5",      category: "Frontend" },
      { name: "CSS3",       category: "Frontend" },
      { name: "Node.js",    category: "Backend" },
      { name: "AI APIs",    category: "AI/NLP" },
      { name: "Vercel",     category: "Deployment" },
    ],
    challenges: [
      {
        challenge: "Context window overflow on very long conversations causing truncated responses.",
        solution:  "Implemented a sliding window that keeps the system prompt + last N turns — oldest turns drop off when the token count approaches the model's limit.",
      },
      {
        challenge: "SSE connections dropping on mobile networks causing incomplete responses.",
        solution:  "Added a reconnection handler that resumes the stream from the last received token position — users see complete responses even on unstable connections.",
      },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?w=1200&q=80",
        alt: "AI Assistant chat",
        caption: "Multi-turn conversation with streaming response",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     I-MOVIE 2.0
  ══════════════════════════════════════════════════════════ */
  "i-movie-2": {
    level: 2,
    tagline: "Discover films the way you actually think about them.",
    overview:
      "i-Movie 2.0 is a movie discovery and information platform that makes finding great films effortless — combining a rich movie database API, personalised search, mood-based discovery, and a clean card-based UI built with React.",
    heroImage: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1400&q=85",
    problem:
      "Finding a good movie is paradoxically hard despite unlimited choice. Search on streaming platforms is keyword-only. Genre filters are too broad. 'Recommended for you' algorithms are black boxes that feel random. People still ask friends or check Reddit because nothing else works well.",
    solution:
      "A React movie discovery app with multi-filter search (genre + mood + year + rating), detailed film pages with cast, trailer, and similar recommendations, and a watchlist that persists locally — giving users a fast, clean alternative to algorithmic discovery.",
    features: [
      {
        icon: "search",
        title: "Multi-Filter Discovery",
        description:
          "Filter by genre, release year, rating range, and mood category simultaneously — the kind of combined filtering that streaming platforms still don't do well.",
        image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80",
      },
      {
        icon: "eye",
        title: "Rich Film Pages",
        description:
          "Each film has a dedicated page with synopsis, cast, crew, trailer embed, user ratings, and a 'Similar Films' section powered by TMDB's recommendation API.",
      },
      {
        icon: "star",
        title: "Personal Watchlist",
        description:
          "Save films to a local watchlist — persisted in localStorage. No account required, no signup friction.",
      },
      {
        icon: "trending-up",
        title: "Trending & New Releases",
        description:
          "Homepage curates trending, top-rated, and new release sections — updated daily via TMDB's trending endpoints.",
      },
    ],
    architecture: [
      { layer: "Frontend",   tech: "React + JavaScript",   role: "SPA with React Router, component-level state" },
      { layer: "API",        tech: "TMDB API",             role: "Movie data, search, recommendations, trailers" },
      { layer: "Storage",    tech: "localStorage",         role: "Watchlist persistence without auth" },
      { layer: "Deployment", tech: "Netlify",              role: "CDN deployment, instant builds" },
    ],
    techStack: [
      { name: "React",       category: "Frontend" },
      { name: "JavaScript",  category: "Frontend" },
      { name: "HTML5",       category: "Frontend" },
      { name: "CSS3",        category: "Frontend" },
      { name: "TMDB API",    category: "API" },
      { name: "Netlify",     category: "Deployment" },
    ],
    challenges: [
      {
        challenge: "TMDB API rate limiting on rapid filter changes causing flicker.",
        solution:  "Debounced all filter input changes by 400ms and cancelled in-flight requests on new filter events using AbortController.",
      },
      {
        challenge: "Large movie card grids causing layout jank on scroll.",
        solution:  "Implemented windowing with react-window — only cards in the visible viewport are rendered in the DOM.",
      },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&q=80",
        alt: "i-Movie 2.0 homepage",
        caption: "Film discovery with multi-filter search",
      },
      {
        src: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
        alt: "Film detail page",
        caption: "Rich film page with cast, trailer and recommendations",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     VOTER MANAGEMENT
  ══════════════════════════════════════════════════════════ */
  "voter-management": {
    level: 2,
    tagline: "Election integrity engineered in C++.",
    overview:
      "A secure voter management system built in C++ with a web interface — handling voter registration, authentication, ballot casting, and result tabulation with strict validation rules, object-oriented architecture, and data persistence across sessions.",
    heroImage: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=1400&q=85",
    problem:
      "Digital voting systems are notoriously hard to get right. Most student-built systems have no meaningful access control, allow double-voting, and store results in memory that disappears on restart. Building a system that is actually secure — even as a prototype — requires thinking about trust boundaries, authentication, and data integrity from the start.",
    solution:
      "A C++ backend implementing a complete voter lifecycle — registration with unique voter ID generation, PIN-based authentication, single-vote enforcement via a voted flag, result tabulation, and JSON file persistence. A Node.js API layer exposes this to a minimal web frontend.",
    features: [
      {
        icon: "lock",
        title: "Authenticated Voting",
        description:
          "Voters authenticate with their unique ID and PIN before accessing the ballot. Failed authentication is logged with a lockout after 3 attempts.",
        image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=80",
      },
      {
        icon: "check-circle",
        title: "Double-Vote Prevention",
        description:
          "A voted flag is set atomically when a ballot is cast — subsequent vote attempts by the same voter are rejected at the C++ layer before reaching the ballot.",
      },
      {
        icon: "bar-chart",
        title: "Live Result Tabulation",
        description:
          "Admin panel shows real-time vote counts per candidate, voter turnout percentage, and a final results declaration when the election closes.",
      },
      {
        icon: "database",
        title: "Persistent Data Storage",
        description:
          "Voter records and vote counts are serialised to JSON files — the system recovers full state on restart with zero data loss.",
      },
    ],
    architecture: [
      { layer: "Core Engine", tech: "C++",         role: "Voter registry, authentication, ballot casting, result tabulation" },
      { layer: "Persistence", tech: "JSON files",  role: "Voter records, vote counts, election state serialisation" },
      { layer: "API Bridge",  tech: "Node.js",     role: "HTTP endpoints calling C++ subprocess for each operation" },
      { layer: "Frontend",    tech: "JavaScript",  role: "Voter portal, admin results dashboard" },
    ],
    techStack: [
      { name: "C++",        category: "Backend" },
      { name: "Node.js",    category: "API Bridge" },
      { name: "JavaScript", category: "Frontend" },
    ],
    challenges: [
      {
        challenge: "Synchronising concurrent vote requests to the C++ subprocess without race conditions.",
        solution:  "Made each Node.js request spawn a fresh C++ process with file locking — only one process modifies the voter record file at a time.",
      },
      {
        challenge: "C++ subprocess crashing silently and corrupting the voter file.",
        solution:  "Added a write-to-temp-then-rename strategy — the voter file is only replaced atomically after a successful write, preventing partial writes from corrupting state.",
      },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=1200&q=80",
        alt: "Voter Management system",
        caption: "Voter authentication and ballot interface",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     SAHYNEX WEBSITE
  ══════════════════════════════════════════════════════════ */
  "sahynex-website": {
    level: 2,
    tagline: "A corporate identity built for the web.",
    overview:
      "Official corporate website for Sahynex — a technology services company — showcasing services, portfolio, team, and contact channels with a performance-first Next.js build, modern UI/UX, and full SEO optimisation.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85",
    problem:
      "A technology company with no web presence is invisible to its most valuable customers. Sahynex needed a site that matched the quality of their work — fast, professional, SEO-optimised, and maintainable without a developer on every content update.",
    solution:
      "A Next.js SSG corporate site with ISR for content freshness, Tailwind for rapid responsive layout, MongoDB for dynamic content sections, and a structured metadata system that gets every page indexed correctly by search engines.",
    features: [
      {
        icon: "globe",
        title: "Services Showcase",
        description:
          "Dedicated service pages with detailed descriptions, case study links, and technology tags — built for both human readers and search engine crawlers.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      },
      {
        icon: "users",
        title: "Team Profiles",
        description:
          "Founder and team member profiles with roles, expertise, and LinkedIn links — building trust with prospective clients before the first conversation.",
      },
      {
        icon: "trending-up",
        title: "SEO Architecture",
        description:
          "Every page has structured metadata, Open Graph tags, canonical URLs, and a dynamically generated sitemap. Core Web Vitals green across all pages.",
      },
      {
        icon: "edit",
        title: "CMS-Free Content Management",
        description:
          "All content managed via TypeScript data files and MongoDB — the team updates data, CI rebuilds the relevant pages via ISR with zero downtime.",
      },
    ],
    architecture: [
      { layer: "Frontend",   tech: "Next.js + TypeScript",  role: "SSG pages with ISR, SEO metadata, responsive layout" },
      { layer: "Database",   tech: "MongoDB",               role: "Portfolio items, team profiles, dynamic content" },
      { layer: "Styling",    tech: "Tailwind CSS",          role: "Utility-first responsive design" },
      { layer: "Deployment", tech: "Vercel",                role: "Edge CDN, ISR, custom domain + SSL" },
    ],
    techStack: [
      { name: "Next.js",     category: "Frontend" },
      { name: "TypeScript",  category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "MongoDB",     category: "Database" },
      { name: "Vercel",      category: "Deployment" },
    ],
    challenges: [
      {
        challenge: "Keeping portfolio content fresh without a full redeploy.",
        solution:  "Used ISR with a 1-hour revalidation window for portfolio pages — new projects appear within an hour of being added to MongoDB with zero downtime.",
      },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        alt: "Sahynex website",
        caption: "Corporate homepage — services and portfolio sections",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     SAHYNEX PROJECTS
  ══════════════════════════════════════════════════════════ */
  "sahynex-projects": {
    level: 2,
    tagline: "Every project, one platform.",
    overview:
      "Sahynex Projects is a dedicated showcase platform for Sahynex's client work — presenting case studies, impact metrics, technologies used, and project outcomes in a clean, scannable format designed to convert prospective clients.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85",
    problem:
      "Client portfolios buried in a corporate website's sub-pages get zero attention. Prospective clients need to see relevant work quickly — filtered by industry, technology, or project type — without digging through navigation.",
    solution:
      "A standalone Next.js project showcase with filter-by-category, sortable project grid, individual project case study pages with metrics and outcomes, and a contact CTA on every page — built to drive inbound leads.",
    features: [
      {
        icon: "search",
        title: "Filterable Project Grid",
        description:
          "Projects filterable by technology stack, industry, and project type — so a healthcare client sees relevant work, not a fintech project.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      },
      {
        icon: "bar-chart",
        title: "Impact Metrics",
        description:
          "Every project page leads with measurable outcomes — users served, performance improvements, revenue impact — not just feature lists.",
      },
      {
        icon: "trending-up",
        title: "SEO-First Case Studies",
        description:
          "Structured metadata, schema.org markup, and keyword-optimised content on every case study — driving organic discovery from potential clients searching for specific solutions.",
      },
      {
        icon: "edit",
        title: "Easy Content Updates",
        description:
          "Projects defined in TypeScript data files — adding a new case study means adding one object and pushing to main. ISR deploys the new page within minutes.",
      },
    ],
    architecture: [
      { layer: "Frontend",   tech: "Next.js + TypeScript", role: "SSG project grid, dynamic case study pages, SEO metadata" },
      { layer: "Deployment", tech: "Vercel",               role: "Edge CDN, ISR, custom domain" },
    ],
    techStack: [
      { name: "Next.js",    category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Vercel",     category: "Deployment" },
    ],
    challenges: [
      {
        challenge: "Client-side filter causing full page re-render on each filter change.",
        solution:  "Moved filter state to URL query params — filter changes update the URL, React re-renders only the grid component, and filtered views are shareable/bookmarkable.",
      },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        alt: "Sahynex Projects",
        caption: "Project showcase grid with category filters",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     TANDOOR RESTAURANT
  ══════════════════════════════════════════════════════════ */
  "tandoor-restaurant": {
    level: 2,
    tagline: "A restaurant website that drives real bookings.",
    overview:
      "Official website for Tandoor Kitchen — showcasing the menu, story, ambience, and location with Google Maps integration, online reservation flow, and a performance-optimised build that loads instantly on mobile.",
    heroImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=85",
    problem:
      "Most restaurant websites are either bloated WordPress sites that load in 8 seconds or static HTML pages with a broken contact form. Neither converts hungry browsers into actual diners. A restaurant's website has one job: get people through the door.",
    solution:
      "A Next.js restaurant site with a full menu browser, photo gallery, embedded Google Maps, online table reservation form with email confirmation, and a Lighthouse score above 95 — built to rank well locally and convert fast.",
    features: [
      {
        icon: "clipboard",
        title: "Full Menu Browser",
        description:
          "Complete menu with sections (starters, mains, desserts, drinks), item descriptions, prices, dietary tags, and high-quality food photography.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      },
      {
        icon: "map-pin",
        title: "Google Maps Integration",
        description:
          "Embedded Google Maps with the restaurant location pinned — one tap for directions from any device, with a 'Get Directions' deep link for native navigation apps.",
      },
      {
        icon: "calendar",
        title: "Online Reservation",
        description:
          "Table booking form with date, time, party size, and special requests — confirmation sent via email using Brevo's transactional email API.",
      },
      {
        icon: "image",
        title: "Photo Gallery",
        description:
          "Optimised food and ambience photo gallery using Next.js Image for automatic WebP conversion and lazy loading — fast even on mobile 4G.",
      },
    ],
    architecture: [
      { layer: "Frontend",   tech: "Next.js + TypeScript",  role: "SSG menu and gallery pages, ISR for specials" },
      { layer: "Maps",       tech: "Google Maps API",       role: "Embedded map with location pin and directions" },
      { layer: "Email",      tech: "Brevo API",             role: "Reservation confirmation emails" },
      { layer: "Deployment", tech: "Vercel",                role: "Edge CDN, image optimisation, custom domain" },
    ],
    techStack: [
      { name: "Next.js",          category: "Frontend" },
      { name: "TypeScript",       category: "Frontend" },
      { name: "Google Maps API",  category: "Integration" },
      { name: "Brevo",            category: "Email" },
      { name: "Vercel",           category: "Deployment" },
    ],
    challenges: [
      {
        challenge: "Google Maps embed causing Lighthouse performance score to drop below 90.",
        solution:  "Replaced the inline embed with a lightweight map placeholder that loads the full Maps iframe only on click — identical UX, no performance impact until user interaction.",
      },
      {
        challenge: "Reservation form submissions occasionally not sending confirmation emails.",
        solution:  "Added request idempotency keys on the Brevo API call and a retry with exponential backoff — submissions now retry up to 3 times before failing gracefully.",
      },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
        alt: "Tandoor website",
        caption: "Homepage with menu preview and reservation CTA",
      },
      {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        alt: "Menu page",
        caption: "Full menu browser with food photography",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     SHREEMATHA ORGANISATION
  ══════════════════════════════════════════════════════════ */
  "shreematha": {
    level: 2,
    tagline: "A group of companies, one digital presence.",
    overview:
      "Official website for Shreematha — a multi-vertical business group — presenting their companies, services, and products with a unified brand identity, responsive design, and local SEO optimisation for their target markets.",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=85",
    problem:
      "Multi-company business groups often have fragmented digital presences — each entity with a different website, inconsistent branding, and no unified discovery surface. Customers who interact with one company don't learn about the group's full capabilities.",
    solution:
      "A single Next.js platform presenting all Shreematha group companies under one brand umbrella — with individual service pages per vertical, a shared contact and inquiry system, and local SEO configured for each service area.",
    features: [
      {
        icon: "layers",
        title: "Multi-Company Architecture",
        description:
          "Each business vertical has its own section with dedicated service descriptions, team, and contact information — unified under the Shreematha group brand.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      },
      {
        icon: "search",
        title: "Local SEO Optimisation",
        description:
          "Structured data markup, location-specific metadata, and Google Business Profile integration — optimised for 'near me' searches in each service area.",
      },
      {
        icon: "edit",
        title: "Unified Inquiry System",
        description:
          "A single contact form with company/service routing — inquiries are directed to the right team without multiple forms or email addresses.",
      },
      {
        icon: "trending-up",
        title: "Performance-First Build",
        description:
          "Static generation with Vercel Edge — pages load in under 1 second globally with automatic image optimisation and font subsetting.",
      },
    ],
    architecture: [
      { layer: "Frontend",   tech: "Next.js + TypeScript", role: "SSG multi-company pages, unified inquiry form, SEO metadata" },
      { layer: "Deployment", tech: "Vercel",               role: "Edge CDN, custom domain, SSL" },
    ],
    techStack: [
      { name: "Next.js",    category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Vercel",     category: "Deployment" },
    ],
    challenges: [
      {
        challenge: "Maintaining brand consistency across multiple verticals with different visual identities.",
        solution:  "Defined a shared design token system — each vertical has its own accent colour within a shared layout system, maintaining coherence without uniformity.",
      },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
        alt: "Shreematha website",
        caption: "Group homepage with multi-vertical navigation",
      },
    ],
  },
};
