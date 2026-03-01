# Hunexture Website Overview

## End-to-End Website Flow

The Hunexture website is a Single Page Application (SPA) built with React and uses `react-router-dom` for navigation. The flow consists of a main landing page and corresponding detailed internal pages. 

### 1. Main Home Page (`/`)
The Home Page aggregates various key sections to act as a comprehensive landing experience:
- **Hero**: The primary attention-grabbing introduction.
- **TechMarquee**: A moving ticker showcasing technologies used.
- **About**: Information about the company/entity.
- **ProcessSection**: The step-by-step working process.
- **Services**: Overview of offerings.
- **Portfolio**: Display of past work and projects.
- **Contact**: A form/details section to get in touch.

### 2. Global Layout Elements
The `<Layout>` component conditionally formats the page based on the current route:
- **Navigation (Navbar) & Footer**: Present on all pages EXCEPT individual blog post pages (`/blog/:category/:slug`).
- **Animated Background & Effects**: `AnimatedBackground` and `BackgroundEffect` components provide decorative visual elements but are hidden on detailed sub-pages (like Services, Portfolio, etc.) to keep the focus on content.

### 3. Detail & Dedicated Pages
Users can navigate from the home page or via direct links to specific detail routes:
- **Services Detail (`/services/:slug`)**: In-depth information about a specific service.
- **Portfolio Detail (`/portfolio/:slug`)**: Detailed view of a specific project.
- **Industries Detail (`/industries/:slug`)**: Insights into specific industries served.
- **AI Detail (`/ai/:slug`)**: Specific information regarding AI offerings.
- **Blog Section (`/blog` & `/blog/:category`)**: Lists blog posts, with optional category filtering.
- **Blog Post (`/blog/:category/:slug`)**: Individual blog content, which removes the global navbar and footer for a distraction-free reading experience.
- **Legal Pages**: Privacy Policy (`/privacy-policy`), Terms of Service (`/terms-of-service`), and Cookie Policy (`/cookie-policy`).

## Website Styling and Theme

The website uses raw, vanilla CSS for styling, utilizing global stylesheets (`index.css` and `App.css`) along with module-specific CSS (like `Hero.css`).

### 1. Theming System
The website heavily relies on CSS variables combined with a `[data-theme]` attribute on the root element. A `ThemeContext` provides the logic to switch themes.
- **Black Theme (Default)**: Deep black background (`#000000` to `#0a0a0a`) with white text and electric blue accents.
- **White Theme**: Light background (`#f5f5f5`) with black text and subtle gradients. 
- **Blue Theme (Original)**: A deep navy blue (`#0a192f`) mixed with neon/electric cyan blues (`#00d4ff`).

### 2. Typography
- **Primary Font**: `Inter` (and system fallbacks) for general text, providing a clean, modern look. 
- **Headings Font**: `Orbitron` is used exclusively for `h1` through `h6`, giving the site a distinct, futuristic, or tech-oriented aesthetic.

### 3. Animations and Interactivity
The site integrates custom CSS `@keyframes` to create a dynamic, premium feel without relying on heavy external animation libraries:
- **Floating and Pulsing**: Used for elements to give them an active presence (`float`, `pulse`).
- **Directional Slide-Ins**: Content appears smoothly as users navigate (`slideInLeft`, `slideInRight`, `fadeInUp`).
- **Glow Effects**: Used extensively using `box-shadow` and `text-shadow` variations based on the current theme (`glowPulse`, `textGlow`, `borderGlow`), particularly effective in the Dark and Blue themes.

### 4. Responsiveness
Fluid layouts controlled by extensive `@media` queries in both global CSS files:
- Custom breakpoints across large desktops (1920px+), standard desktops, laptops, tablets, and mobile (down to <375px).
- Font sizes dynamically adjust (e.g., `h1` goes from `48px` on desktop to `26px` on small mobile). 
- Margins and padding scale proportionally to maximize readability on smaller screens.
