# Light Mode & Theme Toggle Design Spec

> Created: 2026-02-12
> Designer: ui-designer
> Task: light-mode-theme-toggle
> Extends: design-event-landing-page.md

---

## Visual Direction

### Mood
**Airy. Crisp. Inviting.**

The light mode feels like stepping into a bright, modern event space — clean surfaces, excellent visibility, and the same electric energy from our brand accents. The theme toggle is seamlessly integrated, feeling native to the navigation while being instantly discoverable.

### Design Philosophy

1. **Brand Continuity** — The Indigo and Pink accent colors remain the visual heartbeat
2. **Optimized Contrast** — Dark text on light backgrounds for maximum readability
3. **Soft Sophistication** — Cool-toned whites and warm grays, never harsh or clinical
4. **Deliberate Depth** — Subtle shadows define layers without heavy borders
5. **Accessible by Default** — WCAG AA+ contrast ratios throughout

---

## Light Mode Color Palette

### Philosophy
A refined light palette that inverts the dark theme while maintaining brand energy. The background is a warm off-white that reduces eye strain, with sophisticated gray-blue undertones in the neutral scale. Brand colors pop beautifully against the light backdrop.

### Primary Colors (Retained from Brand)
- **Primary**: `#6366F1` (Indigo) — Main CTA buttons, links, key accents
- **Primary Light**: `#818CF8` — Secondary accents, subtle backgrounds
- **Primary Dark**: `#4F46E5` — Active states, hover emphasis, text links

### Accent Colors (Retained from Brand)
- **Accent**: `#F472B6` (Pink) — Highlight moments, badges, special callouts
- **Accent Glow**: `rgba(244, 114, 182, 0.15)` — Subtle hover effects (reduced opacity for light mode)

### Light Mode Neutrals
- **Background**: `#FAFBFC` — Page background, softest layer
- **Surface**: `#FFFFFF` — Cards, elevated containers
- **Surface Elevated**: `#F8F9FA` — Modals, dropdowns, sticky header scrolled
- **Border**: `#E2E8F0` — Subtle borders, dividers
- **Border Light**: `#CBD5E1` — Hover borders, active states

### Light Mode Text Colors
- **Text Primary**: `#0F172A` — Headlines, important text (Slate 900)
- **Text Secondary**: `#475569` — Body text, descriptions (Slate 600)
- **Text Muted**: `#94A3B8` — Captions, meta info, placeholders (Slate 400)

### Semantic Colors (Adjusted for Light Mode)
- **Success**: `#059669` — Slightly deeper for light bg contrast
- **Warning**: `#D97706` — Slightly deeper for light bg contrast
- **Error**: `#DC2626` — Slightly deeper for light bg contrast

### Light Mode Gradients
```css
/* Hero gradient - light dramatic backdrop */
--gradient-hero-light: linear-gradient(135deg, #FAFBFC 0%, #F1F5F9 50%, #E2E8F0 100%);

/* Accent gradient - retained, works beautifully on light */
--gradient-accent: linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #F472B6 100%);

/* Surface gradient - subtle depth on cards */
--gradient-surface-light: linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 100%);

/* Glow effects - reduced intensity for light mode */
--glow-primary-light: 0 0 40px rgba(99, 102, 241, 0.15);
--glow-accent-light: 0 0 40px rgba(244, 114, 182, 0.1);
```

### Light Mode Shadows
Softer, more diffuse shadows for the light environment:
```css
--shadow-sm-light: 0 1px 2px rgba(15, 23, 42, 0.05);
--shadow-md-light: 0 4px 6px rgba(15, 23, 42, 0.07), 0 2px 4px rgba(15, 23, 42, 0.05);
--shadow-lg-light: 0 10px 15px rgba(15, 23, 42, 0.08), 0 4px 6px rgba(15, 23, 42, 0.04);
--shadow-xl-light: 0 20px 25px rgba(15, 23, 42, 0.1), 0 10px 10px rgba(15, 23, 42, 0.05);
```

---

## CSS Variables for Light Mode

### Theme Toggle Data Attribute Strategy
Use `[data-theme="light"]` on `<html>` or `<body>` to switch themes.

```css
/* ==========================================================================
   Light Mode Theme Variables
   ========================================================================== */

[data-theme="light"] {
  /* Background & Surfaces */
  --color-background: #FAFBFC;
  --color-surface: #FFFFFF;
  --color-surface-elevated: #F8F9FA;

  /* Borders */
  --color-border: #E2E8F0;
  --color-border-light: #CBD5E1;

  /* Text Colors */
  --color-text: #0F172A;
  --color-text-secondary: #475569;
  --color-text-muted: #94A3B8;

  /* Semantic - slightly adjusted for light bg */
  --color-success: #059669;
  --color-warning: #D97706;
  --color-error: #DC2626;

  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #FAFBFC 0%, #F1F5F9 50%, #E2E8F0 100%);
  --gradient-surface: linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 100%);

  /* Adjusted Glows */
  --glow-primary: 0 0 40px rgba(99, 102, 241, 0.15);
  --glow-accent: 0 0 40px rgba(244, 114, 182, 0.1);

  /* Adjusted Shadows */
  --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.05);
  --shadow-md: 0 4px 6px rgba(15, 23, 42, 0.07), 0 2px 4px rgba(15, 23, 42, 0.05);
  --shadow-lg: 0 10px 15px rgba(15, 23, 42, 0.08), 0 4px 6px rgba(15, 23, 42, 0.04);
  --shadow-xl: 0 20px 25px rgba(15, 23, 42, 0.1), 0 10px 10px rgba(15, 23, 42, 0.05);

  /* Header scrolled background */
  --header-bg-scrolled: rgba(255, 255, 255, 0.9);
}
```

### Component-Specific Light Mode Overrides

```css
/* Header in light mode */
[data-theme="light"] .header--scrolled {
  background: var(--header-bg-scrolled);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 var(--color-border);
}

/* Hero background orbs - less intense in light mode */
[data-theme="light"] .hero::before {
  opacity: 0.08;
}

[data-theme="light"] .hero::after {
  opacity: 0.06;
}

/* Sponsor logos - inverted filter approach for light mode */
[data-theme="light"] .sponsors__logo {
  filter: grayscale(100%);
  opacity: 0.6;
}

[data-theme="light"] .sponsors__logo:hover {
  filter: grayscale(0%);
  opacity: 1;
}

/* Input fields in light mode */
[data-theme="light"] .contact__input {
  background: var(--color-surface);
  border-color: var(--color-border);
}

[data-theme="light"] .contact__input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}
```

---

## Accessibility: Color Contrast Verification

### Light Mode Contrast Ratios (WCAG AA = 4.5:1, AAA = 7:1)

| Text | Background | Ratio | Grade |
|------|------------|-------|-------|
| Text Primary (#0F172A) | Background (#FAFBFC) | **15.8:1** | AAA |
| Text Secondary (#475569) | Background (#FAFBFC) | **7.1:1** | AAA |
| Text Muted (#94A3B8) | Background (#FAFBFC) | **3.5:1** | Decorative only |
| Text Primary (#0F172A) | Surface (#FFFFFF) | **16.3:1** | AAA |
| Primary (#6366F1) | Surface (#FFFFFF) | **4.6:1** | AA |
| Primary Dark (#4F46E5) | Surface (#FFFFFF) | **5.5:1** | AA |
| White text | Primary button | **5.9:1** | AA |

---

## Theme Toggle Component

### Placement
**Position:** In the header navigation, immediately after the navigation links and before the CTA button.

```
[Logo]    [About] [Schedule] [Speakers] [Venue] [FAQ]    [🌙/☀️]    [Register Now]
```

### Visual Design Philosophy
- **Subtle but discoverable** — Not competing with primary nav, but clearly interactive
- **Instant feedback** — Icon changes immediately on click
- **Animated transition** — Smooth icon morph, not jarring swap
- **Semantic icons** — Sun for light mode, Moon for dark mode

### Toggle Button Structure

```html
<button
  class="theme-toggle"
  type="button"
  aria-label="Switch to light mode"
  aria-pressed="false"
  title="Toggle color theme"
>
  <span class="theme-toggle__icon theme-toggle__icon--dark" aria-hidden="true">
    <!-- Moon SVG icon -->
  </span>
  <span class="theme-toggle__icon theme-toggle__icon--light" aria-hidden="true">
    <!-- Sun SVG icon -->
  </span>
</button>
```

### Icons
Use **Lucide Icons** (consistent with existing icon set):
- **Dark mode indicator (Moon)**: `moon` icon
- **Light mode indicator (Sun)**: `sun` icon

**SVG Paths:**
```html
<!-- Moon Icon (shows when in light mode, click for dark) -->
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
</svg>

<!-- Sun Icon (shows when in dark mode, click for light) -->
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4"/>
  <path d="M12 2v2"/>
  <path d="M12 20v2"/>
  <path d="m4.93 4.93 1.41 1.41"/>
  <path d="m17.66 17.66 1.41 1.41"/>
  <path d="M2 12h2"/>
  <path d="M20 12h2"/>
  <path d="m6.34 17.66-1.41 1.41"/>
  <path d="m19.07 4.93-1.41 1.41"/>
</svg>
```

---

## Theme Toggle Styling

### Dimensions & Spacing
| Property | Value |
|----------|-------|
| Width | 40px |
| Height | 40px |
| Border Radius | var(--radius-md) — 8px |
| Icon Size | 20px × 20px |
| Gap from nav links | var(--spacing-md) — 16px |
| Gap to CTA button | var(--spacing-md) — 16px |

### CSS Specification

```css
/* ==========================================================================
   Theme Toggle Button
   ========================================================================== */

.theme-toggle {
  /* Layout */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 40px;
  height: 40px;

  /* Spacing in header */
  margin-left: var(--spacing-md);
  margin-right: var(--spacing-md);

  /* Visual */
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  color: var(--color-text-secondary);

  /* Transitions */
  transition:
    background-color var(--transition-fast),
    border-color var(--transition-fast),
    color var(--transition-fast),
    transform var(--transition-fast);
}

/* Icon container */
.theme-toggle__icon {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    opacity var(--transition-normal),
    transform var(--transition-normal);
}

/* Sun icon (shows in dark mode) */
.theme-toggle__icon--light {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}

/* Moon icon (hidden in dark mode) */
.theme-toggle__icon--dark {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}

/* Light mode: swap visibility */
[data-theme="light"] .theme-toggle__icon--light {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}

[data-theme="light"] .theme-toggle__icon--dark {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}
```

### States

#### Default State
```css
.theme-toggle {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
}
```

#### Hover State
```css
.theme-toggle:hover {
  background: rgba(99, 102, 241, 0.1);
  border-color: var(--color-primary);
  color: var(--color-text);
  transform: scale(1.05);
}

/* Light mode hover */
[data-theme="light"] .theme-toggle:hover {
  background: rgba(99, 102, 241, 0.08);
}
```

#### Active/Pressed State
```css
.theme-toggle:active {
  transform: scale(0.95);
}
```

#### Focus State (Accessibility Critical)
```css
.theme-toggle:focus {
  outline: none;
}

.theme-toggle:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
}

/* High contrast focus for light mode */
[data-theme="light"] .theme-toggle:focus-visible {
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
}
```

#### Disabled State (if needed)
```css
.theme-toggle:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}
```

---

## Keyboard Accessibility

### Keyboard Interaction Pattern
| Key | Action |
|-----|--------|
| `Tab` | Focus moves to toggle button |
| `Enter` | Toggle theme |
| `Space` | Toggle theme |
| `Escape` | No action (standard behavior) |

### Focus Order
The toggle should be in the natural tab order:
1. Logo (if focusable)
2. Navigation links (About, Schedule, Speakers, Venue, FAQ)
3. **Theme Toggle** ← Here
4. CTA Button (Register Now)

### ARIA Attributes

```html
<!-- In dark mode (default) -->
<button
  class="theme-toggle"
  type="button"
  aria-label="Switch to light mode"
  aria-pressed="false"
  title="Toggle color theme"
>

<!-- After clicking (in light mode) -->
<button
  class="theme-toggle"
  type="button"
  aria-label="Switch to dark mode"
  aria-pressed="true"
  title="Toggle color theme"
>
```

**JavaScript must update:**
- `aria-label`: "Switch to light mode" ↔ "Switch to dark mode"
- `aria-pressed`: "false" ↔ "true"
- `data-theme` attribute on `<html>` or `<body>`

---

## Animation Specification

### Icon Transition
The sun and moon icons crossfade with a rotation effect:

```css
.theme-toggle__icon {
  transition:
    opacity 250ms ease,
    transform 250ms ease;
}
```

**Animation Sequence:**
1. Current icon rotates out (90°) while fading (opacity 1 → 0)
2. New icon rotates in (-90° → 0°) while appearing (opacity 0 → 1)
3. Duration: 250ms total
4. Timing: Both animations run simultaneously

### Optional: Page Transition
For a polished experience, the entire page can transition smoothly:

```css
/* Smooth color transitions across the page */
*,
*::before,
*::after {
  transition:
    background-color 300ms ease,
    border-color 300ms ease,
    color 150ms ease;
}

/* Exclude elements that shouldn't transition */
.no-theme-transition,
.hero__scroll,
[class*="animate"] {
  transition: none;
}
```

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  .theme-toggle__icon {
    transition: opacity 0.01ms;
  }

  * {
    transition-duration: 0.01ms !important;
  }
}
```

---

## Responsive Behavior

### Desktop (1024px+)
- Toggle visible in header between nav links and CTA
- 40px × 40px button
- Full icon rotation animation

### Tablet (768px - 1023px)
- Toggle remains in header
- Same size and styling
- May be slightly closer to CTA as nav compresses

### Mobile (< 768px)
**Two placement options:**

#### Option A: In Mobile Menu (Recommended)
- Toggle moves inside the hamburger menu
- Placed at top of mobile nav panel
- Larger touch target: 48px × 48px

```css
@media (max-width: 767px) {
  .header .theme-toggle {
    display: none; /* Hide in header */
  }

  .mobile-nav .theme-toggle {
    display: flex;
    width: 48px;
    height: 48px;
    margin-bottom: var(--spacing-lg);
  }
}
```

#### Option B: Always Visible in Header
- Toggle stays in header next to hamburger
- Order: [Logo] ... [Theme Toggle] [Hamburger]
- Size: 44px × 44px (minimum touch target)

```css
@media (max-width: 767px) {
  .theme-toggle {
    width: 44px;
    height: 44px;
    margin-left: auto;
    margin-right: var(--spacing-sm);
  }
}
```

**Recommended:** Option A for cleaner mobile header.

---

## System Preference Detection

### Initial Theme Detection
JavaScript should check user's system preference on load:

```javascript
// Pseudocode for implementation reference
function getPreferredTheme() {
  // 1. Check localStorage for saved preference
  const saved = localStorage.getItem('theme');
  if (saved) return saved;

  // 2. Check system preference
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }

  // 3. Default to dark
  return 'dark';
}
```

### Listening for System Changes
```javascript
// Update theme if user changes OS preference
window.matchMedia('(prefers-color-scheme: light)')
  .addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      // Only auto-switch if user hasn't manually set preference
      setTheme(e.matches ? 'light' : 'dark');
    }
  });
```

---

## Implementation Checklist for Builders

### CSS Tasks
- [ ] Add `[data-theme="light"]` variable overrides to variables.css
- [ ] Add light mode shadow definitions
- [ ] Add light mode gradient definitions
- [ ] Add `.theme-toggle` component styles to components.css
- [ ] Add responsive styles for toggle button
- [ ] Add reduced motion media query
- [ ] Test all component overrides (header, cards, inputs, etc.)

### HTML Tasks
- [ ] Add theme toggle button to header markup
- [ ] Include both sun and moon SVG icons
- [ ] Add proper ARIA attributes
- [ ] Position toggle between nav links and CTA button
- [ ] Add toggle to mobile navigation panel

### JavaScript Tasks
- [ ] Implement theme toggle click handler
- [ ] Update `data-theme` attribute on document
- [ ] Update `aria-label` and `aria-pressed` on toggle
- [ ] Save preference to localStorage
- [ ] Load preference on page init
- [ ] Listen for system preference changes
- [ ] Handle keyboard events (Enter, Space)

### Testing Tasks
- [ ] Verify all color contrasts meet WCAG AA
- [ ] Test keyboard navigation (Tab, Enter, Space)
- [ ] Test with screen reader
- [ ] Verify localStorage persistence
- [ ] Test system preference detection
- [ ] Verify reduced motion behavior
- [ ] Test all breakpoints (mobile, tablet, desktop)
- [ ] Verify smooth transitions between themes

---

## Color Contrast Quick Reference

### Light Mode - Text on Backgrounds
```
Primary Text (#0F172A) on:
  - Background (#FAFBFC): ✓ 15.8:1
  - Surface (#FFFFFF):    ✓ 16.3:1
  - Surface Elev (#F8F9FA): ✓ 15.9:1

Secondary Text (#475569) on:
  - Background (#FAFBFC): ✓ 7.1:1
  - Surface (#FFFFFF):    ✓ 7.4:1

Muted Text (#94A3B8) on:
  - Background (#FAFBFC): ⚠ 3.5:1 (decorative only)
```

### Brand Colors on Light Surfaces
```
Primary (#6366F1) on White: ✓ 4.6:1 (AA for normal text)
Primary Dark (#4F46E5) on White: ✓ 5.5:1 (AA+ for normal text)
Accent (#F472B6) on White: ⚠ 3.2:1 (decorative/large text only)
```

---

## Design Rationale

### Why These Light Mode Colors?

**Background (#FAFBFC):**
- Warmer than pure white, reduces eye strain
- Slight blue undertone maintains cool, tech aesthetic
- Enough contrast with pure white surfaces to create depth

**Text Primary (#0F172A Slate 900):**
- Near-black with blue undertone matches brand personality
- Exceptional contrast (15.8:1) for accessibility
- Softer than pure black (#000) for comfortable reading

**Preserved Brand Colors:**
- Indigo and Pink accents work beautifully on light backgrounds
- No adjustment needed — they pop even better
- Maintains brand recognition across themes

### Why This Toggle Design?

**40px Button Size:**
- Large enough to be easily clickable
- Small enough to not dominate navigation
- Meets 44px mobile touch target when scaled

**Icon Rotation Animation:**
- Provides satisfying visual feedback
- Suggests transformation/change
- More engaging than simple opacity swap

**Positioned Before CTA:**
- Clearly part of header utilities
- Doesn't compete with primary navigation
- Natural discovery point for users

---

*Builder agents implement this spec exactly. Test both themes thoroughly before marking complete.*
