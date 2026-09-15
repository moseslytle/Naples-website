# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Prospective patients evaluating a concierge family medicine practice in Naples,
Florida, including the affluent audience named in the owner's brief. Visitors
need to understand the practice, physician, membership model, and next steps on
desktop or mobile without supplying medical information through this website.

## Product Purpose

Introduce Naples Modern Choice Medicine, support an informed choice, and make
contacting the office straightforward. The primary next step is calling the
office; general patient communication email and directions remain available.

## Positioning

Concierge family medicine with an ongoing physician relationship. Preserve the
existing supplied descriptions; do not invent exclusivity, outcomes, access
guarantees, testimonials, awards, membership pricing, or additional services.

## Operating Context

This is an informational website, not a patient portal or booking service.
Scheduling and new-patient instructions are handled by the office. Phone and
email links hand off to the visitor's device; directions open Google Maps.
Members can follow the client-supplied PayerExpress link from the footer or
Contact page to pay on an external portal. Payment details are not collected here.

## Capabilities and Constraints

- Existing Astro static site, plain CSS, and small progressive enhancements.
- Preserve all eight routes and the `/Naples-website/` base path.
- Preserve existing content, functionality, brand, and information architecture.
- No public medical intake, online booking, on-site payment processing, database, tracking, or new
  forms. Do not add features for novelty.
- Existing practice details live in `src/data/practice.ts`. They are supplied
  project content, not independently verified facts.
- Client approval remains required for the launch items in
  `INTERNAL-CONTENT-CHECKLIST.md` and `README.md`, including final legal copy.

## Brand Commitments

Trustworthy, calm, sophisticated private healthcare. The owner chose an
architectural direction: crisp layouts, generous space, understated typography.
The current header and navigation tabs are explicitly approved and protected.
Refine the site without a replacement identity, flashy effects, saturated color,
generic medical iconography, or a startup-template appearance.

## Evidence on Hand

- Existing practice and physician copy in `src/pages/` and `src/data/practice.ts`.
- Practice, physician, and care photography in `images/` and optimized assets in
  `src/assets/images/`; retain honest captions and alternative text.
- Local licensed fonts in `src/assets/fonts/`.
- Existing FAQ, contact guidance, emergency notice, and privacy disclaimer.
- No newly supplied proof for additional claims; content gaps stay explicit.

## Product Principles

- Earn trust through clarity and truthful information.
- Make the next step obvious without pressure or unnecessary friction.
- Preserve approved decisions while improving the weaker surrounding details.
- Keep shared behavior consistent across pages and device sizes.
- Use restraint; additional complexity must serve a real patient task.

## Accessibility & Inclusion

Preserve semantic HTML, visible keyboard focus, readable text and contrast,
usable touch targets, zoom/reflow, meaningful image alternatives, and
reduced-motion support. Core navigation and FAQ access must work without
JavaScript. Automated checks are evidence, not a certification of compliance.
