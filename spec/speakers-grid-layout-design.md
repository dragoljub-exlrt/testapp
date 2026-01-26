# Speakers Grid Layout Design Spec

> Created: 2026-01-26
> Designer: ui-designer
> Task: speakers-grid-layout
> Extends: design-event-landing-page.md

---

## Visual Direction

### Mood
**Balanced. Symmetrical. Intentional.**

The speaker grid must feel deliberately arranged — never accidentally left-aligned or visually lopsided. Every configuration from 1 to 12 speakers should appear intentional and professionally curated.

### Core Design Principles

1. **Always Centered** — The grid itself is centered, and all rows (including the last) are centered within
2. **Fixed Card Widths** — Consistent card sizing creates rhythm and professionalism
3. **Symmetric Appearance** — No orphan cards sitting alone on the left side
4. **Graceful Adaptation** — Layout intelligently adjusts across breakpoints
5. **Breathable Spacing** — Generous gaps that let each speaker card stand out

---

## The Problem We're Solving

The typical `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))` approach causes:
- Last row items stretch to fill available space (inconsistent card widths)
- Uneven numbers of cards leave orphans left-aligned
- Cards grow/shrink unpredictably between breakpoints
- Visual imbalance when you have, say, 5 speakers (3 + 2 left-aligned)

**Our Solution:** Fixed-width cards in a centered flexbox container with intelligent wrapping.

---

## Layout Strategy

### Approach: Centered Flexbox with Fixed Card Widths

Instead of CSS Grid with `auto-fit`, we use **Flexbox** for the grid container because:
- `justify-content: center` centers all items including the last row
- Fixed widths prevent stretching
- Natural wrapping behavior
- Easier to control gap consistency

### Card Width Philosophy

**Fixed width cards** create:
- Predictable, professional appearance
- Consistent hover animation areas
- Uniform typography treatment
- Reliable responsive behavior

---

## Responsive Breakpoints

### Mobile (< 768px)
**Single column, full-width cards**
- 1 card per row
- Cards take full container width (minus padding)
- Vertical stack with consistent spacing
- Touch-friendly tap targets

### Tablet (768px - 1023px)
**2-3 cards per row, centered**
- Fixed card width: 280px
- Gap: 24px (var(--spacing-lg))
- Max cards per row: 3
- Always centered, including final row

### Desktop (1024px+)
**3-4 cards per row, centered**
- Fixed card width: 280px
- Gap: 32px (var(--spacing-xl))
- Max cards per row: 4
- Always centered, including final row

---

## Component Specs

### Speakers Section Container

#### Structure
```
.speakers
  └── .container
        └── .section-header
        └── .speakers__grid
              └── .speaker-card (repeated)
```

#### Section Styles
```css
.speakers {
  background: var(--color-background);
  padding: var(--spacing-5xl) 0; /* Desktop: 128px */
}

@media (max-width: 1023px) {
  .speakers {
    padding: var(--spacing-4xl) 0; /* Tablet: 96px */
  }
}

@media (max-width: 767px) {
  .speakers {
    padding: var(--spacing-3xl) 0; /* Mobile: 64px */
  }
}
```

---

### Speakers Grid (`.speakers__grid`)

#### Desktop (1024px+)

```css
.speakers__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-xl); /* 32px */
  max-width: 1200px;
  margin: 0 auto;
}
```

**Behavior:**
- Cards wrap naturally based on container width
- Gap is consistent between all cards (horizontal and vertical)
- `justify-content: center` ensures all rows are centered
- Max 4 cards per row at 1200px container (280px × 4 + 32px × 3 = 1216px → wraps to fit)

#### Tablet (768px - 1023px)

```css
@media (min-width: 768px) and (max-width: 1023px) {
  .speakers__grid {
    gap: var(--spacing-lg); /* 24px */
  }
}
```

**Behavior:**
- 2-3 cards per row depending on container width
- Still centered, still consistent gaps

#### Mobile (< 768px)

```css
@media (max-width: 767px) {
  .speakers__grid {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-lg); /* 24px */
    padding: 0 var(--spacing-md); /* 16px side padding */
  }
}
```

**Behavior:**
- Single column stack
- Cards centered horizontally
- Full width cards (with padding constraints)

---

### Speaker Card (`.speaker-card`)

#### Dimensions

| Breakpoint | Width | Padding | Behavior |
|------------|-------|---------|----------|
| Desktop (1024px+) | 280px | 32px | Fixed width |
| Tablet (768px - 1023px) | 280px | 28px | Fixed width |
| Mobile (< 768px) | 100% (max 360px) | 24px | Fluid with max |

#### Desktop Card Styles

```css
.speaker-card {
  width: 280px;
  flex-shrink: 0; /* Prevent shrinking */
  text-align: center;
  padding: var(--spacing-xl); /* 32px */
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg); /* 12px */
  transition:
    transform var(--transition-normal),
    border-color var(--transition-fast),
    box-shadow var(--transition-normal);
}
```

#### Mobile Card Styles

```css
@media (max-width: 767px) {
  .speaker-card {
    width: 100%;
    max-width: 360px;
    padding: var(--spacing-lg); /* 24px */
  }
}
```

#### Tablet Card Styles

```css
@media (min-width: 768px) and (max-width: 1023px) {
  .speaker-card {
    padding: 28px; /* Slightly less than desktop */
  }
}
```

#### Hover States

```css
.speaker-card:hover {
  border-color: var(--color-border-light);
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

/* Subtle glow effect on hover */
.speaker-card:hover {
  box-shadow:
    var(--shadow-xl),
    0 0 30px rgba(99, 102, 241, 0.1);
}
```

#### Focus States

```css
.speaker-card:focus-within {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

---

### Speaker Card Internal Elements

#### Avatar Container

```css
.speaker-card__image {
  width: 120px;
  height: 120px;
  margin: 0 auto var(--spacing-lg); /* 24px bottom margin */
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
```

#### Typography

```css
.speaker-card__name {
  font-size: var(--font-size-xl); /* 1.25rem */
  font-weight: var(--font-weight-semibold); /* 600 */
  color: var(--color-text);
  margin-bottom: var(--spacing-xs); /* 4px */
  line-height: var(--line-height-snug); /* 1.3 */
}

.speaker-card__role {
  font-size: var(--font-size-sm); /* 0.875rem */
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-sm); /* 8px */
  line-height: var(--line-height-normal); /* 1.5 */
}

.speaker-card__company {
  font-size: var(--font-size-sm); /* 0.875rem */
  color: var(--color-primary-light);
  font-weight: var(--font-weight-medium); /* 500 */
}
```

---

## Visual Test Cases: 1-12 Speaker Cards

### Testing Philosophy
Each configuration must appear **intentional and balanced**. The grid should never look like "we ran out of speakers" or "the layout broke."

---

### 1 Speaker
**Expected Layout:**
```
Desktop/Tablet:     [ Card ]        (centered)
Mobile:             [ Card ]        (centered, full width)
```

**Visual Check:**
- Single card perfectly centered
- Card maintains fixed 280px width on desktop/tablet
- No awkward empty space
- Feels like a "featured speaker" highlight

---

### 2 Speakers
**Expected Layout:**
```
Desktop:            [ Card ]  [ Card ]        (centered pair)
Tablet:             [ Card ]  [ Card ]        (centered pair)
Mobile:             [ Card ]
                    [ Card ]                  (stacked)
```

**Visual Check:**
- Two cards side by side, perfectly centered
- Equal gap between cards
- Symmetric appearance

---

### 3 Speakers
**Expected Layout:**
```
Desktop:            [ Card ]  [ Card ]  [ Card ]    (centered row)
Tablet:             [ Card ]  [ Card ]  [ Card ]    (centered row, may wrap to 2+1)
Mobile:             [ Card ]
                    [ Card ]
                    [ Card ]                        (stacked)
```

**Visual Check:**
- Three cards in centered row
- If tablet wraps to 2+1, bottom card is CENTERED (not left-aligned)

---

### 4 Speakers
**Expected Layout:**
```
Desktop:            [ Card ]  [ Card ]  [ Card ]  [ Card ]    (4 across, centered)
Tablet:             [ Card ]  [ Card ]
                    [ Card ]  [ Card ]                        (2x2 grid, centered)
Mobile:             (stacked)
```

**Visual Check:**
- Perfect 4-column row on desktop OR perfect 2x2 on narrower desktop
- Tablet shows balanced 2x2
- All rows centered

---

### 5 Speakers
**Expected Layout:**
```
Desktop:            [ Card ]  [ Card ]  [ Card ]  [ Card ]
                              [ Card ]                        (4 + 1 centered below)

OR at narrower desktop:
                    [ Card ]  [ Card ]  [ Card ]
                        [ Card ]  [ Card ]                    (3 + 2 centered)

Tablet:             [ Card ]  [ Card ]
                    [ Card ]  [ Card ]
                          [ Card ]                            (2+2+1 centered)

Mobile:             (stacked)
```

**Visual Check:**
- **CRITICAL:** The orphan card(s) on the last row MUST be centered
- Never left-aligned final row
- Symmetric visual weight

---

### 6 Speakers
**Expected Layout:**
```
Desktop (wide):     [ Card ]  [ Card ]  [ Card ]  [ Card ]
                          [ Card ]  [ Card ]                  (4 + 2 centered)

Desktop (narrow):   [ Card ]  [ Card ]  [ Card ]
                    [ Card ]  [ Card ]  [ Card ]              (3 + 3)

Tablet:             [ Card ]  [ Card ]
                    [ Card ]  [ Card ]
                    [ Card ]  [ Card ]                        (3 rows of 2)

Mobile:             (stacked)
```

**Visual Check:**
- All rows balanced and centered
- 6 divides evenly into 2 and 3, so all breakpoints look perfect

---

### 7 Speakers
**Expected Layout:**
```
Desktop:            [ Card ]  [ Card ]  [ Card ]  [ Card ]
                        [ Card ]  [ Card ]  [ Card ]          (4 + 3 centered)

Tablet:             [ Card ]  [ Card ]  [ Card ]
                    [ Card ]  [ Card ]  [ Card ]
                              [ Card ]                        (3 + 3 + 1 centered)

Mobile:             (stacked)
```

**Visual Check:**
- Orphan on tablet is centered
- Desktop shows balanced 4+3

---

### 8 Speakers
**Expected Layout:**
```
Desktop:            [ Card ]  [ Card ]  [ Card ]  [ Card ]
                    [ Card ]  [ Card ]  [ Card ]  [ Card ]    (4 + 4)

Tablet:             [ Card ]  [ Card ]  [ Card ]
                    [ Card ]  [ Card ]  [ Card ]
                          [ Card ]  [ Card ]                  (3 + 3 + 2 centered)

Mobile:             (stacked)
```

**Visual Check:**
- Desktop: Perfect 4x2 grid
- Tablet: 3+3+2 with bottom row centered

---

### 9 Speakers
**Expected Layout:**
```
Desktop:            [ Card ]  [ Card ]  [ Card ]  [ Card ]
                    [ Card ]  [ Card ]  [ Card ]  [ Card ]
                              [ Card ]                        (4 + 4 + 1 centered)

Tablet:             [ Card ]  [ Card ]  [ Card ]
                    [ Card ]  [ Card ]  [ Card ]
                    [ Card ]  [ Card ]  [ Card ]              (3 + 3 + 3)

Mobile:             (stacked)
```

**Visual Check:**
- Desktop orphan is centered
- Tablet is perfect 3x3

---

### 10 Speakers
**Expected Layout:**
```
Desktop:            [ Card ]  [ Card ]  [ Card ]  [ Card ]
                    [ Card ]  [ Card ]  [ Card ]  [ Card ]
                          [ Card ]  [ Card ]                  (4 + 4 + 2 centered)

Tablet:             [ Card ]  [ Card ]  [ Card ]
                    [ Card ]  [ Card ]  [ Card ]
                    [ Card ]  [ Card ]  [ Card ]
                              [ Card ]                        (3 + 3 + 3 + 1 centered)

Mobile:             (stacked)
```

**Visual Check:**
- All partial rows are centered

---

### 11 Speakers
**Expected Layout:**
```
Desktop:            [ Card ]  [ Card ]  [ Card ]  [ Card ]
                    [ Card ]  [ Card ]  [ Card ]  [ Card ]
                        [ Card ]  [ Card ]  [ Card ]          (4 + 4 + 3 centered)

Tablet:             [ Card ]  [ Card ]  [ Card ]
                    [ Card ]  [ Card ]  [ Card ]
                    [ Card ]  [ Card ]  [ Card ]
                          [ Card ]  [ Card ]                  (3 + 3 + 3 + 2 centered)

Mobile:             (stacked)
```

**Visual Check:**
- Both desktop and tablet have centered final rows

---

### 12 Speakers
**Expected Layout:**
```
Desktop:            [ Card ]  [ Card ]  [ Card ]  [ Card ]
                    [ Card ]  [ Card ]  [ Card ]  [ Card ]
                    [ Card ]  [ Card ]  [ Card ]  [ Card ]    (4 + 4 + 4)

Tablet:             [ Card ]  [ Card ]  [ Card ]
                    [ Card ]  [ Card ]  [ Card ]
                    [ Card ]  [ Card ]  [ Card ]
                    [ Card ]  [ Card ]  [ Card ]              (4 rows of 3)

Mobile:             (stacked)
```

**Visual Check:**
- Perfect grids on all breakpoints
- 12 divides evenly into 3 and 4

---

## Complete CSS Implementation

### CSS Variables to Add (if not present)

```css
:root {
  /* Speaker Card Specific */
  --speaker-card-width: 280px;
  --speaker-card-width-mobile-max: 360px;
  --speaker-card-avatar-size: 120px;
  --speaker-grid-gap-desktop: var(--spacing-xl);     /* 32px */
  --speaker-grid-gap-tablet: var(--spacing-lg);      /* 24px */
  --speaker-grid-gap-mobile: var(--spacing-lg);      /* 24px */
}
```

### Full Grid Styles

```css
/* ==========================================================================
   Speakers Grid - Centered Symmetric Layout
   ========================================================================== */

.speakers__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--speaker-grid-gap-desktop, var(--spacing-xl));
  max-width: 1200px;
  margin: 0 auto;
}

/* Speaker Card - Fixed Width */
.speaker-card {
  width: var(--speaker-card-width, 280px);
  flex-shrink: 0;
  text-align: center;
  padding: var(--spacing-xl);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition:
    transform var(--transition-normal),
    border-color var(--transition-fast),
    box-shadow var(--transition-normal);
}

.speaker-card:hover {
  border-color: var(--color-border-light);
  transform: translateY(-8px);
  box-shadow:
    var(--shadow-xl),
    0 0 30px rgba(99, 102, 241, 0.1);
}

.speaker-card:focus-within {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Avatar */
.speaker-card__image {
  width: var(--speaker-card-avatar-size, 120px);
  height: var(--speaker-card-avatar-size, 120px);
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

/* Typography */
.speaker-card__name {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
  line-height: var(--line-height-snug);
}

.speaker-card__role {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-sm);
  line-height: var(--line-height-normal);
}

.speaker-card__company {
  font-size: var(--font-size-sm);
  color: var(--color-primary-light);
  font-weight: var(--font-weight-medium);
}

/* ==========================================================================
   Tablet Breakpoint (768px - 1023px)
   ========================================================================== */

@media (min-width: 768px) and (max-width: 1023px) {
  .speakers__grid {
    gap: var(--speaker-grid-gap-tablet, var(--spacing-lg));
  }

  .speaker-card {
    padding: 28px;
  }
}

/* ==========================================================================
   Mobile Breakpoint (< 768px)
   ========================================================================== */

@media (max-width: 767px) {
  .speakers__grid {
    flex-direction: column;
    align-items: center;
    gap: var(--speaker-grid-gap-mobile, var(--spacing-lg));
    padding: 0 var(--spacing-md);
  }

  .speaker-card {
    width: 100%;
    max-width: var(--speaker-card-width-mobile-max, 360px);
    padding: var(--spacing-lg);
  }
}

/* ==========================================================================
   Reduced Motion
   ========================================================================== */

@media (prefers-reduced-motion: reduce) {
  .speaker-card {
    transition: none;
  }

  .speaker-card:hover {
    transform: none;
  }

  .speaker-card__image {
    transition: none;
  }
}
```

---

## Spacing Summary

### Container Padding
| Breakpoint | Section Padding (vertical) | Container Side Padding |
|------------|---------------------------|------------------------|
| Mobile | 64px (--spacing-3xl) | 16px (--spacing-md) |
| Tablet | 96px (--spacing-4xl) | 24px (--spacing-lg) |
| Desktop | 128px (--spacing-5xl) | 24px (--spacing-lg) |

### Grid Gaps
| Breakpoint | Card Gap |
|------------|----------|
| Mobile | 24px (--spacing-lg) |
| Tablet | 24px (--spacing-lg) |
| Desktop | 32px (--spacing-xl) |

### Card Internal Spacing
| Element | Spacing |
|---------|---------|
| Card Padding (Desktop) | 32px |
| Card Padding (Tablet) | 28px |
| Card Padding (Mobile) | 24px |
| Avatar Bottom Margin | 24px (--spacing-lg) |
| Name Bottom Margin | 4px (--spacing-xs) |
| Role Bottom Margin | 8px (--spacing-sm) |

---

## Animation Specs

### Card Hover
- **Transform**: translateY(-8px)
- **Shadow**: Increase to --shadow-xl + subtle glow
- **Border**: Lighten to --color-border-light
- **Duration**: 250ms (--transition-normal)
- **Easing**: ease

### Avatar Border on Hover
- **Color Change**: --color-border → --color-primary
- **Duration**: 150ms (--transition-fast)
- **Easing**: ease

---

## Accessibility Notes

1. **Focus Visible**: Cards with focusable content show outline on focus-within
2. **Reduced Motion**: Disable transforms and transitions for users who prefer reduced motion
3. **Touch Targets**: Mobile cards are minimum 44px touchable area (satisfied by card size)
4. **Color Contrast**: All text colors meet WCAG AA standards per existing design system

---

## Implementation Checklist for Builders

- [ ] Replace CSS Grid with Flexbox for `.speakers__grid`
- [ ] Set fixed width on `.speaker-card` (280px desktop/tablet)
- [ ] Add `flex-shrink: 0` to prevent card shrinking
- [ ] Use `justify-content: center` for grid
- [ ] Add mobile column layout with `flex-direction: column` + `align-items: center`
- [ ] Test with 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 cards
- [ ] Verify last row is centered in all configurations
- [ ] Test hover states at all breakpoints
- [ ] Verify reduced motion media query works
- [ ] Check focus states for keyboard navigation

---

## Design Rationale

### Why Flexbox Over Grid?

CSS Grid with `auto-fit` and `minmax()` is powerful but:
- It stretches cards to fill available space
- It left-aligns incomplete rows by default
- Centering the last row requires complex workarounds (pseudo-elements, specific column counts)

Flexbox with `justify-content: center`:
- Naturally centers all items including incomplete rows
- Fixed widths are straightforward
- Wrapping is simple and predictable
- One solution works across all card counts

### Why Fixed 280px Width?

- **Consistency**: Every card looks identical
- **Predictability**: Easy to calculate how many fit per row
- **Typography**: Text stays readable at this width
- **Avatar Proportion**: 120px avatar looks balanced in 280px card
- **Responsiveness**: 4 cards fit perfectly in 1200px container (4×280 + 3×32 = 1216 ≈ 1200)

### Why 32px Gap Desktop, 24px Mobile/Tablet?

- Desktop has more space; generous gaps feel premium
- Mobile/Tablet need tighter spacing to show more content
- These values align with existing spacing scale

---

*Builder agents implement this spec exactly. Test with all card counts 1-12 before marking complete.*
