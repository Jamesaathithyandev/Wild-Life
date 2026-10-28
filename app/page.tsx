'use client';

import { useState } from 'react';
import WildHero from '@/components/WildHero';

export default function HomePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main>
      <WildHero />

      {/* Overview Content Layer Below Hero */}
      <div className="content-body">
        {/* Scale Metrics Section */}
        <section className="site-section">
          <div className="section-header reveal-node">
            <div className="section-tag">Global Scale Metrics</div>
            <h2 className="section-title">Engineered for extreme wilderness immersion.</h2>
            <p className="section-desc">
              From suspended cloud aeries in the Southern Alps to autonomous solar catamarans in Arctic fjords, Wild provides unmatched access with zero ecological footprint.
            </p>
          </div>

          <div className="metrics-grid">
            <div className="metric-card reveal-node">
              <div className="metric-value counter-num" data-target="14800">0</div>
              <div className="metric-label">Wild Expeditions Hosted</div>
              <div className="metric-sub">Zero safety incidents across 38 global territories since 2018.</div>
            </div>

            <div className="metric-card reveal-node">
              <div className="metric-value counter-num" data-target="99.8" data-decimal="1">0%</div>
              <div className="metric-label">Uncharted Solitude Index</div>
              <div className="metric-sub">Guaranteed minimum 15km exclusion radius per sanctuary.</div>
            </div>

            <div className="metric-card reveal-node">
              <div className="metric-value counter-num" data-target="64">0</div>
              <div className="metric-label">Secluded Sanctuaries</div>
              <div className="metric-sub">Autonomous pod retreats, cliffside aeries & deep desert villas.</div>
            </div>

            <div className="metric-card reveal-node">
              <div className="metric-value counter-num" data-target="100">0%</div>
              <div className="metric-label">Net Zero Carbon Rating</div>
              <div className="metric-sub">Certified solar micro-grids & atmospheric water generation.</div>
            </div>
          </div>
        </section>

        {/* Featured Sanctuaries & Modalities */}
        <section className="site-section">
          <div className="section-header reveal-node">
            <div className="section-tag">Expedition Modalities</div>
            <h2 className="section-title">Four distinct ways to experience the wild.</h2>
            <p className="section-desc">
              Each rental category integrates aerospace-grade off-grid engineering with bespoke five-star hospitality.
            </p>
          </div>

          <div className="modalities-grid">
            {/* Modality 1 */}
            <div className="modality-card reveal-node">
              <div className="modality-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                  alt="Floating Chalet in alpine lake"
                  className="modality-img"
                  loading="lazy"
                />
                <span className="modality-badge">Alpine Sanctuary</span>
              </div>
              <div className="modality-body">
                <div>
                  <h3 className="modality-title">Floating Island Pods & Chalets</h3>
                  <p className="modality-desc">
                    Autonomous watercraft-architectures moored in secluded alpine lakes. Featuring floor-to-ceiling panoramic glass, Finnish cedar saunas, and private funicular docks.
                  </p>
                </div>
                <div className="modality-specs">
                  <span className="modality-spec-item">⚡ 100% Solar Hydro Powered</span>
                  <span className="modality-spec-item">📡 Starlink Ultra-Mesh</span>
                  <span className="modality-spec-item">🏔️ 2,400m Altitude</span>
                </div>
              </div>
            </div>

            {/* Modality 2 */}
            <div className="modality-card reveal-node">
              <div className="modality-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80"
                  alt="Wilderness Overland Rover"
                  className="modality-img"
                  loading="lazy"
                />
                <span className="modality-badge">Overland Fleet</span>
              </div>
              <div className="modality-body">
                <div>
                  <h3 className="modality-title">Heavy-Duty Expedition Rovers</h3>
                  <p className="modality-desc">
                    Custom all-terrain tactical campers equipped with hydraulic pop-up staterooms, induction galleys, satellite distress beacons, and 850 km unrefueled range.
                  </p>
                </div>
                <div className="modality-specs">
                  <span className="modality-spec-item">🧭 Twin-Differential AWD</span>
                  <span className="modality-spec-item">🛰️ Real-Time Fleet Telemetry</span>
                  <span className="modality-spec-item">💧 Reverse Osmosis Filter</span>
                </div>
              </div>
            </div>

            {/* Modality 3 */}
            <div className="modality-card reveal-node">
              <div className="modality-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80"
                  alt="Deep Wilderness Forest Eco-Lodge"
                  className="modality-img"
                  loading="lazy"
                />
                <span className="modality-badge">Canopy Sanctuary</span>
              </div>
              <div className="modality-body">
                <div>
                  <h3 className="modality-title">Deep Forest Eco-Lodges</h3>
                  <p className="modality-desc">
                    Suspended treehouse sanctuaries integrated into ancient temperate rain forests. Cantilevered outdoor plunge pools, aerogel heating, and nocturnal wildlife observatory platforms.
                  </p>
                </div>
                <div className="modality-specs">
                  <span className="modality-spec-item">🌿 Zero Acoustic Footprint</span>
                  <span className="modality-spec-item">🔥 Geothermal Floor Heating</span>
                  <span className="modality-spec-item">🦉 On-Call Naturalist</span>
                </div>
              </div>
            </div>

            {/* Modality 4 */}
            <div className="modality-card reveal-node">
              <div className="modality-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
                  alt="Cliffside Cloud Mountain Retreat"
                  className="modality-img"
                  loading="lazy"
                />
                <span className="modality-badge">Cloud Aerie</span>
              </div>
              <div className="modality-body">
                <div>
                  <h3 className="modality-title">Cliffside Cloud Mountain Aeries</h3>
                  <p className="modality-desc">
                    Anchored to vertical granite spires overlooking rolling cloud seas. High-altitude stargazing domes with automated weather monitoring and private helicopter drop zones.
                  </p>
                </div>
                <div className="modality-specs">
                  <span className="modality-spec-item">🚁 Helicopter Port Access</span>
                  <span className="modality-spec-item">🔭 Observatory Grade Optics</span>
                  <span className="modality-spec-item">🛡️ Titanium Anchor Lines</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="site-section">
          <div className="section-header reveal-node">
            <div className="section-tag">Explorer Testimonials</div>
            <h2 className="section-title">Tested by pioneers, mountaineers & quiet dreamers.</h2>
            <p className="section-desc">Here is what happens when you step away from the noise and embrace the untamed world.</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card reveal-node">
              <div>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">
                  "Waking up above the cloud inversions in the Dolomites aerie was life-altering. You are completely alone with the wind, yet inside the pod you have underfloor heating, barista espresso, and total peace."
                </p>
              </div>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Astrid Lindqvist"
                  className="author-avatar"
                  loading="lazy"
                />
                <div>
                  <div className="author-name">Astrid Lindqvist</div>
                  <div className="author-tag">Dolomites Cloud Aerie · Oct 2025</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card reveal-node">
              <div>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">
                  "We drove the Overland Rover through 900 km of Patagonian dirt roads. The induction kitchen and satellite weather uplink made us feel like astronauts traversing an alien planet in total luxury."
                </p>
              </div>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Marcus Vane"
                  className="author-avatar"
                  loading="lazy"
                />
                <div>
                  <div className="author-name">Marcus Vane</div>
                  <div className="author-tag">Patagonia Rover Expedition · Dec 2025</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card reveal-node">
              <div>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">
                  "Wild has created something truly rare: authentic wilderness without roughness. The zero-noise electric propulsion of the floating island let wildlife approach within feet of our deck."
                </p>
              </div>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                  alt="Sophia Chen"
                  className="author-avatar"
                  loading="lazy"
                />
                <div>
                  <div className="author-name">Dr. Sophia Chen</div>
                  <div className="author-tag">Lofoten Floating Sanctuary · Jan 2026</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Inquiry Form Section */}
        <section id="inquiry" className="site-section">
          <div className="inquiry-box reveal-node">
            <div>
              <div className="section-tag">Private Reservation</div>
              <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16 }}>
                Begin your wild journey.
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: 24 }}>
                Our wilderness concierge coordinates bespoke transfers, aerial drop-ins, and provisions tailored to your expedition requirements.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 13, color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#10b981' }}>✓</span> 24/7 Satellite Telemetry Dispatch Support
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#10b981' }}>✓</span> Fully Autonomous Solar Clean Energy Systems
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#10b981' }}>✓</span> Flexible Rescheduling Guarantee
                </div>
              </div>
            </div>

            {formSubmitted ? (
              <div style={{
                padding: 40,
                textAlign: 'center',
                background: 'rgba(16, 185, 129, 0.08)',
                borderRadius: 20,
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>🏔️</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: '#111', marginBottom: 8 }}>Expedition Request Logged</h3>
                <p style={{ fontSize: 14, color: '#444', lineHeight: 1.5 }}>
                  Our flight dispatch and wilderness logistics team will contact you within 4 hours to confirm coordinates and aircraft rendezvous.
                </p>
              </div>
            ) : (
              <form id="expedition-form" onSubmit={handleFormSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-input" placeholder="e.g. Julian Thorne" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-input" placeholder="julian@expedition.org" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Expedition Destination</label>
                    <select className="form-select">
                      <option>Patagonian Icefields (Argentina)</option>
                      <option>Lofoten Arctic Archipelagos (Norway)</option>
                      <option>Southern Alps Cloud Aeries (New Zealand)</option>
                      <option>Atacama Stargazing Pods (Chile)</option>
                      <option>Icelandic Central Highlands</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Expedition Modality</label>
                    <select className="form-select">
                      <option>Floating Island Chalet</option>
                      <option>Overland Expedition Rover</option>
                      <option>Cliffside Cloud Aerie</option>
                      <option>Deep Canopy Eco-Lodge</option>
                    </select>
                  </div>
                  <div className="form-group full-width">
                    <label className="form-label">Special Inquiries / Transfer Needs</label>
                    <textarea
                      rows={3}
                      className="form-textarea"
                      placeholder="Include any helicopter transfer, dietary provisions, or extreme sports gear requirements..."
                    />
                  </div>
                  <div className="form-group full-width">
                    <button type="submit" className="btn-wild btn-shimmer" style={{ width: '100%', height: 50, fontSize: 15 }}>
                      Submit Expedition Request →
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
