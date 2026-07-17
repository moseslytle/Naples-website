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

## Updating practice details

All known contact information and shared navigation live in `src/data/practice.ts`. Update it there rather than repeating details in page components.

Unconfirmed information is intentionally marked in source and on the draft site with `[CLIENT TO PROVIDE: ...]`. Search for that phrase before launch:

```sh
rg "CLIENT TO PROVIDE|CLIENT / LEGAL"
```

## Adding client photography

Create `public/images/` and add optimized WebP or AVIF files using these expected names:

| Filename                 | Recommended size | Use                    |
| ------------------------ | ---------------- | ---------------------- |
| `practice-hero.webp`     | 1600 × 1200 px   | Homepage hero          |
| `office-interior.webp`   | 1600 × 1200 px   | About page             |
| `provider-portrait.webp` | 1200 × 1500 px   | Provider sections      |
| `practice-exterior.webp` | 1600 × 1200 px   | Contact and directions |

Replace the corresponding `ImagePlaceholder` component with an Astro image component after the final crops are available. Alt text should describe useful visible content without phrases such as “image of.” Decorative photos should use empty alt text.

## Content and launch checklist

Do not launch until the client has reviewed and supplied:

- Approved provider biography, education details, affiliations, and portrait
- Practice history, philosophy, and approved values
- Exact services, age eligibility, exclusions, and coordination language
- Membership pricing, inclusions, terms, and cancellation details
- Scheduling, access, response-time, and after-hours policies
- New-patient process and approved patient communication guidance
- Office hours, parking, accessibility, and arrival information
- Final legal/privacy copy and hosting-provider details
- Social sharing image and approved practice photography

The website does not claim legal or regulatory compliance. Privacy and medical disclaimer copy is a draft requiring client and qualified legal review.
