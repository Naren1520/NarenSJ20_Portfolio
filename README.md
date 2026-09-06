# Naren S J — Portfolio

Cinematic personal portfolio for **Naren S J** — AI Engineer & Software Builder.

Built with **Next.js 16** (App Router) · **TypeScript** · **Tailwind CSS v4** · **GSAP** · **Lenis**

---

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build + sitemap
```

---

## Updating Content

All portfolio content lives in the **`data/`** folder. Open the relevant file, save, and the page hot-reloads automatically.

| File | What it controls |
|---|---|
| `data/projects.ts` | Project gallery cards (title, description, tags, links, difficulty) |
| `data/experience.ts` | Professional & other experience timeline entries |
| `data/education.ts` | Academic background (institution, degree, grade) |
| `data/achievements.ts` | Competitive achievements list |
| `data/certifications.ts` | Professional certifications |
| `data/hackathons.ts` | Hackathon & event history |
| `data/volunteering.ts` | Volunteering & community entries |

Every file has inline comments explaining each field.

### Adding a new project

Open `data/projects.ts` and add an entry to `projectsData`:

```ts
{
  id: "my-new-project",           // unique slug, no spaces
  title: "My New Project",
  description: "One to three sentences describing the project.",
  difficulty: "Intermediate",     // "Basic" | "Intermediate" | "Advanced"
  date: "2025-03-01",             // YYYY-MM-DD — used for "Newest First" sort
  tags: ["React", "TypeScript"],
  link: "https://github.com/...", // optional
},
```

### Changing the three flagship cinematic scenes

The hero scenes for SPManager, VoteStack, and CRIMSON are defined in:

```
components/sections/ProjectsSection.tsx  →  const FLAGSHIP = [...]
```

Edit the `title`, `description`, `backgroundImage`, and `link` there.

### Changing contact / social links

Open `components/sections/ContactSection.tsx` and update the links array in the footer.

### Changing your profile image

Replace `public/narensj.png` (or `naren.png`) with your actual photo.

### Changing GitHub username for the streak widget

Open `components/sections/GitHubActivity.tsx` and update the `user=` param in the URL.

---

## Environment Variables

Create a `.env.local` file (already gitignored):

```env
BREVO_API_KEY=your_key_here
BREVO_SENDER_EMAIL=noreply@yourdomain.com
BREVO_RECIPIENT_EMAIL=your@email.com
NEXT_PUBLIC_SITE_URL=https://yoursite.dev
```

---

## Project Structure

```
data/                   ← EDIT CONTENT HERE
  projects.ts
  experience.ts
  education.ts
  achievements.ts
  certifications.ts
  hackathons.ts
  volunteering.ts
  index.ts              ← barrel export

lib/                    ← types + utility functions (no raw data)
  projects.ts           → filterProjects(), isValidEmail()
  experience.ts
  education.ts
  achievements.ts
  certifications.ts
  hackathons.ts
  volunteering.ts
  lenis.ts              → Lenis singleton
  gsap.ts               → type re-exports
  brevo.ts              → sendContactEmail()

components/
  layout/
    Nav.tsx             ← fixed nav bar
    SmoothScrollProvider.tsx
  sections/             ← one component per page section
  ui/
    ScrollReveal.tsx
    ContactForm.tsx

app/
  layout.tsx            ← fonts, metadata, providers
  page.tsx              ← section assembly
  globals.css           ← Tailwind v4 + CSS custom properties
  api/contact/route.ts  ← POST → Brevo

public/
  narensj.png             ← profile image (replace with your photo)
  resume.pdf            ← your resume (replace with the real file)
```
