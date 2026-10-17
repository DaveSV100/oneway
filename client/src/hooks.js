import { useEffect } from 'react';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Fades in every `.ai-reveal` element the first time it scrolls into view.
export const useReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.ai-reveal:not(.is-visible)');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

export const usePageMeta = (title, description) => {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
};

export const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
};
