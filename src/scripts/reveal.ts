// @ts-nocheck -- This file is intentionally browser-valid JavaScript because it
// is injected inline by BaseLayout.astro to avoid a separate module request.
const revealSelector = [
  '.section > .container',
  '.section > .narrow',
  '.grid > .card',
  '.faq-list > details',
].join(', ');

const revealAll = (elements) => {
  for (const element of elements) {
    element.classList.remove('is-reveal-pending');
    element.classList.add('is-visible');
  }
};

const showOnNextPaint = (elements) => {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => revealAll(elements));
  });
};

const initReveals = () => {
  const elements = Array.from(document.querySelectorAll(revealSelector));
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;
  document.documentElement.dataset.motion = prefersReducedMotion
    ? 'reduced'
    : 'full';

  if (
    elements.length === 0 ||
    prefersReducedMotion ||
    !('IntersectionObserver' in window)
  ) {
    return;
  }

  for (const group of document.querySelectorAll('.grid, .faq-list')) {
    const items = Array.from(
      group.querySelectorAll(':scope > .card, :scope > details'),
    );
    items.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${Math.min(index, 3) * 60}ms`);
    });
  }

  let observer;

  try {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target;
          element.classList.remove('is-reveal-pending');
          element.classList.add('is-visible');
          observer?.unobserve(element);
        }
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.08,
      },
    );

    const initiallyVisible = [];

    for (const element of elements) {
      element.classList.add('reveal');
      const bounds = element.getBoundingClientRect();

      if (bounds.top < window.innerHeight && bounds.bottom > 0) {
        element.classList.add('is-reveal-pending');
        initiallyVisible.push(element);
        continue;
      }

      element.classList.add('is-reveal-pending');
      observer.observe(element);
    }

    showOnNextPaint(initiallyVisible);
  } catch {
    observer?.disconnect();
    revealAll(elements);
  }
};

initReveals();
