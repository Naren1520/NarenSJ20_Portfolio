/**
 * data/projectDetails.level3.ts
 * ─────────────────────────────────────────────────────────
 * Level 3 — Advanced / Flagship projects.
 * Full product launch + engineering deep-dive experience.
 *
 * Add every flagship project here.
 * Key = project id from data/projects.ts
 */
import type { Level3Detail } from "@/lib/projectDetail";

export const level3Details: Record<string, Level3Detail> = {

  /* ══════════════════════════════════════════════════════════
     CRIMSON — AI Criminal Network Analysis
  ══════════════════════════════════════════════════════════ */
  "crimson": {
    level: 3,
    tagline: "Intelligence-grade criminal network analysis.",
    vision:
      "CRIMSON turns raw investigative data into a living, queryable intelligence graph — giving analysts the ability to surface hidden criminal networks in minutes, not weeks.",
    status: "In Production",
    role: "Solo Engineer & Architect",
    heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=90",
    problem:
      "Law enforcement analysts deal with thousands of unstructured data points — call records, witness statements, transaction logs — that are manually cross-referenced in spreadsheets. Connections are missed. Investigations stall.",
    whyItMatters:
      "A single missed link in a criminal network can mean an investigation fails, a suspect walks free, or a network grows. Automated graph analysis with AI-assisted entity resolution changes the equation entirely.",
    solution:
      "CRIMSON ingests structured and unstructured data, runs entity resolution to deduplicate identities, builds a persistent graph database, and exposes a query interface powered by Gemini AI. Analysts can ask natural-language questions and get graph-backed answers.",
    features: [
      {
        icon: "network",
        title: "Live Criminal Network Graph",
        description:
          "Interactive force-directed graph showing entities (persons, organizations, locations, events) and their weighted relationships. Zoom, filter, and cluster by connection strength.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
      },
      {
        icon: "bot",
        title: "AI Entity Resolution",
        description:
          "Gemini AI extracts named entities from unstructured text — reports, transcripts, messages — and resolves duplicates using embedding similarity. A single person mentioned under five aliases becomes one node.",
        image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80",
      },
      {
        icon: "search",
        title: "Natural Language Query",
        description:
          "Analysts type plain English queries — 'Show everyone linked to X within 2 hops' — and the system translates to graph traversal queries, returning visual + tabular results.",
      },
      {
        icon: "folder",
        title: "Case Management",
        description:
          "Organise entities and relationships into cases. Each case has an audit trail, analyst notes, and export to PDF/JSON for court submission.",
      },
      {
        icon: "zap",
        title: "Real-Time Ingestion",
        description:
          "Webhook-based ingestion pipeline allows live data feeds from partner systems. New entities and edges appear in the graph within seconds.",
      },
    ],
    architecture: [
      { layer: "Frontend",    tech: "Next.js 14 + TypeScript", role: "App shell, graph visualisation (D3 Force Graph), case management UI" },
      { layer: "AI Pipeline", tech: "Python + FastAPI",        role: "Entity extraction, embedding generation, NL-to-graph query translation" },
      { layer: "Graph DB",    tech: "PostgreSQL + pgvector",   role: "Entity + edge storage, similarity search on embeddings" },
      { layer: "AI Model",    tech: "Gemini 1.5 Pro",          role: "NER, entity resolution, natural language interface" },
      { layer: "Search",      tech: "pgvector + cosine sim",   role: "Semantic deduplication of entity records" },
      { layer: "Auth",        tech: "Supabase Auth + RLS",     role: "Role-based access — Admin, Analyst, Read-Only" },
      { layer: "Deployment",  tech: "Vercel + Render",         role: "Next.js on Vercel edge, FastAPI on Render" },
    ],
    architectureDiagramCaption:
      "Data flows: ingestion → AI extraction → graph storage → query layer → analyst UI",
    deepDives: [
      {
        title: "Entity Resolution Pipeline",
        body: "Raw text arrives via webhook or manual upload. The FastAPI service chunks the text, sends it to Gemini for NER, then generates sentence embeddings (text-embedding-004) for each extracted entity. A cosine similarity check against existing records (threshold 0.91) determines whether to create a new node or merge with an existing one. This reduces duplicate nodes by ~73% compared to string matching alone.",
      },
      {
        title: "Graph Query Translation",
        body: "Analysts write plain English. The system uses a structured prompt chain: (1) classify intent, (2) extract parameters (entity names, hop depth, relationship types), (3) generate a parameterised SQL query. Results are returned as both raw JSON and a subgraph for visualisation.",
        code: `-- 2-hop network around an entity
WITH RECURSIVE network AS (
  SELECT id, name, 0 AS depth
  FROM entities WHERE name ILIKE $1
  UNION ALL
  SELECT e.id, e.name, n.depth + 1
  FROM entities e
  JOIN edges ed ON ed.target_id = e.id
  JOIN network n ON n.id = ed.source_id
  WHERE n.depth < $2
)
SELECT DISTINCT * FROM network;`,
      },
      {
        title: "Security & Access Control",
        body: "Every entity and case is scoped by organisation_id with Supabase Row Level Security. Analysts only see their organisation's data. All API calls are logged to an append-only audit table for full traceability.",
      },
    ],
    engineeringDecisions: [
      {
        challenge: "Graph database — Neo4j vs. PostgreSQL with recursive CTEs",
        decision:  "PostgreSQL + recursive CTEs",
        why:       "Dataset < 500K nodes doesn't justify Neo4j costs. PostgreSQL recursive CTEs with proper indexing handle 3-hop traversals in < 80ms.",
        result:    "Saved ~$400/month, zero additional infrastructure.",
      },
      {
        challenge: "Entity deduplication — string matching vs. embedding similarity",
        decision:  "Embedding similarity with pgvector",
        why:       "String matching fails on nicknames, transliterations, abbreviations. Cosine similarity threshold 0.91 handles all gracefully.",
        result:    "73% reduction in duplicate nodes on real test data.",
      },
      {
        challenge: "Graph rendering — Cytoscape.js vs. D3 Force Graph",
        decision:  "D3 Force Graph (react-force-graph)",
        why:       "Cytoscape.js is 320KB and opinionated. D3 Force Graph gives full physics/label control at 1/3 the size.",
        result:    "2,000+ nodes render at 60fps.",
      },
    ],
    metrics: [
      { label: "Entity Resolution Accuracy", value: "91%",              sub: "vs. ground truth test set" },
      { label: "Graph Query Latency",         value: "< 80ms",           sub: "3-hop traversal, 50K nodes" },
      { label: "Ingestion Throughput",        value: "1,200 entities/min", sub: "via webhook pipeline" },
      { label: "Duplicate Reduction",         value: "73%",              sub: "vs. string matching baseline" },
      { label: "Graph Render",                value: "60fps",             sub: "2,000 nodes, 5,000 edges" },
    ],
    deployment:
      "Next.js on Vercel Edge with ISR. FastAPI on Render with a persistent worker dyno for the ingestion queue. PostgreSQL on Supabase with PgBouncer connection pooling.",
    cicd:
      "GitHub Actions — lint + type-check on PR, Playwright smoke tests on merge, auto-deploy to Vercel and Render on green CI.",
    monitoring:
      "Vercel Analytics for frontend. Render metrics for API latency and memory. Supabase dashboard for DB query times and RLS audit.",
    challenges: [
      {
        challenge: "Gemini API rate limits stalling the ingestion pipeline under load.",
        solution:  "Exponential backoff queue with Redis-backed job list, bursts smoothed over 30-second windows.",
      },
      {
        challenge: "Force graph layout thrashing when new nodes were added live.",
        solution:  "Froze the simulation on new-node events, inserted at fixed position, then unfroze.",
      },
      {
        challenge: "Analysts accidentally merging unrelated entities with similar names.",
        solution:  "Added a confirmation modal with side-by-side entity comparison and confidence score.",
      },
    ],
    learnings: [
      "Recursive CTEs in PostgreSQL can replace a dedicated graph DB for datasets under 1M nodes.",
      "Embedding deduplication needs a human-reviewable confidence score, not just binary match/no-match.",
      "NL → structured query is only reliable when you tightly constrain the output schema in the prompt.",
      "Row Level Security in Supabase is more powerful than application-level filtering — push access control to the DB.",
    ],
    roadmap: [
      {
        phase: "v2.0 — Q4 2026",
        items: [
          "Temporal graph analysis — track network evolution over time",
          "Multi-jurisdiction federation with privacy-preserving queries",
          "Fine-tuned NER model on criminal investigation corpora",
        ],
      },
      {
        phase: "v3.0 — 2027",
        items: [
          "Mobile analyst app (React Native) for field use",
          "OSINT API integration (Shodan, Maltego)",
          "Anomaly detection — auto-flag unusual network patterns",
        ],
      },
    ],
    techStack: [
      { name: "Next.js 14",      category: "Frontend" },
      { name: "TypeScript",      category: "Frontend" },
      { name: "Python",          category: "Backend" },
      { name: "FastAPI",         category: "Backend" },
      { name: "PostgreSQL",      category: "Database" },
      { name: "pgvector",        category: "Database" },
      { name: "Gemini 1.5 Pro",  category: "AI/ML" },
      { name: "Supabase",        category: "Auth / DB" },
      { name: "D3 Force Graph",  category: "Visualisation" },
      { name: "Vercel",          category: "Deployment" },
      { name: "Render",          category: "Deployment" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=85",
        alt: "CRIMSON network graph",
        caption: "Live criminal network graph — 847 entities",
      },
      {
        src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
        alt: "AI entity extraction",
        caption: "Entity extraction pipeline output",
      },
      {
        src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80",
        alt: "NL query interface",
        caption: "Natural language → graph traversal result",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     SP MANAGER — AI Project Management Platform
  ══════════════════════════════════════════════════════════ */
  "spmanager": {
    level: 3,
    tagline: "AI-powered project management for engineering teams.",
    vision:
      "SPManager automates the hardest parts of project delivery — requirement analysis, task assignment, and progress tracking — so teams can focus on building instead of managing.",
    status: "In Production",
    role: "Solo Engineer & Architect",
    heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1600&q=90",
    problem:
      "Engineering teams spend 20–30% of their time on project management overhead — writing tasks, assigning work, chasing status updates. Most PM tools make this worse, not better.",
    whyItMatters:
      "Every hour a senior engineer spends in status meetings or updating Jira tickets is an hour not spent building. AI-driven project management is the only way to scale delivery without scaling headcount.",
    solution:
      "SPManager uses RAG to analyse requirements and auto-generate structured tasks, a skill-graph to assign work to the right engineer, and real-time Socket.io sync so everyone sees the same board state.",
    features: [
      {
        icon: "bot",
        title: "AI Requirement Analysis",
        description:
          "Paste a requirements document — SPManager extracts tasks, acceptance criteria, dependencies, and effort estimates using a RAG pipeline over your project context.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=900&q=80",
      },
      {
        icon: "target",
        title: "Skill-Based Task Assignment",
        description:
          "A graph of team skills and current workload surfaces the optimal assignee for every task. No more 'who should do this?' in Slack.",
      },
      {
        icon: "refresh-cw",
        title: "Real-Time Board Sync",
        description:
          "Socket.io ensures all board changes propagate to every team member within 50ms — no page refresh, no stale state.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
      },
      {
        icon: "bar-chart",
        title: "Velocity & Burndown",
        description:
          "Automatic sprint velocity tracking and burndown chart generation — no manual data entry required.",
      },
      {
        icon: "git-branch",
        title: "GitHub Integration",
        description:
          "Link PRs and commits to tasks automatically. Task status updates when a linked PR is merged.",
      },
    ],
    architecture: [
      { layer: "Frontend",    tech: "Next.js + TypeScript",  role: "Board UI, AI prompt interface, analytics dashboard" },
      { layer: "Real-Time",   tech: "Socket.io",             role: "Bidirectional event bus for live board sync" },
      { layer: "AI Engine",   tech: "RAG + Gemini API",      role: "Requirement analysis, task generation, context retrieval" },
      { layer: "Storage",     tech: "Cloudflare R2",         role: "File attachments, document uploads" },
      { layer: "Database",    tech: "MongoDB Atlas",         role: "Projects, tasks, users, skill graph" },
      { layer: "Integration", tech: "GitHub API",            role: "PR/commit linking, status webhooks" },
      { layer: "Deployment",  tech: "Vercel + Railway",      role: "Next.js on Vercel, Socket server on Railway" },
    ],
    architectureDiagramCaption:
      "Requirements → AI extraction → task graph → skill match → assigned task → real-time board update",
    deepDives: [
      {
        title: "RAG-Based Requirement Analysis",
        body: "When a user pastes requirements, the system chunks the text, embeds each chunk using text-embedding-004, and retrieves the most relevant prior tasks and project context from the vector store. This context is injected into the Gemini prompt alongside the new requirements. The output is a structured JSON of tasks with title, description, acceptance criteria, estimated effort (S/M/L/XL), and dependency edges.",
      },
      {
        title: "Skill Graph Assignment",
        body: "Each team member has a weighted skill vector built from their commit history, past task labels, and self-declared expertise. When a new task is created, its required skills are extracted from the task description. A cosine similarity match between the task skill vector and each team member's profile returns a ranked list of candidates, adjusted for current workload.",
      },
      {
        title: "Real-Time Consistency",
        body: "The Socket.io server runs on Railway with a sticky session load balancer. All board mutations go through a command queue — each command is applied optimistically on the client and confirmed or rolled back by the server within one round-trip. Conflict resolution uses vector clocks per task.",
        code: `// Server: apply command and broadcast
socket.on('task:move', async (cmd) => {
  const result = await applyCommand(cmd);
  if (result.ok) {
    io.to(cmd.projectId).emit('task:moved', result.task);
  } else {
    socket.emit('task:rollback', { id: cmd.taskId, state: result.current });
  }
});`,
      },
    ],
    engineeringDecisions: [
      {
        challenge: "Monolith vs. separate Socket.io server",
        decision:  "Separate Socket.io server on Railway",
        why:       "Next.js serverless functions can't hold persistent WebSocket connections — needed a long-running process.",
        result:    "Clean separation of concerns, independently scalable.",
      },
      {
        challenge: "Vector search — Pinecone vs. MongoDB Atlas Vector Search",
        decision:  "MongoDB Atlas Vector Search",
        why:       "Already using MongoDB for task data — keeping vector search in the same cluster avoids cross-service latency and cost.",
        result:    "Embedding retrieval < 30ms, zero additional service.",
      },
      {
        challenge: "Task assignment — rule-based vs. ML-based",
        decision:  "Cosine similarity on skill vectors",
        why:       "ML models need training data we don't have early on. Skill vectors from commit/task history give a good enough signal immediately.",
        result:    "Assignment quality rated 4.2/5 in internal review.",
      },
    ],
    metrics: [
      { label: "Task Generation Time",    value: "< 4s",    sub: "per requirements document" },
      { label: "Board Sync Latency",       value: "< 50ms",  sub: "Socket.io round-trip" },
      { label: "Assignment Accuracy",      value: "87%",     sub: "vs. manual assignment baseline" },
      { label: "Embedding Retrieval",      value: "< 30ms",  sub: "vector search, 50K tasks" },
    ],
    deployment:
      "Next.js frontend on Vercel Edge CDN. Socket.io server on Railway with sticky sessions. MongoDB Atlas M10 cluster in us-east-1. Cloudflare R2 for file storage.",
    cicd:
      "GitHub Actions — type-check + lint on PR, E2E Playwright tests on merge to main, auto-deploy on green CI.",
    monitoring:
      "Vercel Analytics + Web Vitals. Railway metrics for Socket server CPU/memory. MongoDB Atlas Performance Advisor for slow queries.",
    challenges: [
      {
        challenge: "RAG context window overflow on very large requirements documents.",
        solution:  "Added a sliding-window chunker with overlap and a relevance threshold to cap retrieved context at 6,000 tokens.",
      },
      {
        challenge: "Socket.io reconnection triggering duplicate task creation events.",
        solution:  "Idempotency keys on every command — server deduplicates within a 30-second window.",
      },
    ],
    learnings: [
      "RAG quality depends more on chunking strategy than model choice — invest in the chunker first.",
      "Skill-based assignment only works if skill data is maintained — build the data collection UX before the algorithm.",
      "Sticky sessions on Railway are not sticky after a dyno restart — need Redis session store for true persistence.",
      "Real-time features should be designed for eventual consistency from day one.",
    ],
    roadmap: [
      {
        phase: "v2.0 — Q4 2026",
        items: [
          "Fine-grained RBAC — project admin, contributor, viewer roles",
          "AI sprint planning — auto-populate sprint from backlog by velocity",
          "Slack/Teams integration for task notifications",
        ],
      },
      {
        phase: "v3.0 — 2027",
        items: [
          "Multi-tenant SaaS with organisation isolation",
          "AI retrospective generation from sprint data",
          "Mobile app for async task updates",
        ],
      },
    ],
    techStack: [
      { name: "Next.js",       category: "Frontend" },
      { name: "TypeScript",    category: "Frontend" },
      { name: "Socket.io",     category: "Real-Time" },
      { name: "Gemini API",    category: "AI/ML" },
      { name: "MongoDB Atlas", category: "Database" },
      { name: "Cloudflare R2", category: "Storage" },
      { name: "GitHub API",    category: "Integration" },
      { name: "Vercel",        category: "Deployment" },
      { name: "Railway",       category: "Deployment" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&q=85",
        alt: "SPManager board view",
        caption: "Real-time Kanban board with AI-generated tasks",
      },
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
        alt: "Requirement analysis",
        caption: "AI requirement → task extraction",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     ALMS — AI Market Linkage for Artisans
  ══════════════════════════════════════════════════════════ */
  "alms": {
    level: 3,
    tagline: "AI-powered market access for India's artisans.",
    vision:
      "ALMS bridges the gap between India's marginalized artisans and digital markets — using AI to handle cataloging, image enhancement, and multilingual content so artisans can sell without needing digital skills.",
    status: "Active",
    role: "Solo Engineer & Architect",
    heroImage: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1600&q=90",
    problem:
      "Millions of Indian artisans produce exceptional handcrafted goods but can't access digital markets. Barriers include poor product photography, no product descriptions, language gaps, and zero digital marketing knowledge.",
    whyItMatters:
      "India's handicraft sector employs 7+ million people. Bridging the digital divide for even a fraction of them creates direct economic uplift without intermediaries taking margins.",
    solution:
      "ALMS lets artisans upload phone photos and voice notes. AI enhances images, generates multilingual product descriptions, suggests pricing, and lists products on a searchable marketplace — entirely automated.",
    features: [
      {
        icon: "image",
        title: "AI Image Enhancement",
        description:
          "Removes backgrounds, adjusts lighting, and sharpens product photos — transforming phone camera shots into marketplace-quality images.",
        image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=900&q=80",
      },
      {
        icon: "pencil",
        title: "Multilingual Description Generation",
        description:
          "Gemini AI generates product titles and descriptions in English, Hindi, Kannada, and Tamil from a voice note or a few typed keywords.",
      },
      {
        icon: "trending-up",
        title: "AI Price Discovery",
        description:
          "Analyses similar listings on major marketplaces to suggest competitive pricing based on product category, material, and craftsmanship.",
      },
      {
        icon: "smartphone",
        title: "PWA — Works Offline",
        description:
          "Progressive Web App with offline support — artisans in low-connectivity areas can draft listings offline and sync when connected.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
      },
      {
        icon: "shopping-cart",
        title: "Searchable Marketplace",
        description:
          "Buyers can search, filter by craft type and region, and contact artisans directly — no commission platform in between.",
      },
    ],
    architecture: [
      { layer: "Frontend",    tech: "Next.js 14 + TypeScript", role: "Marketplace UI, artisan dashboard, PWA shell" },
      { layer: "AI Services", tech: "Gemini AI",               role: "Image analysis, description generation, price suggestion" },
      { layer: "Storage",     tech: "Cloudflare R2",           role: "Original and enhanced product images" },
      { layer: "Database",    tech: "MongoDB Atlas",           role: "Artisan profiles, product listings, buyer interactions" },
      { layer: "PWA",         tech: "Service Worker + Cache API", role: "Offline-first draft storage and sync" },
      { layer: "Deployment",  tech: "Vercel",                  role: "Edge CDN, ISR for marketplace pages" },
    ],
    architectureDiagramCaption:
      "Artisan uploads → AI pipeline → enhanced listing → marketplace → buyer discovery",
    deepDives: [
      {
        title: "AI Image Enhancement Pipeline",
        body: "Artisan uploads a phone photo. The image is sent to the Gemini Vision API with a structured prompt requesting background removal guidance and quality assessment. A server-side Sharp pipeline then applies background removal (rembg), auto-levels, and sharpening based on the AI's quality score. The enhanced image is uploaded to Cloudflare R2 alongside the original.",
      },
      {
        title: "Multilingual Content Generation",
        body: "The artisan speaks or types a short description in any supported language. Gemini translates and expands this into a structured product listing: title, short description, material callouts, and care instructions — in all 4 target languages simultaneously. The prompt is engineered to preserve cultural context and craft terminology.",
      },
      {
        title: "PWA Offline Architecture",
        body: "Draft listings are stored in IndexedDB via a service worker. When connectivity is restored, the sync worker uploads images to R2 and pushes listing data to the API. Conflict resolution uses a last-write-wins strategy with a device timestamp.",
        code: `// Service worker: queue failed uploads
self.addEventListener('fetch', (event) => {
  if (event.request.method === 'POST' && isListingAPI(event.request.url)) {
    event.respondWith(
      fetch(event.request.clone()).catch(() => {
        return queueForSync(event.request);
      })
    );
  }
});`,
      },
    ],
    engineeringDecisions: [
      {
        challenge: "Image enhancement — client-side vs. server-side processing",
        decision:  "Server-side via Sharp + rembg",
        why:       "Artisan devices are low-spec. Server-side processing ensures consistent quality regardless of device.",
        result:    "Enhancement time < 3s on average, consistent output quality.",
      },
      {
        challenge: "Multilingual UI — translation at build time vs. runtime",
        decision:  "next-intl at build time for UI, Gemini at runtime for content",
        why:       "Static UI strings are fast and cheap to serve from the edge. Product descriptions need to be dynamic and context-aware.",
        result:    "UI loads instantly; content generation adds ~2s per listing.",
      },
    ],
    metrics: [
      { label: "Image Enhancement",     value: "< 3s",   sub: "avg processing time" },
      { label: "Description Generation", value: "< 4s",  sub: "4 languages simultaneously" },
      { label: "PWA Offline",            value: "100%",  sub: "offline draft capability" },
      { label: "Listings Created",       value: "200+",  sub: "in pilot program" },
    ],
    deployment:
      "Next.js on Vercel Edge CDN with ISR for marketplace pages. MongoDB Atlas for data. Cloudflare R2 for image storage with public CDN URLs.",
    cicd:
      "GitHub Actions — lint + build on PR, Lighthouse CI for PWA score check, auto-deploy on merge to main.",
    monitoring:
      "Vercel Analytics. Lighthouse PWA score tracked on every deploy. MongoDB Atlas alerts for slow queries.",
    challenges: [
      {
        challenge: "Background removal producing artifacts on complex craft backgrounds.",
        solution:  "Added a manual override — artisans can accept or reject the AI enhancement and revert to original.",
      },
      {
        challenge: "Voice input quality varying widely across devices.",
        solution:  "Added a text fallback and a preview-edit step before finalising the AI-generated description.",
      },
    ],
    learnings: [
      "AI tools are only useful if the UX is simple enough for non-technical users — invest heavily in the onboarding flow.",
      "PWA offline support requires careful conflict resolution strategy — don't assume last-write-wins is always correct.",
      "Cultural nuance in language generation requires domain-specific prompt engineering, not just translation.",
    ],
    roadmap: [
      {
        phase: "v2.0 — Q1 2027",
        items: [
          "WhatsApp integration for artisan onboarding and listing updates",
          "AI-powered demand forecasting for seasonal crafts",
          "Direct payment integration with UPI",
        ],
      },
    ],
    techStack: [
      { name: "Next.js 14",    category: "Frontend" },
      { name: "TypeScript",    category: "Frontend" },
      { name: "Gemini AI",     category: "AI/ML" },
      { name: "MongoDB Atlas", category: "Database" },
      { name: "Cloudflare R2", category: "Storage" },
      { name: "PWA / Service Worker", category: "Offline" },
      { name: "Sharp",         category: "Image Processing" },
      { name: "Vercel",        category: "Deployment" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1200&q=85",
        alt: "ALMS marketplace",
        caption: "Artisan marketplace with AI-enhanced listings",
      },
      {
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
        alt: "Artisan dashboard",
        caption: "Artisan listing dashboard — offline-capable PWA",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     STUDENT MANAGER
  ══════════════════════════════════════════════════════════ */
  "student-manager": {
    level: 3,
    tagline: "Every student. Every record. One platform.",
    vision:
      "Student Manager replaces the chaos of spreadsheets, paper registers, and disconnected systems with a single, real-time administrative platform — giving institutions complete visibility over enrollment, academics, and performance.",
    status: "In Production",
    role: "Lead Engineer & Designer",
    heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=90",
    problem:
      "Most colleges manage student data across Excel sheets, WhatsApp groups, and legacy software that doesn't talk to each other. Admission offices lose track of enrollment stages. Faculty can't access attendance or marks in one place. Administrators spend hours generating reports manually.",
    whyItMatters:
      "Institutional inefficiency directly impacts student experience. When a college can't track who is enrolled, who is at-risk academically, or who hasn't paid fees — students fall through the cracks. A unified system changes outcomes, not just workflows.",
    solution:
      "A full-stack Next.js platform with role-based access for Admins, Faculty, and Students. Admissions, attendance, marks, fee tracking, and analytics live in one dashboard backed by MongoDB and secured with JWT auth.",
    features: [
      {
        icon: "users",
        title: "Enrollment Management",
        description:
          "Track the complete student lifecycle from application to graduation — admission stage, documents, fee status, and academic standing in one view.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=80",
      },
      {
        icon: "bar-chart",
        title: "Academic Analytics Dashboard",
        description:
          "Visualise batch-level performance trends, subject-wise pass rates, and individual student progress over semesters with exportable reports.",
      },
      {
        icon: "check-circle",
        title: "Attendance Tracking",
        description:
          "Faculty mark attendance digitally. The system auto-calculates percentages and flags students below the minimum threshold with alerts.",
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80",
      },
      {
        icon: "shield",
        title: "Role-Based Access Control",
        description:
          "Admins see everything. Faculty see their assigned subjects and students. Students see only their own records. All enforced at the API layer.",
      },
      {
        icon: "download",
        title: "Report Generation",
        description:
          "One-click PDF export for mark sheets, attendance registers, and fee receipts — formatted to institutional standards.",
      },
    ],
    architecture: [
      { layer: "Frontend",   tech: "Next.js 14 + TypeScript", role: "Dashboard UI, data tables, chart visualisations, PDF export" },
      { layer: "Backend",    tech: "Next.js API Routes",       role: "REST endpoints for all CRUD operations, auth middleware" },
      { layer: "Database",   tech: "MongoDB Atlas",           role: "Students, courses, attendance, marks, fees collections" },
      { layer: "Auth",       tech: "JWT + NextAuth",          role: "Role-based session management — Admin, Faculty, Student" },
      { layer: "Charts",     tech: "Recharts",                role: "Performance analytics visualisations" },
      { layer: "Deployment", tech: "Vercel",                  role: "Edge CDN, serverless API routes" },
    ],
    deepDives: [
      {
        title: "Role-Based Access Architecture",
        body: "Every API route checks the JWT payload for role. Admin routes are gated with an adminOnly middleware. Faculty routes verify that the requesting user is assigned to the subject or batch they're querying. Students can only read their own document — enforced by matching the JWT userId against the record's studentId field. No client-side guard can bypass this because all data fetching goes through the API.",
      },
      {
        title: "Attendance Calculation Engine",
        body: "Attendance is stored as individual session records (date, subjectId, studentId, present: boolean). A MongoDB aggregation pipeline computes the percentage per student per subject on demand — no denormalised counters that can drift out of sync. The pipeline groups by studentId, sums presents and totals, and returns the percentage in a single query.",
        code: `db.attendance.aggregate([
  { $match: { subjectId: ObjectId(subjectId) } },
  { $group: {
      _id: "$studentId",
      total:   { $sum: 1 },
      present: { $sum: { $cond: ["$present", 1, 0] } }
  }},
  { $addFields: {
      percentage: { $multiply: [{ $divide: ["$present", "$total"] }, 100] }
  }}
])`,
      },
    ],
    engineeringDecisions: [
      {
        challenge: "Server vs. client-side rendering for data-heavy dashboards",
        decision:  "Server Components + streaming for tables, client Components for charts",
        why:       "Tables with hundreds of rows benefit from SSR (no layout shift, faster FCP). Charts need client-side state for interactivity.",
        result:    "Dashboard LCP under 1.8s on 4G.",
      },
      {
        challenge: "Report PDF generation — client-side vs. server-side",
        decision:  "Server-side with @react-pdf/renderer",
        why:       "Client-side PDF libraries are slow on large datasets and expose raw data to the browser. Server-side rendering keeps data secure and is faster.",
        result:    "PDF generation < 1.2s for 200-student mark sheets.",
      },
    ],
    metrics: [
      { label: "Students Managed",   value: "500+",   sub: "in pilot institution" },
      { label: "Dashboard LCP",      value: "1.8s",   sub: "on 4G mobile" },
      { label: "PDF Generation",     value: "< 1.2s", sub: "200-student mark sheet" },
      { label: "API Response",       value: "< 120ms", sub: "p95 across all routes" },
    ],
    deployment:
      "Next.js on Vercel with serverless API routes. MongoDB Atlas M10 cluster. Environment-based role configs for production vs. staging. Vercel preview deployments for every PR.",
    cicd:
      "GitHub Actions — ESLint + TypeScript check on PR, auto-deploy to Vercel on merge to main.",
    monitoring:
      "Vercel Analytics for Core Web Vitals. MongoDB Atlas alerts for slow queries above 200ms.",
    challenges: [
      {
        challenge: "Concurrent faculty marking attendance for the same session caused duplicate records.",
        solution:  "Added a unique compound index on (subjectId, date, studentId) in MongoDB — duplicate inserts are rejected at the DB level.",
      },
      {
        challenge: "PDF export timing out for large batches.",
        solution:  "Moved PDF generation to a background job with a polling endpoint — UI shows a progress indicator instead of blocking.",
      },
    ],
    learnings: [
      "Role-based access is only trustworthy when enforced at the data layer, not the UI.",
      "MongoDB aggregation pipelines can replace a lot of application-level data processing — learn them well.",
      "Server Components in Next.js 14 genuinely improve time-to-interactive for data-heavy admin dashboards.",
    ],
    roadmap: [
      {
        phase: "v2.0 — 2026",
        items: [
          "AI-driven at-risk student detection based on attendance and marks trends",
          "Parent portal with read-only access to ward's academic records",
          "Bulk import via CSV for legacy data migration",
        ],
      },
    ],
    techStack: [
      { name: "Next.js 14",    category: "Frontend" },
      { name: "TypeScript",    category: "Frontend" },
      { name: "MongoDB Atlas", category: "Database" },
      { name: "NextAuth",      category: "Auth" },
      { name: "Recharts",      category: "Visualisation" },
      { name: "Vercel",        category: "Deployment" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=85",
        alt: "Student Manager dashboard",
        caption: "Admin dashboard — enrollment overview",
      },
      {
        src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80",
        alt: "Attendance tracking",
        caption: "Faculty attendance marking interface",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     ISDC PLATFORM
  ══════════════════════════════════════════════════════════ */
  "isdc-platform": {
    level: 3,
    tagline: "Where startups take their first step.",
    vision:
      "The ISDC platform is the digital front door for India's next generation of student entrepreneurs — a place where ideas become ventures, mentors become partners, and college corridors become launchpads.",
    status: "Live",
    role: "Lead Engineer & Designer",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=90",
    problem:
      "India's college innovation cells are invisible online. Students with ideas can't find mentors. Startups that graduated from these programs have no record of their journey. Events go unannounced beyond campus walls. The potential of campus entrepreneurship is leaking because there's no digital infrastructure to hold it.",
    whyItMatters:
      "India produces millions of engineering graduates every year. A small fraction of them have ideas that could become companies — but without discovery, mentorship, and visibility infrastructure, those ideas die in hostel rooms. ISDC is the platform that stops that.",
    solution:
      "A fully responsive Next.js platform that showcases ISDC's startup portfolio, mentors, events, and resources. Built for discovery — SEO-optimised, performance-first, and designed to convert visitors into applicants.",
    features: [
      {
        icon: "star",
        title: "Startup Showcase",
        description:
          "A curated portfolio of startups incubated at ISDC — each with their story, traction, team, and contact details. Filterable by domain, year, and stage.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
      },
      {
        icon: "calendar",
        title: "Events & Programs",
        description:
          "Live and upcoming events — hackathons, pitch competitions, workshops, and guest lectures — with registration flow and archive of past events.",
      },
      {
        icon: "users",
        title: "Mentor Network",
        description:
          "Profiles of mentors and industry advisors with expertise tags, availability, and a direct connection request flow.",
      },
      {
        icon: "globe",
        title: "SEO-First Architecture",
        description:
          "Every page server-rendered with structured metadata, Open Graph tags, and a sitemap — built to rank and be discovered by students searching for startup support.",
      },
    ],
    architecture: [
      { layer: "Frontend",   tech: "Next.js + Tailwind CSS", role: "SSG pages, responsive layout, animation, SEO metadata" },
      { layer: "Content",    tech: "TypeScript data files",  role: "All content in typed TS files — no CMS dependency" },
      { layer: "Deployment", tech: "Vercel Edge CDN",        role: "Global CDN, ISR for content freshness" },
    ],
    architectureDiagramCaption: "Static pages served from Vercel edge — sub-100ms TTFB globally",
    deepDives: [
      {
        title: "Performance-First Build Strategy",
        body: "Every page is statically generated at build time. Images use Next.js Image Optimisation for WebP conversion and lazy loading. Fonts are preloaded with display:swap. The result is a Lighthouse score of 98/100 on Performance. No JavaScript hydration on static pages — content is pure HTML from the CDN edge.",
      },
      {
        title: "Content Architecture Without a CMS",
        body: "All startup, mentor, and event data lives in typed TypeScript files. This means content editors (who know basic JSON) can update data, CI rebuilds the site, and Vercel deploys within 45 seconds. No CMS subscription, no vendor lock-in, full type safety.",
      },
    ],
    engineeringDecisions: [
      {
        challenge: "CMS vs. TypeScript data files for content management",
        decision:  "TypeScript data files with CI/CD",
        why:       "The team is technical. A CMS adds cost and complexity. Typed files give autocomplete, validation, and zero runtime errors.",
        result:    "Content updates deploy in 45 seconds with zero runtime errors.",
      },
      {
        challenge: "ISR vs. full SSG for event pages",
        decision:  "ISR with 1-hour revalidation for event pages",
        why:       "Events update infrequently — full SSG would require a manual redeploy for every update. ISR gives freshness without a rebuild.",
        result:    "Event pages always within 1 hour of the latest data.",
      },
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "98/100", sub: "static pages" },
      { label: "TTFB",                   value: "< 80ms", sub: "Vercel edge CDN" },
      { label: "Build Time",             value: "< 45s",  sub: "full site rebuild" },
      { label: "Cumulative Layout Shift", value: "0.02",  sub: "no layout instability" },
    ],
    deployment:
      "Next.js on Vercel. All static pages on global edge CDN. ISR for dynamic content. Custom domain with SSL.",
    cicd: "GitHub Actions — build + Lighthouse CI check on PR. Auto-deploy on merge to main.",
    monitoring: "Vercel Analytics. Lighthouse CI score tracked on every deploy.",
    challenges: [
      {
        challenge: "Maintaining consistent design across 40+ pages contributed by multiple team members.",
        solution:  "Built a shared component library with Tailwind config tokens — all spacing, colour, and typography enforced by the design system.",
      },
    ],
    learnings: [
      "Static generation + edge CDN is the fastest and cheapest architecture for content sites — use it by default.",
      "TypeScript data files work better than a CMS for small technical teams who can edit JSON.",
      "Lighthouse CI in the pipeline catches performance regressions before they reach production.",
    ],
    roadmap: [
      {
        phase: "v2.0 — 2026",
        items: [
          "Startup application portal with form submission and status tracking",
          "Mentor matching algorithm based on startup domain and stage",
          "Alumni startup tracker — where are they now?",
        ],
      },
    ],
    techStack: [
      { name: "Next.js",      category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "TypeScript",   category: "Frontend" },
      { name: "Vercel",       category: "Deployment" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85",
        alt: "ISDC platform homepage",
        caption: "Homepage — startup showcase and programs",
      },
      {
        src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&q=80",
        alt: "Mentor network",
        caption: "Mentor discovery and connection flow",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     AEROPHILIA 2025
  ══════════════════════════════════════════════════════════ */
  "aerophilia-2025": {
    level: 3,
    tagline: "The future of aviation, on one platform.",
    vision:
      "Aerophilia 2025 is the digital experience layer for India's premier aerospace and aviation showcase — connecting enthusiasts, students, professionals, and innovators through a platform built for the industry's scale and ambition.",
    status: "Live",
    role: "Lead Engineer & Designer",
    heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=90",
    problem:
      "Aviation events in India are massive in scope but tiny in digital presence. Registration happens on Google Forms. Information scatters across Instagram and WhatsApp. Exhibitors have no way to showcase their presence digitally before the event. Attendees don't know what to expect until they arrive.",
    whyItMatters:
      "Aviation is one of the fastest-growing sectors in India. The professionals and students who drive it deserve a digital home that matches that ambition — not a PDF itinerary and a WhatsApp group.",
    solution:
      "A full-featured event platform built with React, Tailwind, and Firebase — covering exhibitor listings, event schedule, registration, photo gallery, and live updates. Designed to work as both a pre-event marketing tool and an on-site companion.",
    features: [
      {
        icon: "calendar",
        title: "Live Event Schedule",
        description:
          "Day-by-day schedule with session details, speaker bios, and venue maps. Real-time updates when sessions change or are added.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80",
      },
      {
        icon: "users",
        title: "Exhibitor Directory",
        description:
          "Filterable directory of all exhibitors — company profile, booth number, product focus, and contact information.",
      },
      {
        icon: "clipboard",
        title: "Event Registration",
        description:
          "Online registration with ticket tiers, instant confirmation email, and QR-code pass generation.",
      },
      {
        icon: "image",
        title: "Photo Gallery",
        description:
          "Lazy-loaded, paginated photo gallery from past Aerophilia editions — optimised for mobile with pinch-to-zoom.",
      },
    ],
    architecture: [
      { layer: "Frontend",   tech: "React + TypeScript",  role: "SPA with client-side routing, responsive layouts" },
      { layer: "Styling",    tech: "Tailwind CSS",        role: "Utility-first design system, dark/light variants" },
      { layer: "Backend",    tech: "Firebase",            role: "Firestore for schedule/exhibitor data, Auth for admin panel" },
      { layer: "Storage",    tech: "Firebase Storage",    role: "Gallery images with CDN URLs" },
      { layer: "Deployment", tech: "Vercel",              role: "Edge CDN, instant rollbacks" },
    ],
    deepDives: [
      {
        title: "Real-Time Schedule Updates",
        body: "The event schedule is stored in Firestore with a real-time listener on the client. When an admin updates a session from the admin panel, all connected clients see the change within 200ms — no polling, no page refresh. This was critical during the event when session times changed due to speaker delays.",
      },
      {
        title: "Gallery Optimisation",
        body: "The gallery needed to load 300+ high-res images without killing page performance. Solution: images stored in Firebase Storage with a Cloud Function that auto-generates WebP thumbnails on upload. The gallery loads thumbnails first, full resolution on click. Intersection Observer triggers lazy loading — only images in the viewport download.",
      },
    ],
    engineeringDecisions: [
      {
        challenge: "Real-time schedule vs. static build",
        decision:  "Firestore real-time listeners",
        why:       "Event schedules change during the event. A static build can't handle that. Firestore's real-time SDK makes live updates trivial.",
        result:    "Zero schedule sync issues during 2-day event.",
      },
    ],
    metrics: [
      { label: "Gallery Images",      value: "300+",   sub: "lazy-loaded WebP thumbnails" },
      { label: "Schedule Sync",       value: "< 200ms", sub: "Firestore real-time update" },
      { label: "Registrations",       value: "1,200+", sub: "processed through platform" },
      { label: "Mobile Score",        value: "94/100", sub: "Lighthouse mobile" },
    ],
    deployment:
      "React SPA on Vercel. Firebase Firestore + Storage for backend. Firebase Auth for admin panel. Cloud Functions for image processing.",
    cicd: "GitHub Actions — build check on PR. Auto-deploy to Vercel on merge to main.",
    monitoring: "Firebase Analytics for user behaviour. Vercel Analytics for performance.",
    challenges: [
      {
        challenge: "Gallery performance degrading on mid-range Android phones.",
        solution:  "Switched from CSS grid layout to a virtual list — only 10 images rendered in the DOM at once, rest are virtualised.",
      },
    ],
    learnings: [
      "Firestore real-time listeners are powerful but need careful unsubscription to avoid memory leaks in React.",
      "Image optimisation is not optional for media-heavy sites — WebP + lazy loading is the minimum bar.",
      "Event platforms need an admin panel built alongside the public site — content updates happen live.",
    ],
    roadmap: [
      {
        phase: "Aerophilia 2026",
        items: [
          "Live stream integration for keynote sessions",
          "Attendee networking — match by interest and role",
          "Mobile app (React Native) for on-site navigation",
        ],
      },
    ],
    techStack: [
      { name: "React",       category: "Frontend" },
      { name: "TypeScript",  category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Firebase",    category: "Backend / DB" },
      { name: "Node.js",     category: "Cloud Functions" },
      { name: "Vercel",      category: "Deployment" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85",
        alt: "Aerophilia homepage",
        caption: "Event homepage with schedule and registration CTA",
      },
      {
        src: "https://images.unsplash.com/photo-1569061289462-4a1c29a56e99?w=900&q=80",
        alt: "Exhibitor directory",
        caption: "Filterable exhibitor directory",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     CAMPUSLINK
  ══════════════════════════════════════════════════════════ */
  "campuslink": {
    level: 3,
    tagline: "One campus. One platform. Zero friction.",
    vision:
      "CampusLink collapses the fragmented digital life of a college — WhatsApp announcements, email chains, scattered portals — into a single, intelligent campus hub that actually works the way students and faculty think.",
    status: "Active",
    role: "Lead Engineer & Architect",
    heroImage: "https://m.economictimes.com/thumb/height-450,width-600,imgsize-202187,msid-121854533/navi-mumbais-global-education-hub.jpg",
    problem:
      "Campus communication is broken. Important announcements get buried in 50-message WhatsApp threads. Event registrations are Google Forms shared via screenshots. Faculty post assignments in three different places. Students miss deadlines not because they're careless, but because information is everywhere and nowhere.",
    whyItMatters:
      "Poor campus communication isn't just an inconvenience — it creates inequity. Students who are in the right WhatsApp group get opportunities; those who aren't, miss them. A centralised platform levels that playing field entirely.",
    solution:
      "A React + Supabase campus platform with an AI assistant (Gemini) for answering campus queries, real-time announcements, event discovery, resource sharing, and a faculty-student communication layer — all in one authenticated app.",
    features: [
      {
        icon: "bot",
        title: "AI Campus Assistant",
        description:
          "A Gemini-powered chatbot that answers questions about timetables, exam schedules, campus facilities, and academic policies — trained on campus-specific context.",
        image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80",
      },
      {
        icon: "zap",
        title: "Real-Time Announcements",
        description:
          "Faculty and admins post announcements that appear instantly on student dashboards via Supabase real-time subscriptions. Priority announcements trigger push notifications.",
      },
      {
        icon: "calendar",
        title: "Event Hub",
        description:
          "Discover, register, and get reminders for all campus events — clubs, fests, workshops, and academic events in a unified calendar view.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=80",
      },
      {
        icon: "folder",
        title: "Resource Library",
        description:
          "Faculty upload notes, past papers, and assignments — students access them by subject, semester, and branch. Version history for updated documents.",
      },
      {
        icon: "shield",
        title: "Role-Based Ecosystem",
        description:
          "Students, faculty, club coordinators, and admins each have scoped views and permissions enforced by Supabase Row Level Security.",
      },
    ],
    architecture: [
      { layer: "Frontend",    tech: "React + TypeScript",   role: "SPA, real-time UI updates, AI chat interface" },
      { layer: "Backend",     tech: "Supabase",             role: "PostgreSQL DB, Auth, Row Level Security, Storage" },
      { layer: "Real-Time",   tech: "Supabase Realtime",    role: "Live announcements, presence indicators" },
      { layer: "AI",          tech: "Gemini API",           role: "Campus assistant — RAG over campus knowledge base" },
      { layer: "Deployment",  tech: "Netlify",              role: "CDN deployment, branch previews" },
    ],
    architectureDiagramCaption:
      "Client → Supabase (Auth + RLS + Realtime) → PostgreSQL | Gemini API for AI queries",
    deepDives: [
      {
        title: "AI Campus Assistant with RAG",
        body: "The Gemini-powered assistant is grounded with a campus-specific knowledge base — timetables, academic calendar, faculty directory, and policy documents stored as embeddings in pgvector. When a student asks 'When is the internal assessment for Data Structures?', the system retrieves the most relevant context chunks and injects them into the Gemini prompt before answering. This prevents hallucinations about campus-specific data.",
      },
      {
        title: "Supabase RLS as the Security Layer",
        body: "Every table has Row Level Security policies. Students can only read announcements targeted to their branch and year. Faculty can only modify resources for subjects they're assigned to. Admins have unrestricted access. No application-level permission checks — all enforced at the database layer. This makes the system secure even if the frontend has a bug.",
        code: `-- RLS policy: students see only their branch announcements
CREATE POLICY "students_view_branch_announcements"
ON announcements FOR SELECT
USING (
  branch = (SELECT branch FROM students WHERE id = auth.uid())
  OR branch = 'all'
);`,
      },
    ],
    engineeringDecisions: [
      {
        challenge: "Custom backend vs. Supabase for a campus platform",
        decision:  "Supabase — PostgreSQL + Auth + RLS + Realtime in one",
        why:       "Building auth, real-time, and file storage from scratch would take weeks. Supabase gives all of it with type-safe client generation. RLS is more secure than application-level guards.",
        result:    "Full backend in 2 weeks. Zero auth-related security incidents.",
      },
      {
        challenge: "Campus AI — fine-tuned model vs. RAG over Gemini",
        decision:  "RAG over Gemini with pgvector",
        why:       "Fine-tuning requires large labelled datasets we don't have. RAG with a well-curated knowledge base gives accurate, campus-specific answers with no training cost.",
        result:    "AI assistant accuracy rated 4.4/5 by student testers.",
      },
    ],
    metrics: [
      { label: "AI Assistant Accuracy", value: "4.4/5",  sub: "student satisfaction score" },
      { label: "Real-Time Latency",     value: "< 150ms", sub: "announcement delivery" },
      { label: "Active Users",          value: "300+",   sub: "in pilot cohort" },
      { label: "Resources Uploaded",    value: "500+",   sub: "notes, papers, assignments" },
    ],
    deployment:
      "React SPA on Netlify. Supabase hosted PostgreSQL + Auth + Storage. Gemini API for AI queries. pgvector for semantic search.",
    cicd: "GitHub Actions — lint + type check on PR. Netlify preview deploy on every branch.",
    monitoring: "Supabase dashboard for DB performance and Auth events. Netlify Analytics.",
    challenges: [
      {
        challenge: "AI assistant giving outdated information from a stale knowledge base.",
        solution:  "Built an admin panel for knowledge base updates — new documents are chunked and re-embedded automatically via a Supabase Edge Function trigger.",
      },
      {
        challenge: "Real-time connections dropping on poor campus Wi-Fi.",
        solution:  "Added exponential backoff reconnection with a toast notification when the connection drops, so users know their data may be stale.",
      },
    ],
    learnings: [
      "Supabase RLS eliminates an entire class of security bugs — enforce access at the DB, not the client.",
      "RAG accuracy depends on knowledge base quality more than model choice — garbage in, garbage out.",
      "Campus software needs offline-resilient UX — network conditions in institutions are unpredictable.",
    ],
    roadmap: [
      {
        phase: "v2.0 — 2026",
        items: [
          "Mobile app (React Native) with offline announcement caching",
          "AI-powered timetable conflict detection",
          "Integration with institution ERP for live marks and attendance",
        ],
      },
    ],
    techStack: [
      { name: "React",        category: "Frontend" },
      { name: "TypeScript",   category: "Frontend" },
      { name: "Supabase",     category: "Backend / DB" },
      { name: "PostgreSQL",   category: "Database" },
      { name: "pgvector",     category: "AI / Search" },
      { name: "Gemini API",   category: "AI" },
      { name: "Netlify",      category: "Deployment" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=85",
        alt: "CampusLink dashboard",
        caption: "Student dashboard — announcements and events",
      },
      {
        src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80",
        alt: "AI campus assistant",
        caption: "Gemini-powered campus assistant interface",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     BRAINSCRIPT
  ══════════════════════════════════════════════════════════ */
  "brainscript": {
    level: 3,
    tagline: "Automate decisions. Script intelligence.",
    vision:
      "BrainScript is a modular AI scripting engine that lets developers define complex decision-making workflows in Python — combining rule-based logic, external data sources, and Gemini AI into pipelines that think, adapt, and execute autonomously.",
    status: "Active",
    role: "Solo Engineer & Architect",
    heroImage: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1600&q=90",
    problem:
      "Building intelligent automation usually means stitching together LLM calls, conditionals, API calls, and data transforms in spaghetti code. There is no clean abstraction for 'AI-powered decision pipelines' that is both powerful enough for real use cases and simple enough to reason about.",
    whyItMatters:
      "As AI becomes operational infrastructure — scheduling, triage, routing, analysis — developers need a programming model that treats AI reasoning as a first-class primitive alongside conditionals and loops. BrainScript is that model.",
    solution:
      "A Python-based pipeline engine with a React + TypeScript UI. Developers define nodes (AI, logic, data, action) and connect them into directed graphs. The engine executes the graph, handles retries, logs every decision, and exposes results via a REST API.",
    features: [
      {
        icon: "bot",
        title: "AI Decision Nodes",
        description:
          "Wrap any Gemini API call as a pipeline node — with structured output schemas, retry logic, and fallback values. AI reasoning becomes a testable, observable unit.",
        image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80",
      },
      {
        icon: "git-branch",
        title: "Conditional Branching",
        description:
          "Define if/else branches based on AI output, API responses, or computed values. Pipelines adapt to runtime data rather than following a fixed script.",
      },
      {
        icon: "database",
        title: "Data Source Connectors",
        description:
          "Built-in connectors for MongoDB, REST APIs, and file inputs. Any node can pull external data as part of its execution context.",
      },
      {
        icon: "activity",
        title: "Execution Tracing",
        description:
          "Every pipeline run is logged — inputs, outputs, decisions, latencies, and errors at each node. Full observability into what the AI decided and why.",
      },
      {
        icon: "settings",
        title: "Visual Pipeline Builder",
        description:
          "A React-based drag-and-drop interface for constructing and visualising pipelines — no Python required for non-technical users.",
      },
    ],
    architecture: [
      { layer: "Frontend",    tech: "React + TypeScript",  role: "Visual pipeline builder, execution trace viewer, results dashboard" },
      { layer: "Engine",      tech: "Python",              role: "Pipeline execution runtime, node registry, graph traversal" },
      { layer: "AI",          tech: "Gemini API",          role: "AI decision nodes — structured output with JSON schema validation" },
      { layer: "Database",    tech: "MongoDB",             role: "Pipeline definitions, execution logs, results store" },
      { layer: "API",         tech: "FastAPI",             role: "REST interface between frontend and Python engine" },
      { layer: "Deployment",  tech: "Docker + Render",     role: "Containerised engine, REST API on Render" },
    ],
    deepDives: [
      {
        title: "Pipeline Execution Engine",
        body: "The engine represents a pipeline as a directed acyclic graph (DAG). Nodes are executed in topological order. Each node receives the outputs of its predecessor nodes as context. The engine uses Python's asyncio for concurrent independent branches — nodes with no dependency on each other run in parallel, reducing total pipeline latency by up to 60% on complex graphs.",
        code: `async def execute_pipeline(pipeline: Pipeline, inputs: dict) -> dict:
    graph = build_dag(pipeline.nodes, pipeline.edges)
    results = {**inputs}
    for node_id in topological_sort(graph):
        node = graph[node_id]
        ctx = {k: results[k] for k in node.inputs if k in results}
        results[node_id] = await node.execute(ctx)
    return results`,
      },
      {
        title: "Structured AI Output with Schema Validation",
        body: "Every AI node defines a JSON Schema for its expected output. The Gemini call is prompted to return JSON matching the schema. The engine validates the response against the schema before passing it to the next node — if validation fails, the node retries up to 3 times with the validation error appended to the prompt. This makes AI outputs reliable enough to use as control flow inputs.",
      },
    ],
    engineeringDecisions: [
      {
        challenge: "Synchronous vs. async pipeline execution",
        decision:  "Async with asyncio and parallel branch execution",
        why:       "Sequential execution would be too slow for pipelines with independent branches making multiple API calls. Async cuts latency on parallel branches by 60%.",
        result:    "Average pipeline execution time reduced from 8s to 3.2s on complex graphs.",
      },
      {
        challenge: "How to make AI output reliable for control flow",
        decision:  "JSON Schema validation with retry + error feedback",
        why:       "Unstructured LLM output can't drive conditionals reliably. Schema validation + retry with error context makes the AI output deterministic enough for production use.",
        result:    "AI node output validation success rate: 96% on first attempt, 99.5% within 3 retries.",
      },
    ],
    metrics: [
      { label: "Pipeline Latency Reduction", value: "60%",   sub: "async vs. sequential on parallel branches" },
      { label: "AI Output Validation",       value: "99.5%", sub: "within 3 retry attempts" },
      { label: "Max Nodes Per Pipeline",     value: "50+",   sub: "tested without degradation" },
      { label: "API Response",               value: "< 80ms", sub: "pipeline trigger endpoint" },
    ],
    deployment:
      "Python engine containerised with Docker, deployed on Render. React frontend on Vercel. MongoDB Atlas for pipeline and execution storage.",
    cicd: "GitHub Actions — Python pytest on PR, React type check + lint, auto-deploy on green CI.",
    monitoring: "Render metrics for engine CPU/memory. MongoDB Atlas for slow query alerts. Custom execution trace logging per pipeline run.",
    challenges: [
      {
        challenge: "Circular dependencies in user-defined pipeline graphs causing infinite loops.",
        solution:  "Added cycle detection using DFS before execution — pipelines with cycles are rejected at save time with a clear error message.",
      },
      {
        challenge: "Gemini rate limits causing pipeline failures under concurrent execution.",
        solution:  "Implemented a token bucket rate limiter in the AI node executor — concurrent AI calls are queued and smoothed over time.",
      },
    ],
    learnings: [
      "DAG execution models are the right abstraction for AI pipelines — topological sort naturally handles dependencies.",
      "JSON Schema validation with retry feedback is more reliable than prompt engineering alone for structured AI output.",
      "Asyncio in Python is powerful but requires careful exception handling — unhandled async exceptions silently kill tasks.",
    ],
    roadmap: [
      {
        phase: "v2.0 — 2026",
        items: [
          "Pipeline marketplace — share and fork community pipelines",
          "Scheduled pipeline execution with cron triggers",
          "Multi-model support — GPT-4o, Claude, Gemini switchable per node",
        ],
      },
    ],
    techStack: [
      { name: "Python",      category: "Engine" },
      { name: "FastAPI",     category: "API" },
      { name: "React",       category: "Frontend" },
      { name: "TypeScript",  category: "Frontend" },
      { name: "Gemini API",  category: "AI" },
      { name: "MongoDB",     category: "Database" },
      { name: "Docker",      category: "Infrastructure" },
      { name: "Render",      category: "Deployment" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=85",
        alt: "BrainScript pipeline builder",
        caption: "Visual pipeline builder — nodes and connections",
      },
      {
        src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
        alt: "Execution trace",
        caption: "Pipeline execution trace — inputs, outputs, latencies",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     HOSTEL MANAGEMENT
  ══════════════════════════════════════════════════════════ */
  "hostel-management": {
    level: 3,
    tagline: "Digitise hostel operations end to end.",
    vision:
      "Hostel Management transforms the paper-and-spreadsheet nightmare of running a college hostel into a clean, real-time digital system — giving wardens, administrators, and students a single source of truth for every room, fee, and complaint.",
    status: "In Production",
    role: "Lead Engineer & Designer",
    heroImage: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1600&q=90",
    problem:
      "Most college hostels still run on manual processes: room allocation in Excel, fee collection tracked in registers, complaints submitted on paper slips. Wardens spend hours on admin. Students wait days for responses. Errors in fee records cause disputes. There is no audit trail.",
    whyItMatters:
      "A hostel houses hundreds of students. When its administration is broken, real problems follow — fee disputes, untracked maintenance issues, misallocated rooms. Digitising operations isn't just efficiency; it's accountability.",
    solution:
      "A Next.js + Supabase full-stack application with modules for room allocation, student records, fee tracking with payment history, complaint management, and a warden dashboard with real-time occupancy overview.",
    features: [
      {
        icon: "layout",
        title: "Room Allocation Dashboard",
        description:
          "Visual floor map showing room occupancy, vacancy, and maintenance status. Drag-and-drop allocation with conflict detection.",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&q=80",
      },
      {
        icon: "clipboard",
        title: "Fee Management",
        description:
          "Track monthly fees, pending dues, and payment history per student. Auto-generate receipts and outstanding balance reports with one click.",
      },
      {
        icon: "alert-circle",
        title: "Complaint Tracking",
        description:
          "Students submit complaints digitally — categorised by type (maintenance, cleanliness, security). Wardens assign and track resolution status with timestamps.",
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80",
      },
      {
        icon: "bar-chart",
        title: "Occupancy Analytics",
        description:
          "Real-time occupancy rates, vacancy trends, and revenue forecasts. Monthly and semester-wise breakdowns for administrative planning.",
      },
      {
        icon: "shield",
        title: "Role-Based Access",
        description:
          "Wardens manage their own floors. Admins oversee the full hostel. Students access only their own profile and complaints. All enforced by Supabase RLS.",
      },
    ],
    architecture: [
      { layer: "Frontend",   tech: "Next.js 14 + TypeScript", role: "Dashboard UI, room map, fee tables, complaint tracker" },
      { layer: "Backend",    tech: "Next.js API Routes",       role: "CRUD for rooms, students, fees, complaints" },
      { layer: "Database",   tech: "Supabase PostgreSQL",      role: "All operational data with RLS policies" },
      { layer: "Auth",       tech: "Supabase Auth",            role: "Email auth, role assignment (Admin/Warden/Student)" },
      { layer: "Storage",    tech: "Supabase Storage",         role: "Student ID documents, complaint attachments" },
      { layer: "Deployment", tech: "Vercel",                   role: "Edge CDN, serverless API routes" },
    ],
    deepDives: [
      {
        title: "Room Allocation with Conflict Detection",
        body: "Room allocation runs a check before committing: is the room occupied? Is the student already assigned elsewhere? Is the room under maintenance? These three checks happen in a single PostgreSQL transaction — if any fails, the whole allocation rolls back. This prevents the double-allocation bugs that plagued the previous Excel-based system.",
        code: `-- Atomic room allocation with conflict check
BEGIN;
  SELECT 1 FROM rooms WHERE id = $1 AND status = 'vacant' FOR UPDATE;
  SELECT 1 FROM students WHERE id = $2 AND room_id IS NULL FOR UPDATE;
  UPDATE rooms SET status = 'occupied', student_id = $2 WHERE id = $1;
  UPDATE students SET room_id = $1 WHERE id = $2;
COMMIT;`,
      },
      {
        title: "Fee Calculation Engine",
        body: "Fees are computed from a base hostel fee, optional meal plan, and any ad-hoc charges (laundry, guest stay). The calculation is done server-side on demand — no denormalised balance fields that can drift. A Supabase function computes the current balance by summing charges and subtracting payments, returning a consistent view every time.",
      },
    ],
    engineeringDecisions: [
      {
        challenge: "Room allocation atomicity — preventing double allocation",
        decision:  "PostgreSQL transactions with SELECT FOR UPDATE",
        why:       "Application-level checks have TOCTOU race conditions. Database-level locks with FOR UPDATE prevent concurrent allocation of the same room.",
        result:    "Zero double-allocation incidents since deployment.",
      },
      {
        challenge: "Fee balance — computed field vs. stored balance",
        decision:  "Computed on demand via DB function",
        why:       "Stored balances drift when payments are edited or reversed. Computing from source records is always consistent.",
        result:    "Zero fee discrepancy disputes in 6 months of production use.",
      },
    ],
    metrics: [
      { label: "Students Managed",    value: "800+",  sub: "across 3 hostel blocks" },
      { label: "Fee Disputes",        value: "0",     sub: "in 6 months of production" },
      { label: "Complaint Resolution", value: "2.1 days", sub: "avg time-to-close" },
      { label: "Double Allocations",  value: "0",     sub: "since atomic allocation" },
    ],
    deployment:
      "Next.js on Vercel. Supabase PostgreSQL with RLS. Supabase Auth for multi-role login. Supabase Storage for documents. Production database in ap-south-1 (Mumbai) for low latency.",
    cicd: "GitHub Actions — TypeScript + ESLint on PR. Auto-deploy to Vercel on merge.",
    monitoring: "Supabase dashboard for slow queries and Auth events. Vercel Analytics for UI performance.",
    challenges: [
      {
        challenge: "Wardens editing each other's floor data due to misconfigured RLS policy.",
        solution:  "Rewrote RLS policies with explicit floor_id scoping — each warden can only modify records where floor_id matches their assigned floor.",
      },
    ],
    learnings: [
      "PostgreSQL transactions are the right tool for allocation problems — optimistic locking at the application layer is not.",
      "Computed balances from source records are always more trustworthy than stored derived fields.",
      "RLS policy testing needs dedicated test cases — a misconfigured policy is a security and data integrity issue.",
    ],
    roadmap: [
      {
        phase: "v2.0 — 2026",
        items: [
          "Online fee payment with Razorpay integration",
          "WhatsApp notifications for fee reminders and complaint updates",
          "Visitor management log with entry/exit tracking",
        ],
      },
    ],
    techStack: [
      { name: "Next.js 14",  category: "Frontend" },
      { name: "TypeScript",  category: "Frontend" },
      { name: "Supabase",    category: "Backend / DB" },
      { name: "PostgreSQL",  category: "Database" },
      { name: "Vercel",      category: "Deployment" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=85",
        alt: "Hostel management dashboard",
        caption: "Warden dashboard — room occupancy overview",
      },
      {
        src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80",
        alt: "Complaint tracker",
        caption: "Complaint management with status tracking",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     WAF-TRANSFORMER
  ══════════════════════════════════════════════════════════ */
  "waf-transformer": {
    level: 3,
    tagline: "A firewall that thinks before it blocks.",
    vision:
      "Waf-Transformer proves that transformer-based NLP models can be practical security infrastructure — combining the speed of rule-based WAFs with the contextual intelligence of DistilBERT to detect attacks that pattern matching alone will never catch.",
    status: "Research Prototype",
    role: "Solo Researcher & Engineer",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=90",
    problem:
      "Traditional Web Application Firewalls rely on regex patterns and known attack signatures. They block yesterday's attacks well. But novel payloads — obfuscated SQL injections, polymorphic XSS, zero-day command injections — slip through because they don't match any known pattern. The attacker just needs one variation that isn't in the ruleset.",
    whyItMatters:
      "OWASP's top 10 vulnerabilities have been the same for over a decade. Injection attacks alone account for the majority of web application breaches. The industry has known about the problem for years — but signature-based defences keep losing to creative attackers. ML-powered WAFs are not the future; they're the necessary present.",
    solution:
      "A hybrid WAF prototype that layers a DistilBERT transformer model on top of a traditional rule engine. Requests that pass the rule layer are scored by the transformer for semantic attack likelihood. The system learns from request context, not just patterns — detecting obfuscated and novel payloads that regex can't catch.",
    features: [
      {
        icon: "shield",
        title: "DistilBERT Threat Classification",
        description:
          "Each incoming HTTP request is tokenised and scored by a fine-tuned DistilBERT model trained on a labelled dataset of benign and malicious web requests. Confidence scores above the threshold trigger a block.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80",
      },
      {
        icon: "layers",
        title: "Hybrid Rule + ML Pipeline",
        description:
          "Known attack signatures are caught by a fast rule layer (O(1) lookup). Novel or ambiguous requests escalate to the ML layer — balancing throughput with detection accuracy.",
      },
      {
        icon: "activity",
        title: "Real-Time Request Dashboard",
        description:
          "A React dashboard shows live request traffic, blocked requests with threat categories, confidence scores, and model decision explanations.",
      },
      {
        icon: "database",
        title: "Attack Pattern Analysis",
        description:
          "Historical attack logs are clustered by semantic similarity — surfacing attack campaign patterns and novel payload families that weren't in the original training data.",
      },
    ],
    architecture: [
      { layer: "Ingestion",   tech: "Node.js proxy",            role: "HTTP request capture, forwarding, blocking" },
      { layer: "Rule Engine", tech: "ModSecurity-inspired rules", role: "Fast O(1) signature matching for known attacks" },
      { layer: "ML Layer",    tech: "Python + DistilBERT",      role: "Transformer-based semantic threat classification" },
      { layer: "Model Serving", tech: "FastAPI",               role: "REST endpoint for ML inference, < 20ms p95" },
      { layer: "Frontend",    tech: "React.js",                 role: "Live dashboard — traffic, blocks, scores" },
      { layer: "Storage",     tech: "SQLite + JSON logs",       role: "Request log, attack pattern storage" },
    ],
    deepDives: [
      {
        title: "DistilBERT Fine-Tuning for WAF",
        body: "DistilBERT was chosen over BERT for its 60% size reduction with only 3% accuracy loss — critical for latency-sensitive security middleware. The model was fine-tuned on a dataset of 80,000 labelled HTTP requests (SQL injection, XSS, CSRF, path traversal, benign). Training used a binary classification head on the [CLS] token representation. The final model achieves 94.2% accuracy on the test set with a false positive rate of 1.8%.",
        code: `from transformers import DistilBertForSequenceClassification, Trainer
model = DistilBertForSequenceClassification.from_pretrained(
    "distilbert-base-uncased",
    num_labels=2  # benign / malicious
)
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_ds,
    eval_dataset=eval_ds,
    compute_metrics=compute_metrics,
)
trainer.train()`,
      },
      {
        title: "Hybrid Pipeline Latency Optimisation",
        body: "The rule layer processes requests in under 0.5ms. The ML layer adds 18ms on average (DistilBERT inference on CPU). To minimise impact: only requests that pass the rule layer AND have a query parameter or request body escalate to ML. Static asset requests, GET requests with no parameters, and known-safe IPs bypass ML entirely. This reduces ML invocations by 73% while maintaining coverage of all high-risk request types.",
      },
    ],
    engineeringDecisions: [
      {
        challenge: "BERT vs. DistilBERT for inference latency",
        decision:  "DistilBERT",
        why:       "BERT inference at 45ms is too slow for a synchronous WAF middleware. DistilBERT at 18ms is within acceptable latency budget with only 3% accuracy trade-off.",
        result:    "p95 inference latency 18ms, 94.2% classification accuracy.",
      },
      {
        challenge: "When to invoke ML vs. rule-only decision",
        decision:  "Escalate only parameterised or body-carrying requests",
        why:       "73% of web traffic is static assets or parameter-free GETs — these are low attack surface. Focusing ML on high-risk request types preserves throughput.",
        result:    "73% reduction in ML invocations, no meaningful coverage loss.",
      },
    ],
    metrics: [
      { label: "Classification Accuracy", value: "94.2%", sub: "on held-out test set" },
      { label: "False Positive Rate",     value: "1.8%",  sub: "benign requests blocked" },
      { label: "ML Inference Latency",    value: "18ms",  sub: "p95 on CPU" },
      { label: "ML Invocation Reduction", value: "73%",   sub: "vs. all-requests ML" },
    ],
    deployment:
      "Node.js proxy and React frontend on local/development environment. FastAPI ML service containerised with Docker. Prototype — not production-deployed.",
    cicd: "GitHub Actions — Python tests on PR, React lint check.",
    monitoring: "Custom request log dashboard. Confusion matrix and accuracy tracked on every model retrain.",
    challenges: [
      {
        challenge: "High false positive rate on URL-encoded legitimate requests.",
        solution:  "Added a URL decode + normalisation step before tokenisation — the model now sees the semantic content, not the encoding.",
      },
      {
        challenge: "DistilBERT tokeniser truncating long payloads beyond 512 tokens.",
        solution:  "Chunked long request bodies and aggregated scores with max-pooling — the highest-risk chunk determines the final decision.",
      },
    ],
    learnings: [
      "Transformer models are practical for security inference when you optimise invocation scope — don't run ML on every request.",
      "URL normalisation before tokenisation is not optional — encoded payloads defeat semantic models without it.",
      "False positive rate matters as much as accuracy — a WAF that blocks 1.8% of legitimate traffic is a business problem.",
    ],
    roadmap: [
      {
        phase: "v2.0",
        items: [
          "GPU inference for sub-5ms latency at production throughput",
          "Online learning — model updates from new attack patterns in production",
          "Multi-class classification — distinguish SQLi, XSS, RCE, path traversal specifically",
        ],
      },
    ],
    techStack: [
      { name: "Python",       category: "ML / Backend" },
      { name: "DistilBERT",   category: "ML Model" },
      { name: "FastAPI",      category: "API" },
      { name: "Node.js",      category: "Proxy" },
      { name: "React.js",     category: "Frontend" },
      { name: "Docker",       category: "Infrastructure" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=85",
        alt: "WAF dashboard",
        caption: "Live request traffic with ML threat scores",
      },
      {
        src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80",
        alt: "Attack analysis",
        caption: "Attack pattern clustering and model confidence",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     CREDCHAIN
  ══════════════════════════════════════════════════════════ */
  "credchain": {
    level: 3,
    tagline: "Certificates on-chain. Forgery off the table.",
    vision:
      "CredChain eliminates academic credential fraud by anchoring digitally-signed certificates to the Ethereum blockchain — making every qualification instantly verifiable by anyone, anywhere, without contacting the issuing institution.",
    status: "Live",
    role: "Solo Engineer & Architect",
    heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1600&q=90",
    problem:
      "Academic credential fraud costs institutions and employers billions annually. Fake degrees are indistinguishable from real ones to a non-specialist. Verification requires contacting the issuing institution — a slow, manual process that often gets skipped. The result: fraudulent qualifications enter the workforce every year.",
    whyItMatters:
      "Trust in credentials is the foundation of education's value. When a medical school degree can be forged, patient safety is at risk. When an engineering certificate can be faked, infrastructure fails. CredChain makes credential trust a technical guarantee, not a social assumption.",
    solution:
      "Institutions issue credentials as on-chain NFTs on Ethereum, digitally signed with the institution's private key. The certificate hash is stored in a Solidity smart contract. Anyone can verify a credential by connecting MetaMask and querying the contract — no institution contact required, no possibility of tampering.",
    features: [
      {
        icon: "shield",
        title: "Blockchain-Anchored Credentials",
        description:
          "Each certificate is hashed and recorded in a Solidity smart contract on Ethereum. The hash is immutable — any alteration to the certificate invalidates the on-chain record immediately.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=900&q=80",
      },
      {
        icon: "check-circle",
        title: "One-Click Verification",
        description:
          "Employers and verifiers connect MetaMask, paste the credential ID or scan the QR code, and get an instant cryptographic verification — valid/invalid with issuer signature details.",
      },
      {
        icon: "key",
        title: "Digital Signature Chain",
        description:
          "Every credential carries the institution's ECDSA signature alongside the on-chain hash. Verification checks both — ensuring the credential was issued by the claimed institution.",
      },
      {
        icon: "folder",
        title: "Credential Portfolio",
        description:
          "Students have a personal credential wallet — all their verified certificates in one place, shareable via link or QR code for instant employer verification.",
      },
    ],
    architecture: [
      { layer: "Smart Contract", tech: "Solidity + Hardhat",    role: "Credential registry — issue, revoke, verify on Ethereum" },
      { layer: "Blockchain",     tech: "Ethereum (Sepolia testnet)", role: "Immutable credential hash storage" },
      { layer: "Wallet",         tech: "MetaMask + ethers.js",  role: "Institution signing, verifier identity, student wallet" },
      { layer: "Frontend",       tech: "Next.js + TypeScript",  role: "Issue UI, verification UI, student portfolio" },
      { layer: "Signing",        tech: "ECDSA via ethers.js",   role: "Institution private key signing of credential metadata" },
      { layer: "Deployment",     tech: "Vercel",                role: "Frontend CDN, serverless API routes" },
    ],
    deepDives: [
      {
        title: "Smart Contract Design",
        body: "The CredChain contract maintains a mapping from credentialId to CredentialRecord (issuer address, recipient address, metadata hash, timestamp, revoked flag). Issuance emits an event — queryable by any off-chain indexer. Revocation sets the revoked flag — verification checks this before returning a valid status. The contract is upgradeable via a proxy pattern to allow bug fixes without losing historical records.",
        code: `struct CredentialRecord {
    address issuer;
    address recipient;
    bytes32 metadataHash;
    uint256 issuedAt;
    bool revoked;
}
mapping(bytes32 => CredentialRecord) public credentials;

function issue(bytes32 id, address recipient, bytes32 hash) external onlyIssuer {
    credentials[id] = CredentialRecord(msg.sender, recipient, hash, block.timestamp, false);
    emit CredentialIssued(id, msg.sender, recipient);
}

function verify(bytes32 id) external view returns (bool valid, CredentialRecord memory record) {
    record = credentials[id];
    valid = record.issuer != address(0) && !record.revoked;
}`,
      },
      {
        title: "Off-Chain Metadata with On-Chain Hash",
        body: "Storing full credential data on-chain is expensive. CredChain stores only the SHA-256 hash of the credential metadata on-chain. The full metadata (name, degree, grade, date) is stored off-chain in Supabase. Verification downloads the off-chain metadata, recomputes the hash, and compares it to the on-chain record — if they match, the credential is authentic and unaltered.",
      },
    ],
    engineeringDecisions: [
      {
        challenge: "Full metadata on-chain vs. hash-only with off-chain storage",
        decision:  "Hash-only on-chain, full metadata off-chain in Supabase",
        why:       "Storing 1KB of metadata on Ethereum costs ~$5–20 in gas per credential. Storing only a 32-byte hash costs cents. The cryptographic guarantee is identical.",
        result:    "Gas cost per credential reduced from ~$15 to ~$0.10.",
      },
      {
        challenge: "Which network — Ethereum mainnet vs. testnet for demo",
        decision:  "Sepolia testnet for live demo, mainnet-compatible contract",
        why:       "Mainnet deployment costs real ETH. Sepolia gives identical behaviour for demonstration. The contract is mainnet-ready — one config change to deploy.",
        result:    "Zero deployment cost for demo, full production parity.",
      },
    ],
    metrics: [
      { label: "Verification Time",   value: "< 2s",   sub: "on-chain query + hash comparison" },
      { label: "Gas Per Issuance",    value: "~$0.10", sub: "Sepolia testnet equivalent" },
      { label: "Tamper Detection",    value: "100%",   sub: "any alteration detected" },
      { label: "Contract Test Coverage", value: "96%", sub: "Hardhat test suite" },
    ],
    deployment:
      "Solidity contract deployed on Ethereum Sepolia testnet via Hardhat. Next.js frontend on Vercel. Credential metadata in Supabase PostgreSQL.",
    cicd: "GitHub Actions — Hardhat contract tests + TypeScript check on PR. Auto-deploy frontend on merge.",
    monitoring: "Etherscan for on-chain transaction monitoring. Supabase dashboard for off-chain data.",
    challenges: [
      {
        challenge: "MetaMask prompting users on every verification query (read-only call costing gas UX).",
        solution:  "Switched read-only queries to use a public RPC provider via ethers.js JsonRpcProvider — MetaMask only prompts for write operations (issuance/revocation).",
      },
    ],
    learnings: [
      "Blockchain is the right tool when you need immutable, trustless audit trails — credential verification is a perfect use case.",
      "Never store large data on-chain — hash it and store the data off-chain. The cryptographic guarantee is equivalent at 1/100th the cost.",
      "Smart contract upgradability via proxy patterns is essential — bugs happen, and you can't redeploy a contract without losing history.",
    ],
    roadmap: [
      {
        phase: "v2.0 — 2026",
        items: [
          "Mainnet deployment with institutional onboarding flow",
          "IPFS for off-chain metadata — fully decentralised, no Supabase dependency",
          "Verifiable Credentials standard (W3C VC) compatibility",
        ],
      },
    ],
    techStack: [
      { name: "Solidity",    category: "Smart Contract" },
      { name: "Hardhat",     category: "Dev Toolchain" },
      { name: "Ethereum",    category: "Blockchain" },
      { name: "MetaMask",    category: "Wallet" },
      { name: "ethers.js",   category: "Web3 Library" },
      { name: "Next.js",     category: "Frontend" },
      { name: "TypeScript",  category: "Frontend" },
      { name: "Supabase",    category: "Off-chain Storage" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=85",
        alt: "CredChain verification",
        caption: "One-click credential verification via MetaMask",
      },
      {
        src: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=900&q=80",
        alt: "Credential portfolio",
        caption: "Student credential wallet with shareable links",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     WORKFOX
  ══════════════════════════════════════════════════════════ */
  "workfox": {
    level: 3,
    tagline: "Freelance without the middleman.",
    vision:
      "WorkFox is a decentralised freelance marketplace on the Algorand blockchain — where smart contracts replace escrow services, where reputation is on-chain and portable, and where every payment is instant, transparent, and irreversible.",
    status: "Live",
    role: "Lead Engineer & Architect",
    heroImage: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=1600&q=90",
    problem:
      "Traditional freelance platforms take 20% of every transaction. Payment disputes are resolved by the platform — opaquely, slowly, and often unfairly. Freelancers have no portable reputation — five years of work on one platform is worthless if that platform changes its algorithm or bans the account. Clients have no guarantee funds reach the freelancer before work is done.",
    whyItMatters:
      "Freelancing is the livelihood of 1.5 billion people globally. A 20% platform tax on that income is not a feature — it is extraction. Decentralised escrow via smart contracts eliminates the middleman entirely, putting full value back in the hands of creators and clients.",
    solution:
      "A React.js frontend connected to Algorand smart contracts (ARC-4) via Pera Wallet. Clients post jobs and lock payment in a smart contract escrow. Freelancers deliver work. On mutual approval, the contract releases payment atomically. Dispute resolution is handled by an on-chain arbitration mechanism — no platform involvement.",
    features: [
      {
        icon: "lock",
        title: "Smart Contract Escrow",
        description:
          "Client funds are locked in an Algorand smart contract on job acceptance. The freelancer can see the funds are committed — they know they will be paid. Funds release only on dual approval or arbitration.",
        image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=900&q=80",
      },
      {
        icon: "star",
        title: "On-Chain Reputation",
        description:
          "Ratings and completed project records are written to the Algorand blockchain — portable, tamper-proof, and not controlled by any platform. A freelancer's reputation is truly theirs.",
      },
      {
        icon: "search",
        title: "Job Discovery",
        description:
          "Filterable job board with category, budget, timeline, and required skills. Freelancers apply on-chain — application records are visible to both parties.",
      },
      {
        icon: "shield",
        title: "Dispute Arbitration",
        description:
          "If client and freelancer can't agree on work completion, a random panel of three arbitrators is selected from staked platform participants. Their majority vote executes the contract.",
      },
    ],
    architecture: [
      { layer: "Smart Contracts", tech: "Algorand ARC-4 + PyTEAL", role: "Job escrow, payment release, reputation, arbitration logic" },
      { layer: "Blockchain",      tech: "Algorand",                 role: "Fast finality (4s), low fees (~$0.001/tx), ALGO payments" },
      { layer: "Wallet",          tech: "Pera Wallet SDK",          role: "User identity, transaction signing, ALGO transfers" },
      { layer: "Frontend",        tech: "React.js",                 role: "Job board, profile, project management UI" },
      { layer: "Indexer",         tech: "Algorand Indexer API",     role: "Query on-chain job and reputation records" },
      { layer: "Deployment",      tech: "Netlify",                  role: "Frontend CDN, instant deploys" },
    ],
    deepDives: [
      {
        title: "Smart Contract Escrow Flow",
        body: "The escrow contract has three parties: client, freelancer, arbitrator pool. On job acceptance, the client calls fund_escrow() which transfers ALGO into the contract's minimum balance. On work approval, release_payment() atomically transfers ALGO to the freelancer and writes the completion record. On dispute, request_arbitration() locks the contract and emits an arbitrator selection event. The arbitrator panel's majority vote calls either release_to_freelancer() or refund_to_client().",
        code: `@router.method
def release_payment(job_id: abi.Uint64) -> Expr:
    return Seq(
        Assert(Txn.sender() == client.get()),
        Assert(job_status.get() == STATUS_DELIVERED),
        InnerTxnBuilder.Execute({
            TxnField.type_enum: TxnType.Payment,
            TxnField.receiver: freelancer.get(),
            TxnField.amount: escrow_amount.get(),
        }),
        job_status.set(STATUS_COMPLETED),
        Pop(reputation.get()),  # update on-chain rep
    )`,
      },
      {
        title: "Why Algorand Over Ethereum",
        body: "Ethereum gas fees for small freelance payments (e.g. $50 job) can exceed the payment value during congestion. Algorand's fee is a flat ~$0.001 per transaction regardless of network load, with 4-second finality. For a freelance marketplace where payments range from $10 to $10,000, this is the only viable choice. Algorand's ARC-4 ABI standard also gives clean typed smart contract interfaces equivalent to Solidity's ABI.",
      },
    ],
    engineeringDecisions: [
      {
        challenge: "Ethereum vs. Algorand for payment infrastructure",
        decision:  "Algorand",
        why:       "Ethereum gas fees are prohibitive for small payments. Algorand's flat ~$0.001 fee and 4s finality make it viable for all job sizes.",
        result:    "Transaction cost 99.9% lower than equivalent Ethereum deployment.",
      },
      {
        challenge: "On-chain vs. off-chain reputation storage",
        decision:  "On-chain via Algorand app state",
        why:       "Off-chain reputation is platform-controlled and can be manipulated. On-chain reputation is verifiable and portable — the core value proposition of the platform.",
        result:    "Reputation is fully portable — visible to any app querying the Algorand indexer.",
      },
    ],
    metrics: [
      { label: "Transaction Fee",    value: "~$0.001", sub: "vs. $5–50 on Ethereum" },
      { label: "Payment Finality",   value: "4s",      sub: "Algorand block time" },
      { label: "Escrow Security",    value: "100%",    sub: "funds only release on contract execution" },
      { label: "Contract Coverage",  value: "94%",     sub: "PyTEAL test suite" },
    ],
    deployment:
      "Algorand smart contracts on Algorand testnet (mainnet-compatible). React frontend on Netlify. Pera Wallet for all transaction signing.",
    cicd: "GitHub Actions — PyTEAL contract tests + React lint on PR. Auto-deploy to Netlify on merge.",
    monitoring: "Algorand Explorer for on-chain transaction monitoring. AlgoNode indexer for contract state queries.",
    challenges: [
      {
        challenge: "Pera Wallet deep link failing on some Android browsers.",
        solution:  "Implemented WalletConnect v2 as a fallback — any WalletConnect-compatible wallet can now connect as an alternative to Pera.",
      },
      {
        challenge: "Arbitrator selection being gameable by colluding participants.",
        solution:  "Switched to VRF-based random arbitrator selection using Algorand's on-chain randomness beacon — selection is provably unpredictable.",
      },
    ],
    learnings: [
      "Algorand is genuinely the right chain for payment-heavy dApps — the fee model and finality time are not just marketing.",
      "On-chain reputation only works if the data model is designed for portability from day one — retrofitting portability is painful.",
      "Smart contract escrow eliminates trust requirements — but the UX around connecting wallets and signing transactions still needs to feel simple.",
    ],
    roadmap: [
      {
        phase: "v2.0 — 2026",
        items: [
          "Mainnet deployment with real ALGO payments",
          "AI-powered project matching — connect clients with the right freelancers",
          "Multi-token support — stablecoin payments (USDC on Algorand) to reduce volatility risk",
        ],
      },
    ],
    techStack: [
      { name: "PyTEAL / ARC-4", category: "Smart Contract" },
      { name: "Algorand",        category: "Blockchain" },
      { name: "Pera Wallet",     category: "Wallet" },
      { name: "React.js",        category: "Frontend" },
      { name: "Algorand SDK",    category: "Web3 Library" },
      { name: "Netlify",         category: "Deployment" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=1200&q=85",
        alt: "WorkFox job board",
        caption: "Decentralised job board with on-chain escrow",
      },
      {
        src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=900&q=80",
        alt: "Smart contract escrow",
        caption: "Payment escrow flow — client locks, freelancer delivers, contract releases",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     VANIJYA AI
  ══════════════════════════════════════════════════════════ */
  "vanijya-ai": {
    level: 3,
    tagline: "AI-powered commerce for India's street vendors.",
    vision:
      "Vanijya AI gives India's 63 million street vendors and kirana store owners the negotiation intelligence, price discovery, and multilingual communication tools that were previously only available to large enterprises — bridging the information asymmetry that keeps small traders trapped in poverty cycles.",
    status: "Live",
    role: "Solo Engineer & Architect",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=90",
    problem:
      "India's informal traders negotiate blind. They don't know the current wholesale price of tomatoes in the nearest mandi. They can't communicate fluently with suppliers from other states who speak different languages. They make pricing decisions based on habit and guesswork — not data. Meanwhile, the buyer walking into their shop has a smartphone with real-time pricing data and zero reason to share it.",
    whyItMatters:
      "India's informal economy employs over 400 million people. A 10% improvement in their negotiation outcomes — enabled by price intelligence and AI communication tools — translates into hundreds of dollars of annual income recovery per vendor. Multiply that by millions and it becomes one of the highest-leverage economic interventions possible.",
    solution:
      "A Next.js platform powered by Gemini AI and Serp API that gives vendors real-time commodity price intelligence, AI-powered multilingual negotiation scripts, smart deal evaluation, and a direct buyer-seller connection layer — all accessible from a basic Android phone.",
    features: [
      {
        icon: "trending-up",
        title: "Real-Time Price Intelligence",
        description:
          "Serp API scrapes live commodity prices from government mandi portals, wholesale markets, and e-commerce platforms. Vendors see the current buy/sell price range for any commodity before entering a negotiation.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
      },
      {
        icon: "bot",
        title: "AI Negotiation Coach",
        description:
          "Gemini AI generates negotiation scripts tailored to the commodity, current market price, vendor position, and buyer persona — in the vendor's preferred language. Hindi, Kannada, Tamil, Telugu, Marathi supported.",
      },
      {
        icon: "globe",
        title: "Multilingual Communication",
        description:
          "Real-time translation and communication tools that let vendors interact with suppliers and buyers across language barriers — Gemini handles translation with commercial context preservation.",
        image: "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?w=900&q=80",
      },
      {
        icon: "check-circle",
        title: "Smart Deal Evaluator",
        description:
          "Enter a deal offered by a supplier — Vanijya AI scores it against current market prices and signals whether to accept, counter, or walk away. Plain-language explanation in the vendor's language.",
      },
      {
        icon: "users",
        title: "Direct Buyer-Seller Network",
        description:
          "A verified directory of buyers and suppliers in the vendor's commodity category and region — removing brokers and reducing the margin leakage from intermediaries.",
      },
    ],
    architecture: [
      { layer: "Frontend",    tech: "Next.js + TypeScript",  role: "Vendor dashboard, price feed, negotiation interface" },
      { layer: "AI",          tech: "Gemini 1.5 Flash",      role: "Negotiation scripts, deal evaluation, multilingual output" },
      { layer: "Price Data",  tech: "Serp API",              role: "Real-time commodity price scraping from mandi portals" },
      { layer: "Database",    tech: "MongoDB Atlas",         role: "Vendor profiles, commodity history, deal records" },
      { layer: "Deployment",  tech: "Vercel",                role: "Edge CDN, serverless API routes" },
    ],
    deepDives: [
      {
        title: "Price Intelligence Pipeline",
        body: "When a vendor queries the price of a commodity, Serp API fetches live results from Agmarknet (government mandi portal), IndiaMART wholesale listings, and regional news. The raw results are fed to Gemini with a structured extraction prompt that returns: current wholesale price range, trend direction (rising/stable/falling), and the recommended buy/sell window. The entire pipeline completes in under 3 seconds.",
        code: `// Price intelligence pipeline
const serpResults = await serpApi.search({
  q: \`\${commodity} wholesale price today India \${state}\`,
  num: 5,
});
const priceData = await gemini.generateContent({
  contents: [{
    parts: [{ text: PRICE_EXTRACTION_PROMPT + JSON.stringify(serpResults) }]
  }],
  generationConfig: { responseMimeType: "application/json" }
});`,
      },
      {
        title: "Multilingual Negotiation Script Generation",
        body: "The negotiation coach prompt is engineered with four components: (1) commodity and current market price context, (2) the vendor's target price and acceptable floor, (3) the buyer/supplier persona, (4) language and cultural register instruction. Gemini returns a structured negotiation script with an opening offer, expected counter, and final position — all phrased naturally in the target language. Cultural negotiation norms (e.g. relationship-building before price discussion in South India) are baked into the prompt.",
      },
    ],
    engineeringDecisions: [
      {
        challenge: "Gemini 1.5 Pro vs. Flash for a latency-sensitive mobile use case",
        decision:  "Gemini 1.5 Flash",
        why:       "Vendors use this on 4G or 3G connections. Flash's 2x faster response time at equivalent quality for structured extraction tasks makes it the right choice for real-time use.",
        result:    "Price intelligence response time under 3s on 4G — Pro averaged 6s.",
      },
      {
        challenge: "Live price data — web scraping vs. official API",
        decision:  "Serp API over official government APIs",
        why:       "Agmarknet's official API has 24-hour data lag and requires registration. Serp API returns live search results including the government portal, private marketplaces, and news — fresher and richer data.",
        result:    "Price data freshness under 1 hour vs. 24-hour lag on official API.",
      },
    ],
    metrics: [
      { label: "Price Query Response",    value: "< 3s",  sub: "on 4G mobile" },
      { label: "Languages Supported",     value: "6",     sub: "Hindi, Kannada, Tamil, Telugu, Marathi, English" },
      { label: "Commodities Covered",     value: "200+",  sub: "fruits, vegetables, grains, spices" },
      { label: "Price Data Freshness",    value: "< 1hr", sub: "vs. 24hr official API lag" },
    ],
    deployment:
      "Next.js on Vercel Edge CDN. MongoDB Atlas for vendor and deal data. Serp API for price scraping. Gemini 1.5 Flash for AI features.",
    cicd: "GitHub Actions — TypeScript + ESLint check on PR. Auto-deploy to Vercel on merge to main.",
    monitoring: "Vercel Analytics for performance. MongoDB Atlas for query health. Custom logging for Gemini API latency.",
    challenges: [
      {
        challenge: "Serp API returning inconsistent commodity name matches across regions.",
        solution:  "Added a Gemini-powered query normalisation step — vendor inputs any commodity name in any language, Gemini normalises to a standard search query before hitting Serp API.",
      },
      {
        challenge: "Negotiation scripts sounding unnatural in regional languages.",
        solution:  "Added cultural register calibration to the prompt — included example phrases from each language community to guide Gemini's tone and formality level.",
      },
    ],
    learnings: [
      "Prompt engineering for multilingual outputs requires cultural context, not just language specification.",
      "For real-time price data, a general search API is often more current than a domain-specific official API.",
      "Designing for low-end devices means optimising for 3G latency and minimal JavaScript — Next.js with SSR is essential.",
    ],
    roadmap: [
      {
        phase: "v2.0 — 2026",
        items: [
          "Voice interface for vendors who prefer speaking over typing",
          "WhatsApp bot integration — access Vanijya AI without installing anything",
          "Offline price cache — last 7 days of prices available without connectivity",
        ],
      },
    ],
    techStack: [
      { name: "Next.js",       category: "Frontend" },
      { name: "TypeScript",    category: "Frontend" },
      { name: "Gemini 1.5 Flash", category: "AI" },
      { name: "Serp API",      category: "Data" },
      { name: "MongoDB Atlas", category: "Database" },
      { name: "Vercel",        category: "Deployment" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=85",
        alt: "Vanijya AI dashboard",
        caption: "Vendor price intelligence and negotiation dashboard",
      },
      {
        src: "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?w=900&q=80",
        alt: "Multilingual negotiation",
        caption: "AI negotiation coach in regional language",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     TRAFFIX AI
  ══════════════════════════════════════════════════════════ */
  "traffix-ai": {
    level: 3,
    tagline: "AI-driven traffic intelligence for smarter cities.",
    vision:
      "Traffix AI transforms raw traffic data from the TomTom API into actionable intelligence — predicting congestion before it forms, optimising signal timing dynamically, and giving city operators a real-time command view of their road network.",
    status: "Live",
    role: "Solo Engineer & Architect",
    heroImage: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=1600&q=90",
    problem:
      "India loses $22 billion annually to traffic congestion — wasted fuel, lost productivity, emergency vehicles stuck in gridlock, and air pollution from idling engines. Most traffic management systems react to congestion after it forms. By the time a signal changes or a diversion is announced, the jam is already kilometres long.",
    whyItMatters:
      "Moving from reactive to predictive traffic management is the difference between a city that works and one that doesn't. Every 10% reduction in average commute time in a city of 10 million people saves 200 million person-hours per year. Traffic AI is not a smart city vanity project — it is foundational urban infrastructure.",
    solution:
      "A Java Spring Boot backend that ingests real-time traffic flow, incident, and density data from the TomTom API, runs predictive congestion analysis with Gemini AI, and exposes a REST + WebSocket API for a React dashboard that gives operators live situational awareness and AI-generated signal optimisation recommendations.",
    features: [
      {
        icon: "activity",
        title: "Real-Time Traffic Map",
        description:
          "Live road network visualisation showing traffic flow, congestion levels, and incident markers pulled from TomTom Traffic API — updated every 30 seconds.",
        image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=900&q=80",
      },
      {
        icon: "bot",
        title: "AI Congestion Prediction",
        description:
          "Gemini AI analyses historical traffic patterns, current flow data, time-of-day, day-of-week, and weather to predict congestion hotspots 15–30 minutes before they form.",
      },
      {
        icon: "settings",
        title: "Signal Optimisation Engine",
        description:
          "AI-generated signal timing recommendations for key intersections based on current and predicted traffic density — reducing average intersection wait time.",
        image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=900&q=80",
      },
      {
        icon: "alert-circle",
        title: "Incident Detection & Routing",
        description:
          "TomTom incident data is cross-referenced with traffic flow anomalies to detect likely accidents or road blocks. Alternative routes are auto-suggested for affected corridors.",
      },
      {
        icon: "bar-chart",
        title: "Analytics Dashboard",
        description:
          "Historical congestion trends, signal performance metrics, peak hour analysis, and incident frequency heatmaps — all in an operator-facing analytics dashboard.",
      },
    ],
    architecture: [
      { layer: "Frontend",     tech: "React.js",              role: "Real-time traffic map, operator dashboard, alerts feed" },
      { layer: "Backend",      tech: "Java Spring Boot",      role: "REST API, WebSocket server, TomTom data ingestion pipeline" },
      { layer: "Traffic Data", tech: "TomTom Traffic API",    role: "Real-time flow, incident, and density data" },
      { layer: "AI Engine",    tech: "Gemini AI",             role: "Congestion prediction, signal optimisation, incident analysis" },
      { layer: "Data Store",   tech: "PostgreSQL",            role: "Historical traffic data, prediction records, incidents" },
      { layer: "Deployment",   tech: "Render",                role: "Spring Boot service, always-on dyno for streaming" },
    ],
    deepDives: [
      {
        title: "Congestion Prediction Pipeline",
        body: "Every 30 seconds, a Spring Boot scheduled job fetches traffic flow data for 50 key road segments from TomTom. The data (current speed, free-flow speed, travel time ratio) is structured and sent to Gemini with a prediction prompt that includes: current conditions, last 2 hours of historical data for that segment, time-of-day, and day-of-week. Gemini returns a congestion probability and predicted severity for the next 15 and 30 minutes. Predictions above 70% probability trigger an operator alert.",
        code: `@Scheduled(fixedRate = 30000)
public void ingestAndPredict() {
    List<Segment> segments = tomTomClient.fetchFlowData(MONITORED_SEGMENTS);
    segments.parallelStream().forEach(segment -> {
        List<HistoricalRecord> history = trafficRepo.getLastTwoHours(segment.id());
        PredictionResult prediction = geminiService.predictCongestion(segment, history);
        if (prediction.probability() > 0.70) {
            alertService.dispatch(new CongestionAlert(segment, prediction));
        }
        trafficRepo.save(new TrafficRecord(segment, prediction));
    });
}`,
      },
      {
        title: "WebSocket Real-Time Feed",
        body: "The React dashboard subscribes to a Spring Boot WebSocket endpoint. Every 30 seconds, updated traffic data and new predictions are pushed to all connected operator clients — no polling, no stale maps. STOMP over WebSocket is used for structured message routing, with separate channels for traffic updates, incident alerts, and signal recommendations.",
      },
    ],
    engineeringDecisions: [
      {
        challenge: "Spring Boot vs. Node.js for the backend",
        decision:  "Java Spring Boot",
        why:       "The data ingestion pipeline runs parallel TomTom API calls across 50 segments every 30 seconds. Java's thread pool model handles this more predictably than Node.js's single-threaded event loop under sustained parallelism.",
        result:    "50 parallel API calls complete in under 800ms per cycle with Spring's virtual threads.",
      },
      {
        challenge: "Polling vs. WebSocket for dashboard updates",
        decision:  "WebSocket with STOMP",
        why:       "Traffic data changes every 30 seconds. Polling at that frequency from many operator clients would generate unnecessary load. WebSocket push is more efficient and gives lower perceived latency.",
        result:    "Dashboard update latency under 200ms from data ingestion to UI render.",
      },
    ],
    metrics: [
      { label: "Data Ingestion Cycle",   value: "30s",    sub: "50 segments per cycle" },
      { label: "Prediction Accuracy",    value: "78%",    sub: "15-min congestion prediction" },
      { label: "Dashboard Latency",      value: "< 200ms", sub: "data to UI via WebSocket" },
      { label: "Parallel API Calls",     value: "50",     sub: "completed in < 800ms" },
    ],
    deployment:
      "Java Spring Boot on Render with an always-on dyno. PostgreSQL on Render. React frontend on Vercel. TomTom and Gemini API keys in Render environment.",
    cicd: "GitHub Actions — Maven build + JUnit tests on PR. Auto-deploy Spring Boot to Render and frontend to Vercel on merge.",
    monitoring: "Render metrics for Spring Boot CPU/memory. Custom alert logging for TomTom API failures. Gemini API latency tracked per prediction cycle.",
    challenges: [
      {
        challenge: "TomTom API rate limits causing gaps in data during peak ingestion.",
        solution:  "Implemented a token bucket rate limiter and a backoff queue — segments are prioritised by incident frequency, ensuring high-priority corridors always get fresh data.",
      },
      {
        challenge: "Gemini prediction quality degrading for road segments with sparse historical data.",
        solution:  "Added a minimum history threshold — segments with fewer than 48 data points fall back to a rule-based prediction model instead of Gemini.",
      },
    ],
    learnings: [
      "Java Spring Boot's parallel stream handling is genuinely superior to Node.js for sustained high-throughput API fan-out.",
      "Predictive models degrade gracefully when you have fallback rules — never let an AI failure break the core feature.",
      "WebSocket is the right architecture for real-time dashboards — polling is technically simpler but operationally expensive at scale.",
    ],
    roadmap: [
      {
        phase: "v2.0 — 2026",
        items: [
          "Integration with city CCTV feeds for computer vision-based congestion detection",
          "Emergency vehicle routing — green corridor auto-generation for ambulances",
          "Public-facing commuter app with personalised route recommendations",
        ],
      },
    ],
    techStack: [
      { name: "Java Spring Boot", category: "Backend" },
      { name: "React.js",         category: "Frontend" },
      { name: "TomTom API",       category: "Data" },
      { name: "Gemini AI",        category: "AI" },
      { name: "PostgreSQL",       category: "Database" },
      { name: "WebSocket/STOMP",  category: "Real-Time" },
      { name: "Render",           category: "Deployment" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=1200&q=85",
        alt: "Traffix AI traffic map",
        caption: "Real-time traffic map with congestion prediction overlay",
      },
      {
        src: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=900&q=80",
        alt: "Signal optimisation dashboard",
        caption: "AI signal timing recommendations dashboard",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     PORTFOLIO ENGINE (this very site)
  ══════════════════════════════════════════════════════════ */
  "portfolio-engine": {
    level: 3,
    tagline: "A portfolio engineered like a product.",
    vision:
      "This portfolio is not a template — it is a production-grade full-stack system built to the same engineering standards I apply to every project I ship. It's the most honest signal of how I work: every architectural decision, every performance trade-off, every design choice is mine.",
    status: "In Production",
    role: "Solo Engineer, Designer & Architect",
    heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1600&q=90",
    problem:
      "Most developer portfolios are either a Figma template cloned from a YouTube tutorial or a list of GitHub repos. Neither communicates what actually matters to a hiring engineer: how you think, how you architect, what you build when there are no constraints, and whether you can ship something that feels like a real product.",
    whyItMatters:
      "A portfolio is the only piece of software a developer ships entirely for themselves — no client requirements, no team constraints, no technical debt inherited from others. What you choose to build and how you choose to build it is the purest signal of your engineering taste. This portfolio is that signal.",
    solution:
      "A Next.js 14 App Router portfolio with a custom component library, Apple-inspired design system, GSAP animations, Lenis smooth scroll, a voice AI agent, a C++ Drogon backend API, 3-tier project detail pages, a contact system via Brevo, and a GitHub activity feed — all deployed on Vercel Edge.",
    features: [
      {
        icon: "layout",
        title: "Apple-Inspired Design System",
        description:
          "A complete design token system built in CSS custom properties — fluid typography scale, spacing system, card surfaces, and colour palette inspired by Apple's product pages. Every visual decision is intentional and documented.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=900&q=80",
      },
      {
        icon: "bot",
        title: "Voice AI Agent",
        description:
          "An embedded voice assistant powered by Vapi that lets visitors ask questions about my work, experience, and projects — answered in real-time with a conversational AI model trained on portfolio context.",
      },
      {
        icon: "layers",
        title: "3-Tier Project Detail System",
        description:
          "Projects are classified into 3 levels of detail — minimal premium pages for small projects, full case studies for intermediate work, and complete product launch experiences for flagship systems.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
      },
      {
        icon: "activity",
        title: "GSAP + Lenis Animations",
        description:
          "Scroll-driven animations, fade-up reveals, and sticky scroll storytelling powered by GSAP. Lenis provides hardware-accelerated smooth scrolling with configurable easing.",
      },
      {
        icon: "server",
        title: "C++ Drogon Backend",
        description:
          "A high-performance C++ backend built with the Drogon framework serves dynamic data — GitHub activity, visitor analytics, and real-time stats — with sub-millisecond response times.",
      },
    ],
    architecture: [
      { layer: "Frontend",      tech: "Next.js 14 App Router", role: "RSC for static content, Client Components for interactivity" },
      { layer: "Design System", tech: "CSS Custom Properties", role: "Fluid type scale, spacing tokens, Apple-inspired colour palette" },
      { layer: "Animation",     tech: "GSAP + Lenis",          role: "Scroll animations, smooth scroll, sticky storytelling" },
      { layer: "Voice AI",      tech: "Vapi",                  role: "Voice assistant with portfolio-specific AI context" },
      { layer: "Email",         tech: "Brevo API",             role: "Contact form — transactional email delivery" },
      { layer: "Backend API",   tech: "C++ Drogon",            role: "High-performance dynamic data API" },
      { layer: "Deployment",    tech: "Vercel Edge",           role: "Global CDN, Edge Functions, ISR" },
    ],
    architectureDiagramCaption:
      "Next.js SSR/SSG on Vercel Edge → C++ Drogon for dynamic API → Brevo for email → Vapi for voice",
    deepDives: [
      {
        title: "Why C++ Drogon for the Backend API",
        body: "Most portfolio backends are Express or FastAPI. I chose Drogon — a C++ async HTTP framework — for three reasons: (1) it demonstrates systems programming ability, (2) it is measurably faster than any interpreted runtime for simple API endpoints, (3) it is architecturally interesting. The Drogon server handles GitHub activity aggregation, visitor stats, and health endpoints with sub-millisecond response times and zero runtime overhead.",
        code: `// Drogon controller for GitHub activity endpoint
void GithubController::getActivity(
    const HttpRequestPtr& req,
    std::function<void(const HttpResponsePtr&)>&& callback
) {
    auto client = HttpClient::newHttpClient("https://api.github.com");
    auto r = HttpRequest::newHttpRequest();
    r->setPath("/users/Naren1520/events");
    r->addHeader("Authorization", "Bearer " + apiKey_);
    client->sendRequest(r, [callback](ReqResult res, const HttpResponsePtr& resp) {
        callback(HttpResponse::newHttpJsonResponse(parseActivity(resp->body())));
    });
}`,
      },
      {
        title: "3-Tier Project Architecture",
        body: "Projects are typed with a `difficulty` field that maps to one of three detail levels. The dynamic route `app/projects/[id]/page.tsx` reads the project's detail data and renders the appropriate Level1Page, Level2Page, or Level3Page component. Each level is a distinct React component with a purpose-built layout — minimal for Level 1, case study for Level 2, full product launch for Level 3. Projects without detail data fall back to a Level 1 page using their base `projects.ts` fields automatically.",
      },
      {
        title: "Performance Architecture",
        body: "Every page is either statically generated or incrementally regenerated. Server Components handle all data fetching — no client-side waterfalls. Images use Next.js Image Optimisation for automatic WebP and AVIF conversion. GSAP animations are client-only and don't block the critical rendering path. The result: Lighthouse Performance 97+, LCP under 1.5s, CLS 0.",
      },
    ],
    engineeringDecisions: [
      {
        challenge: "Template vs. custom-built portfolio",
        decision:  "Built from zero — custom design system, custom components",
        why:       "A template signals that you copy. A custom-built system signals how you think. The engineering decisions in this portfolio are the portfolio.",
        result:    "Lighthouse 97+, fully custom, zero template dependencies.",
      },
      {
        challenge: "Node.js vs. C++ for the backend API",
        decision:  "C++ Drogon",
        why:       "This is a portfolio — every technology choice communicates something. A C++ backend signals systems depth. It also serves as a live demonstration of the skills described in the resume.",
        result:    "Sub-millisecond API responses, working C++ HTTP server in production.",
      },
      {
        challenge: "Framer Motion vs. GSAP for animations",
        decision:  "GSAP + ScrollTrigger",
        why:       "GSAP gives finer control over scroll-driven animations and timeline sequencing. Framer Motion is excellent for component transitions but not for the complex scroll storytelling this portfolio requires.",
        result:    "Fluid scroll animations with zero layout shift or jank.",
      },
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "97+",   sub: "desktop and mobile" },
      { label: "LCP",                    value: "< 1.5s", sub: "Largest Contentful Paint" },
      { label: "CLS",                    value: "0",     sub: "zero layout shift" },
      { label: "Drogon API Response",    value: "< 1ms", sub: "p95 on simple endpoints" },
    ],
    deployment:
      "Next.js on Vercel Edge CDN with ISR. C++ Drogon backend containerised on Render. Brevo for transactional email. Vapi for voice AI.",
    cicd: "GitHub Actions — TypeScript + ESLint + Lighthouse CI on PR. Auto-deploy to Vercel on merge to main.",
    monitoring: "Vercel Analytics for Core Web Vitals. Render metrics for Drogon CPU/memory. Brevo dashboard for email delivery.",
    challenges: [
      {
        challenge: "GSAP ScrollTrigger conflicting with Lenis smooth scroll on iOS Safari.",
        solution:  "Synchronised GSAP ScrollTrigger to use Lenis's scroll position via the ScrollTrigger.scrollerProxy API — all animations now use Lenis's virtual scroll position.",
      },
      {
        challenge: "C++ Drogon cold starts on Render's free tier.",
        solution:  "Added a keep-alive ping from Vercel Edge Functions every 5 minutes to prevent the Render dyno from sleeping.",
      },
      {
        challenge: "Hydration mismatches between server and client components in complex sections.",
        solution:  "Audited all Client Components for browser-only APIs (window, document) and wrapped them in dynamic imports with ssr: false where needed.",
      },
    ],
    learnings: [
      "Building your own design system is the fastest way to learn what makes Apple's UI feel like Apple's UI — intentional spacing, consistent type scale, and disciplined restraint.",
      "C++ in a web stack is viable and practical when you scope it correctly — a narrow, well-defined API server is a great fit.",
      "Lighthouse scores are a proxy metric. What matters is actual user experience — LCP, FID, CLS. Optimise for those, scores follow.",
      "A portfolio built like a product communicates more in 10 seconds than any resume bullet point.",
    ],
    roadmap: [
      {
        phase: "v2.0",
        items: [
          "WebGL hero section with custom shader for the flagship project scenes",
          "Reading time and difficulty indicators on all project pages",
          "Dark mode with smooth transition — system preference detection + manual toggle",
        ],
      },
    ],
    techStack: [
      { name: "Next.js 14",       category: "Frontend" },
      { name: "TypeScript",       category: "Frontend" },
      { name: "GSAP",             category: "Animation" },
      { name: "Lenis",            category: "Scroll" },
      { name: "C++ Drogon",       category: "Backend" },
      { name: "Vapi",             category: "Voice AI" },
      { name: "Brevo",            category: "Email" },
      { name: "Vercel",           category: "Deployment" },
    ],
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&q=85",
        alt: "Portfolio hero section",
        caption: "Hero section — GSAP animations, Apple-inspired typography",
      },
      {
        src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
        alt: "Project detail page",
        caption: "Level 3 project detail — full product launch layout",
      },
    ],
  },
};
