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
  if (!/<main[^>]+id="main-content"/.test(html))
    errors.push(`${display}: missing main landmark`);
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (href.startsWith('/') && !routeExists(href))
      errors.push(`${display}: broken internal link ${href}`);
  }
}

if (htmlFiles.length !== 8)
  errors.push(`Expected 8 HTML pages, found ${htmlFiles.length}`);

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(
  `Audited ${htmlFiles.length} pages: metadata, landmarks, and internal links passed.`,
);
