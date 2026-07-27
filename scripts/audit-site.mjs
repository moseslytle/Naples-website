import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

if (!existsSync('dist')) {
  console.error('dist/ is missing. Run npm run build before npm test.');
  process.exit(1);
}

const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else files.push(path);
  }
};
walk('dist');

const htmlFiles = files.filter((file) => file.endsWith('.html'));
const errors = [];
const stripTags = (value) =>
  value
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(?:nbsp|amp|copy|#x?[0-9a-f]+);/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
const routeExists = (href) => {
  const clean = href.split(/[?#]/)[0];
  if (!clean.startsWith('/')) return true;
  if (clean === '/') return existsSync(join('dist', 'index.html'));
  const target = clean.endsWith('/')
    ? join('dist', clean, 'index.html')
    : join('dist', clean);
  return existsSync(target);
};

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const display = relative('dist', file);
  if (!/<title>[^<]+<\/title>/.test(html))
    errors.push(`${display}: missing title`);
  if (!/<meta name="description" content="[^"]+"/.test(html))
    errors.push(`${display}: missing description`);
  if (!/<html[^>]+lang="en"/.test(html))
    errors.push(`${display}: missing or incorrect document language`);
  if (
    !/<meta name="viewport" content="width=device-width"/.test(html) ||
    /maximum-scale|user-scalable\s*=\s*no/i.test(html)
  )
    errors.push(`${display}: viewport prevents or does not support zoom`);
  if ((html.match(/<main\b/g) ?? []).length !== 1)
    errors.push(`${display}: expected exactly one main landmark`);
  if (!/<main[^>]+id="main-content"/.test(html))
    errors.push(`${display}: missing main landmark`);
  if (/<main[^>]*\btabindex=/i.test(html))
    errors.push(`${display}: main landmark must not have tabindex`);
  if (!/<a[^>]+class="skip-link"[^>]+href="#main-content"/.test(html))
    errors.push(`${display}: missing skip-to-content link`);

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length)
    errors.push(
      `${display}: duplicate IDs ${[...new Set(duplicateIds)].join(', ')}`,
    );

  const headings = [...html.matchAll(/<h([1-6])\b/g)].map((match) =>
    Number(match[1]),
  );
  if (headings.filter((level) => level === 1).length !== 1)
    errors.push(`${display}: expected exactly one h1`);
  for (let index = 1; index < headings.length; index += 1) {
    if (headings[index] - headings[index - 1] > 1)
      errors.push(
        `${display}: heading level jumps from h${headings[index - 1]} to h${headings[index]}`,
      );
  }

  for (const [image] of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt(?:\s|=|>)/i.test(image))
      errors.push(`${display}: image missing alt attribute`);
    if (!/\bwidth="/i.test(image) || !/\bheight="/i.test(image))
      errors.push(`${display}: image missing intrinsic dimensions`);
  }

  const detailsCount = (html.match(/<details\b/g) ?? []).length;
  const summaryCount = (html.match(/<summary\b/g) ?? []).length;
  if (detailsCount !== summaryCount)
    errors.push(`${display}: every details element must have one summary`);

  for (const match of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)) {
    const [, attributes, content] = match;
    const ariaLabel = attributes.match(/\baria-label="([^"]+)"/i)?.[1];
    const name = ariaLabel ?? stripTags(content);
    if (!name) errors.push(`${display}: link without an accessible name`);
    if (/\btarget="_blank"/i.test(attributes)) {
      if (!/\brel="[^"]*\bnoopener\b/i.test(attributes))
        errors.push(`${display}: new-tab link missing noopener`);
      if (!/opens in a new tab/i.test(name))
        errors.push(`${display}: new-tab link does not announce new context`);
    }
  }

  for (const match of html.matchAll(/\btabindex="([^"]+)"/gi)) {
    if (Number(match[1]) > 0)
      errors.push(`${display}: positive tabindex disrupts focus order`);
  }

  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (href.startsWith('/') && !routeExists(href))
      errors.push(`${display}: broken internal link ${href}`);
  }
}

if (htmlFiles.length !== 8)
  errors.push(`Expected 8 HTML pages, found ${htmlFiles.length}`);

const globalStyles = readFileSync('src/styles/global.css', 'utf8');
const revealScript = readFileSync('src/scripts/reveal.ts', 'utf8');

if (!globalStyles.includes('@media (prefers-reduced-motion: reduce)'))
  errors.push('Global styles: missing reduced-motion fallback');
if (
  !globalStyles.includes('.reveal.is-reveal-pending') ||
  !globalStyles.includes('opacity: 1 !important')
)
  errors.push(
    'Global styles: reveal content lacks a visible reduced-motion state',
  );
if (
  !revealScript.includes('prefers-reduced-motion: reduce') ||
  !revealScript.includes("'IntersectionObserver' in window")
)
  errors.push('Reveal script: missing motion-preference or feature detection');
if (
  htmlFiles.some((file) =>
    /class="[^"]*\bis-reveal-pending\b/.test(readFileSync(file, 'utf8')),
  )
)
  errors.push('Generated HTML must keep reveal content visible by default');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(
  `Audited ${htmlFiles.length} pages: language, zoom support, landmarks, skip links, headings, IDs, image alternatives, intrinsic image sizes, disclosures, link names, new-tab warnings, focus order, metadata, and internal links passed.`,
);
