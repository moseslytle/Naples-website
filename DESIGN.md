---
name: Naples Modern Choice Medicine
description: Architectural restraint for a personal medical practice
colors:
  pine: '#244438'
  pine-dark: '#172e25'
  ink: '#263e35'
  ink-soft: '#666b61'
  cream: '#f6f3eb'
  sand: '#ebe5d8'
  mist: '#e9e9df'
  border: '#d9d6c9'
  gold: '#cbd3c6'
  white: '#ffffff'
  body-muted: '#5d635a'
  label-muted: '#606b5d'
  selection: '#d7e3d8'
  focus: '#795039'
  secondary-border: '#7b887c'
typography:
  display:
    fontFamily: 'Cormorant Garamond, Georgia, serif'
    fontSize: 'clamp(3.75rem, 6.7vw, 6.5rem)'
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: '-0.035em'
  headline:
    fontFamily: 'Cormorant Garamond, Georgia, serif'
    fontSize: 'clamp(2.75rem, 5.5vw, 5rem)'
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: '-0.025em'
  section:
    fontFamily: 'Cormorant Garamond, Georgia, serif'
    fontSize: 'clamp(2.6rem, 4.2vw, 4rem)'
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: '-0.025em'
  body:
    fontFamily: 'Manrope, system-ui, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.75
  action:
    fontFamily: 'Manrope, system-ui, sans-serif'
    fontSize: '0.8125rem'
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: '0.075em'
  micro:
    fontFamily: 'Manrope, system-ui, sans-serif'
    fontSize: '0.625rem'
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: 'Manrope, system-ui, sans-serif'
    fontSize: '0.6875rem'
    fontWeight: 500
    lineHeight: 1.7
  caption:
    fontFamily: 'Manrope, system-ui, sans-serif'
    fontSize: '0.75rem'
    fontWeight: 400
    lineHeight: 1.7
  small:
    fontFamily: 'Manrope, system-ui, sans-serif'
    fontSize: '0.875rem'
    fontWeight: 400
    lineHeight: 1.75
  support:
    fontFamily: 'Manrope, system-ui, sans-serif'
    fontSize: '0.9375rem'
    fontWeight: 400
    lineHeight: 1.75
  lede:
    fontFamily: 'Manrope, system-ui, sans-serif'
    fontSize: 'clamp(1.0625rem, 1.4vw, 1.1875rem)'
    fontWeight: 400
    lineHeight: 1.8
rounded:
  square: '0'
  focus: '0.2rem'
spacing:
  step-1: '0.5rem'
  step-2: '1rem'
  step-3: '1.5rem'
  step-4: '2rem'
  step-5: '3rem'
  step-6: '4rem'
  section: 'clamp(5rem, 10vw, 10rem)'
components:
  button-primary:
    backgroundColor: '{colors.pine}'
    textColor: '{colors.white}'
    rounded: '{rounded.square}'
    padding: '0.9375rem 1.625rem'
  button-primary-hover:
    backgroundColor: '{colors.pine-dark}'
    textColor: '{colors.white}'
  button-secondary:
    backgroundColor: 'transparent'
    textColor: '{colors.pine-dark}'
    rounded: '{rounded.square}'
    padding: '0.9375rem 1.625rem'
  button-ivory:
    backgroundColor: '{colors.cream}'
    textColor: '{colors.pine-dark}'
    rounded: '{rounded.square}'
    padding: '0.9375rem 1.625rem'
---

# Design System: Naples Modern Choice Medicine

## Overview

**Creative North Star: "Architectural restraint"**

The owner's selected direction is crisp, spacious, and understated. Retain the
current identity: warm surfaces, deep green, fine rules, editorial serif
headings, and carefully measured sans-serif text. The practice's actual
photography supplies the human and local character.

This is an incumbent-system record, not a replacement visual concept. The
approved header and navigation tabs are protected. Refinements should strengthen
the surrounding hierarchy without adding decorative luxury signifiers.

**Key Characteristics:**

- Confident editorial headings and readable supporting text.
- Square edges, fine rules, and open space rather than floating cards.
- Restrained pine-and-ivory contrast with sand and mist secondary surfaces.
- Clearly differentiated actions and quiet feedback.

## Colors

The palette pairs botanical greens with warm paper-like neutrals.

### Primary

- **Pine:** primary actions and active accents.
- **Deep pine:** the physician section, footer, and strong hover states.
- **Green ink:** headings and primary reading text.

### Neutral

- **Warm ivory:** the main canvas and light actions on dark photography.
- **Sand:** supporting sections and a warmer change of pace.
- **Mist:** restrained supporting surfaces and contact-row feedback.
- **Muted green ink:** secondary body copy on light surfaces.
- **Paper rule:** subtle structural dividers.
- **Pale sage (the existing gold token):** supporting text on dark pine.

**The Contrast Rule.** Supporting text stays readable; restraint does not mean
low contrast. Do not use a light-surface text token on dark imagery.

## Typography

**Display Font:** Cormorant Garamond, with Georgia and serif fallbacks.
**Body Font:** Manrope, with platform sans-serif fallbacks.

Both fonts are served locally as WOFF2 with their licenses retained. The serif
carries identity; the sans-serif carries instructions, contact details, and
actions. Display sizes are fluid, while control labels stay deliberately legible.

### Hierarchy

- Display: homepage headline, with a separate narrow-screen scale.
- Headline: interior page titles.
- Section: major body sections.
- Body: readable continuous text with generous line height.
- Action: uppercase body CTAs, not a rule for all text.
- The header retains its own approved, finer label scale.

## Layout

The wide container caps at 76rem. Gutters scale from 1.5rem to 6rem; the narrow
reading container caps at 48rem. Two-column compositions use bounded columns and
generous gaps, collapsing at 760px. The header changes to its approved mobile
navigation at 1200px, and hides its separate CTA below 620px.

Wide-screen alignment and mobile reading order must agree with the DOM. At
narrow widths, actions stack without horizontal overflow. Content groups use
closer internal spacing than the intervals between sections.

## Elevation & Depth

The body is flat: tone, composition, and rules create separation, not large
shadows. The existing sticky header has a small shadow after scrolling; this
approved behavior is an intentional exception, not a card-shadow vocabulary.

## Shapes

Square controls and image frames express the architectural direction. Keep thin
borders and accurate image crops. Do not introduce pill-shaped CTAs, decorative
rounding, or masked photography in a refinement pass.

## Components

### Buttons

Substantial but restrained. Body buttons have a 3.5rem minimum height. Pine
marks the primary action, an outline marks supporting actions, and ivory works
over dark photography. Hover changes the surface; focus has a visible outline;
active feedback must not shift layout. Header button typography is separate.

### Editorial links

An underlined label and an authored SVG arrow form one clear target. Arrows
indicate forward navigation, a new external destination, or movement down the
page. Decorative arrows are hidden from assistive technology; external links
announce that they open a new tab. Minimum height is 2.75rem.

### Contact rows

The label, value, and arrow share one full-width phone or email link. Each row
has a clear focus ring and quiet tonal hover state. Long values wrap, and the
value remains selectable. Do not turn the entire containing card into a link.

### Containers and photography

Use shared photography components with intrinsic dimensions and responsive
sources. The default image ratio is landscape; portraits have a separate
bounded crop. Preserve subjects and meaningful alt text. Contact information
uses a fine border; informational sections may use only a top rule.

### Navigation and disclosures

Keep the approved header, logo, tabs, and mobile menu intact. Native details
elements keep navigation and FAQ content usable without JavaScript. Enhancement
may smooth a disclosure's state change but must remain interruptible.

## Do's and Don'ts

- Do preserve the approved header and tabs.
- Do reuse the real practice photography, shared components, and local fonts.
- Do make primary actions and patient instructions easy to read.
- Do preserve focus, zoom, touch, and reduced-motion behavior.
- Don't add generic icon cards, noisy gradients, glass effects, or giant shadows.
- Don't replace factual copy or invent proof to fill space.
- Don't animate noninteractive elements as if they were clickable.
- Don't use repeated entrance effects as a substitute for visual hierarchy.
