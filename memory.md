# 🧠 Hunexture Website — Project Memory

> **Purpose:** This file is the single source of truth for understanding this project.
> Read this before adding any new feature or making updates. Keep this file updated when you add/change anything significant.

---

## 📋 Project Overview

- **Name:** Hunexture — "Building the Next Human Future"
- **Repo / Deployed URL:** https://hunexture.com
- **Type:** React Single-Page Application (SPA), deployed via GitHub Pages
- **Stack:** React 19, React Router DOM v7, Framer Motion, React Icons v5, Three.js, gh-pages
- **Entry Point:** `src/index.js` → `src/App.js`
- **Dev Server:** `npm start` (runs on port 3000)
- **Build & Deploy:** `npm run deploy` (runs `npm run build` then `gh-pages -d build`)

---

## 🗂️ Project Structure

```
hunexture.github.io/
├── public/               # Static assets served directly
│   ├── images/           # All images (portfolio SVGs, tech icons, etc.)
│   │   ├── tech-icons/   # SVG icons for technologies (used in servicesData)
│   │   └── portfolio/    # SVG images for portfolio cards
│   ├── video/            # Background video assets
│   ├── 3d/               # 3D model assets
│   ├── index.html        # HTML entry point
│   └── manifest.json     # PWA manifest
├── src/
│   ├── App.js            # Root app — routing, layout, global structure
│   ├── App.css           # App-level styles
│   ├── index.js          # React DOM entry
│   ├── index.css         # Global CSS variables (themes), typography, scrollbar
│   ├── context/
│   │   └── ThemeContext.js  # Dark/light/blue theme provider
│   ├── components/       # All page sections and UI components (see below)
│   └── data/             # All page content data (services, portfolio, etc.)
```

---

## 🧩 Routing (App.js)

All routes are defined in `src/App.js`:

| Path | Component | Notes |
|---|---|---|
| `/` | `HomePage` | Composed of Hero, TechMarquee, About, ProcessSection, Testimonials, Services, Portfolio, FAQ, Contact |
| `/services/ai-solutions` | `AISolutionsPage` | Special dedicated AI page (not a slug route) |
| `/services/web-development` | `WebDevelopmentPage` | Special dedicated Web Development page (not a slug route) |
| `/services/:slug` | `ServiceDetail` | Dynamic service detail page |
| `/portfolio/:slug` | `ProjectDetail` | Dynamic portfolio project page |
| `/industries/:slug` | `IndustryDetail` | Dynamic industry detail page |
| `/ai/:slug` | `AIDetail` | AI blog/detail page |
| `/privacy-policy` | `PrivacyPolicy` | Legal page |
| `/terms-of-service` | `TermsOfService` | Legal page |
| `/cookie-policy` | `CookiePolicy` | Legal page |
| `/blog` | `BlogList` | Blog listing page |
| `/blog/:category` | `BlogList` | Filtered blog listing |
| `/blog/:category/:slug` | `BlogPost` | Individual blog post (interactive 3D visualizations) |

### Layout Rules (in `App.js` — `Layout` component)
- `AnimatedBackground` and `BackgroundEffect` are **hidden on detail pages** (`/services/`, `/portfolio/`, `/industries/`, `/ai/`, `/privacy-policy`, `/terms-of-service`, `/cookie-policy`, `/blog/:category/:slug`)
- `Navbar` and `Footer` are **hidden on blog post pages** (those with 3 path segments: `/blog/category/slug`)
- `WhatsAppFAB` is **hidden on blog post pages**
- `CookieBanner` is shown everywhere

---

## 🎨 Theming System

### CSS Variables (`src/index.css`)
Three themes powered by `data-theme` attribute on `:root`:

| Variable | Black (default) | White | Blue |
|---|---|---|---|
| `--navy-blue` | `#000000` | `#ffffff` | `#0a192f` |
| `--dark-navy` | `#0a0a0a` | `#f5f5f5` | `#020c1b` |
| `--electric-blue` | `#ffffff` | `#000000` | `#00d4ff` |
| `--bright-blue` | `#cccccc` | `#333333` | `#0080ff` |
| `--light-blue` | `#999999` | `#666666` | `#64ffda` |
| `--text-white` | `#ffffff` | `#000000` | `#e6f1ff` |
| `--text-gray` | `#888888` | `#666666` | `#8892b0` |
| `--card-bg` | `#1a1a1a` | `#f9f9f9` | `#112240` |
| `--border-color` | `#333333` | `#e0e0e0` | `#00d4ff` |

Also has alpha-channel variants: `--electric-blue-03` through `--electric-blue-80`, plus `--overlay-bg`, `--overlay-light`, `--card-overlay`, `--card-overlay-dark`.

### ThemeContext (`src/context/ThemeContext.js`)
- Persists to `localStorage` with key `hunexture-theme`
- Default theme: `'black'`
- Toggle: `const { theme, toggleTheme } = useTheme()`
- Applied via: `document.documentElement.setAttribute('data-theme', theme)`

### Typography
- **Body font:** `Inter` (from Google Fonts via public/index.html)
- **Heading font:** `Orbitron` (h1–h6 all use this)

### ⚠️ Theme Rules
- **NEVER hardcode background colors** in component CSS. Always use CSS variables.
- For background, use `var(--navy-blue)` or `var(--dark-navy)`.
- For text, use `var(--text-white)` or `var(--text-gray)`.
- For borders, use `var(--border-color)`.
- For cards, use `var(--card-bg)`.

---

## 📦 Components Reference

### Home Page Sections (in order on `/`)
| Component | File | Purpose |
|---|---|---|
| `Hero` | `Hero.jsx / Hero.css` | Full-screen hero with headline and CTA |
| `TechMarquee` | `TechMarquee.jsx / TechMarquee.css` | Scrolling tech logo marquee |
| `About` | `About.jsx / About.css` | Company about section with stats |
| `ProcessSection` | `ProcessSection.jsx / ProcessSection.css` | How we work steps |
| `Testimonials` | `Testimonials.jsx / Testimonials.css` | Client testimonials carousel |
| `Services` | `Services.jsx / Services.css` | Service cards grid |
| `Portfolio` | `Portfolio.jsx / Portfolio.css` | Portfolio grid with filter |
| `FAQ` | `FAQ.jsx / FAQ.css` | Accordion FAQ section |
| `Contact` | `Contact.jsx / Contact.css` | Contact form (submits to clever.pathway@gmail.com) |

### Layout / Global Components
| Component | File | Purpose |
|---|---|---|
| `Navbar` | `Navbar.jsx / Navbar.css` | Top navigation with theme toggle, dropdowns |
| `Footer` | `Footer.jsx / Footer.css` | Footer with links, social icons |
| `AnimatedBackground` | `AnimatedBackground.jsx` | Animated particle background (home only) |
| `BackgroundEffect` | `BackgroundEffect.jsx` | Secondary background effect (home only) |
| `CookieBanner` | `CookieBanner.jsx / CookieBanner.css` | GDPR cookie consent banner |
| `WhatsAppFAB` | `WhatsAppFAB.jsx / WhatsAppFAB.css` | Floating WhatsApp button |
| `Logo` | `Logo.jsx / Logo.css` | Hunexture logo component |

### Detail Page Components
| Component | File | Purpose |
|---|---|---|
| `ServiceDetail` | `ServiceDetail.jsx / ServiceDetail.css` | Dynamic service page (driven by `servicesData`) |
| `ProjectDetail` | `ProjectDetail.jsx / ProjectDetail.css` | Dynamic portfolio project page (driven by `portfolioData`) |
| `IndustryDetail` | `IndustryDetail.jsx / IndustryDetail.css` | Dynamic industry page (driven by `industriesData`) |
| `AISolutionsPage` | `AISolutionsPage.jsx / AISolutionsPage.css` | Full dedicated AI solutions page |
| `WebDevelopmentPage` | `WebDevelopmentPage.jsx / WebDevelopmentPage.css` | Full dedicated Web Development page |
| `AIDetail` | `AIDetail.jsx / AIDetail.css` | AI concept detail page |

### Blog Components
| Component | File | Purpose |
|---|---|---|
| `BlogList` | `BlogList.jsx / BlogList.css` | List all blog posts by category |
| `BlogPost` | `BlogPost.jsx` | Renders the interactive 3D component for a blog post |

### Legal Pages
| Component | File | Purpose |
|---|---|---|
| `PrivacyPolicy` | `PrivacyPolicy.jsx` | Privacy policy (uses `LegalPages.css`) |
| `TermsOfService` | `TermsOfService.jsx` | Terms of service |
| `CookiePolicy` | `CookiePolicy.jsx` | Cookie policy |

### Interactive 3D Visualizations (Blog Posts)
These render inside `BlogPost`. Each has its own `.jsx` + `.css`:
- `VectorVisualization3D` → `/blog/linear-algebra/3d-vector-representation`
- `DotProduct3D` → `/blog/linear-algebra/3d-dot-product`
- `MatrixTransformation3D` → `/blog/linear-algebra/matrix-transformation`
- `LossFunctionMSE` → `/blog/linear-algebra/loss-function-mse`
- `GradientDescentVisualizer` → `/blog/linear-algebra/gradient-descent`
- `GradientDescent3D` → `/blog/linear-algebra/gradient-descent-3d`
- `ConditionalProbability3D` → `/blog/linear-algebra/conditional-probability-3d`
- `LogisticRegression3D` → `/blog/linear-algebra/logistic-regression-3d`

### Utility
- `IframeViewer` — for embedding iframes

---

## 📁 Data Files (`src/data/`)

All page content is **data-driven** — editing a data file updates the rendered page. Do NOT put content directly in components.

### `servicesData.js`
Array of service objects. Each service has:
```js
{
  id, slug, icon, title, shortDescription, description,
  features[], benefits[], technologies[], process[], useCases[], faq[]
}
```
**Services list:** `ai-solutions`, `web-development`, `app-development`, `cloud-integration`, `uiux-design`, `digital-marketing`

Helper functions: `getServiceBySlug(slug)`, `getAllServiceSlugs()`

### `portfolioData.js`
Array of project objects. Each project has:
```js
{
  id, slug, title, category, categoryLabel, shortDescription, description,
  image, tags[], icon,
  challenge, solution, results[], features[], technologies[],
  timeline, teamSize, client, industry, keyTakeaways[], testimonial,
  liveUrl, githubUrl, caseStudyUrl
}
```
**Categories:** `ai`, `mobile`, `cloud`, `web`, `marketing`

Helper functions: `getProjectBySlug(slug)`, `getProjectsByCategory(category)`, `getAllProjectSlugs()`, `getRelatedProjects(id, limit)`

### `blogData.js`
Object keyed by category slug. Each category has `title`, `description`, `posts[]`. Each post:
```js
{
  id, title, slug, description, date, category, tags[], component
}
```
The `component` field maps to the React component name rendered in `BlogPost.jsx`.

Helper functions: `getAllBlogPosts()`, `getBlogPostBySlug(categorySlug, postSlug)`, `getBlogCategory(categorySlug)`

### `industriesData.js`
Large file (~103KB) with industry-specific content. Follow same pattern as `servicesData`.

### `aiData.js`
AI solution articles/details (~44KB). Used by `AIDetail` component via `/ai/:slug` route.

---

## 🖼️ Assets

### Icons (Tech icons in `public/images/tech-icons/`)
SVG format. Used in `servicesData.js` via `iconUrl: '/images/tech-icons/<name>.svg'`. Common ones:
- openai.svg, tensorflow.svg, gemini.svg, anthropic.svg, mistral.svg, llama.svg
- react.svg, nodejs.svg, python.svg, php.svg, dotnet.svg, java.svg
- aws.svg, azure.svg, gcp.svg, docker.svg, kubernetes.svg
- figma.svg, firebase.svg, mongodb.svg, mysql.svg

### Portfolio images (`public/images/portfolio/`)
SVG format. Referenced in `portfolioData.js` as:
```js
image: `url(${process.env.PUBLIC_URL}/images/portfolio/<name>.svg)`
```

### Logo files (`public/`)
- `logo_2.png` — main logo (dark background)
- `logo_21.png` — hi-res version
- `logo_for_white_back.png` — logo for white/light backgrounds

---

## ⚙️ Key Conventions

### Adding a New Service
1. Add an entry to `src/data/servicesData.js` with all required fields (id, slug, icon, title, shortDescription, description, features, benefits, technologies, process, useCases, faq)
2. If it needs a custom page (like AI), create a new component and add a route in `App.js`.
3. Otherwise it automatically renders via `/services/:slug` → `ServiceDetail.jsx`.

### Adding a New Portfolio Project
1. Add entry to `src/data/portfolioData.js` with all required fields.
2. Add a portfolio image SVG to `public/images/portfolio/`.
3. Auto-renders via `/portfolio/:slug` → `ProjectDetail.jsx`.

### Adding a New Blog Post (Interactive Visualizer)
1. Create the React component in `src/components/` (e.g., `MyVisualizer.jsx` + `MyVisualizer.css`). Use Three.js for 3D visuals.
2. Import the component in `BlogPost.jsx` and add it to the component map.
3. Add an entry to `src/data/blogData.js` under the relevant category with `component: 'MyVisualizer'`.
4. Route auto-generates: `/blog/linear-algebra/<your-slug>`.

### Adding a New Industry
1. Add entry to `src/data/industriesData.js`.
2. Auto-renders via `/industries/:slug` → `IndustryDetail.jsx`.

### Adding a New Page (Full page route)
1. Create the component in `src/components/`.
2. Import it in `src/App.js` and add a `<Route>` in the `<Routes>` block.
3. If it's a "detail" page (no animated background), add the path prefix to `isDetailPage` check in `Layout`.
4. If it should hide Navbar/Footer, add it to the `isBlogPostPage`-like logic.

---

## 🎯 Responsive Breakpoints (`index.css`)

| Breakpoint | Width | Font size |
|---|---|---|
| Large Desktop | ≥ 1440px | 16px |
| Tablet Landscape | 769–1023px | 15px |
| Tablet Portrait | 481–768px | 14px |
| Mobile | ≤ 480px | 14px |
| Small Mobile | ≤ 375px | 13px |

All components should handle these breakpoints via media queries in their own CSS files.

---

## 🖥️ Session: Industry Pages Redesign (2026-07-20)

### What was done
- **IndustriesList.css** — Complete cinematic rewrite with dual floating blobs, fine grid overlay, Blueprint Sandbox, card grid with per-industry color tokens
- **IndustryDetail.jsx** — Added sticky breadcrumb bar, Related Industries section, improved back-navigation to `/industries`
- **IndustryDetail.css** — Full cinematic redesign: dark navy, animated hero blobs, glass stat strip, premium hover cards, accordion FAQ, breadcrumb + related grid CSS

### Active industry routes
- `/industries` → `IndustriesList`
- `/industries/:slug` → `IndustryDetail` (healthcare, legal, logistics, education, media-ott, travel, retail, construction, + more)
