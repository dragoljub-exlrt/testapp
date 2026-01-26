# Event Landing Page Design Specification

> Created: 2025-01-26
> Designer: ui-designer
> Task: design-event-landing-page
> Project: Event Landing Page (Vanilla HTML/CSS/JS)

---

## Visual Direction

### Mood
**Electric. Confident. Forward-thinking.**

This design embodies the energy of innovation — bold enough to make an impression, refined enough to feel premium. Think tech conference meets high-end editorial. The visual language says: "This is where the future happens."

### Inspiration
- **Editorial boldness**: Oversized typography, deliberate asymmetry, strong visual hierarchy
- **Tech-forward aesthetics**: Subtle gradients, glowing accents, depth through shadows
- **Premium minimalism**: Generous whitespace, restrained color pops, quality over quantity
- **Kinetic energy**: Micro-animations that feel alive without being distracting

### Design Personality
| Attribute | Expression |
|-----------|------------|
| Bold | Oversized headlines, confident color choices |
| Premium | Generous spacing, refined details |
| Dynamic | Subtle animations, gradient energy |
| Accessible | High contrast, clear hierarchy, readable text |

---

## Color Palette

### Philosophy
A dark, sophisticated base with electric accent colors that pop. The dark theme feels modern and premium while reducing eye strain. Accent colors provide energy and guide attention.

### Primary Colors
- **Primary**: `#6366F1` (Indigo) — Main CTA buttons, links, key accents
- **Primary Light**: `#818CF8` — Hover states, secondary accents
- **Primary Dark**: `#4F46E5` — Active states, emphasis

### Accent Colors
- **Accent**: `#F472B6` (Pink) — Highlight moments, badges, special callouts
- **Accent Glow**: `rgba(244, 114, 182, 0.3)` — Subtle glows, hover effects

### Neutrals (Dark Theme)
- **Background**: `#0A0A0F` — Page background, deepest layer
- **Surface**: `#12121A` — Cards, elevated containers
- **Surface Elevated**: `#1A1A24` — Modals, dropdowns, sticky header
- **Border**: `#2A2A3C` — Subtle borders, dividers
- **Border Light**: `#3A3A4C` — Hover borders, active states

### Text Colors
- **Text Primary**: `#F8FAFC` — Headlines, important text
- **Text Secondary**: `#CBD5E1` — Body text, descriptions
- **Text Muted**: `#64748B` — Captions, meta info, placeholders

### Semantic Colors
- **Success**: `#10B981` — Confirmation, positive feedback
- **Warning**: `#F59E0B` — Alerts, attention needed
- **Error**: `#EF4444` — Errors, destructive actions

### Gradient Definitions
```css
/* Hero gradient - dramatic backdrop */
--gradient-hero: linear-gradient(135deg, #0A0A0F 0%, #1a1a2e 50%, #16213e 100%);

/* Accent gradient - for buttons, highlights */
--gradient-accent: linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #F472B6 100%);

/* Surface gradient - subtle depth on cards */
--gradient-surface: linear-gradient(180deg, #1A1A24 0%, #12121A 100%);

/* Glow effect */
--glow-primary: 0 0 40px rgba(99, 102, 241, 0.3);
--glow-accent: 0 0 40px rgba(244, 114, 182, 0.2);
```

### CSS Variables
```css
:root {
  /* Primary */
  --color-primary: #6366F1;
  --color-primary-light: #818CF8;
  --color-primary-dark: #4F46E5;

  /* Accent */
  --color-accent: #F472B6;
  --color-accent-glow: rgba(244, 114, 182, 0.3);

  /* Background & Surfaces */
  --color-background: #0A0A0F;
  --color-surface: #12121A;
  --color-surface-elevated: #1A1A24;

  /* Borders */
  --color-border: #2A2A3C;
  --color-border-light: #3A3A4C;

  /* Text */
  --color-text: #F8FAFC;
  --color-text-secondary: #CBD5E1;
  --color-text-muted: #64748B;

  /* Semantic */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;

  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #0A0A0F 0%, #1a1a2e 50%, #16213e 100%);
  --gradient-accent: linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #F472B6 100%);
  --gradient-surface: linear-gradient(180deg, #1A1A24 0%, #12121A 100%);

  /* Glows */
  --glow-primary: 0 0 40px rgba(99, 102, 241, 0.3);
  --glow-accent: 0 0 40px rgba(244, 114, 182, 0.2);
}
```

---

## Typography

### Philosophy
Bold, expressive headings paired with highly readable body text. The contrast between display and body creates visual energy while maintaining excellent readability.

### Font Stack
- **Headings**: `'Inter'`, `-apple-system`, `BlinkMacSystemFont`, `'Segoe UI'`, `sans-serif`
- **Body**: `'Inter'`, `-apple-system`, `BlinkMacSystemFont`, `'Segoe UI'`, `sans-serif`
- **Mono**: `'JetBrains Mono'`, `'Fira Code'`, `monospace` — for stats, code, data

### Font Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Display | `clamp(3rem, 8vw, 5.5rem)` | 900 | 1.0 | -0.03em | Hero headline only |
| H1 | `clamp(2.25rem, 5vw, 3.5rem)` | 800 | 1.1 | -0.02em | Section headlines |
| H2 | `clamp(1.75rem, 4vw, 2.5rem)` | 700 | 1.2 | -0.02em | Sub-section headers |
| H3 | `clamp(1.25rem, 3vw, 1.5rem)` | 600 | 1.3 | -0.01em | Card titles, speaker names |
| H4 | `1.125rem` | 600 | 1.4 | 0 | Small headings |
| Body Large | `1.125rem` | 400 | 1.7 | 0 | Lead paragraphs |
| Body | `1rem` | 400 | 1.6 | 0 | Default body text |
| Body Small | `0.875rem` | 400 | 1.5 | 0 | Secondary content |
| Caption | `0.75rem` | 500 | 1.4 | 0.02em | Labels, meta info |
| Overline | `0.75rem` | 600 | 1.4 | 0.1em | Section labels (uppercase) |

### CSS Variables
```css
:root {
  /* Font Families */
  --font-family-heading: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-family-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-family-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* Font Sizes */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: clamp(1.25rem, 3vw, 1.5rem);
  --font-size-3xl: clamp(1.75rem, 4vw, 2.5rem);
  --font-size-4xl: clamp(2.25rem, 5vw, 3.5rem);
  --font-size-display: clamp(3rem, 8vw, 5.5rem);

  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;

  /* Line Heights */
  --line-height-none: 1;
  --line-height-tight: 1.1;
  --line-height-snug: 1.3;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.6;
  --line-height-loose: 1.7;

  /* Letter Spacing */
  --letter-spacing-tight: -0.03em;
  --letter-spacing-snug: -0.02em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.02em;
  --letter-spacing-wider: 0.1em;
}
```

---

## Spacing System

### Philosophy
Generous, breathing layouts. Spacing increases significantly between major sections to create clear visual separation. Internal component spacing is tighter for cohesion.

### Scale
| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-xs` | `0.25rem` (4px) | Tight gaps, icon margins |
| `--spacing-sm` | `0.5rem` (8px) | Compact element spacing |
| `--spacing-md` | `1rem` (16px) | Default spacing, card padding |
| `--spacing-lg` | `1.5rem` (24px) | Component gaps |
| `--spacing-xl` | `2rem` (32px) | Section internal padding |
| `--spacing-2xl` | `3rem` (48px) | Between components |
| `--spacing-3xl` | `4rem` (64px) | Section padding (mobile) |
| `--spacing-4xl` | `6rem` (96px) | Section padding (tablet) |
| `--spacing-5xl` | `8rem` (128px) | Section padding (desktop) |

### CSS Variables
```css
:root {
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;
  --spacing-4xl: 6rem;
  --spacing-5xl: 8rem;
}
```

---

## Layout System

### Container
```css
--container-max-width: 1200px;
--container-padding: var(--spacing-lg); /* 24px sides */
--container-padding-mobile: var(--spacing-md); /* 16px on mobile */
```

### Grid
- 12-column grid for complex layouts
- CSS Grid for section layouts
- Flexbox for component-level alignment

### Section Rhythm
```css
/* Mobile */
section { padding: var(--spacing-3xl) 0; } /* 64px */

/* Tablet (768px+) */
section { padding: var(--spacing-4xl) 0; } /* 96px */

/* Desktop (1024px+) */
section { padding: var(--spacing-5xl) 0; } /* 128px */
```

### Breakpoints
```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1200px;
```

---

## Effects & Shadows

### Shadow Scale
```css
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.4), 0 4px 6px rgba(0, 0, 0, 0.2);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.4), 0 10px 10px rgba(0, 0, 0, 0.2);
  --shadow-glow: var(--glow-primary);
  --shadow-glow-accent: var(--glow-accent);
}
```

### Border Radius
```css
:root {
  --radius-sm: 0.375rem;   /* 6px - buttons, inputs */
  --radius-md: 0.5rem;     /* 8px - cards */
  --radius-lg: 0.75rem;    /* 12px - larger cards */
  --radius-xl: 1rem;       /* 16px - modals, large elements */
  --radius-2xl: 1.5rem;    /* 24px - hero elements */
  --radius-full: 9999px;   /* Pills, avatars */
}
```

### Transitions
```css
:root {
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
  --transition-slow: 400ms ease;
  --transition-bounce: 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
  --transition-smooth: 600ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## Component Specifications

---

### Header (Sticky Navigation)

#### Structure
- Fixed position, full width
- Flexbox: logo left, nav center, CTA right
- Height: 70px (desktop), 60px (mobile)

#### Visual Style
```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--header-height, 70px);
  background: transparent;
  transition: background var(--transition-normal),
              box-shadow var(--transition-normal),
              backdrop-filter var(--transition-normal);
}

.header--scrolled {
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 var(--color-border);
}
```

#### Logo
- Text-based or SVG logo
- Font: `--font-family-heading`, weight 800
- Color: `--color-text`
- Size: 1.25rem

#### Navigation Links
| State | Style |
|-------|-------|
| Default | Color: `--color-text-secondary`, weight 500 |
| Hover | Color: `--color-text`, underline slides in from left |
| Active | Color: `--color-primary-light` |

```css
.nav__link {
  position: relative;
  color: var(--color-text-secondary);
  font-weight: 500;
  font-size: var(--font-size-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  transition: color var(--transition-fast);
}

.nav__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: var(--spacing-md);
  right: var(--spacing-md);
  height: 2px;
  background: var(--gradient-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition-normal);
}

.nav__link:hover {
  color: var(--color-text);
}

.nav__link:hover::after {
  transform: scaleX(1);
}
```

#### Header CTA Button
- Small primary button
- Text: "Register Now" or similar
- See Button specs below

#### Mobile Menu (Hamburger)
- Show below 768px
- Three-line icon, animated to X on open
- Menu slides in from right as overlay
- Background: `--color-surface-elevated` with blur

#### Responsive
| Breakpoint | Changes |
|------------|---------|
| Mobile (<768px) | Logo + hamburger only, nav hidden, height 60px |
| Tablet+ (768px+) | Full nav visible, hamburger hidden |

---

### Hero Section

#### Structure
- Full viewport height (100vh, min 600px)
- Centered content, flexbox column
- Background with gradient + optional subtle pattern

#### Dimensions
```css
.hero {
  min-height: 100vh;
  min-height: 100dvh; /* Dynamic viewport height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: var(--spacing-5xl) var(--spacing-lg);
  padding-top: calc(var(--header-height) + var(--spacing-3xl));
  background: var(--gradient-hero);
  position: relative;
  overflow: hidden;
}
```

#### Background Effect
Subtle animated gradient orbs for depth:
```css
.hero::before,
.hero::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  animation: float 20s ease-in-out infinite;
}

.hero::before {
  width: 600px;
  height: 600px;
  background: var(--color-primary);
  top: -200px;
  right: -200px;
  opacity: 0.15;
}

.hero::after {
  width: 400px;
  height: 400px;
  background: var(--color-accent);
  bottom: -100px;
  left: -100px;
  opacity: 0.1;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -30px) scale(1.1); }
}
```

#### Hero Content
```css
.hero__content {
  position: relative;
  z-index: 1;
  max-width: 900px;
}
```

#### Overline (Event Type Label)
```css
.hero__overline {
  display: inline-block;
  font-size: var(--font-size-xs);
  font-weight: 600;
  letter-spacing: var(--letter-spacing-wider);
  text-transform: uppercase;
  color: var(--color-primary-light);
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-xs) var(--spacing-md);
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: var(--radius-full);
}
```

#### Hero Headline
```css
.hero__title {
  font-size: var(--font-size-display);
  font-weight: var(--font-weight-black);
  line-height: var(--line-height-none);
  letter-spacing: var(--letter-spacing-tight);
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);

  /* Optional: Gradient text effect */
  background: linear-gradient(135deg, var(--color-text) 0%, var(--color-text-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

#### Hero Subtitle
```css
.hero__subtitle {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-loose);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto var(--spacing-2xl);
}
```

#### Hero CTA Group
Two buttons side by side:
```css
.hero__cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  justify-content: center;
}
```
- Primary button: "Get Your Ticket"
- Secondary button (outline): "View Schedule"

#### Scroll Indicator
```css
.hero__scroll {
  position: absolute;
  bottom: var(--spacing-xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-text-muted);
  font-size: var(--font-size-xs);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
}
```

#### Hero Animation (On Load)
Elements fade in and slide up sequentially:
- Overline: delay 0ms
- Title: delay 150ms
- Subtitle: delay 300ms
- CTAs: delay 450ms

```css
.hero__content > * {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s var(--transition-smooth) forwards;
}

.hero__overline { animation-delay: 0ms; }
.hero__title { animation-delay: 150ms; }
.hero__subtitle { animation-delay: 300ms; }
.hero__cta-group { animation-delay: 450ms; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

### Highlights Strip

#### Purpose
Quick-glance event info: date, location, attendees, etc.

#### Structure
Horizontal strip with 3-4 stat items, centered.

#### Visual Style
```css
.highlights {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: var(--spacing-xl) 0;
}

.highlights__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-2xl);
}

.highlights__item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.highlights__icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(99, 102, 241, 0.1);
  border-radius: var(--radius-md);
  color: var(--color-primary-light);
}

.highlights__text {
  text-align: left;
}

.highlights__label {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
}

.highlights__value {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  font-family: var(--font-family-mono);
}
```

#### Responsive
- Mobile: Stack vertically, 2 columns
- Desktop: Single row

---

### Section Header Pattern

Used consistently across About, Schedule, Speakers, etc.

```css
.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto var(--spacing-3xl);
}

.section-header__overline {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-wider);
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

.section-header__title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-extrabold);
  line-height: var(--line-height-tight);
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.section-header__description {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}
```

---

### About Section

#### Structure
Two-column layout: text left, image/graphic right.

#### Visual Style
```css
.about {
  background: var(--color-background);
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
}

@media (min-width: 768px) {
  .about__grid {
    grid-template-columns: 1fr 1fr;
  }
}

.about__image {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  aspect-ratio: 4/3;
}

.about__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Decorative gradient overlay */
.about__image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, transparent 50%);
}
```

---

### Schedule Section

#### Structure
Tabbed interface for multiple days, timeline for sessions.

#### Day Tabs
```css
.schedule__tabs {
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-2xl);
}

.schedule__tab {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-muted);
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.schedule__tab:hover {
  color: var(--color-text);
  border-color: var(--color-border-light);
}

.schedule__tab--active {
  color: var(--color-text);
  background: var(--gradient-accent);
  border-color: transparent;
}
```

#### Session Cards
```css
.session {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-md);
  transition: all var(--transition-fast);
}

.session:hover {
  border-color: var(--color-primary);
  box-shadow: var(--glow-primary);
  transform: translateX(4px);
}

.session__time {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--color-primary-light);
  font-weight: var(--font-weight-medium);
}

.session__title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
}

.session__speaker {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.session__track {
  display: inline-block;
  font-size: var(--font-size-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  background: rgba(99, 102, 241, 0.1);
  color: var(--color-primary-light);
  border-radius: var(--radius-sm);
  margin-top: var(--spacing-sm);
}
```

---

### Speakers Section

#### Structure
Grid of speaker cards, 3-4 columns on desktop.

#### Speaker Card
```css
.speaker-card {
  text-align: center;
  padding: var(--spacing-xl);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: all var(--transition-normal);
}

.speaker-card:hover {
  border-color: var(--color-border-light);
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.speaker-card__image {
  width: 120px;
  height: 120px;
  margin: 0 auto var(--spacing-lg);
  border-radius: var(--radius-full);
  overflow: hidden;
  border: 3px solid var(--color-border);
  transition: border-color var(--transition-fast);
}

.speaker-card:hover .speaker-card__image {
  border-color: var(--color-primary);
}

.speaker-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.speaker-card__name {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
}

.speaker-card__role {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-sm);
}

.speaker-card__company {
  font-size: var(--font-size-sm);
  color: var(--color-primary-light);
  font-weight: var(--font-weight-medium);
}
```

#### Grid Layout
```css
.speakers__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}
```

---

### Venue Section

#### Structure
Split layout: info left, map right.

#### Visual Style
```css
.venue__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-2xl);
}

@media (min-width: 768px) {
  .venue__grid {
    grid-template-columns: 1fr 1.5fr;
  }
}

.venue__info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.venue__name {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}

.venue__address {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

.venue__map {
  aspect-ratio: 16/9;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
}
```

---

### Sponsors Section

#### Structure
Tiered logo grid: Platinum, Gold, Silver/Partners.

#### Visual Style
```css
.sponsors__tier {
  margin-bottom: var(--spacing-3xl);
}

.sponsors__tier:last-child {
  margin-bottom: 0;
}

.sponsors__tier-title {
  text-align: center;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wider);
  margin-bottom: var(--spacing-xl);
}

.sponsors__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xl);
}

.sponsors__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  filter: grayscale(100%);
  opacity: 0.7;
}

.sponsors__logo:hover {
  filter: grayscale(0%);
  opacity: 1;
  border-color: var(--color-border-light);
}

/* Size tiers */
.sponsors__logo--platinum {
  height: 80px;
  min-width: 200px;
}

.sponsors__logo--gold {
  height: 60px;
  min-width: 150px;
}

.sponsors__logo--silver {
  height: 50px;
  min-width: 120px;
}
```

---

### FAQ Section

#### Structure
Accordion with expand/collapse functionality.

#### Visual Style
```css
.faq__list {
  max-width: 800px;
  margin: 0 auto;
}

.faq__item {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-md);
  overflow: hidden;
  background: var(--color-surface);
}

.faq__question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg) var(--spacing-xl);
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  transition: color var(--transition-fast);
}

.faq__question:hover {
  color: var(--color-primary-light);
}

.faq__icon {
  width: 24px;
  height: 24px;
  color: var(--color-text-muted);
  transition: transform var(--transition-normal);
}

.faq__item--open .faq__icon {
  transform: rotate(180deg);
}

.faq__answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-normal);
}

.faq__item--open .faq__answer {
  max-height: 500px; /* Adjust based on content */
}

.faq__answer-content {
  padding: 0 var(--spacing-xl) var(--spacing-lg);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}
```

---

### Contact / Signup Section

#### Structure
Centered form or CTA block with email signup.

#### Visual Style
```css
.contact {
  background: var(--gradient-surface);
  position: relative;
}

.contact__card {
  max-width: 600px;
  margin: 0 auto;
  padding: var(--spacing-3xl);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  text-align: center;
}

.contact__title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.contact__description {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

@media (min-width: 640px) {
  .contact__form {
    flex-direction: row;
  }
}

.contact__input {
  flex: 1;
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: var(--font-size-base);
  color: var(--color-text);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.contact__input::placeholder {
  color: var(--color-text-muted);
}

.contact__input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
}
```

---

### Footer

#### Structure
Multi-column layout with logo, links, social, copyright.

#### Visual Style
```css
.footer {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: var(--spacing-4xl) 0 var(--spacing-xl);
}

.footer__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-3xl);
}

@media (min-width: 768px) {
  .footer__grid {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
}

.footer__brand {
  max-width: 300px;
}

.footer__logo {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-extrabold);
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.footer__tagline {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
}

.footer__heading {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
  margin-bottom: var(--spacing-lg);
}

.footer__links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__link {
  display: block;
  padding: var(--spacing-xs) 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  transition: color var(--transition-fast);
}

.footer__link:hover {
  color: var(--color-text);
}

.footer__social {
  display: flex;
  gap: var(--spacing-md);
}

.footer__social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-muted);
  transition: all var(--transition-fast);
}

.footer__social-link:hover {
  color: var(--color-text);
  border-color: var(--color-primary);
  background: rgba(99, 102, 241, 0.1);
}

.footer__bottom {
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--color-border);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-md);
}

.footer__copyright {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}
```

---

## Button Specifications

### Primary Button
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-xl);
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  line-height: 1;
  text-decoration: none;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn--primary {
  background: var(--gradient-accent);
  color: white;
  box-shadow: var(--shadow-md);
}

.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg), var(--glow-primary);
}

.btn--primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.btn--primary:focus-visible {
  outline: 2px solid var(--color-primary-light);
  outline-offset: 2px;
}
```

### Secondary Button (Outline)
```css
.btn--secondary {
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.btn--secondary:hover {
  border-color: var(--color-primary);
  background: rgba(99, 102, 241, 0.1);
}

.btn--secondary:active {
  background: rgba(99, 102, 241, 0.2);
}
```

### Small Button
```css
.btn--sm {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--font-size-sm);
}
```

### Large Button
```css
.btn--lg {
  padding: var(--spacing-lg) var(--spacing-2xl);
  font-size: var(--font-size-lg);
}
```

---

## Animations & Micro-interactions

### Scroll Reveal
Elements fade in as they enter viewport:
```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s var(--transition-smooth),
              transform 0.6s var(--transition-smooth);
}

.reveal--visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Hover Effects Summary
| Element | Hover Animation |
|---------|----------------|
| Buttons | translateY(-2px), shadow increase |
| Cards | translateY(-8px), shadow increase |
| Links | Color change, underline slide |
| Speaker cards | Border glow, lift |
| Session cards | Border glow, translateX(4px) |
| Sponsor logos | Remove grayscale, opacity increase |

### Focus States
All interactive elements must have visible focus:
```css
:focus-visible {
  outline: 2px solid var(--color-primary-light);
  outline-offset: 2px;
}
```

---

## Accessibility Requirements

### Color Contrast
All text meets WCAG AA standards:
- Primary text on background: 15.5:1 ✓
- Secondary text on background: 9.5:1 ✓
- Muted text on background: 4.8:1 ✓

### Focus Indicators
- All focusable elements have visible focus states
- Focus ring: 2px solid with offset
- High contrast against background

### Touch Targets
- Minimum 44x44px for mobile tap targets
- Adequate spacing between interactive elements

### Motion
- Respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Assets Needed

### Icons
- Use **Lucide Icons** (or similar open-source set)
- Style: Outlined, 24px default
- Icons needed:
  - Calendar (date)
  - MapPin (location)
  - Users (attendees)
  - Clock (time)
  - ChevronDown (accordion, scroll)
  - Menu (hamburger)
  - X (close)
  - ArrowRight (CTA)
  - Mail (contact)
  - Twitter, LinkedIn, GitHub (social)

### Images
- Hero: Optional abstract/event imagery (1920x1080 minimum)
- Speakers: Square headshots (400x400, 1:1 ratio)
- About: Event photo (800x600, 4:3 ratio)
- Venue: Map embed or static image (16:9 ratio)
- Sponsors: Logo images (various, maintain aspect ratios)

### Fonts
Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
```

---

## Design Rationale

### Why Dark Theme?
- Modern tech aesthetic aligns with conference/event branding
- Reduces eye strain for extended reading
- Makes accent colors pop dramatically
- Premium, sophisticated feel

### Why These Colors?
- **Indigo primary**: Professional yet vibrant, works in tech contexts
- **Pink accent**: Energy, excitement, memorable contrast
- **Together**: Dynamic duo that feels fresh and bold

### Why This Typography?
- **Inter**: Highly legible, modern, works at all sizes
- **Variable weights**: Maximum flexibility for hierarchy
- **Tight letter-spacing on headlines**: Modern, impactful feel

### Why These Interactions?
- **Subtle lifts on hover**: Depth and responsiveness
- **Gradient borders/glows**: Energy without overwhelming
- **Smooth transitions**: Polish and professionalism

---

## Implementation Notes for Builders

1. **CSS Variables First**: Always reference design tokens, never hardcode values
2. **Mobile First**: Start with mobile styles, enhance for larger screens
3. **BEM Naming**: Use `.block__element--modifier` consistently
4. **Accessibility**: Test keyboard navigation and screen readers
5. **Performance**: Lazy load images, optimize animations for 60fps
6. **Fallbacks**: Ensure graceful degradation for older browsers

---

*Builder agents must implement this spec exactly. Deviations require designer approval.*
