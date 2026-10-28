'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        {/* Live Operations Banner */}
        <div className="footer-ops-banner">
          <div className="ops-item">
            <span className="ops-label">Worldwide Dispatch Inquiries</span>
            <span className="ops-val">+1 (800) 492-WILD · +41 22 819 0000</span>
          </div>
          <div className="ops-item">
            <span className="ops-label">Global Operations Centers</span>
            <span className="ops-val">Geneva HQ · Tromsø Arctic Base · Queenstown Hub</span>
          </div>
          <div className="ops-item">
            <span className="ops-label">Corporate Dispatch Email</span>
            <span className="ops-val">dispatch@wild-expeditions.com</span>
          </div>
          <div className="ops-item">
            <span className="ops-label">Network Status</span>
            <span className="ops-val" style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
              All 64 Sanctuaries Operational
            </span>
          </div>
        </div>

        {/* Multi-column links */}
        <div className="footer-cols">
          <div className="footer-brand-col">
            <div className="footer-brand-title">WILD</div>
            <p className="footer-brand-desc">
              Autonomous architectural sanctuaries and extreme overland expeditions in the world's most untamed wilderness environments.
            </p>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
              Registered Headquarters: Route de Pré-Bois 29, 1215 Geneva, Switzerland.
            </div>
          </div>

          <div>
            <div className="footer-col-title">Sanctuaries</div>
            <ul className="footer-links">
              <li><Link href="/services" className="footer-link">Floating Island Pods</Link></li>
              <li><Link href="/services" className="footer-link">Overland Rovers</Link></li>
              <li><Link href="/services" className="footer-link">Cloud Mountain Aeries</Link></li>
              <li><Link href="/services" className="footer-link">Forest Eco-Lodges</Link></li>
              <li><Link href="/services" className="footer-link">Marine Atolls</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li><Link href="/about" className="footer-link">Corporate Heritage</Link></li>
              <li><Link href="/about" className="footer-link">Executive Leadership</Link></li>
              <li><Link href="/about" className="footer-link">Engineering Specs</Link></li>
              <li><Link href="/about" className="footer-link">Safety Protocols</Link></li>
              <li><Link href="/" className="footer-link">Investor Governance</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Ecology & ESG</div>
            <ul className="footer-links">
              <li><Link href="/" className="footer-link">Carbon Zero Standard</Link></li>
              <li><Link href="/" className="footer-link">Atmospheric Water</Link></li>
              <li><Link href="/" className="footer-link">Wildlife Corridors</Link></li>
              <li><Link href="/" className="footer-link">Indigenous Treaties</Link></li>
              <li><Link href="/" className="footer-link">Annual Audit Report</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Dispatch Briefing</div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, marginBottom: 12 }}>
              Receive quarterly dispatches on newly unlocked sanctuaries and astronomical expeditions.
            </p>
            <form
              className="footer-newsletter-input"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to Wild Dispatch briefings.');
              }}
            >
              <input type="email" placeholder="explorer@wild.org" required />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>

        {/* Certification Seals */}
        <div className="cert-badges">
          <div className="cert-badge"><span>●</span> ISO 14001 Environmental Management</div>
          <div className="cert-badge"><span>●</span> Global Eco-Alliance Gold Standard</div>
          <div className="cert-badge"><span>●</span> Arctic Polar Safety Certified</div>
          <div className="cert-badge"><span>●</span> 100% Net Zero Carbon Standard</div>
          <div className="cert-badge"><span>●</span> LNT (Leave No Trace) Master Practitioner</div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom-bar">
          <div>© 2026 Wild Expeditions Group AG. All international rights reserved.</div>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link href="/" className="footer-link">Privacy Policy</Link>
            <Link href="/" className="footer-link">Terms of Expedition</Link>
            <Link href="/" className="footer-link">Aviation Regulations</Link>
            <Link href="/" className="footer-link">Security Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

