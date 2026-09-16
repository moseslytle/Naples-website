# Naples Modern Choice Medicine website

Phase 1 informational website for Naples Modern Choice Medicine, a concierge family medicine practice in Naples, Florida.

## Tech stack

- Astro static site generation
- TypeScript in strict mode
- Plain component-scoped and global CSS
- No client framework, database, forms, analytics, cookies, or third-party embeds

## Run locally

Requires Node.js 22 or newer.

```sh
npm install
npm run dev
```

The terminal prints the local development URL. Use `npm run build` to create the production site in `dist/` and `npm run preview` to preview that build.

## Quality checks

```sh
npm run format:check
npm run check
npm run lint
npm run build
npm test
```

`npm test` audits the built site for all eight expected pages, page titles, descriptions, main landmarks, and broken internal links.

## Visual system

Shared spacing, typography, colors, radii, and motion tokens live in
`src/styles/global.css`. Cormorant Garamond and Manrope are served locally as
compact WOFF2 files, with their open-font licenses in `src/assets/fonts`.
Shared page heroes, photography, navigation, and
contact cards carry the same visual language across all eight routes.

Use `.button` for primary actions, `.button--secondary` for supporting actions,
and `.text-link` for editorial links. Photography uses responsive WebP sources,
with landscape crops by default and a separate portrait treatment.

Navigation and FAQ disclosures work without JavaScript. Small progressive
enhancements add sticky-header feedback, menu dismissal, and disclosure motion;
all respect reduced-motion preferences. Scheduling continues through the
office's existing contact process.

Member payments open the client-supplied PayerExpress portal in a new tab.
The link is available in the header, footer, and Contact page, and is configured
as `practice.paymentUrl` in `src/data/practice.ts`. No payment details are
collected by this site.

## Updating practice details

All known contact information and shared navigation live in `src/data/practice.ts`. Update it there rather than repeating details in page components.

Unconfirmed information is hidden from the client-facing preview and tracked in `INTERNAL-CONTENT-CHECKLIST.md`.

## Client photography

The approved source photography is stored in `images/`. Optimized WebP versions
used by Astro’s image component are in `src/assets/images/`. Each rendered image
includes intrinsic dimensions, responsive cropping, lazy loading outside the
homepage hero, and descriptive alternative text.

## Content and launch checklist

Do not launch until the client has reviewed and supplied:

- Approved provider biography, education details, affiliations, and portrait
- Practice history, philosophy, and approved values
- Exact services, age eligibility, exclusions, and coordination language
- Membership pricing, inclusions, terms, and cancellation details
- Scheduling, access, response-time, and after-hours policies
- New-patient process and approved patient communication guidance
- Office hours, parking, accessibility, and arrival information
- Final qualified legal review and any applicable HIPAA Notice of Privacy Practices
- Social sharing image and approved practice photography

The website includes a general public-website privacy and disclaimer page. It is
not a substitute for the practice's Notice of Privacy Practices or qualified
legal advice.
