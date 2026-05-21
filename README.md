# Keerthana K R — Portfolio

> Full-Stack Engineer & AppSec Enthusiast · Bangalore, India

A dark, cinematic personal portfolio — designed to feel premium and intentional, not like a template.

**Live site:** *(add Vercel URL after deploying)*  
**Email:** keerthanakr80@gmail.com  
**LinkedIn:** [keerthana-krr](https://www.linkedin.com/in/keerthana-krr)  
**GitHub:** [kikicodex](https://github.com/kikicodex)

---

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Fonts | Inter (next/font) |
| Toasts | Sonner |

---

## Sections

| # | Section | Highlight |
|---|---|---|
| 1 | **Hero** | Staggered word-by-word headline, canvas particle field, animated SVG avatar (floating + blinking), tech marquee |
| 2 | **About** | Animated counting stats, split layout |
| 3 | **Projects** | Kernel · EngineerEase · Healthcare Data Tool — alternating editorial layout, mock browser frames, 3D tilt on hover |
| 4 | **Skills** | 7 categories, pill tags with per-category accent glow |
| 5 | **Experience** | Vertical timeline — internship, education, 3 certifications |
| 6 | **Contact** | Copy-to-clipboard email with toast, GitHub + LinkedIn links |

---

## Design System

- **Background:** `#0a0a0a` / `#111111`
- **Accent:** `#7c3aed` (electric purple) · `#06b6d4` (cyan)
- **Font:** Inter
- **Vibe:** Linear.app meets personal brand — sharp, dark, cinematic
- Custom cursor (dot + spring-lag ring)
- Navbar hides on scroll-down, reappears on scroll-up

---

## Run Locally

```bash
git clone https://github.com/kikicodex/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
app/
  layout.tsx        # Root layout, fonts, metadata, Toaster
  page.tsx          # Assembles all sections
  globals.css       # Base styles, custom cursor, grid bg, scrollbar

components/
  CustomCursor.tsx  # Spring-lag cursor dot + ring
  Navbar.tsx        # Scroll-aware navbar, mobile menu
  DeveloperAvatar.tsx  # Animated inline SVG avatar
  Hero.tsx          # Particle canvas, headline, CTA, marquee
  About.tsx         # Animated counters, split layout
  Projects.tsx      # 3D tilt cards, mock browser frames
  Skills.tsx        # Tag cloud by category
  Experience.tsx    # Vertical timeline
  Contact.tsx       # Email copy, social links
```

---

*Designed & built by Keerthana K R*
