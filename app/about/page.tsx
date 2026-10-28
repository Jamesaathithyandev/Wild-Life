'use client';

import { useState } from 'react';

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'How do guests reach the floating sanctuaries and cliff aeries?',
      a: 'Depending on the terrain, guests are transferred via our private seaplanes, twin-turbine helicopters, or bespoke AWD overland rovers. A dedicated Wild expedition ranger guides your party directly from the nearest regional private airfield to your sanctuary dock.',
    },
    {
      q: 'What safety and medical emergency systems are in place?',
      a: 'Every sanctuary is equipped with real-time biometric telemetry, automated external defibrillators (AED), hyperbaric emergency chambers (at high-altitude aeries), and satellite SOS links with 24/7 airborne medevac extraction coverage.',
    },
    {
      q: 'Can I pilot an Overland Expedition Rover myself?',
      a: 'Yes. Qualified drivers complete a comprehensive 90-minute all-terrain telemetry orientation at our dispatch base. We also provide on-demand professional wilderness pilots if you prefer to relax and enjoy the landscape.',
    },
    {
      q: 'How does Wild guarantee zero environmental footprint?',
      a: 'All sanctuaries utilize closed-loop bio-filtration, non-invasive ground anchors without concrete foundations, solar solid-state micro-grids, and zero-emission electric transportation. When a pod is relocated, the ground beneath remains 100% undisturbed.',
    },
    {
      q: 'What is your weather postponement policy?',
      a: 'If extreme meteorological conditions prevent safe airborne transfer, Wild provides complimentary luxury lodging at our regional basecamp and flexible priority re-routing to an alternate sanctuary within our global network.',
    },
  ];

  return (
    <main>
      <div className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1800&q=80"
          alt="Mountain summit ridge"
          className="page-hero-bg"
        />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div className="section-tag" style={{ color: 'rgba(255,255,255,0.7)', justifyContent: 'center' }}>
            About Wild
          </div>
          <h1 className="page-hero-title">Born from a Passion for the Untamed Horizon</h1>
          <p className="page-hero-subtitle">
            Founded in 2018, Wild redefines luxury travel by placing high-architecture sanctuaries in Earth's most breathtaking, untouched landscapes.
          </p>
        </div>
      </div>

      <div className="content-body">
        <div className="site-section">
          {/* Milestone Connected Timeline */}
          <div className="section-header reveal-node">
            <div className="section-tag">Corporate Heritage</div>
            <h2 className="section-title">The evolution of off-grid hospitality.</h2>
            <p className="section-desc">From our initial titanium shelter prototype in Reykjavik to 64 sanctuaries worldwide.</p>
          </div>

          <div className="timeline-track reveal-node">
            {/* 2018 */}
            <div className="timeline-node left">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-year">2018 · Inception</div>
                <h3 className="timeline-title">The Maiden Pod Prototype</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  Engineered the world's first self-sustaining cliff dwelling in Reykjavik, using aerospace titanium and aerogel thermal insulation.
                </p>
              </div>
            </div>

            {/* 2020 */}
            <div className="timeline-node right">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-year">2020 · Fleet Expansion</div>
                <h3 className="timeline-title">Autonomous Overland Rovers</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  Introduced custom all-electric AWD expedition campers with integrated solar canopies and satellite emergency tracking.
                </p>
              </div>
            </div>

            {/* 2022 */}
            <div className="timeline-node left">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-year">2022 · Scaling Peaks</div>
                <h3 className="timeline-title">The Cloud Sanctuary Network</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  Expanded to 28 cliff-mounted aeries and alpine pods across the European Alps, Dolomites, and Patagonian Andes.
                </p>
              </div>
            </div>

            {/* 2024 */}
            <div className="timeline-node right">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-year">2024 · Clean Tech</div>
                <h3 className="timeline-title">100% Net Zero & Atmospheric Water</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  Became the first luxury expedition operator certified carbon negative, extracting 100% of drinking water directly from fog and atmosphere.
                </p>
              </div>
            </div>

            {/* 2026 */}
            <div className="timeline-node left">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-year">2026 · Global Presence</div>
                <h3 className="timeline-title">64 Sanctuaries Across 5 Continents</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  Celebrating 14,800+ completed private expeditions with zero ecological incidents and an unmatched 99.8% solitude rating.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Engineering Breakdown */}
          <div style={{ margin: '96px 0' }}>
            <div className="section-header reveal-node">
              <div className="section-tag">Engineering Specifications</div>
              <h2 className="section-title">Built like spacecraft. Crafted like sanctuaries.</h2>
              <p className="section-desc">Each component is selected for maximum reliability in extreme natural environments.</p>
            </div>

            <div className="engineering-grid">
              <div className="engineering-card reveal-node">
                <div className="engineering-img-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
                    alt="Titanium Alloy Frame"
                    className="engineering-img"
                    loading="lazy"
                  />
                </div>
                <div className="engineering-body">
                  <h4 className="engineering-title">Titanium Frameworks</h4>
                  <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Grade-5 titanium structural trusses resistant to 240 km/h wind shear and seismic vibration.
                  </p>
                </div>
              </div>

              <div className="engineering-card reveal-node">
                <div className="engineering-img-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80"
                    alt="Solar Micro Grid"
                    className="engineering-img"
                    loading="lazy"
                  />
                </div>
                <div className="engineering-body">
                  <h4 className="engineering-title">Solid-State Microgrids</h4>
                  <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Solid-state batteries operating down to -40°C with automated thermal balancing and solar tracking.
                  </p>
                </div>
              </div>

              <div className="engineering-card reveal-node">
                <div className="engineering-img-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80"
                    alt="Atmospheric water generation"
                    className="engineering-img"
                    loading="lazy"
                  />
                </div>
                <div className="engineering-body">
                  <h4 className="engineering-title">Atmospheric Harvesters</h4>
                  <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Harvests up to 80 liters of mineral-pure water daily from ambient mountain fog and humidity.
                  </p>
                </div>
              </div>

              <div className="engineering-card reveal-node">
                <div className="engineering-img-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
                    alt="Satellite telemetry communication"
                    className="engineering-img"
                    loading="lazy"
                  />
                </div>
                <div className="engineering-body">
                  <h4 className="engineering-title">Starlink Mesh Uplinks</h4>
                  <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Redundant dual-constellation satellite receivers delivering uninterrupted 350 Mbps connectivity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Leadership Team */}
          <div style={{ margin: '96px 0' }}>
            <div className="section-header reveal-node">
              <div className="section-tag">Executive Leadership</div>
              <h2 className="section-title">Architects, explorers & ecologists.</h2>
              <p className="section-desc">Guided by veterans of arctic exploration, aerospace engineering, and luxury hospitality.</p>
            </div>

            <div className="leadership-grid">
              <div className="leader-card reveal-node">
                <div className="leader-img-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                    alt="Elena Rostova"
                    className="leader-img"
                    loading="lazy"
                  />
                </div>
                <div className="leader-body">
                  <h4 className="leader-name">Elena Rostova</h4>
                  <div className="leader-role">Founder & Chief Architect</div>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Former Director of Alpine Habitats; 15 years designing extreme off-grid structures in Iceland & Patagonia.
                  </p>
                </div>
              </div>

              <div className="leader-card reveal-node">
                <div className="leader-img-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
                    alt="Marcus Thorne"
                    className="leader-img"
                    loading="lazy"
                  />
                </div>
                <div className="leader-body">
                  <h4 className="leader-name">Marcus Thorne</h4>
                  <div className="leader-role">Head of Global Wilderness Ops</div>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Former Polar Expedition Commander overseeing extreme search-and-rescue protocols and rover fleet telemetry.
                  </p>
                </div>
              </div>

              <div className="leader-card reveal-node">
                <div className="leader-img-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
                    alt="Dr. Aanya Patel"
                    className="leader-img"
                    loading="lazy"
                  />
                </div>
                <div className="leader-body">
                  <h4 className="leader-name">Dr. Aanya Patel</h4>
                  <div className="leader-role">Director of Ecological Sustainability</div>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    PhD in Alpine Ecology from Cambridge. Ensures every Wild sanctuary leaves zero trace on native fauna.
                  </p>
                </div>
              </div>

              <div className="leader-card reveal-node">
                <div className="leader-img-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80"
                    alt="Soren Lindqvist"
                    className="leader-img"
                    loading="lazy"
                  />
                </div>
                <div className="leader-body">
                  <h4 className="leader-name">Soren Lindqvist</h4>
                  <div className="leader-role">Chief Safety & Logistics Officer</div>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Lead pilot and coordinator for Arctic helicopter medevac networks across Norway, Greenland and Svalbard.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div style={{ marginTop: 96 }}>
            <div className="section-header reveal-node" style={{ textAlign: 'center', margin: '0 auto 48px auto' }}>
              <div className="section-tag" style={{ justifyContent: 'center' }}>Governance & Inquiries</div>
              <h2 className="section-title">Frequently asked questions.</h2>
              <p className="section-desc">Essential information on accessing our private sanctuaries and booking expeditions.</p>
            </div>

            <div className="faq-list reveal-node">
              {faqs.map((faq, i) => (
                <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                  <button className="faq-header" type="button" onClick={() => toggleFaq(i)}>
                    <span>{faq.q}</span>
                    <div className="faq-toggle-icon">+</div>
                  </button>
                  <div className="faq-content-grid">
                    <div className="faq-inner">
                      <p className="faq-answer">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

