'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AeroDock() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="dock-wrapper" role="banner">
      <div className="aero-dock" role="navigation" aria-label="Main Navigation">
        <Link href="/" className="dock-brand" onClick={() => setMobileOpen(false)}>
          <span className="dock-beacon" aria-hidden="true" />
          <span>WILD</span>
        </Link>

        <nav className="dock-nav" aria-label="Primary Links">
          <Link
            href="/"
            className={`dock-link ${pathname === '/' ? 'active' : ''}`}
          >
            Overview
          </Link>
          <Link
            href="/services"
            className={`dock-link ${pathname === '/services' ? 'active' : ''}`}
          >
            Services & Expeditions
          </Link>
          <Link
            href="/about"
            className={`dock-link ${pathname === '/about' ? 'active' : ''}`}
          >
            About Us
          </Link>
        </nav>

        <Link
          href="/#inquiry"
          className="dock-cta btn-shimmer"
          onClick={() => setMobileOpen(false)}
        >
          <span>Inquire</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>

        <button
          className="dock-mobile-toggle"
          aria-label="Toggle navigation drawer"
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Floating Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <Link
          href="/"
          className={`mobile-drawer-link ${pathname === '/' ? 'active' : ''}`}
          onClick={() => setMobileOpen(false)}
        >
          Overview
        </Link>
        <Link
          href="/services"
          className={`mobile-drawer-link ${pathname === '/services' ? 'active' : ''}`}
          onClick={() => setMobileOpen(false)}
        >
          Services & Expeditions
        </Link>
        <Link
          href="/about"
          className={`mobile-drawer-link ${pathname === '/about' ? 'active' : ''}`}
          onClick={() => setMobileOpen(false)}
        >
          About Us
        </Link>
        <Link
          href="/#inquiry"
          className="mobile-drawer-link"
          style={{ fontWeight: 700, color: '#000' }}
          onClick={() => setMobileOpen(false)}
        >
          Book Expedition →
        </Link>
      </div>
    </header>
  );
}

