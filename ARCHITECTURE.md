# Architecture

> Generated: 2025-01-26
> Stack: HTML, CSS, JavaScript (Vanilla)
> Project: Event Landing Page

## Tech Stack

- **Languages**: HTML5, CSS3, JavaScript (ES6+)
- **Frameworks**: None (Vanilla)
- **Build Tools**: None (static files)
- **Package Manager**: None

## Structure

```
project-root/
├── index.html              # Single-page event landing (entry point)
├── ARCHITECTURE.md         # This file
├── .gitignore
├── .gitattributes
├── css/
│   ├── variables.css       # Design tokens: colors, typography, spacing
│   ├── reset.css           # CSS reset and base styles
│   ├── utilities.css       # Utility classes
│   ├── components.css      # Reusable component styles (buttons, cards)
│   └── main.css            # Main page styles (all sections)
├── js/
│   └── main.js             # All interactions: nav, accordion, smooth scroll
├── assets/
│   ├── images/
│   │   └── .gitkeep
│   ├── icons/
│   │   └── .gitkeep
│   └── fonts/
│       └── .gitkeep
└── spec/
    └── design-event-landing-page.md    # Design specifications
```

## Entry Point

Main entry: `index.html` in project root.

This is a **single-page landing page** with all sections in one file:
- Sticky header with navigation
- Hero/top area with call-to-action
- Highlights strip
- About section
- Schedule section
- Speakers section
- Venue section
- Sponsors section
- FAQ accordion section
- Contact/signup section
- Footer

The file must:
1. Load CSS in order: variables.css → reset.css → utilities.css → components.css → main.css
2. Load JS before closing body tag
3. Use semantic HTML5 sections
4. Include placeholder content with marked update notes

## File Ownership

Rules for parallel task execution. Each file has ONE owner:

| Area | Files | Owner Task |
|------|-------|------------|
| Design Spec | spec/design-event-landing-page.md | design-event-landing-page |
| CSS Variables | css/variables.css | foundation-shared-assets-and-base |
| CSS Reset | css/reset.css | foundation-shared-assets-and-base |
| CSS Utilities | css/utilities.css | foundation-shared-assets-and-base |
| CSS Components | css/components.css | foundation-shared-assets-and-base |
| CSS Main | css/main.css | implementation-event-landing-page-index |
| JavaScript | js/main.js | implementation-event-landing-page-index |
| HTML | index.html | implementation-event-landing-page-index |
| Assets | assets/* | foundation-shared-assets-and-base |
| Config | .gitignore, .gitattributes | foundation-shared-assets-and-base |

## Conventions

### File Naming
- kebab-case for all files: `my-file.css`, `hero-image.png`
- Descriptive names: `variables.css` not `vars.css`

### CSS Rules

#### Variables (css/variables.css)
All design tokens as CSS custom properties:
```css
:root {
  /* Colors */
  --color-primary: #...;
  --color-secondary: #...;
  --color-accent: #...;
  --color-text: #...;
  --color-text-light: #...;
  --color-background: #...;
  --color-surface: #...;

  /* Typography */
  --font-family-heading: ...;
  --font-family-body: ...;
  --font-size-xs: ...;
  --font-size-sm: ...;
  --font-size-base: ...;
  --font-size-lg: ...;
  --font-size-xl: ...;
  --font-size-2xl: ...;
  --font-size-3xl: ...;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;

  /* Spacing */
  --spacing-xs: ...;
  --spacing-sm: ...;
  --spacing-md: ...;
  --spacing-lg: ...;
  --spacing-xl: ...;
  --spacing-2xl: ...;

  /* Layout */
  --container-max-width: 1200px;
  --header-height: 70px;

  /* Borders & Radius */
  --border-radius-sm: ...;
  --border-radius-md: ...;
  --border-radius-lg: ...;

  /* Shadows */
  --shadow-sm: ...;
  --shadow-md: ...;
  --shadow-lg: ...;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 300ms ease;
}
```

#### Reset (css/reset.css)
- Modern CSS reset
- Box-sizing border-box
- Remove default margins
- Base body styles

#### Utilities (css/utilities.css)
- `.container` - max-width centered container
- `.sr-only` - screen reader only
- `.text-center`, `.text-left`, `.text-right`
- Spacing utilities if needed

#### Components (css/components.css)
- `.btn`, `.btn--primary`, `.btn--secondary`, `.btn--outline`
- Button hover, focus, and active states
- Card styles if needed
- Form input styles

#### Main Styles (css/main.css)
- Section-specific styles
- Layout for each page section
- Responsive breakpoints
- Animation/interaction styles

### CSS Methodology
- BEM naming: `.block__element--modifier`
- Mobile-first media queries
- Use CSS custom properties from variables.css
- Logical properties where appropriate

### Breakpoints
```css
/* Mobile first - base styles are mobile */
/* Tablet: 768px */
@media (min-width: 768px) { }
/* Desktop: 1024px */
@media (min-width: 1024px) { }
/* Large: 1200px */
@media (min-width: 1200px) { }
```

### JavaScript Rules
- Single file: `js/main.js`
- ES6+ features (const, let, arrow functions, etc.)
- No global variable pollution (use IIFE or modules)
- Event delegation where appropriate
- Graceful degradation

#### Required Functionality
1. **Smooth scrolling** - navigation links scroll to sections
2. **Sticky header** - header sticks on scroll with visual change
3. **FAQ accordion** - expand/collapse functionality
4. **Mobile navigation** - hamburger menu toggle

### HTML Rules
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Each section has unique `id` for navigation anchoring
- 2-space indentation
- Placeholder content marked with HTML comments: `<!-- TODO: Replace with actual content -->`
- Accessibility: ARIA labels, alt text placeholders, keyboard navigation support

### Section IDs
```html
<header id="header">
<section id="hero">
<section id="highlights">
<section id="about">
<section id="schedule">
<section id="speakers">
<section id="venue">
<section id="sponsors">
<section id="faq">
<section id="contact">
<footer id="footer">
```

## Page Sections Overview

| Section | Description | Key Elements |
|---------|-------------|--------------|
| Header | Sticky navigation | Logo, nav links, CTA button |
| Hero | Top area | Headline, subhead, CTA, background |
| Highlights | Quick info strip | Date, location, key stats |
| About | Event description | Text, optional image |
| Schedule | Event timeline | Day/time blocks, session info |
| Speakers | Featured speakers | Speaker cards with photo, name, title |
| Venue | Location info | Map placeholder, address, directions |
| Sponsors | Partner logos | Logo grid by tier |
| FAQ | Common questions | Accordion items |
| Contact | Signup/contact | Form or signup CTA |
| Footer | Site footer | Links, social, copyright |

## Placeholder Content Guidelines

All placeholder content must:
1. Be realistic in length and format
2. Be marked with `<!-- TODO: Replace with actual [description] -->`
3. Use placeholder images: `https://placehold.co/WIDTHxHEIGHT`
4. Include realistic placeholder text (not lorem ipsum for headings)

Example:
```html
<!-- TODO: Replace with actual event title -->
<h1>TechConf 2025</h1>
<!-- TODO: Replace with actual tagline -->
<p>The Future of Innovation Starts Here</p>
```

## Accessibility Requirements

- Skip link to main content
- Semantic heading hierarchy (h1 → h2 → h3)
- Focus visible states on all interactive elements
- ARIA labels for icon buttons
- Alt text placeholders for images
- Keyboard accessible accordion and navigation
- Sufficient color contrast (check with design spec)

## How to Run

Open `index.html` directly in browser, or use a local server:

```bash
# Using npx
npx serve .

# Using Python
python -m http.server 8000

# Using PHP
php -S localhost:8000
```

## Task Execution Order

1. **design-event-landing-page** → Creates `spec/design-event-landing-page.md`
2. **foundation-shared-assets-and-base** → Creates CSS foundation, assets structure
3. **implementation-event-landing-page-index** → Creates `index.html`, `css/main.css`, `js/main.js`
4. **verification-ui-and-interactions** → Tests and validates (no file changes)

---
*Builder agents read this file for structure and conventions.*
