'use client';

import { useEffect, useRef, useState } from 'react';

// Cubic bezier evaluator
function makeCubicBezier(p1x: number, p1y: number, p2x: number, p2y: number) {
  return function (t: number): number {
    let u = t;
    for (let i = 0; i < 5; i++) {
      const currentX =
        3 * (1 - u) * (1 - u) * u * p1x +
        3 * (1 - u) * u * u * p2x +
        u * u * u;
      const currentSlope =
        3 * (1 - u) * (1 - u) * p1x +
        6 * (1 - u) * u * (p2x - p1x) +
        3 * u * u * (1 - p2x);
      if (Math.abs(currentSlope) < 1e-5) break;
      u -= (currentX - t) / currentSlope;
      u = Math.max(0, Math.min(1, u));
    }
    return (
      3 * (1 - u) * (1 - u) * u * p1y +
      3 * (1 - u) * u * u * p2y +
      u * u * u
    );
  };
}

const easePill1 = makeCubicBezier(0.5, 0, 0.3, 1);
const easePill2 = makeCubicBezier(0.45, 0, 0.3, 1);
const easePill3 = makeCubicBezier(0.4, 0, 0.2, 1);
const easeNav = makeCubicBezier(0.2, 0.8, 0.2, 1);

const REVEAL_DURATION = 2100; // 2.1s

export default function WildHero() {
  const heroStageRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hairlineRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const footerBarRef = useRef<HTMLDivElement>(null);
  const heroRuleRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  const [isMuted, setIsMuted] = useState(false);
  const isOpeningRef = useRef(false);
  const isReversingRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Autoplay video
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    function getFs() {
      const isPhone = window.innerWidth <= 720;
      if (isPhone) {
        return Math.min(window.innerWidth * 0.34, window.innerHeight * 0.165);
      }
      return Math.min(window.innerHeight * 0.196, window.innerWidth * 0.132);
    }

    const bgLayer = document.getElementById('bg-layer');
    const dockWrapper = document.querySelector('.dock-wrapper') as HTMLElement | null;

    // Apply opening animation frame at normalized progress t in [0, 1]
    function applyOpeningProgress(t: number) {
      const fs = getFs();
      const isPhone = window.innerWidth <= 720;

      if (!pillRef.current || !heroRef.current || !hairlineRef.current) return;

      if (isPhone) {
        const finalWidth = window.innerWidth - 48;
        const finalHeight = finalWidth / 1.85;

        // Clip draws horizontally outward over 0 to 14%
        let clipProgress = t <= 0.14 ? t / 0.14 : 1;
        let clipInset = 50 * (1 - easeNav(clipProgress));
        pillRef.current.style.clipPath = `inset(0% ${clipInset}%)`;
        pillRef.current.style.width = `${finalWidth}px`;

        // Height grows: 1.5px (0-14%) -> 10% (30%) -> 55% (58%) -> 100% (100%)
        let curHeight = 1.5;
        if (t > 0.14 && t <= 0.30) {
          const sub = (t - 0.14) / 0.16;
          curHeight = 1.5 + (finalHeight * 0.10 - 1.5) * easePill1(sub);
        } else if (t > 0.30 && t <= 0.58) {
          const sub = (t - 0.30) / 0.28;
          curHeight = finalHeight * 0.10 + (finalHeight * 0.55 - finalHeight * 0.10) * easePill2(sub);
        } else if (t > 0.58) {
          const sub = (t - 0.58) / 0.42;
          curHeight = finalHeight * 0.55 + (finalHeight - finalHeight * 0.55) * easePill3(sub);
        }
        pillRef.current.style.height = `${curHeight}px`;

        // Gap grows 0.03 fs -> 0.065 fs -> 0.1 fs
        let curGap = 0.03 * fs;
        if (t > 0.14 && t <= 0.58) {
          const sub = (t - 0.14) / 0.44;
          curGap = 0.03 * fs + (0.065 * fs - 0.03 * fs) * easePill2(sub);
        } else if (t > 0.58) {
          const sub = (t - 0.58) / 0.42;
          curGap = 0.065 * fs + (0.10 * fs - 0.065 * fs) * easePill3(sub);
        }
        heroRef.current.style.gap = `${curGap}px`;
      } else {
        const finalPillWidth = 3.62 * fs;
        pillRef.current.style.height = `${1.81 * fs}px`;

        // Clip draws vertically outward over 0 to 14%
        let clipProgress = t <= 0.14 ? t / 0.14 : 1;
        let clipInset = 50 * (1 - easeNav(clipProgress));
        pillRef.current.style.clipPath = `inset(${clipInset}% 0%)`;

        // Width grows: 0.012 fs (0-14%) -> 0.16 fs (30%) -> 1.81 fs (58%) -> 3.62 fs (100%)
        let curWidth = 0.012 * fs;
        if (t > 0.14 && t <= 0.30) {
          const sub = (t - 0.14) / 0.16;
          curWidth = 0.012 * fs + (0.16 * fs - 0.012 * fs) * easePill1(sub);
        } else if (t > 0.30 && t <= 0.58) {
          const sub = (t - 0.30) / 0.28;
          curWidth = 0.16 * fs + (1.81 * fs - 0.16 * fs) * easePill2(sub);
        } else if (t > 0.58) {
          const sub = (t - 0.58) / 0.42;
          curWidth = 1.81 * fs + (finalPillWidth - 1.81 * fs) * easePill3(sub);
        }
        pillRef.current.style.width = `${curWidth}px`;

        // Gap: 0.026 fs until 14%, 0.05 fs at 58%, then 0.085 fs
        let curGap = 0.026 * fs;
        if (t > 0.14 && t <= 0.58) {
          const sub = (t - 0.14) / 0.44;
          curGap = 0.026 * fs + (0.050 * fs - 0.026 * fs) * easePill2(sub);
        } else if (t > 0.58) {
          const sub = (t - 0.58) / 0.42;
          curGap = 0.050 * fs + (0.085 * fs - 0.050 * fs) * easePill3(sub);
        }
        heroRef.current.style.gap = `${curGap}px`;
      }

      pillRef.current.style.opacity = '1';

      // Hairline grey overlay: fades out 14% to 30%
      if (t <= 0.14) {
        hairlineRef.current.style.opacity = '1';
      } else if (t <= 0.30) {
        const sub = (t - 0.14) / 0.16;
        hairlineRef.current.style.opacity = `${1 - easePill1(sub)}`;
      } else {
        hairlineRef.current.style.opacity = '0';
      }

      // Background paper & curves: fade in 45% to 78%
      if (bgLayer) {
        if (t <= 0.45) {
          bgLayer.style.opacity = '0';
        } else if (t <= 0.78) {
          const sub = (t - 0.45) / 0.33;
          bgLayer.style.opacity = `${sub}`;
        } else {
          bgLayer.style.opacity = '1';
        }
      }

      // Aero-dock: slides down -140% to 0% between 50% and 86%
      if (dockWrapper) {
        if (t <= 0.50) {
          dockWrapper.style.transform = 'translateY(-140%)';
          dockWrapper.style.opacity = '0';
        } else if (t <= 0.86) {
          const sub = (t - 0.50) / 0.36;
          const eased = easeNav(sub);
          dockWrapper.style.transform = `translateY(${(-140 * (1 - eased))}%)`;
          dockWrapper.style.opacity = `${sub * 1.5}`;
        } else {
          dockWrapper.style.transform = 'translateY(0%)';
          dockWrapper.style.opacity = '1';
        }
      }

      // Hero footer: rises +160% to 0% between 52% and 90%
      if (footerBarRef.current) {
        if (t <= 0.52) {
          footerBarRef.current.style.transform = 'translateY(160%)';
          footerBarRef.current.style.opacity = '0';
        } else if (t <= 0.90) {
          const sub = (t - 0.52) / 0.38;
          const eased = easeNav(sub);
          footerBarRef.current.style.transform = `translateY(${(160 * (1 - eased))}%)`;
          footerBarRef.current.style.opacity = `${sub * 1.5}`;
        } else {
          footerBarRef.current.style.transform = 'translateY(0%)';
          footerBarRef.current.style.opacity = '1';
        }
      }

      // Center rule draws between 40% and 95%
      if (heroRuleRef.current) {
        if (t <= 0.40) {
          heroRuleRef.current.style.transform = 'scaleX(0)';
        } else if (t <= 0.95) {
          const sub = (t - 0.40) / 0.55;
          heroRuleRef.current.style.transform = `scaleX(${sub})`;
        } else {
          heroRuleRef.current.style.transform = 'scaleX(1)';
        }
      }

      // Icons fade in after 80%
      if (iconsRef.current) {
        if (t <= 0.80) {
          iconsRef.current.style.opacity = '0';
        } else {
          const sub = (t - 0.80) / 0.20;
          iconsRef.current.style.opacity = `${sub * 0.85}`;
        }
      }
    }

    // SCROLL-DRIVEN TABLET CLOSING:
    // When scrolling down, smoothly closes the tablet and gap down to 0, forming "WILD"
    function handleScroll() {
      if (isReversingRef.current) return;

      const scrollY = window.scrollY || window.pageYOffset;

      // If user starts scrolling while opening animation is active, stop opening loop and let scroll take over
      if (isOpeningRef.current && scrollY > 5) {
        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
        isOpeningRef.current = false;
      }

      if (isOpeningRef.current) return;
      if (!heroStageRef.current || !pillRef.current || !heroRef.current) return;

      const stageTop = heroStageRef.current.offsetTop;
      const stageHeight = heroStageRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Scroll progress through hero section (0 = top, 1 = scrolled through hero)
      const scrollRange = stageHeight - viewportHeight;
      const rawProgress = scrollRange > 0 ? (scrollY - stageTop) / scrollRange : 0;
      const progress = Math.max(0, Math.min(1, rawProgress));

      const isPhone = window.innerWidth <= 720;
      const fs = getFs();

      // Tablet closes down as progress moves 0 -> 0.65
      const closeFactor = Math.min(1, progress / 0.65);
      const easedClose = Math.pow(closeFactor, 1.25); // smooth close curve

      if (isPhone) {
        const finalWidth = window.innerWidth - 48;
        const fullHeight = finalWidth / 1.85;

        const curHeight = fullHeight * (1 - easedClose);
        const curGap = (0.10 * fs) * (1 - easedClose);

        pillRef.current.style.width = `${finalWidth}px`;
        pillRef.current.style.height = `${Math.max(0, curHeight)}px`;
        pillRef.current.style.opacity = curHeight < 1.5 ? '0' : '1';
        heroRef.current.style.gap = `${Math.max(0, curGap)}px`;

        if (hairlineRef.current) {
          hairlineRef.current.style.opacity = easedClose > 0.88 ? '1' : '0';
        }
        if (iconsRef.current) {
          iconsRef.current.style.opacity = `${Math.max(0, 0.85 * (1 - easedClose * 1.5))}`;
        }
      } else {
        const fullWidth = 3.62 * fs;
        const curWidth = fullWidth * (1 - easedClose);
        const fullGap = 0.085 * fs;
        const curGap = fullGap * (1 - easedClose);

        pillRef.current.style.height = `${1.81 * fs}px`;
        pillRef.current.style.width = `${Math.max(0, curWidth)}px`;
        pillRef.current.style.opacity = curWidth < 2 ? '0' : '1';
        heroRef.current.style.gap = `${Math.max(0, curGap)}px`;

        if (hairlineRef.current) {
          hairlineRef.current.style.opacity = curWidth < 0.15 * fs && curWidth > 0 ? '1' : '0';
        }
        if (iconsRef.current) {
          iconsRef.current.style.opacity = `${Math.max(0, 0.85 * (1 - easedClose * 1.8))}`;
        }
      }

      // Hero footer bar fades away as tablet closes
      if (footerBarRef.current) {
        const footerFade = Math.max(0, 1 - progress * 2.6);
        footerBarRef.current.style.opacity = `${footerFade}`;
        footerBarRef.current.style.transform = `translateY(${progress * 40}px)`;
        footerBarRef.current.style.pointerEvents = footerFade < 0.1 ? 'none' : 'auto';
      }

      // Scroll hint fades away
      if (hintRef.current) {
        const hintFade = Math.max(0, 1 - progress * 3.2);
        hintRef.current.style.opacity = `${hintFade}`;
      }
    }

    // Play reveal animation on mount
    function startReveal() {
      if (window.scrollY > 20) {
        // If already scrolled down, apply full open state and let scroll position handle it
        applyOpeningProgress(1);
        handleScroll();
        return;
      }

      isOpeningRef.current = true;
      const startTime = performance.now();

      function step(now: number) {
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / REVEAL_DURATION);
        applyOpeningProgress(t);

        if (t < 1) {
          rafIdRef.current = requestAnimationFrame(step);
        } else {
          isOpeningRef.current = false;
          // Apply finished 100% state
          applyOpeningProgress(1);
        }
      }

      rafIdRef.current = requestAnimationFrame(step);
    }

    startReveal();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => {
      if (!isOpeningRef.current) {
        handleScroll();
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  // "Let's Get Wild" button: collapses tablet back to hairline and re-opens
  const handleWildButtonClick = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 50) {
      // If scrolled down, glide back to top and then trigger collapse/re-open
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(runCollapseAndReopen, 550);
    } else {
      runCollapseAndReopen();
    }
  };

  const runCollapseAndReopen = () => {
    if (isOpeningRef.current || isReversingRef.current) return;
    isReversingRef.current = true;

    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);

    const collapseDuration = 800; // fast collapse
    const startTime = performance.now();

    function stepCollapse(now: number) {
      const elapsed = now - startTime;
      const t = Math.max(0, 1 - elapsed / collapseDuration);

      // Interpolate backwards to hairline
      if (pillRef.current && heroRef.current) {
        const fs = Math.min(window.innerHeight * 0.196, window.innerWidth * 0.132);
        pillRef.current.style.width = `${(0.012 * fs) + (3.62 * fs - 0.012 * fs) * t}px`;
        heroRef.current.style.gap = `${(0.026 * fs) + (0.085 * fs - 0.026 * fs) * t}px`;
      }
      if (hairlineRef.current) {
        hairlineRef.current.style.opacity = `${1 - t}`;
      }

      if (t > 0) {
        rafIdRef.current = requestAnimationFrame(stepCollapse);
      } else {
        // Hold at hairline briefly, then re-open
        setTimeout(() => {
          isReversingRef.current = false;
          const openStart = performance.now();
          function stepReopen(nowOpen: number) {
            const openElapsed = nowOpen - openStart;
            const openT = Math.min(1, openElapsed / 1800);

            if (pillRef.current && heroRef.current) {
              const fs = Math.min(window.innerHeight * 0.196, window.innerWidth * 0.132);
              pillRef.current.style.width = `${(0.012 * fs) + (3.62 * fs - 0.012 * fs) * openT}px`;
              heroRef.current.style.gap = `${(0.026 * fs) + (0.085 * fs - 0.026 * fs) * openT}px`;
            }
            if (hairlineRef.current) {
              hairlineRef.current.style.opacity = `${Math.max(0, 1 - openT * 3)}`;
            }

            if (openT < 1) {
              rafIdRef.current = requestAnimationFrame(stepReopen);
            }
          }
          rafIdRef.current = requestAnimationFrame(stepReopen);
        }, 120);
      }
    }

    rafIdRef.current = requestAnimationFrame(stepCollapse);
  };

  return (
    <section ref={heroStageRef} id="hero-stage" className="hero-stage">
      <div className="hero-sticky-frame">
        <div className="hero-container" role="main">
          <div ref={heroRef} id="hero" className="hero">
            <div id="word-wi" className="word-half">WI</div>

            {/* Stadium-shaped Video Tablet */}
            <div ref={pillRef} id="pill" className="pill" role="region" aria-label="Scenic floating island preview">
              <video
                ref={videoRef}
                id="pill-video"
                className="pill-video"
                src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/175fbbcd-e50a-480c-bab2-ca16d4678322.mp4"
                poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/726b168c-da47-4682-a255-cc3e02f89bae.jpg"
                playsInline
                muted
                loop
                autoPlay
                aria-label="Floating island with waterfall over sunset clouds"
              />

              {/* Hairline overlay */}
              <div ref={hairlineRef} id="hairline-overlay" className="hairline-overlay" aria-hidden="true" />

              {/* Pill icons */}
              <div ref={iconsRef} id="pill-icons" className="pill-icons">
                <div className="icon-breeze" title="Mountain breeze airflow" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
                  </svg>
                </div>

                <button
                  id="speaker-toggle"
                  className="icon-speaker"
                  type="button"
                  aria-label="Toggle ambient sound waves"
                  title="Toggle sound waves"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMuted(!isMuted);
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path className={`speaker-wave ${isMuted ? 'is-muted' : ''}`} d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path className={`speaker-wave ${isMuted ? 'is-muted' : ''}`} d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                </button>
              </div>
            </div>

            <div id="word-ld" className="word-half">LD</div>
          </div>
        </div>

        {/* Hero Footer Bar */}
        <div ref={footerBarRef} id="hero-footer-bar" className="hero-footer-bar">
          <div className="hero-footer-left">
            <p className="hero-footer-desc">
              <span className="dropcap">E</span>mbark on a wild ride around the world with our travel rental service. Discover breathtaking landscapes and hidden gems on your unforgettable journey.
            </p>
          </div>

          <div className="hero-rule-container" aria-hidden="true">
            <div ref={heroRuleRef} className="hero-rule" />
          </div>

          <div className="hero-footer-right">
            <button
              id="cta-btn-wild"
              className="btn-wild btn-shimmer"
              type="button"
              onClick={handleWildButtonClick}
            >
              Let's Get Wild
            </button>
          </div>
        </div>

        {/* Scroll hint pill */}
        <div ref={hintRef} id="scroll-hint" className="scroll-hint-pill">
          <span>Scroll down to close tablet</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      </div>
    </section>
  );
}
