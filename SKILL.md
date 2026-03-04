# SKILL.md
## UI/UX Design & SEO Analytics
> Deep-dive skill guide for building a premium IT services company website
> *(Reference: [indianic.com](https://www.indianic.com/))*

---

# PART 1 — UI/UX DESIGN

---

## 1.1 Design Thinking & Strategy

### User Research
- **User Interviews** — conducting 1:1 sessions to uncover pain points and goals
- **Competitive Analysis** — benchmarking against IndiaNIC, Infosys, TCS, Capgemini websites
- **Persona Creation** — B2B buyer personas (CTO, Product Manager, Startup Founder)
- **Jobs-to-be-Done (JTBD)** — mapping what users are trying to accomplish on a services site
- **Empathy Mapping** — what users think, feel, see, and do when visiting a tech company site
- **Heuristic Evaluation** — Nielsen's 10 usability heuristics applied to existing site audits

### Information Architecture (IA)
- **Card Sorting** (open & closed) — organizing service/industry menu items logically
- **Tree Testing** — validating navigation structure before design begins
- **Sitemap Design** — hierarchical content mapping (Home → Services → Web Dev → Hire React Dev)
- **Content Inventory** — auditing all pages, assets, and content types
- **User Flow Diagrams** — mapping paths from landing → service page → contact form → thank you

### Wireframing
- Low-fidelity wireframes: pen/paper or Balsamiq for layout skeleton
- Mid-fidelity wireframes: Figma with placeholder content blocks
- Annotated wireframes: UX notes explaining component behavior for developers
- **Key wireframes needed:**
  - Homepage (hero, stats, services grid, testimonials, CTA)
  - Mega navigation (multi-column layout with image teasers)
  - Service detail page (feature list, tech stack, process timeline, CTA)
  - Case study page (challenge → solution → results layout)
  - Contact / inquiry page (form layout, office locations)
  - Careers listing page (job filters, job card, apply flow)

---

## 1.2 Visual Design

### Typography System
- **Type Scale**: Establish a fluid modular scale using `clamp()` — e.g., 16px body → 72px hero
- **Font Pairing**: Display (headlines) + Sans-serif (body) — e.g., Syne + Inter, or Manrope + DM Sans
- **Weights in use**: 400 (body), 500 (labels), 600 (subheadings), 700–800 (headings)
- **Line height**: 1.2 for headings, 1.6–1.8 for body paragraphs
- **Letter spacing**: Tight for large display text (`-0.03em`), normal for body
- **Variable fonts**: Use `font-variation-settings` for weight/width animation on hover

### Color System
- **Brand palette**: Primary (deep navy/dark), Accent (vibrant blue, orange, or green CTA)
- **Semantic tokens**: `--color-primary`, `--color-surface`, `--color-text-muted`, `--color-border`
- **Dark section strategy**: Alternating dark/light sections (like IndiaNIC's hero, stats, CTA blocks)
- **Gradient usage**: Linear gradients on hero overlays, radial glows behind key elements
- **Color contrast**: Maintain ≥ 4.5:1 ratio for body text (WCAG AA), ≥ 3:1 for large text
- **State colors**: Hover, active, disabled, error, success states for all interactive elements

### Spacing & Grid System
- **Base unit**: 4px or 8px spacing grid — all margins/paddings are multiples of base unit
- **Grid**: 12-column grid with responsive gutters (16px mobile → 32px tablet → 48px desktop)
- **Section padding**: `80px–120px` vertical padding on desktop, `48px–64px` on mobile
- **Container max-width**: `1280px` or `1440px` with centered alignment
- **Component spacing**: Consistent internal padding — cards (`24px`), buttons (`14px 28px`)

### Iconography
- **Icon style**: Consistent stroke weight (1.5px–2px), rounded line icons (Lucide, Phosphor Icons)
- **Custom icons**: SVG icons for service categories (Web Dev, AI/ML, Mobile, DevOps)
- **Icon sizing**: 20px inline, 32px feature icons, 48px–64px hero/section icons
- **Animation**: CSS stroke-dashoffset draw-on animation for section icons
- **Icon accessibility**: Always pair with text label or `aria-label`

### Imagery & Media
- **Hero**: Full-bleed video background with gradient overlay + animated headline text
- **Team photos**: High-quality, consistent style (same background, lighting treatment)
- **Client logos**: Grayscale by default → color on hover (brand consistency)
- **Case study thumbnails**: 16:9 ratio, branded overlay with project title
- **Illustration style**: Abstract tech illustrations (isometric or 3D for service sections)
- **WebP/AVIF format**: Always export in modern formats with JPEG/PNG fallback
- **Art direction**: Different crop/composition served at different breakpoints using `<picture>`

---

## 1.3 Component & Design System

### Design System Architecture (Figma)
- **Atomic Design**: Atoms → Molecules → Organisms → Templates → Pages
- **Component library**: Buttons, inputs, cards, badges, tags, alerts, modals, tooltips
- **Variants**: Each component with states — default, hover, active, disabled, loading
- **Auto Layout**: Every component uses Figma Auto Layout for responsive behavior
- **Design Tokens**: Exported as JSON (Style Dictionary) synced to CSS custom properties
- **Theme support**: Light and Dark theme variants using Figma Variables

### Core Components to Design

| Component | Notes |
|---|---|
| Primary / Secondary Button | Hover fill animation, icon support, loading spinner state |
| Navigation (desktop mega menu) | Multi-column with images, sub-links, and featured content |
| Navigation (mobile drawer) | Slide-in panel, accordion sub-menus, close button |
| Hero Section | Video BG, animated headline, dual CTA, client logo strip |
| Service Card | Icon, title, description, hover lift + accent border |
| Stats Counter Block | Large numbers, animated count-up, label below |
| Logo Marquee Strip | Infinite horizontal scroll, grayscale → color on hover |
| Testimonial Card | Avatar, quote, name, designation, video play button |
| Testimonial Carousel | Swipe-enabled, dot indicators, autoplay |
| Case Study Card | Image, category tag, title, excerpt, CTA link |
| Process / Timeline | Horizontal numbered steps with connecting line |
| Technology Tab Section | Tab pills + logo grid per category |
| Accordion / FAQ | Smooth expand/collapse, icon rotation |
| Contact Form | Input fields, dropdown, textarea, submit button, success state |
| Sticky Header | Transparent → frosted glass on scroll, CTA button |
| Footer (multi-column) | Logo, links grid, social icons, contact info, copyright |
| Cookie Banner | Overlay with accept/decline CTA |
| Chat Widget Launcher | Fixed bottom-right floating button |

---

## 1.4 Interaction & Motion Design

### Principles
- **Purposeful animation**: Every animation should guide attention or confirm action — no decoration for its own sake
- **Duration guidelines**: Micro-interactions `100–200ms`, page transitions `300–500ms`, reveal animations `600–800ms`
- **Easing curves**: `ease-out` for elements entering screen, `ease-in` for exiting, `ease-in-out` for toggles
- **Reduced motion**: Always implement `@media (prefers-reduced-motion: reduce)` fallback

### Interaction Patterns

| Interaction | Implementation |
|---|---|
| Hero headline word-by-word reveal | GSAP `SplitText` + staggered `y` translation |
| Section scroll reveal (fade + slide up) | `IntersectionObserver` + CSS class toggle or AOS.js |
| Stats counter animation | CountUp.js triggered on viewport entry |
| Logo marquee continuous scroll | CSS `@keyframes` translateX loop |
| Hover card lift effect | CSS `transform: translateY(-6px)` + `box-shadow` transition |
| Mega menu open/close | CSS `max-height` + `opacity` transition, JS aria-expanded toggle |
| Mobile menu slide-in | CSS `transform: translateX` + JS class toggle |
| Sticky header blur effect | CSS `backdrop-filter: blur()` on scroll class |
| Image parallax on scroll | GSAP ScrollTrigger `scrub: true` |
| Button hover fill animation | CSS `::before` pseudo-element clip-path or scale animation |
| Testimonial carousel swipe | Swiper.js with touch/mouse drag support |
| Tab switch transition | CSS `opacity` + `translateY` for content swap |
| Form field focus ring | CSS `outline` + `box-shadow` glow |
| Page load skeleton screen | CSS shimmer animation on placeholder blocks |
| CTA pulse ring | CSS `@keyframes` scale + opacity ripple |

### Prototyping in Figma
- Smart Animate for component transitions (menu open/close, tab switches)
- Overlay interactions for modals, drawers, and tooltips
- Scrollable frames for long pages
- Interactive components for hover/pressed states preview
- Prototype sharing with stakeholders for review (Figma Share Link)

---

## 1.5 Responsive Design

### Breakpoint Strategy

| Breakpoint | Width | Target Devices |
|---|---|---|
| `xs` | 320px | Small phones (iPhone SE) |
| `sm` | 480px | Large phones |
| `md` | 768px | Tablets (portrait) |
| `lg` | 1024px | Tablets (landscape), small laptops |
| `xl` | 1280px | Desktop |
| `2xl` | 1440px | Wide desktop |
| `3xl` | 1920px+ | Ultra-wide monitors |

### Mobile-First Patterns
- Start layout design from 375px width, expand outward
- Single-column → 2-column → 3–4 column grid progression
- Navigation: hamburger drawer on mobile, full mega menu on desktop
- Touch targets: minimum `44×44px` for all interactive elements
- Font size: minimum `16px` body to prevent iOS zoom on input focus
- Hero: stack video behind content on mobile, side-by-side on desktop

---

## 1.6 Accessibility in Design

- **Color contrast**: Use Figma plugins (Contrast, A11y - Color Contrast Checker)
- **Focus indicators**: Visible custom focus rings (never `outline: none` without replacement)
- **Text alternatives**: Document all icon-only buttons with their required `aria-label`
- **Heading structure**: Design with proper H1 → H2 → H3 hierarchy enforced in the design system
- **Form labels**: Every input has a visible label (never placeholder-only)
- **Error states**: Use icon + color + text (never color alone) to indicate errors
- **Reading order**: Ensure visual reading order matches logical DOM order
- **Keyboard flows**: Document tab order in wireframes for all interactive components

---

## 1.7 Design Handoff

- **Redlines**: Auto-generated spacing/sizing specs in Figma Dev Mode
- **Asset export**: SVG for icons/logos, WebP for images, PNG fallback — all organized in export panel
- **Design tokens**: Exported via Token Studio / Style Dictionary to CSS/JSON
- **Component documentation**: Figma descriptions on every component with usage guidelines
- **Changelog**: Maintain version history in Figma with change notes per iteration
- **Developer handoff tools**: Figma Dev Mode, Zeplin, or Storybook for component showcase

---
---

# PART 2 — SEO & ANALYTICS

---

## 2.1 Technical SEO

### Site Architecture
- **URL structure**: Flat, keyword-rich, readable — `/services/web-development/` not `/page?id=12`
- **Internal linking**: Strategic linking from blog posts → service pages → contact
- **Canonical tags**: `<link rel="canonical">` on all pages, especially filtered/paginated URLs
- **Pagination**: Use `rel="next"` / `rel="prev"` or proper canonical on paginated blogs
- **Parameter handling**: Configure URL parameters in Google Search Console
- **Subdomain vs subfolder**: Use `/blog/` subfolder over `blog.domain.com` for SEO equity
- **HTTPS**: Full SSL, HSTS header (`Strict-Transport-Security`), no mixed content

### Crawlability & Indexability
- **robots.txt**: Disallow admin, staging, duplicate pages; allow all public content
- **XML Sitemap**: Auto-generated, submitted to Google Search Console & Bing Webmaster Tools
- **Sitemap index**: Separate sitemaps for pages, blog posts, case studies, services
- **Noindex tags**: Apply to thank-you pages, search results, admin pages
- **Crawl budget optimization**: Remove duplicate/thin content, fix redirect chains
- **Log file analysis**: Monitor Googlebot crawl patterns using server log analysis tools

### Core Web Vitals (CWV)

| Metric | Target | Key Optimization |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | Preload hero image/video, use CDN, optimize server response |
| CLS (Cumulative Layout Shift) | < 0.1 | Explicit `width`/`height` on all images, avoid late-injected ads |
| INP (Interaction to Next Paint) | < 200ms | Defer non-critical JS, break up long tasks, use web workers |
| FCP (First Contentful Paint) | < 1.8s | Inline critical CSS, minimize render-blocking resources |
| TTFB (Time to First Byte) | < 800ms | Use CDN edge caching, optimize server/database queries |

### Structured Data (Schema.org JSON-LD)

```json
// Organization Schema (homepage)
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company Name",
  "url": "https://yoursite.com",
  "logo": "https://yoursite.com/logo.png",
  "sameAs": ["https://linkedin.com/company/...", "https://twitter.com/..."],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX",
    "contactType": "customer service"
  }
}
```

- **Organization**: Name, logo, social profiles, contact info
- **LocalBusiness**: Address, geo coordinates, opening hours (for multiple offices)
- **Service**: Service name, provider, area served, description
- **FAQPage**: Question-answer pairs from the FAQ section
- **BreadcrumbList**: Navigation trail for all inner pages
- **Article / BlogPosting**: Author, date published, date modified for blog posts
- **Review / AggregateRating**: Client testimonials with structured rating data
- **VideoObject**: Testimonial videos with thumbnail, duration, upload date
- **SiteLinksSearchBox**: Enable Google search box in search results

### Page Speed Optimization
- Minify HTML, CSS, JS (Webpack / Vite build pipeline)
- Tree-shaking: eliminate unused JavaScript and CSS
- Code splitting: route-based and component-based lazy loading
- Image optimization: WebP/AVIF, responsive `srcset`, `loading="lazy"`
- Font optimization: `font-display: swap`, preconnect to Google Fonts, subset fonts
- Resource hints: `<link rel="preload">`, `<link rel="prefetch">`, `<link rel="preconnect">`
- Third-party script management: Load chat widgets, GTM, analytics asynchronously
- Service Worker: Cache static assets for repeat visit performance

---

## 2.2 On-Page SEO

### Keyword Research & Mapping
- **Tools**: Ahrefs, SEMrush, Google Keyword Planner, Ubersuggest, Answer The Public
- **Keyword types**:
  - Informational: "what is web application development"
  - Navigational: "IndiaNIC contact"
  - Commercial: "hire ReactJS developers India"
  - Transactional: "web development company pricing"
- **Search intent matching**: Align every page's content with the dominant intent (info / commercial / transactional)
- **Keyword mapping**: 1 primary keyword + 3–5 secondary keywords per page
- **Long-tail targeting**: Blog and FAQ content targeting long-tail phrases with lower competition
- **Competitor gap analysis**: Find keywords competitors rank for that your site doesn't

### On-Page Optimization Checklist

| Element | Best Practice |
|---|---|
| `<title>` tag | 50–60 chars, primary keyword near beginning |
| Meta description | 150–160 chars, compelling CTA, includes keyword |
| H1 tag | One per page, contains primary keyword naturally |
| H2–H4 tags | Hierarchical structure, include secondary keywords |
| First 100 words | Mention primary keyword naturally early in content |
| Image `alt` text | Descriptive, keyword-relevant, no keyword stuffing |
| Internal links | Link to related service/case study pages with descriptive anchor text |
| External links | Link to authoritative sources where relevant (opens in new tab) |
| URL slug | Short, lowercase, hyphen-separated, keyword included |
| Content length | Service pages: 800–1500 words; Blog posts: 1500–3000 words |
| Keyword density | Natural use, avoid stuffing — aim for ~1–2% density |
| LSI keywords | Include semantically related terms throughout content |
| CTA placement | Above fold and end of page; clear, action-oriented text |

### Content SEO for IT Services Sites
- **Service pages**: Unique content per service (no duplicate boilerplate)
- **Location pages**: "Web Development Company in [City]" pages for geo targeting
- **Industry pages**: "Healthcare Software Development", "FinTech App Development"
- **Technology pages**: "Hire React.js Developers", "Node.js Development Services"
- **Blog / Insights**: Technical how-to articles, industry trends, AI/ML insights
- **Case studies**: Detailed project breakdowns (problem → solution → measurable result)
- **FAQs**: Structured Q&A targeting People Also Ask (PAA) boxes in Google

---

## 2.3 Off-Page SEO & Link Building

### Link Building Strategies
- **Guest posting**: Publish on Smashing Magazine, Dev.to, Hackernoon, DZone
- **Resource link building**: Create free tools / calculators (e.g., "App Development Cost Calculator")
- **HARO (Help a Reporter Out)**: Provide expert quotes to journalists for backlinks
- **Directory listings**: Clutch, GoodFirms, Upwork, DesignRush, Sortlist, G2
- **Partner pages**: Mutual links with tech partners (AWS, Google Cloud, Shopify)
- **Digital PR**: Press releases for company milestones submitted to PRNewswire / BusinessWire
- **Broken link building**: Find broken links on resource pages and suggest your content as replacement
- **Skyscraper technique**: Create significantly better versions of top-ranking competitor content

### Local SEO (Multi-location)
- **Google Business Profile**: Verified listings for each office (India, USA, Dubai, Australia)
- **NAP consistency**: Name, Address, Phone identical across all directories
- **Local citations**: Justdial, IndiaMart (India); Yelp, Yellow Pages (USA)
- **Location-specific landing pages**: Unique content for each city/country office
- **Local schema**: `LocalBusiness` markup with geo coordinates per office

### Social Signals & Brand Mentions
- LinkedIn company page — regular posts about case studies, tech blogs, awards
- Twitter/X — developer community engagement, tech announcements
- YouTube — client testimonial videos, technology explainers
- Clutch / GoodFirms — actively request client reviews
- Quora / Reddit — answer domain-relevant questions with link back to blog

---

## 2.4 Analytics Implementation

### Google Analytics 4 (GA4)

#### Account Setup
- Create GA4 Property → Web Data Stream → install `gtag.js` or via GTM
- Enable Enhanced Measurement (page views, scrolls, outbound clicks, file downloads, video engagement)
- Link GA4 ↔ Google Search Console for organic keyword data
- Link GA4 ↔ Google Ads for campaign attribution
- Enable BigQuery export for raw event data analysis

#### Key Events to Track

| Event Name | Trigger | Purpose |
|---|---|---|
| `generate_lead` | Contact form submission | Primary conversion |
| `form_start` | User clicks into any form field | Funnel entry |
| `form_submit` | Form submit button clicked | Lead volume |
| `cta_click` | Any CTA button click | Engagement |
| `service_view` | Service page visited | Interest signal |
| `case_study_view` | Case study page visited | Intent signal |
| `video_start` | Testimonial video play | Engagement |
| `video_complete` | 100% video watched | High-intent signal |
| `scroll_depth_50` | User scrolls 50% of page | Engagement quality |
| `scroll_depth_90` | User scrolls 90% of page | Deep engagement |
| `file_download` | Brochure/PDF download | Lead nurture |
| `outbound_click` | Click on external link | Traffic flow |
| `whatsapp_click` | WhatsApp CTA clicked | Lead channel |
| `phone_click` | Phone number clicked | Lead channel |
| `chat_open` | Live chat widget opened | Engagement |
| `careers_apply` | Job application started | HR funnel |

#### Custom Dimensions & Metrics
- `page_category`: service, case_study, blog, landing
- `user_type`: new, returning
- `traffic_source_detail`: full UTM parameter capture
- `device_type`: desktop, tablet, mobile
- `office_location`: India, USA, Dubai (for geo attribution)

#### Audience Segments
- High-intent visitors: visited 3+ service pages in one session
- Blog readers who didn't convert
- Returning non-converters (retargeting pool)
- Case study readers (bottom-of-funnel)
- Location-based segments (US visitors, Europe visitors)

---

### Google Tag Manager (GTM)

#### Container Setup
- One GTM container for the entire website
- Workspaces: Dev, Staging, Production
- Version history with descriptive change notes

#### Key Tags to Configure

| Tag | Type | Trigger |
|---|---|---|
| GA4 Configuration | GA4 Config | All Pages |
| GA4 — Contact Form Submit | GA4 Event | Form submit confirmation |
| GA4 — CTA Clicks | GA4 Event | Click — CTA button CSS class |
| GA4 — Scroll Depth | GA4 Event | Scroll Depth (25/50/75/90%) |
| GA4 — Video Engagement | GA4 Event | YouTube video milestones |
| Google Ads Conversion | Google Ads | Form submit |
| LinkedIn Insight Tag | LinkedIn | All Pages |
| Facebook Pixel | Meta Pixel | All Pages + Lead event |
| Hotjar | Custom HTML | All Pages |
| Intercom / Chat Widget | Custom HTML | All Pages |
| reCAPTCHA v3 | Custom HTML | Pages with forms |

#### GTM Variables
- `{{Click ID}}`, `{{Click Classes}}`, `{{Click Text}}`, `{{Click URL}}` — for click tracking
- `{{Page Path}}`, `{{Page Category}}` — custom data layer variables
- `{{Form ID}}`, `{{Form Name}}` — for form tracking
- `{{Scroll Depth Threshold}}` — for scroll event values

#### Data Layer Implementation
```javascript
// Push to dataLayer on form submission
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'generate_lead',
  form_name: 'contact_form',
  service_interest: 'Web Development',
  user_country: 'India'
});
```

---

### Heatmaps & Behavior Analytics

#### Hotjar / Microsoft Clarity Setup
- **Heatmaps**: Click, move, and scroll heatmaps for homepage, service pages, contact page
- **Session Recordings**: Record user sessions to identify rage clicks, dead clicks, UX confusion
- **Funnels**: Set up conversion funnels (landing → service → contact → thank you)
- **Surveys**: Exit-intent survey: "What stopped you from contacting us today?"
- **Feedback widgets**: Thumbs up/down on blog posts and service pages

#### Key Insights to Monitor
- Where users stop scrolling (scroll depth heatmap)
- Which CTAs get clicked most vs. ignored
- Form fields where users abandon
- Mobile vs. desktop interaction differences
- Most replayed sessions (indicate UX confusion points)

---

### Google Search Console (GSC)

#### Setup & Verification
- Add domain property (covers all subdomains + HTTP/HTTPS)
- Verify via DNS TXT record
- Submit XML sitemap
- Link to GA4 and Google Ads

#### Key Reports to Monitor

| Report | What to Watch |
|---|---|
| Performance → Queries | Top keywords, CTR, average position |
| Performance → Pages | Which pages drive organic traffic |
| Performance → Countries | Geo distribution of organic visitors |
| Coverage | Indexed vs. non-indexed pages, crawl errors |
| Core Web Vitals | LCP, CLS, INP scores per URL |
| Mobile Usability | Mobile-specific errors |
| Links | Top linked pages, external domains linking to you |
| Manual Actions | Any Google penalties |

#### GSC Workflow (Monthly)
1. Export top 100 queries → identify CTR improvement opportunities
2. Find pages with position 5–20 → optimize for ranking push
3. Check coverage errors → fix 404s, redirect chains
4. Review CWV report → prioritize slow pages for optimization
5. Monitor backlink profile growth → identify new linking domains

---

## 2.5 Conversion Rate Optimization (CRO)

### CRO Principles for IT Services Sites
- **Trust signals above fold**: Client logos, Clutch badge, years of experience, project count
- **Clear value proposition**: One headline that answers "Why choose you over competitors?"
- **Friction reduction**: Minimal form fields (Name, Email, Message = 3 fields max for initial contact)
- **Social proof placement**: Testimonials near CTAs, not buried at bottom
- **Urgency/scarcity (ethical)**: "Limited spots for Q2 onboarding" or "Free consultation this week"
- **Multiple contact options**: Form + Email + WhatsApp + Phone + Chat Widget
- **7-day free trial / money-back guarantee**: Prominently placed to reduce risk perception

### A/B Testing Framework
- **Tool**: Google Optimize (sunset) → use VWO, Optimizely, or AB Tasty
- **Test ideas**:
  - Hero headline copy variation
  - CTA button text: "Get Free Consultation" vs "Start Your Project"
  - CTA button color: Blue vs Orange
  - Form length: 3 fields vs 5 fields
  - Social proof: number of clients vs client testimonial carousel
  - Pricing visibility: show budget ranges vs hide pricing
- **Statistical significance**: Run tests until 95%+ confidence, minimum 2 weeks duration
- **One variable at a time**: Never change multiple elements in the same A/B test

---

## 2.6 SEO Tools Stack

| Category | Tool | Purpose |
|---|---|---|
| Keyword Research | Ahrefs, SEMrush, Google Keyword Planner | Volume, difficulty, competitor keywords |
| Rank Tracking | Ahrefs Rank Tracker, SEMrush Position Tracking | Monitor keyword positions daily |
| Technical Audit | Screaming Frog, Sitebulb | Crawl errors, broken links, redirects |
| Backlink Analysis | Ahrefs, Majestic, Moz | Link profile, DA/DR, toxic links |
| On-Page Audit | Surfer SEO, Clearscope | Content optimization, NLP scoring |
| Page Speed | PageSpeed Insights, GTmetrix, WebPageTest | CWV measurements |
| Schema Testing | Google Rich Results Test, Schema Markup Validator | Validate structured data |
| Log Analysis | Screaming Frog Log Analyzer, Splunk | Crawl budget, Googlebot behavior |
| Reporting | Looker Studio (Google Data Studio) | Custom dashboards combining GA4 + GSC + Ahrefs |
| Competitor Spy | SimilarWeb, SpyFu | Traffic estimates, ad spend, top pages |

---

## 2.7 Analytics Reporting Dashboard (Looker Studio)

### Key Dashboard Sections

**1. Traffic Overview**
- Total sessions, users, new vs returning (week over week)
- Traffic by channel: organic, direct, referral, paid, social

**2. SEO Performance**
- Organic sessions trend (GSC)
- Top 20 keywords by clicks and impressions
- Average position over time
- CTR by page

**3. Conversion Funnel**
- Sessions → Service page views → Contact page views → Form starts → Form submissions
- Conversion rate by traffic channel

**4. Page Performance**
- Top pages by organic traffic
- Bounce rate and engagement rate per page
- Core Web Vitals scores per URL

**5. Lead Attribution**
- Leads by channel (organic, paid, referral, direct)
- Leads by service interest
- Leads by geography (country/city)
- Lead volume trend (monthly)

**6. Technical Health**
- Coverage errors from GSC
- Crawl errors trend
- Indexed page count

---

## 2.8 Skill Level Summary

| Skill Area | Level Required |
|---|---|
| Figma (components, auto layout, variables) | Advanced |
| Design systems & tokens | Advanced |
| Typography & color theory | Intermediate – Advanced |
| Motion design (GSAP, Framer Motion principles) | Intermediate |
| Responsive / mobile-first design | Advanced |
| Accessibility design (WCAG 2.1) | Intermediate |
| User research & IA | Intermediate |
| Technical SEO (crawlability, CWV, schema) | Advanced |
| On-page content optimization | Intermediate – Advanced |
| GA4 setup & event tracking | Advanced |
| Google Tag Manager | Advanced |
| Heatmap & behavior analytics | Intermediate |
| Link building & off-page SEO | Intermediate |
| CRO & A/B testing | Intermediate |
| SEO reporting (Looker Studio) | Intermediate |

---

> **Recommended Learning Path**
> UI/UX: Figma Essentials → UX Research → Design Systems → Motion Design → Accessibility
> SEO: Technical SEO → On-Page SEO → GA4 + GTM → Link Building → CRO1