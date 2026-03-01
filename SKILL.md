# SKILL.md — World-Class AI & Software Company Website Guideline

> **Internal Reference** for Designers, Developers, and Marketers at Hunexture.
> Inspired by industry standards from OpenAI, Google, Stripe, Vercel, Notion, and Microsoft.
> This document defines how to think, design, build, and market a top-tier AI/Software website.

---

## Table of Contents

1. [Brand Identity & Strategy](#1-brand-identity--strategy)
2. [Design Philosophy](#2-design-philosophy)
3. [Color System](#3-color-system)
4. [Typography](#4-typography)
5. [Spacing & Layout](#5-spacing--layout)
6. [Component Architecture](#6-component-architecture)
7. [UX Principles & Interaction Design](#7-ux-principles--interaction-design)
8. [Animation & Motion Design](#8-animation--motion-design)
9. [Responsive Design](#9-responsive-design)
10. [Page Structure & Information Architecture](#10-page-structure--information-architecture)
11. [Content Strategy & Copywriting](#11-content-strategy--copywriting)
12. [SEO & Performance](#12-seo--performance)
13. [Accessibility](#13-accessibility)
14. [Development Conventions](#14-development-conventions)
15. [File & Folder Organization](#15-file--folder-organization)
16. [Data Architecture](#16-data-architecture)
17. [Theme System](#17-theme-system)
18. [Marketing & Conversion Strategy](#18-marketing--conversion-strategy)
19. [Launch Checklist](#19-launch-checklist)
20. [Anti-Patterns to Avoid](#20-anti-patterns-to-avoid)

---

## 1. Brand Identity & Strategy

### 1.1 Brand Positioning

A world-class AI & Software company website must communicate **three things within 5 seconds**:
- Who you are
- What you do
- Why you are the best choice

**Hunexture Positioning Statement:**
> "We build intelligent, scalable, and human-centered digital experiences powered by AI."

The brand sits at the intersection of **cutting-edge technology** and **human purpose** — never cold, never pure-corporate. Always smart, precise, and forward-looking.

### 1.2 Brand Voice

| Trait        | Do                                  | Don't                          |
|--------------|-------------------------------------|--------------------------------|
| Confident    | "We build what others only imagine" | "We try our best to..."        |
| Clear        | Short sentences. Strong verbs.      | Jargon overload, vague claims  |
| Human        | Talk to the reader directly ("you") | Passive, institutional tone    |
| Ambitious    | "The future starts here"            | "We are a small company that…" |
| Authoritative| Data, results, case studies         | Unverified superlatives        |

### 1.3 Brand Pillars

1. **Intelligence** — Everything is powered by data, AI, and smart thinking.
2. **Craft** — Every pixel, every line of code is intentional and precise.
3. **Momentum** — Fast, forward, always building. Never static.
4. **Trust** — Transparent, reliable, results-driven.

### 1.4 Logo Guidelines

- Logo must render cleanly at `24px` (favicon), `120px` (navbar), and `300px` (hero/print).
- Use `font-family: 'Orbitron', sans-serif` for the wordmark — futuristic, geometric, readable.
- The logo must work on all three themes: black, white, and blue backgrounds.
- Never stretch, rotate, or add effects to the logo.
- Maintain minimum clear space equal to the height of the logo's capital letter on all sides.

---

## 2. Design Philosophy

### 2.1 Core Principles (The 5 Laws of Hunexture Design)

**Law 1 — Dark-First**
The default experience is a dark (black) theme. Dark UIs signal authority, tech-sophistication, and reduce cognitive load for technical audiences. Always design dark first, then adapt to light/blue.

**Law 2 — Signal Over Noise**
Every element must earn its place. Remove anything that does not directly serve the user's goal or the business objective. White space is not empty — it is breathing room that makes content land.

**Law 3 — Motion Has Meaning**
Never animate for the sake of it. Every transition, hover, and entrance animation must guide attention, confirm feedback, or reveal hierarchy. Purposeless motion is noise.

**Law 4 — Mobile Is Not an Afterthought**
Design at 375px first, then scale up. A component that works perfectly on mobile and scales to desktop is better than the reverse. Test on real devices, not just browser emulators.

**Law 5 — Consistency Builds Trust**
Use the same section header pattern, the same card structure, the same button hierarchy everywhere. Users trust things that feel predictable. Inconsistency signals chaos.

### 2.2 Visual Language

- **Aesthetic:** Neo-futuristic minimalism. Dark backgrounds, neon or white accents, clean geometry.
- **Mood:** Confident, intelligent, slightly cinematic.
- **Texture:** Subtle gradients, glassmorphism effects (`backdrop-filter: blur()`), soft glow shadows.
- **Density:** Medium density — enough content to show expertise, enough space to breathe.

### 2.3 Inspiration References

| Company   | What to Learn From                                   |
|-----------|------------------------------------------------------|
| OpenAI    | Minimal copy, strong visual metaphors, dark theme    |
| Stripe    | Structured content, gradient highlights, trust cues  |
| Vercel    | Speed perception, dark-mode excellence, grid layouts |
| Notion    | Warm tone, accessible simplicity                     |
| Linear    | Motion quality, precision micro-interactions         |
| Google    | Material depth, consistent spacing, clear hierarchy  |
| Microsoft | Enterprise trust, inclusive design, large type scale |

---

## 3. Color System

### 3.1 Theme Architecture

The site supports three switchable themes via `data-theme` attribute on `:root`. All colors are defined as CSS custom properties. **Never hardcode colors in component CSS** — always use variables.

```css
/* Black Theme (Default) */
:root,
:root[data-theme="black"] {
  --navy-blue:      #000000;
  --dark-navy:      #0a0a0a;
  --electric-blue:  #ffffff;
  --bright-blue:    #cccccc;
  --light-blue:     #999999;
  --text-white:     #ffffff;
  --text-gray:      #888888;
  --accent-color:   #ffffff;
  --card-bg:        #1a1a1a;
  --border-color:   #333333;
  --gradient-1:     linear-gradient(135deg, #333333 0%, #1a1a1a 100%);
  --gradient-2:     linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
}

/* White Theme */
:root[data-theme="white"] {
  --navy-blue:      #ffffff;
  --dark-navy:      #f5f5f5;
  --electric-blue:  #000000;
  --bright-blue:    #333333;
  --light-blue:     #666666;
  --text-white:     #000000;
  --text-gray:      #666666;
  --accent-color:   #000000;
  --card-bg:        #f9f9f9;
  --border-color:   #e0e0e0;
}

/* Blue Theme */
:root[data-theme="blue"] {
  --navy-blue:      #0a192f;
  --dark-navy:      #020c1b;
  --electric-blue:  #00d4ff;
  --bright-blue:    #0080ff;
  --light-blue:     #64ffda;
  --text-white:     #e6f1ff;
  --text-gray:      #8892b0;
  --accent-color:   #00d4ff;
  --card-bg:        #112240;
  --border-color:   #00d4ff;
}
```

### 3.2 Alpha Variants (Opacity Scale)

Each theme generates alpha variants of `--electric-blue` for borders, glows, and overlays:

| Variable              | Opacity | Typical Use                         |
|-----------------------|---------|-------------------------------------|
| `--electric-blue-03`  | 3%      | Subtle background tints             |
| `--electric-blue-05`  | 5%      | Card hover backgrounds              |
| `--electric-blue-08`  | 8%      | Section dividers                    |
| `--electric-blue-10`  | 10%     | Default card borders                |
| `--electric-blue-15`  | 15%     | Input borders                       |
| `--electric-blue-20`  | 20%     | Hover borders, icon backgrounds     |
| `--electric-blue-30`  | 30%     | Active states, glow shadows (dim)   |
| `--electric-blue-40`  | 40%     | Badge backgrounds                   |
| `--electric-blue-50`  | 50%     | Strong glow shadows                 |
| `--electric-blue-60`  | 60%     | Focused states                      |
| `--electric-blue-80`  | 80%     | High-emphasis text accents          |

### 3.3 Semantic Color Usage

| Intent            | Variable                              |
|-------------------|---------------------------------------|
| Primary text      | `var(--text-white)`                   |
| Secondary text    | `var(--text-gray)`                    |
| Page background   | `var(--dark-navy)`                    |
| Section background| `var(--navy-blue)`                    |
| Card background   | `var(--card-bg)`                      |
| Accent / CTA      | `var(--electric-blue)`                |
| Border (default)  | `var(--electric-blue-10)`             |
| Border (hover)    | `var(--electric-blue-30)`             |
| Overlay           | `var(--overlay-bg)`                   |
| Glow shadow       | `var(--electric-blue-20)`             |

### 3.4 Gradient Text

Used for hero headings and key emphasis words:

```css
.gradient-text {
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 4. Typography

### 4.1 Font Stack

```css
/* Headlines, brand names, navigation */
font-family: 'Orbitron', sans-serif;

/* Body, descriptions, UI labels */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
             'Roboto', 'Helvetica Neue', sans-serif;
```

Import in `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
```

### 4.2 Type Scale (Responsive)

| Element | 1440px+ | 1024–1439px | 768–1023px | 480px  | <375px |
|---------|---------|-------------|------------|--------|--------|
| h1      | 48px    | 44px        | 36px       | 28px   | 26px   |
| h2      | 40px    | 36px        | 30px       | 24px   | 22px   |
| h3      | 32px    | 28px        | 24px       | 20px   | 19px   |
| h4      | 24px    | 22px        | 20px       | 18px   | 17px   |
| h5      | 20px    | 18px        | 18px       | 16px   | 15px   |
| body    | 16px    | 15px        | 15px       | 14px   | 13px   |

### 4.3 Font Weight Usage

| Weight | Value | Usage                                    |
|--------|-------|------------------------------------------|
| Light  | 300   | Captions, meta labels                    |
| Regular| 400   | Body text, descriptions                  |
| Medium | 500   | UI labels, nav links                     |
| Semi   | 600   | Section tags, card titles                |
| Bold   | 700   | Hero headings, CTA buttons               |
| Black  | 900   | Display sizes, brand statements          |

### 4.4 Line Height & Letter Spacing

```css
/* Hero headings */
line-height: 1.1;
letter-spacing: -0.02em;

/* Section headings */
line-height: 1.2;
letter-spacing: -0.01em;

/* Body text */
line-height: 1.6;
letter-spacing: 0;

/* Labels / Tags */
line-height: 1.4;
letter-spacing: 0.08em;
text-transform: uppercase;
font-size: 0.75rem;
```

---

## 5. Spacing & Layout

### 5.1 Spacing Scale

All spacing follows an 8px base grid:

| Token   | Value  | Use Case                              |
|---------|--------|---------------------------------------|
| `4px`   | 0.25rem| Icon-to-text gap, tight inline spacing|
| `8px`   | 0.5rem | Small internal padding                |
| `12px`  | 0.75rem| Card internal gap                     |
| `16px`  | 1rem   | Default padding, gap between items    |
| `24px`  | 1.5rem | Card padding, section sub-gap         |
| `32px`  | 2rem   | Component separation                  |
| `48px`  | 3rem   | Section internal padding (mobile)     |
| `64px`  | 4rem   | Section padding (tablet)              |
| `80px`  | 5rem   | Section padding (desktop)             |
| `120px` | 7.5rem | Max section padding (large screens)   |

### 5.2 Container & Max-Width

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Large sections */
.container--wide {
  max-width: 1400px;
}

/* Narrow content (blog, legal) */
.container--narrow {
  max-width: 800px;
}
```

### 5.3 Grid System

Use CSS Grid for layouts. Avoid Bootstrap-style 12-column grids.

```css
/* Standard 3-column (services, features) */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

/* 2-column (hero, about) */
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

/* Auto-fit (portfolio, team) */
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}
```

### 5.4 Section Anatomy

Every section follows this exact structure:

```jsx
<section id="section-id" className="section-name">
  <div className="container">
    <div className="section-header">
      <span className="section-tag">Short Label</span>
      <h2 className="section-title">Main Heading</h2>
      <div className="title-underline"></div>
      <p className="section-description">Supporting paragraph — 1–2 lines max.</p>
    </div>

    <div className="section-content">
      {/* Cards, grids, features, etc. */}
    </div>
  </div>
</section>
```

```css
.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--electric-blue);
  border: 1px solid var(--electric-blue-30);
  background: var(--electric-blue-05);
  padding: 6px 16px;
  border-radius: 20px;
  margin-bottom: 16px;
}

.section-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  color: var(--text-white);
  margin-bottom: 16px;
}

.title-underline {
  width: 60px;
  height: 3px;
  background: var(--electric-blue);
  margin: 0 auto 20px;
  border-radius: 2px;
}

.section-description {
  font-size: 1.1rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}
```

---

## 6. Component Architecture

### 6.1 Component Rules

- **One component = one file pair**: `ComponentName.jsx` + `ComponentName.css`
- **No inline styles** except for dynamic values (e.g., scroll-based transforms)
- **No global class overrides** — scope all styles to the component's root class
- Components are **stateless by default** — lift state up only when needed
- Use `React.memo()` only when profiling proves it necessary

### 6.2 Component Hierarchy

```
App.js
├── Navbar.jsx              (fixed, always visible)
├── Routes
│   ├── Home
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   └── Contact.jsx
│   ├── ServiceDetail.jsx
│   ├── ProjectDetail.jsx
│   ├── IndustryDetail.jsx
│   └── BlogPost.jsx
└── Footer.jsx              (always visible)
```

### 6.3 Standard Card Pattern

```jsx
<div className="card">
  <div className="card-icon">
    <Icon />
  </div>
  <div className="card-content">
    <h3 className="card-title">Title</h3>
    <p className="card-description">Description text here.</p>
  </div>
  <div className="card-footer">
    <a href="/link" className="card-cta">
      Learn More <FaArrowRight />
    </a>
  </div>
</div>
```

```css
.card {
  background: var(--card-bg);
  border: 1px solid var(--electric-blue-10);
  border-radius: 16px;
  padding: 32px;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-8px);
  border-color: var(--electric-blue-30);
  box-shadow: 0 20px 40px var(--electric-blue-10);
}
```

### 6.4 Button Hierarchy

Always use these three levels — never invent new ones:

```css
/* Level 1 — Primary CTA */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--electric-blue);
  color: var(--navy-blue);
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.95rem;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--electric-blue-30);
}

/* Level 2 — Secondary (Ghost) */
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: var(--electric-blue);
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  border: 1px solid var(--electric-blue-30);
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.btn-secondary:hover {
  background: var(--electric-blue-05);
  border-color: var(--electric-blue);
}

/* Level 3 — Text Link CTA */
.btn-text {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--electric-blue);
  font-weight: 600;
  text-decoration: none;
  font-size: 0.9rem;
}

.btn-text:hover {
  gap: 10px;
}
```

### 6.5 Icon Usage

Use `react-icons/fa` (Font Awesome) as the standard icon library. Rules:
- Always import only what you use (named imports, not wildcard)
- Pair icons with text labels in buttons — never icon-only without `aria-label`
- Standard icon sizes: `16px` (inline), `20px` (button), `24px` (card), `32–48px` (feature)

---

## 7. UX Principles & Interaction Design

### 7.1 The Hierarchy of User Needs

Every page must satisfy these in order:

1. **Clarity** — Can the user understand what this page is for in 3 seconds?
2. **Trust** — Do they believe you can deliver what you promise?
3. **Action** — Is the next step (CTA) obvious and frictionless?
4. **Delight** — Is there a moment of surprise or elegance that makes them remember you?

### 7.2 Navigation Principles

- The navbar must be **sticky** and remain accessible at all times
- Scroll depth beyond 100px should trigger a subtle background blur/opacity increase:
  ```css
  .navbar.scrolled {
    background: var(--overlay-bg);
    backdrop-filter: blur(20px);
    box-shadow: 0 2px 20px var(--electric-blue-10);
  }
  ```
- Dropdowns open on hover (desktop) and tap (mobile)
- Mobile menu uses a full-screen slide-in — never a tiny collapsed dropdown
- Active page/section should be visually indicated in the nav
- Logo always links to `/#hero` (home)

### 7.3 Scroll-Based Behaviors

- Smooth scroll: `html { scroll-behavior: smooth; }`
- Scroll indicator on hero (mouse + wheel animation) — disappears after first scroll
- Sections animate in on scroll using Intersection Observer (not scroll events)
- Navbar changes style at `scrollY > 100px`
- "Back to top" appears after scrolling 500px

### 7.4 Form UX

```jsx
// Standard form pattern
<form className="contact-form" onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="name">Your Name</label>
    <input
      id="name"
      type="text"
      placeholder="John Doe"
      required
      value={formData.name}
      onChange={handleChange}
    />
  </div>
  <button type="submit" className="btn-primary" disabled={isLoading}>
    {isLoading ? 'Sending...' : 'Send Message'}
    {!isLoading && <FaRocket />}
  </button>
</form>
```

- Labels always above inputs — never placeholder-only forms
- Show validation errors inline, below each field, in real-time
- Disable submit button while loading; show text feedback ("Sending...")
- Success state replaces form content — never just alert()
- Use `FormSubmit.co` or a backend endpoint — never expose API keys in frontend

### 7.5 Loading States

- Never leave the user staring at blank space
- Use skeleton screens for cards and lists — not spinners
- Buttons in loading state: disabled + text change + icon removed

### 7.6 Empty States

Every list or grid must have an empty state:
```jsx
{items.length === 0 && (
  <div className="empty-state">
    <EmptyIcon />
    <h3>No items found</h3>
    <p>Try adjusting your filters or check back later.</p>
  </div>
)}
```

---

## 8. Animation & Motion Design

### 8.1 Principles

- **Duration:** 200ms for micro (hover), 300ms for component, 500ms for page transitions
- **Easing:** `ease` or `cubic-bezier(0.4, 0, 0.2, 1)` (Material Standard) — never `linear`
- **Direction:** Elements enter from the direction of logical flow (bottom-up, left-to-right)
- **Stagger:** When multiple items enter, delay each by `50–100ms`
- **Reduced Motion:** Always respect `@media (prefers-reduced-motion: reduce)`

### 8.2 Keyframe Library

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.85); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-16px); }
}

@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 20px var(--electric-blue-20); }
  50%       { box-shadow: 0 0 40px var(--electric-blue-40); }
}

@keyframes shimmer {
  0%   { background-position: -1000px 0; }
  100% { background-position:  1000px 0; }
}

@keyframes textGlow {
  0%, 100% { text-shadow: 0 0 20px var(--electric-blue-30); }
  50%       { text-shadow: 0 0 40px var(--electric-blue-60); }
}

@keyframes badgePulse {
  0%, 100% { box-shadow: 0 0 0 0 var(--electric-blue-30); }
  50%       { box-shadow: 0 0 0 8px var(--electric-blue-00); }
}
```

### 8.3 Scroll-Triggered Animations

Use Intersection Observer (not scroll listener) for performance:

```js
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target); // animate once only
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
```

```css
.scroll-animate {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.scroll-animate.animate-in {
  opacity: 1;
  transform: translateY(0);
}
```

### 8.4 Hover Effects Cheat Sheet

| Element       | Effect                                              |
|---------------|-----------------------------------------------------|
| Card          | `translateY(-8px)` + border glow + shadow increase  |
| Button primary| `translateY(-2px)` + box-shadow + slight opacity    |
| Icon button   | `scale(1.1)` + color change                         |
| Nav link      | Color change + underline slide-in from left         |
| Logo          | `scale(1.05)` subtle, no rotation                   |
| Tag/Badge     | Background fill transition                          |
| Stat counter  | None — let the number do the work                   |

### 8.5 Hero Badge Animation

```css
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  animation: fadeInUp 0.6s ease both;
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--electric-blue);
  animation: badgePulse 2s ease infinite;
}
```

---

## 9. Responsive Design

### 9.1 Breakpoint System

```css
/* Large Desktop */
@media (min-width: 1920px) { ... }

/* Desktop */
@media (min-width: 1440px) { ... }

/* Laptop */
@media (max-width: 1439px) and (min-width: 1024px) { ... }

/* Tablet Landscape */
@media (max-width: 1023px) and (min-width: 769px) { ... }

/* Tablet Portrait */
@media (max-width: 768px) and (min-width: 481px) { ... }

/* Mobile */
@media (max-width: 480px) { ... }

/* Small Mobile */
@media (max-width: 375px) { ... }
```

### 9.2 Grid Collapse Rules

| Layout         | Desktop  | Tablet   | Mobile   |
|----------------|----------|----------|----------|
| Hero (2-col)   | 2 columns| 2 columns| 1 column |
| Services (3)   | 3 columns| 2 columns| 1 column |
| Portfolio      | 3 columns| 2 columns| 1 column |
| About (2-col)  | 2 columns| 1 column | 1 column |
| Footer (4-col) | 4 columns| 2 columns| 1 column |
| Stats (3-col)  | 3 columns| 3 columns| 1 column |

### 9.3 Touch Targets

All interactive elements must be at minimum `44x44px` on touch devices:

```css
@media (hover: none) and (pointer: coarse) {
  button, a, input, textarea, select {
    min-height: 44px;
    min-width: 44px;
  }
}
```

### 9.4 Mobile Navigation

- Hamburger menu icon: 3 lines → X (animated transform)
- Mobile menu: full-height overlay, slides in from right
- Close on: X button, backdrop click, route change
- All nav items visible in mobile menu — no hidden links
- CTA button always visible in mobile menu

---

## 10. Page Structure & Information Architecture

### 10.1 Home Page Sections (in order)

```
1. Hero           — Who you are + primary CTA (above fold)
2. About          — Mission, values, team snapshot
3. Services       — What you offer (6 core services)
4. Portfolio      — Proof of work (3–6 featured projects)
5. Testimonials   — Social proof (3 client quotes)
6. Industries     — Sectors you serve
7. Blog Preview   — 3 latest posts (shows thought leadership)
8. Contact        — Lead capture form
```

### 10.2 Hero Section Requirements

The hero is the most important section — it must:

- Load in < 2 seconds including video/animations
- State the value proposition in `<h1>` — 6 words max
- Have a supporting description — 2 sentences max
- Have exactly 2 CTAs: primary (contact/demo) + secondary (portfolio/work)
- Show 3 social-proof stats (projects, satisfaction, years)
- Include a visual element (video, 3D, animation) on desktop

```jsx
// Hero structure
<section id="hero" className="hero">
  <div className="hero-content">
    <div className="hero-badge">
      <span className="badge-dot"></span>
      AI-Powered Solutions
    </div>
    <h1 className="hero-title">
      Building the Next
      <span className="gradient-text"> Human Future</span>
    </h1>
    <p className="hero-description">
      Empowering businesses with cutting-edge AI solutions.
      We transform ideas into intelligent, scalable digital experiences.
    </p>
    <div className="hero-cta">
      <a href="#contact" className="btn-primary">Get Started <FaRocket /></a>
      <a href="#portfolio" className="btn-secondary">View Our Work</a>
    </div>
    <div className="hero-stats">
      {stats.map(stat => <StatItem key={stat.label} {...stat} />)}
    </div>
  </div>
  <div className="hero-visual">
    <video autoPlay loop muted playsInline className="hero-video">
      <source src="/video/ai-video-v3.mp4" type="video/mp4" />
    </video>
  </div>
  <div className="scroll-indicator">
    <div className="mouse"><div className="wheel"></div></div>
    <p>Scroll to explore</p>
  </div>
</section>
```

### 10.3 Service Detail Page Structure

```
1. Hero Banner     — Service name, short description, CTA
2. Overview        — What it is, what problem it solves
3. Key Features    — 4–6 bullet cards with icons
4. Benefits        — Business outcomes (ROI-focused)
5. Our Process     — 4-step numbered workflow
6. Technologies    — Stack/tools used (with icons)
7. Use Cases       — 4 real-world application cards
8. FAQ             — 3–5 questions (accordion)
9. CTA Section     — "Ready to get started?" + contact button
```

### 10.4 Blog Post Structure

```
1. Breadcrumb      — Home > Blog > Category
2. Post Header     — Title, date, tags, author, read time
3. Hero Image      — Full-width, 16:9 aspect ratio
4. Content         — Long-form with proper heading hierarchy
5. Interactive     — 3D visualization / code snippets (if applicable)
6. Related Posts   — 3 cards at bottom
7. CTA             — "Have a project in mind?" section
```

---

## 11. Content Strategy & Copywriting

### 11.1 Copywriting Formula (Per Section)

**Hero Headline:** Problem solved + transformation + audience
> "Building the Next Human Future" — aspiration + brand name meaning

**Section Headline:** Action word + specific outcome
> "Services That Drive Growth" not "Our Services"

**Card/Feature Description:** What it does + why it matters + who benefits
> "Custom ML models tailored to your business needs — from predictive analytics to intelligent automation." (2 sentences max)

**CTA Text:** Action verb + specific result
> "Get Started" (direct) | "See Our Work" (curiosity) | "Book a Free Call" (low friction)

### 11.2 Content Hierarchy Per Page

```
H1  — One per page. The primary keyword + value prop.
H2  — Section titles. One per major section.
H3  — Card/feature titles. Scannable.
H4  — Sub-features, FAQ questions.
p   — Supporting detail. Max 3 sentences per paragraph.
```

### 11.3 Numbers & Social Proof

Always show specificity over generality:
- `50+ AI Projects` — not "many projects"
- `100+ Solutions Delivered` — not "lots of clients"
- `99% Client Satisfaction` — not "highly rated"
- `< 2s Load Time` — not "fast"

### 11.4 Content Tone By Section

| Section   | Tone                          |
|-----------|-------------------------------|
| Hero      | Bold, inspiring, confident    |
| About     | Warm, human, mission-driven   |
| Services  | Clear, benefit-focused        |
| Portfolio | Proof-based, specific, proud  |
| Contact   | Helpful, low-pressure, direct |
| Blog      | Educational, insightful       |
| Footer    | Neutral, informational        |

---

## 12. SEO & Performance

### 12.1 Meta Tags (Per Page)

```html
<meta name="description" content="Hunexture builds world-class AI and software solutions. Custom ML models, web apps, and digital experiences." />
<meta property="og:title" content="Hunexture — AI & Software Solutions" />
<meta property="og:description" content="Building the Next Human Future with AI." />
<meta property="og:image" content="/images/og-image.png" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="canonical" href="https://hunexture.github.io/" />
```

### 12.2 Structured Data (JSON-LD)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hunexture",
  "url": "https://hunexture.github.io",
  "description": "AI & Software company building intelligent digital solutions.",
  "sameAs": [
    "https://linkedin.com/company/hunexture",
    "https://github.com/hunexture"
  ],
  "offers": {
    "@type": "Offer",
    "itemOffered": ["AI Solutions", "Web Development", "App Development"]
  }
}
</script>
```

### 12.3 Core Web Vitals Targets

| Metric | Target  | Critical For          |
|--------|---------|-----------------------|
| LCP    | < 2.5s  | Hero video/image load |
| FID    | < 100ms | Interactive elements  |
| CLS    | < 0.1   | Layout stability      |
| TTFB   | < 600ms | Server/hosting speed  |

### 12.4 Performance Optimization Rules

- **Images:** Use WebP format; include `width`/`height` attributes; lazy-load below-fold images
- **Video:** Compress to < 5MB for hero; use `preload="none"` for non-hero videos
- **Fonts:** Use `display=swap` in Google Fonts URL; subset to used characters
- **CSS:** Component-scoped, no unused imports
- **JS:** Code-split by route; lazy-load heavy components (Three.js visualizations)
- **3D/Three.js:** Always lazy-load; add fallback for low-end devices

```jsx
// Lazy load heavy components
const VectorVisualization3D = React.lazy(() =>
  import('./VectorVisualization3D')
);

// Usage with Suspense
<Suspense fallback={<div className="viz-skeleton" />}>
  <VectorVisualization3D />
</Suspense>
```

---

## 13. Accessibility

### 13.1 WCAG 2.1 AA Requirements

- **Color contrast:** Minimum 4.5:1 for body text, 3:1 for large text
- **Focus indicators:** All interactive elements must have visible focus ring
- **Alt text:** All images with `alt=""` for decorative, descriptive for informational
- **Keyboard navigation:** Tab order must be logical; all UI usable without mouse
- **ARIA labels:** Icon-only buttons must have `aria-label`
- **Semantic HTML:** Use proper `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **Skip link:** Add `<a href="#main-content" className="skip-link">Skip to content</a>`

### 13.2 Focus Styles

```css
/* Global focus styles — never remove outline without replacing it */
:focus-visible {
  outline: 2px solid var(--electric-blue);
  outline-offset: 4px;
  border-radius: 4px;
}
```

### 13.3 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 14. Development Conventions

### 14.1 Naming Conventions

| Item              | Convention         | Example                        |
|-------------------|--------------------|--------------------------------|
| Components        | PascalCase         | `ServiceCard.jsx`              |
| CSS classes       | kebab-case         | `.service-card-title`          |
| JS variables      | camelCase          | `const isMenuOpen`             |
| Constants         | SCREAMING_SNAKE    | `const MAX_ITEMS = 6`          |
| CSS custom props  | kebab-case         | `--electric-blue-20`           |
| Data files        | camelCase          | `servicesData.js`              |
| Route slugs       | kebab-case         | `/services/ai-solutions`       |
| Image files       | kebab-case         | `tech-background.svg`          |

### 14.2 Component Template

```jsx
// ComponentName.jsx
import React from 'react'
import { FaIcon } from 'react-icons/fa'
import './ComponentName.css'

const ComponentName = ({ prop1, prop2 }) => {
  return (
    <section id="section-id" className="component-name">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Label</span>
          <h2 className="section-title">Title</h2>
          <div className="title-underline"></div>
          <p className="section-description">Description.</p>
        </div>
        {/* Content */}
      </div>
    </section>
  )
}

export default ComponentName
```

### 14.3 CSS File Template

```css
/* ================================================
   ComponentName.css
   Description: Styles for the ComponentName section
   ================================================ */

.component-name {
  padding: 80px 0;
  background: var(--dark-navy);
}

/* ---- Section Header ---- */
.component-name .section-header { /* ... */ }

/* ---- Cards / Grid ---- */
.component-name-grid { /* ... */ }
.component-name-card { /* ... */ }
.component-name-card:hover { /* ... */ }

/* ---- Responsive ---- */
@media (max-width: 1023px) { /* tablet */ }
@media (max-width: 768px)  { /* mobile landscape */ }
@media (max-width: 480px)  { /* mobile */ }
```

### 14.4 Data File Pattern

```js
// src/data/featureData.js

export const featureData = [
  {
    id: 'feature-slug',
    slug: 'feature-slug',
    icon: IconComponent,
    title: 'Feature Title',
    shortDescription: 'One-line teaser',
    description: 'Full paragraph description...',
    features: ['Item 1', 'Item 2'],
    benefits: ['Benefit 1', 'Benefit 2'],
    process: [
      { step: 1, title: 'Step Name', description: 'What happens here.' }
    ]
  }
]

export const getFeatureBySlug = (slug) =>
  featureData.find(item => item.slug === slug)

export const getAllFeatureSlugs = () =>
  featureData.map(item => item.slug)
```

### 14.5 Routing Pattern

```jsx
// App.js
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/portfolio/:slug" element={<ProjectDetail />} />
            <Route path="/industries/:slug" element={<IndustryDetail />} />
            <Route path="/blog/:category" element={<BlogList />} />
            <Route path="/blog/:category/:slug" element={<BlogPost />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </ThemeProvider>
  )
}
```

---

## 15. File & Folder Organization

```
src/
├── components/
│   ├── Navbar.jsx              # Fixed navigation
│   ├── Navbar.css
│   ├── Hero.jsx                # Above-fold section
│   ├── Hero.css
│   ├── About.jsx
│   ├── About.css
│   ├── Services.jsx
│   ├── Services.css
│   ├── Portfolio.jsx
│   ├── Portfolio.css
│   ├── Contact.jsx
│   ├── Contact.css
│   ├── Footer.jsx
│   ├── Footer.css
│   ├── BlogList.jsx
│   ├── BlogPost.jsx
│   ├── ServiceDetail.jsx
│   ├── ServiceDetail.css
│   ├── ProjectDetail.jsx
│   ├── IndustryDetail.jsx
│   ├── AnimatedBackground.jsx  # Canvas particle system
│   ├── AnimatedBackground.css
│   └── visualizations/         # Three.js components (lazy loaded)
│       ├── VectorVisualization3D.jsx
│       ├── DotProduct3D.jsx
│       └── ...
│
├── context/
│   └── ThemeContext.js          # Theme state (black/white/blue)
│
├── data/
│   ├── servicesData.js          # Service definitions
│   ├── portfolioData.js         # Project showcase data
│   ├── blogData.js              # Blog post content
│   └── industriesData.js        # Industry-specific solutions
│
├── App.js                       # Root — routing + layout
├── App.css                      # App-level layout styles
├── index.js                     # Entry point
└── index.css                    # Global variables + base styles

public/
├── images/
│   ├── hero/                    # Hero SVG backgrounds
│   ├── portfolio/               # Project thumbnails
│   └── team/                    # Team headshots
├── video/
│   └── ai-video-v3.mp4         # Hero background video
├── index.html
├── CNAME                        # GitHub Pages custom domain
└── favicon.ico
```

---

## 16. Data Architecture

### 16.1 Data Separation Principle

**All content lives in `/src/data/` files — never hardcode content in JSX.**

This means:
- Adding a new service = add to `servicesData.js` only
- Adding a portfolio project = add to `portfolioData.js` only
- No content changes require component file edits

### 16.2 Data Shape Standards

```js
// Every data item must have:
{
  id: string,          // unique, no spaces
  slug: string,        // URL-safe, kebab-case
  title: string,       // Display name
  shortDescription: string,  // 1-line teaser (for cards)
  description: string, // Full paragraph (for detail pages)
  icon: ReactComponent, // from react-icons
  // ... domain-specific fields
}
```

### 16.3 Slug Routing Pattern

```jsx
// In any detail component:
import { useParams } from 'react-router-dom'
import { getServiceBySlug } from '../data/servicesData'

const ServiceDetail = () => {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <Navigate to="/" replace />

  return ( /* render with service data */ )
}
```

---

## 17. Theme System

### 17.1 ThemeContext Architecture

```jsx
// src/context/ThemeContext.js
import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'black'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev =>
      prev === 'black' ? 'white' : prev === 'white' ? 'blue' : 'black'
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
```

### 17.2 Theme Toggle Button

```jsx
// In Navbar
import { useTheme } from '../context/ThemeContext'
import { FaSun, FaMoon, FaCircle } from 'react-icons/fa'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  const icons = { black: <FaMoon />, white: <FaSun />, blue: <FaCircle /> }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'black' ? 'white' : 'blue'} theme`}
    >
      {icons[theme]}
    </button>
  )
}
```

### 17.3 Theme-Aware Component Pattern

Every component should work in all three themes purely through CSS variables — no JavaScript theme checks in JSX. If a component looks wrong in one theme, fix the CSS variable usage.

---

## 18. Marketing & Conversion Strategy

### 18.1 Conversion Funnel

```
Awareness  → Hero section, blog posts, social sharing
Interest   → About section, services overview, portfolio
Desire     → Case studies, testimonials, social proof stats
Action     → Contact form, "Get Started" CTA, "Book a Call"
Retention  → Blog content, newsletter, LinkedIn updates
```

### 18.2 CTA Placement Rules

- **Hero:** 2 CTAs — primary and secondary
- **Services section:** "Learn More" on each service card → detail page
- **Portfolio section:** "View Project" on each card + "See All Work" section CTA
- **About section:** 1 secondary CTA → contact
- **Footer:** 1 CTA in footer banner above footer links
- **Every detail page:** CTA section at the bottom before footer

The ratio is: **never more than 2 CTAs visible at once**, never fewer than 1 CTA per screen-height of content.

### 18.3 Trust Signals

Place these throughout the page to reduce doubt:

| Signal Type        | Example                                |
|--------------------|----------------------------------------|
| Social proof stats | "50+ AI Projects Delivered"            |
| Client logos       | Grid of recognizable company logos     |
| Testimonials       | Quoted, with name, role, company       |
| Tech badges        | React, AWS, TensorFlow logos           |
| Security/legal     | Privacy Policy, Cookie Notice          |
| Contact visibility | Phone/email visible in footer + contact|
| Response time      | "We reply within 24 hours"             |

### 18.4 Lead Capture Optimization

- Form must be **above the fold on contact page**
- Fields: Name, Email, Company (optional), Message, Budget range (optional)
- **Never require signup** to make first contact
- Include a **LinkedIn link** as alternative contact (reduces friction)
- After form submission: thank-you message + next steps + timeline

### 18.5 SEO Content Calendar

Publish blog content that targets these keyword types:

| Type              | Example                                    | Intent           |
|-------------------|--------------------------------------------|------------------|
| Educational       | "What is Gradient Descent?"                | Awareness        |
| Comparison        | "React Native vs Flutter in 2025"          | Research         |
| How-To            | "How to Build a ML Pipeline"               | Decision         |
| Case Study        | "How We Reduced Costs by 40% with AI"      | Conversion       |
| Thought Leadership| "The Future of AI in Healthcare"           | Authority        |

Minimum: **2 posts per month**. Each post: 1,500+ words, 1 interactive visualization, proper heading structure.

---

## 19. Launch Checklist

### 19.1 Pre-Launch (Design & Content)

- [ ] All 3 themes tested on every page and component
- [ ] All images have `alt` text; decorative images have `alt=""`
- [ ] All CTA buttons have clear, action-oriented text
- [ ] All form fields have visible labels
- [ ] Content reviewed for typos and grammatical errors
- [ ] Portfolio section has minimum 3 real projects
- [ ] About section has company story and mission statement
- [ ] Contact form tested — submissions received

### 19.2 Pre-Launch (Technical)

- [ ] `<title>` and `<meta name="description">` set for all pages
- [ ] `og:image` created (1200×630px) and linked
- [ ] Favicon at all sizes (`16px`, `32px`, `180px` apple-touch-icon)
- [ ] Google Analytics / Plausible installed and tracking
- [ ] `sitemap.xml` generated and submitted to Google Search Console
- [ ] `robots.txt` configured
- [ ] All links tested — no 404s
- [ ] Hero video compressed to < 5MB
- [ ] Lighthouse score > 85 on all categories
- [ ] Tested on Chrome, Firefox, Safari, Edge
- [ ] Tested on iPhone (Safari), Android (Chrome)
- [ ] HTTPS enabled (GitHub Pages default — verify CNAME)
- [ ] `CNAME` file present in `/public` for custom domain

### 19.3 Post-Launch (Week 1)

- [ ] Monitor Core Web Vitals in Google Search Console
- [ ] Submit first blog post
- [ ] Share on LinkedIn, Twitter/X, ProductHunt
- [ ] Set up heatmap tool (Hotjar, Microsoft Clarity) to track scroll depth
- [ ] Review and respond to any contact form submissions within 24h
- [ ] Create Google Business Profile

---

## 20. Anti-Patterns to Avoid

### 20.1 Design Anti-Patterns

| Anti-Pattern                          | Why It's Bad                               | Fix                                    |
|---------------------------------------|---------------------------------------------|----------------------------------------|
| Using 5+ different fonts              | Visual chaos, slow load                    | Max 2 fonts: `Orbitron` + `Inter`      |
| Hardcoding colors in component CSS    | Theme system breaks                         | Always use `var(--variable-name)`      |
| Cards without hover states            | Feels static, low quality                  | Add `translateY` + border glow         |
| Using `px` for font sizes in media queries | Doesn't scale well                   | Use `rem` or define sizes in `:root`   |
| Placeholder-only form labels          | Fails accessibility                         | Always use explicit `<label>` elements |
| Justify-content: space-between for 2 items in a grid | Creates huge gaps on tablet | Use `gap` property instead |
| Non-semantic HTML divs everywhere     | Bad for SEO and accessibility              | Use `<section>`, `<article>`, `<nav>`  |

### 20.2 Development Anti-Patterns

| Anti-Pattern                          | Why It's Bad                               | Fix                                    |
|---------------------------------------|---------------------------------------------|----------------------------------------|
| Content hardcoded in JSX              | Unmaintainable, no separation of concerns  | Move to `/src/data/` files             |
| `useEffect` with no dependency array  | Causes infinite loops                      | Always provide correct dependencies    |
| Importing all of react-icons          | Bloats bundle size                          | Named imports only                     |
| Using `setTimeout` for animations     | Fragile, inconsistent                       | Use CSS transitions + `animationend`   |
| CSS `!important` overuse              | Specificity wars                            | Increase selector specificity instead  |
| Three.js loaded eagerly               | Huge bundle, slow initial load             | `React.lazy()` + `Suspense`            |
| Alert() for form success/error        | Poor UX, blocking                           | Inline success/error state in JSX      |

### 20.3 Content Anti-Patterns

| Anti-Pattern                          | Why It's Bad                               | Fix                                    |
|---------------------------------------|---------------------------------------------|----------------------------------------|
| "We are a leading company..."         | Generic, zero credibility                  | State specific facts and numbers       |
| Hero H1 with 15+ words               | Unreadable, dilutes message                | Max 8 words, bold and direct           |
| No visible contact info               | Kills trust                                 | Email/LinkedIn in footer + contact page|
| Blog posts without images             | Low engagement, poor SEO                   | Always include hero image + visualizations |
| Generic stock photos of meetings      | Feels fake                                  | Use abstract tech visuals or real screenshots |

---

## Appendix: Quick Reference

### CSS Variable Quick Lookup

```
Background:  var(--dark-navy)
Cards:       var(--card-bg)
Text primary: var(--text-white)
Text muted:  var(--text-gray)
Accent:      var(--electric-blue)
Border:      var(--electric-blue-10)
Border hover: var(--electric-blue-30)
Glow:        var(--electric-blue-20)
```

### Standard Transition

```css
transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
```

### Standard Card Shadow on Hover

```css
box-shadow: 0 20px 40px var(--electric-blue-10), 0 0 0 1px var(--electric-blue-20);
```

### Section Padding

```css
padding: 80px 0;          /* desktop */
padding: 60px 0;          /* tablet */
padding: 48px 0;          /* mobile */
```

### Orbitron Google Fonts Import

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

---

*SKILL.md — Version 1.0 | Hunexture Internal Documentation*
*Last updated: 2026 | Maintained by: Design & Engineering Team*
