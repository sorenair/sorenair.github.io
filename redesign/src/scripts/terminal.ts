/**
 * Shared terminal behaviors. The layout loads this once; components import `glitch` from it.
 *
 * Text reveals are decoded, not wiped:
 *  - `[data-reveal]` (and every `.page-title` / `.section-title`, unless `data-no-reveal`) scrambles
 *    into its real text. Scramble characters match the case of the real ones to keep line breaks stable.
 *  - `[data-type]` types short single-line text with a block cursor.
 * Real text is in the HTML from the first paint; JS only animates it. Reduced motion skips everything.
 */

const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/** The one glitch effect: a short horizontal tear. Use it for state changes only. */
export function glitch(element: Element | null | undefined) {
  if (!element || reduced()) return;
  element.classList.remove('is-glitch');
  void (element as HTMLElement).offsetWidth;
  element.classList.add('is-glitch');
  element.addEventListener('animationend', () => element.classList.remove('is-glitch'), { once: true });
}

const pools = { upper: 'ABCDEFGHKMNPRSTUVWXZ', lower: 'abcdeghknopqsuvxz', digit: '0123456789' };
const scrambleFor = (char: string) => {
  const pool = /[A-Z]/.test(char) ? pools.upper : /[a-z]/.test(char) ? pools.lower : /[0-9]/.test(char) ? pools.digit : '';
  return pool ? pool[Math.floor(Math.random() * pool.length)] : char;
};

function textNodes(root: Element) {
  const nodes: Text[] = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if ((node as Text).data.trim()) nodes.push(node as Text);
  }
  return nodes;
}

const FRAME = 40;

/** Run a stepped text animation. `render(index, elapsed, original)` returns the string to show at that character. */
function animateText(element: HTMLElement, mode: 'decode' | 'type', onDone?: () => void) {
  const nodes = textNodes(element);
  const originals = nodes.map((node) => node.data);
  const total = originals.reduce((sum, text) => sum + text.length, 0);
  if (!total) return onDone?.();

  const height = element.getBoundingClientRect().height;
  if (mode === 'decode') element.style.minBlockSize = `${height}px`;

  // Per-character resolve times: decode resolves in a ragged left-to-right sweep, type strictly in order.
  const span = Math.min(900, 260 + total * 14);
  const resolveAt: number[] = [];
  for (let i = 0; i < total; i++) {
    resolveAt.push(mode === 'type' ? (i / total) * span : (i / total) * span * 0.7 + Math.random() * span * 0.3);
  }

  let cursor: HTMLElement | undefined;
  if (mode === 'type') {
    cursor = document.createElement('span');
    cursor.className = 'term-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    element.append(cursor);
  }

  const start = performance.now();
  const step = () => {
    const elapsed = performance.now() - start;
    let index = 0;
    nodes.forEach((node, n) => {
      let text = '';
      for (const char of originals[n]) {
        const done = elapsed >= resolveAt[index++];
        if (/\s/.test(char)) text += char;
        else if (done) text += char;
        else if (mode === 'decode') text += scrambleFor(char);
      }
      node.data = text;
    });
    if (elapsed < span + FRAME) return;
    clearInterval(timer);
    nodes.forEach((node, n) => { node.data = originals[n]; });
    element.style.minBlockSize = '';
    if (cursor) setTimeout(() => cursor!.remove(), 1200);
    onDone?.();
  };
  const timer = setInterval(step, FRAME);
  step();
}

/** Decode / type text the first time it enters the viewport. */
function startReveals() {
  if (reduced() || !('IntersectionObserver' in window)) return;
  const selector = '[data-reveal], [data-type], .page-title:not([data-no-reveal]), .section-title:not([data-no-reveal])';
  const targets = [...document.querySelectorAll<HTMLElement>(selector)].filter((el) => !el.closest('[data-no-reveal]'));
  if (!targets.length) return;
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const element = entry.target as HTMLElement;
      observer.unobserve(element);
      element.classList.remove('is-armed');
      animateText(element, element.hasAttribute('data-type') ? 'type' : 'decode');
    }
  }, { threshold: 0.2 });
  targets.forEach((target) => {
    // Hide below-the-fold targets until they start, so the real text never flashes before the scramble.
    if (target.getBoundingClientRect().top > innerHeight) target.classList.add('is-armed');
    observer.observe(target);
  });
}

/** Live clock in any `[data-clock]` element. */
function startClocks() {
  const clocks = document.querySelectorAll<HTMLElement>('[data-clock]');
  if (!clocks.length) return;
  const tick = () => {
    const time = new Date().toLocaleTimeString('en-GB', { hour12: false });
    clocks.forEach((clock) => { clock.textContent = time; });
  };
  tick();
  setInterval(tick, 1000);
}

/**
 * Keep page headers (WORK, MEDIA, ABOUT) on one line at every width by shrinking the type to fit
 * its container. Runs before the reveal starts so scrambled glyph widths never affect the result.
 */
function fitHeaders() {
  const headers = document.querySelectorAll<HTMLElement>('h1.display-title:not(.hero-title):not(.project-title), [data-fit]');
  if (!headers.length) return;
  const fit = () => headers.forEach((header) => {
    header.style.whiteSpace = 'nowrap';
    header.style.fontSize = '';
    const available = header.clientWidth;
    const needed = header.scrollWidth;
    if (available && needed > available) {
      header.style.fontSize = `${parseFloat(getComputedStyle(header).fontSize) * (available / needed) * 0.98}px`;
    }
  });
  fit();
  addEventListener('resize', fit);
  document.fonts?.ready.then(fit);
}

/**
 * Multi-word titles (project names) may wrap between words but never inside one. Shrink the type
 * until the longest word fits, measuring each word in a hidden copy that matches the title's styles.
 */
function fitWords() {
  const titles = document.querySelectorAll<HTMLElement>('h1.project-title, [data-fit-words]');
  if (!titles.length) return;
  const fit = () => titles.forEach((title) => {
    title.style.fontSize = '';
    const available = title.clientWidth;
    if (!available) return;
    const probe = document.createElement('span');
    probe.setAttribute('aria-hidden', 'true');
    probe.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;pointer-events:none';
    title.append(probe);
    let widest = 0;
    for (const word of (title.textContent ?? '').split(/\s+/)) {
      if (!word) continue;
      probe.textContent = word;
      widest = Math.max(widest, probe.getBoundingClientRect().width);
    }
    probe.remove();
    if (widest > available) {
      title.style.fontSize = `${parseFloat(getComputedStyle(title).fontSize) * (available / widest) * 0.97}px`;
    }
  });
  fit();
  addEventListener('resize', fit);
  document.fonts?.ready.then(fit);
}

startClocks();
fitHeaders();
fitWords();
startReveals();
