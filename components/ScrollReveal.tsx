'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll to top on page change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Enable js-reveal mode
    document.body.classList.add('js-reveal');

    // Query all reveal elements on the current page
    const revealElements = document.querySelectorAll('.reveal-node');

    // Immediately mark elements that are within or close to the viewport
    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) {
        el.classList.add('in-view');
      }
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    // Handle number counters
    const counters = document.querySelectorAll('.counter-num');
    counters.forEach((c) => {
      const target = parseFloat(c.getAttribute('data-target') || '0');
      const isDecimal = c.getAttribute('data-decimal') === '1';

      if (c.classList.contains('counted')) {
        c.textContent = isDecimal
          ? target.toFixed(1) + '%'
          : target >= 1000
          ? Math.floor(target).toLocaleString() + '+'
          : target === 100
          ? '100%'
          : target.toString();
      }
    });

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            animateCounter(entry.target as HTMLElement);
          }
        });
      },
      { threshold: 0.15 }
    );

    counters.forEach((c) => counterObserver.observe(c));

    function animateCounter(el: HTMLElement) {
      const target = parseFloat(el.getAttribute('data-target') || '0');
      const isDecimal = el.getAttribute('data-decimal') === '1';
      const duration = 1600;
      const startTime = performance.now();

      function updateCount(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = target * easeOut;

        if (isDecimal) {
          el.textContent = current.toFixed(1) + '%';
        } else if (target >= 1000) {
          el.textContent = Math.floor(current).toLocaleString() + '+';
        } else if (target === 100) {
          el.textContent = Math.floor(current) + '%';
        } else {
          el.textContent = Math.floor(current).toString();
        }

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      }

      requestAnimationFrame(updateCount);
    }

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
