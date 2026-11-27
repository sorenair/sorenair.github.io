/** Shared terminal behaviours. The layout loads this once; components import `glitch` from it. */

const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/** The one glitch effect: a short horizontal tear. Use it for state changes only. */
export function glitch(element: Element | null | undefined) {
  if (!element || reduced()) return;
  element.classList.remove('is-glitch');
  void (element as HTMLElement).offsetWidth;
  element.classList.add('is-glitch');
  element.addEventListener('animationend', () => element.classList.remove('is-glitch'), { once: true });
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

/** Reveal `[data-reveal]` elements once, the first time they enter the viewport. */
function startReveals() {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!targets.length) return;
  if (reduced() || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.2 });
  targets.forEach((target) => {
    const { top } = target.getBoundingClientRect();
    // Above-the-fold content is already visible; only arm elements below the fold.
    if (top > innerHeight * 0.9) { target.classList.add('is-armed'); observer.observe(target); }
  });
}

startClocks();
startReveals();
