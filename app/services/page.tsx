'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'pod' | 'rover' | 'cloud' | 'marine'>('pod');

  return (
    <main>
      <div className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1800&q=80"
          alt="Misty wild mountain landscape"
          className="page-hero-bg"
        />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div className="section-tag" style={{ color: 'rgba(255,255,255,0.7)', justifyContent: 'center' }}>
            Services & Solutions
          </div>
          <h1 className="page-hero-title">Extreme Wilderness Infrastructure & Private Sanctuaries</h1>
          <p className="page-hero-subtitle">
            Every Wild rental is an autonomous architectural installation engineered to thrive in unforgiving conditions while delivering transcendent comfort.
          </p>
        </div>
      </div>

      <div className="content-body">
        <div className="site-section">
          {/* Interactive Service Modality Switcher */}
          <div className="service-switcher reveal-node">
            <div className="tabs-bar">
              <button
                className={`tab-btn ${activeTab === 'pod' ? 'active' : ''}`}
                onClick={() => setActiveTab('pod')}
              >
                01. Floating Island Pods
              </button>
              <button
                className={`tab-btn ${activeTab === 'rover' ? 'active' : ''}`}
                onClick={() => setActiveTab('rover')}
              >
                02. Overland Rover Fleets
              </button>
              <button
                className={`tab-btn ${activeTab === 'cloud' ? 'active' : ''}`}
                onClick={() => setActiveTab('cloud')}
              >
                03. Cloud Mountain Aeries
              </button>
              <button
                className={`tab-btn ${activeTab === 'marine' ? 'active' : ''}`}
                onClick={() => setActiveTab('marine')}
              >
                04. Remote Marine Atolls
              </button>
            </div>

            {/* Tab 1: Pod */}
            {activeTab === 'pod' && (
              <div className="tab-pane active">
                <div>
                  <h3 className="tab-pane-title">Floating Island Architecture</h3>
                  <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: 24 }}>
                    Designed to float effortlessly upon glacial lakes and fjord waters with zero shoreline disturbance. Features underwater panoramic observation pods and silent electric azimuth thrusters.
                  </p>

                  <div className="tab-specs-table">
                    <div className="tab-specs-row">
                      <span className="tab-specs-key">Energy System</span>
                      <span className="tab-specs-val">12 kW Solar Array + 48 kWh Solid-State Storage</span>
                    </div>
                    <div className="tab-specs-row">
                      <span className="tab-specs-key">Water Purity</span>
                      <span className="tab-specs-val">Sub-Micron UV Filtration (150L/day capacity)</span>
                    </div>
                    <div className="tab-specs-row">
                      <span className="tab-specs-key">Service Level SLA</span>
                      <span className="tab-specs-val">Dedicated Ranger & Seaplane Tender within 45 min</span>
                    </div>
                    <div className="tab-specs-row">
                      <span className="tab-specs-key">Climate Resilience</span>
                      <span className="tab-specs-val">-25°C Arctic Winter to +40°C Summer Operation</span>
                    </div>
                  </div>

                  <Link href="/#inquiry" className="btn-wild btn-shimmer">
                    Reserve Island Pod →
                  </Link>
                </div>
                <div className="tab-pane-img-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                    alt="Floating Chalet on crystal lake"
                    className="tab-pane-img"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {/* Tab 2: Rover */}
            {activeTab === 'rover' && (
              <div className="tab-pane active">
                <div>
                  <h3 className="tab-pane-title">All-Terrain Rover Outfitting</h3>
                  <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: 24 }}>
                    Military-grade chassis combined with yacht-level bespoke craftsmanship. Engineered for self-sustained 3-week expeditions across gravel plateaus, dunes, and glacial moraines.
                  </p>

                  <div className="tab-specs-table">
                    <div className="tab-specs-row">
                      <span className="tab-specs-key">Autonomous Range</span>
                      <span className="tab-specs-val">850 km without refueling or charging</span>
                    </div>
                    <div className="tab-specs-row">
                      <span className="tab-specs-key">Recovery Gear</span>
                      <span className="tab-specs-val">Dual 12,000 lb Winches + Hydraulic Sand Anchors</span>
                    </div>
                    <div className="tab-specs-row">
                      <span className="tab-specs-key">Connectivity</span>
                      <span className="tab-specs-val">Dual In-Motion Starlink Transceivers</span>
                    </div>
                    <div className="tab-specs-row">
                      <span className="tab-specs-key">Emergency SLA</span>
                      <span className="tab-specs-val">Global SOS Airborne Extraction Coverage</span>
                    </div>
                  </div>

                  <Link href="/#inquiry" className="btn-wild btn-shimmer">
                    Reserve Rover →
                  </Link>
                </div>
                <div className="tab-pane-img-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80"
                    alt="Overland expedition vehicle"
                    className="tab-pane-img"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {/* Tab 3: Cloud */}
            {activeTab === 'cloud' && (
              <div className="tab-pane active">
                <div>
                  <h3 className="tab-pane-title">Suspended Cloud Aeries</h3>
                  <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: 24 }}>
                    Cantilevered over vertical thousand-meter drop-offs, these titanium-framed capsules provide an ethereal sensation of hovering amidst the clouds with absolute structural security.
                  </p>

                  <div className="tab-specs-table">
                    <div className="tab-specs-row">
                      <span className="tab-specs-key">Structural Rating</span>
                      <span className="tab-specs-val">Withstands 240 km/h Alpine Storms</span>
                    </div>
                    <div className="tab-specs-row">
                      <span className="tab-specs-key">Glazing</span>
                      <span className="tab-specs-val">Triple Aerogel-Insulated Heated Panoramic Glass</span>
                    </div>
                    <div className="tab-specs-row">
                      <span className="tab-specs-key">Access Method</span>
                      <span className="tab-specs-val">Private Helipad or High-Tensile Cable Tramway</span>
                    </div>
                  </div>

                  <Link href="/#inquiry" className="btn-wild btn-shimmer">
                    Reserve Cloud Aerie →
                  </Link>
                </div>
                <div className="tab-pane-img-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
                    alt="Cliffside aerie over clouds"
                    className="tab-pane-img"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {/* Tab 4: Marine */}
            {activeTab === 'marine' && (
              <div className="tab-pane active">
                <div>
                  <h3 className="tab-pane-title">Remote Marine Atolls</h3>
                  <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: 24 }}>
                    Located in private turquoise lagoons accessible only by seaplane. Complete privacy with glass ocean-bottom bedrooms and solar-electric tenders for reef exploration.
                  </p>

                  <div className="tab-specs-table">
                    <div className="tab-specs-row">
                      <span className="tab-specs-key">Desalination</span>
                      <span className="tab-specs-val">200L/day Solar-Powered Desalination Plant</span>
                    </div>
                    <div className="tab-specs-row">
                      <span className="tab-specs-key">Marine Propulsion</span>
                      <span className="tab-specs-val">Whisper-Quiet Torqeedo Twin Electric Drives</span>
                    </div>
                    <div className="tab-specs-row">
                      <span className="tab-specs-key">Private Crew</span>
                      <span className="tab-specs-val">Captain, Expedition Guide & Private Chef</span>
                    </div>
                  </div>

                  <Link href="/#inquiry" className="btn-wild btn-shimmer">
                    Reserve Atoll Villa →
                  </Link>
                </div>
                <div className="tab-pane-img-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
                    alt="Tropical lagoon atoll"
                    className="tab-pane-img"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Case Studies Section */}
          <div style={{ margin: '80px 0' }}>
            <div className="section-header reveal-node">
              <div className="section-tag">Proven Deployments</div>
              <h2 className="section-title">Case studies in extreme logistics.</h2>
              <p className="section-desc">Real-world missions demonstrating reliability where ordinary infrastructure fails.</p>
            </div>

            <div className="case-studies-grid">
              <div className="case-card reveal-node">
                <div className="case-img-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80"
                    alt="Aurora in Norway"
                    className="case-img"
                    loading="lazy"
                  />
                </div>
                <div className="case-body">
                  <div>
                    <div className="case-metric">100% Uptime</div>
                    <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Tromsø Arctic Expedition</div>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Maintained interior 22°C comfort during a 7-day blizzard with outside temperatures plummeting to -32°C. Zero emissions recorded.
                    </p>
                  </div>
                  <div style={{ marginTop: 18, fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>
                    14 DAYS OFF-GRID · TROMSØ, NORWAY
                  </div>
                </div>
              </div>

              <div className="case-card reveal-node">
                <div className="case-img-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80"
                    alt="Namib Desert Dunes"
                    className="case-img"
                    loading="lazy"
                  />
                </div>
                <div className="case-body">
                  <div>
                    <div className="case-metric">1,200 km</div>
                    <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Namib Hyper-Arid Traverse</div>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Autonomous fleet crossing of the world's oldest desert. Atmospheric water generation supplied 650 liters of pristine drinking water.
                    </p>
                  </div>
                  <div style={{ marginTop: 18, fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>
                    10 DAYS AUTONOMOUS · NAMIBIA
                  </div>
                </div>
              </div>

              <div className="case-card reveal-node">
                <div className="case-img-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
                    alt="Patagonian Peaks"
                    className="case-img"
                    loading="lazy"
                  />
                </div>
                <div className="case-body">
                  <div>
                    <div className="case-metric">99.9% Uplink</div>
                    <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Patagonia Executive Summit</div>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Hosted 18 global leaders across three cliff aeries with seamless gigabit video conferencing and zero carbon footprint.
                    </p>
                  </div>
                  <div style={{ marginTop: 18, fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>
                    5 DAYS · TORRES DEL PAINE
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Global Network Directory */}
          <div style={{ marginTop: 80 }}>
            <div className="section-header reveal-node">
              <div className="section-tag">Sanctuary Directory</div>
              <h2 className="section-title">Active global sanctuary coordinates.</h2>
              <p className="section-desc">Each site is vetted for extreme privacy, pristine ecological health, and stunning astronomical views.</p>
            </div>

            <div className="directory-table-wrap reveal-node">
              <table className="directory-table">
                <thead>
                  <tr>
                    <th>Sanctuary Hub</th>
                    <th>Coordinates</th>
                    <th>Climate & Elevation</th>
                    <th>Seasonality</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Lofoten Glacial Fjord</strong></td>
                    <td>68.2144° N, 14.2858° E</td>
                    <td>Maritime Sub-Arctic · 0m</td>
                    <td>Year-Round (Aurora Season Oct–Mar)</td>
                    <td><span style={{ color: '#10b981', fontWeight: 600 }}>● Operational</span></td>
                  </tr>
                  <tr>
                    <td><strong>Torres del Paine Aerie</strong></td>
                    <td>51.2532° S, 72.8814° W</td>
                    <td>Alpine Tundra · 1,840m</td>
                    <td>Nov – April (Southern Summer)</td>
                    <td><span style={{ color: '#10b981', fontWeight: 600 }}>● Operational</span></td>
                  </tr>
                  <tr>
                    <td><strong>Atacama Salt Plateau</strong></td>
                    <td>23.8634° S, 69.1328° W</td>
                    <td>Hyper-Arid · 2,400m</td>
                    <td>Year-Round (Optimal Stargazing)</td>
                    <td><span style={{ color: '#10b981', fontWeight: 600 }}>● Operational</span></td>
                  </tr>
                  <tr>
                    <td><strong>Southern Alps Sky Ridge</strong></td>
                    <td>43.5950° S, 170.1418° E</td>
                    <td>Glacial Alpine · 2,100m</td>
                    <td>Dec – April</td>
                    <td><span style={{ color: '#10b981', fontWeight: 600 }}>● Operational</span></td>
                  </tr>
                  <tr>
                    <td><strong>Iceland Central Highland Pod</strong></td>
                    <td>64.9312° N, 18.6092° W</td>
                    <td>Volcanic Sub-Polar · 850m</td>
                    <td>June – Sept</td>
                    <td><span style={{ color: '#10b981', fontWeight: 600 }}>● Operational</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

