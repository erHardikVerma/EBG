const root = document.getElementById("root");

root.innerHTML = `
  <div class="page">
    <header class="topbar">
      <div class="container topbar-inner">
        <div class="brand">
          <img
            src="./Reference Files/Ageon-logo-removebg.png"
            alt="AGEON"
            class="brand-logo"
          />
          <div>
            <div class="brand-name">AGEON</div>
            <div class="brand-tag">LONGEVITY & RECOVERY</div>
          </div>
        </div>
        <nav class="nav-links">
          <a href="#platform">Platform</a>
          <a href="#system">System</a>
          <a href="#franchise">Franchise</a>
          <a href="#investment">Investment</a>
          <a href="#apply">Apply</a>
        </nav>
        <div class="topbar-actions">
          <a class="topbar-link" href="#apply">Investor Enquiry</a>
        </div>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="container hero-grid">
          <div class="hero-content">
            <div class="eyebrow">AGEON Franchise Opportunity</div>
            <h1>
              India’s Smart-Aging & Longevity Platform - Built for Investors Who
              Value Precision, Outcomes, and Premium Positioning.
            </h1>
            <p class="subhead">
              AGEON is a protocol-led, science-backed longevity ecosystem that
              integrates diagnostics, therapies, and outcome tracking into one
              premium member journey. Not a clinic. Not a therapy room. A
              category defining platform designed for measurable healthspan
              gains and scalable growth.
            </p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="#apply">Apply for Franchise</a>
              <a class="btn btn-secondary" href="#investment">
                Request Investment Deck
              </a>
            </div>
            <div class="trust-line">
              <span>Operational centre in Kerala</span>
              <span>Protocol-Led systems</span>
              <span>Membership - First model</span>
            </div>
          </div>
          <div class="hero-panel">
            <div class="hero-visual-card">
              <img
                src="./Reference Files/bg_light.png"
                alt="AGEON platform visual reference"
                class="hero-visual-image"
              />
              <div class="hero-visual-overlay">
                <h3>Protocol-Led. Outcome-Tracked.</h3>
                <p>
                  AGEON integrates diagnostics, therapies, and structured member
                  journeys into one premium franchise system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="market">
        <div class="container split">
          <div>
            <h2>India is living longer — but not healthier.</h2>
            <p>
              Fatigue, burnout, metabolic dysfunction, poor recovery, hormonal
              imbalance, and early ageing are now business-as-usual for
              high-performing professionals. Most respond only after symptoms
              appear. AGEON exists to shift this to preventive, proactive, and
              performance-led longevity.
            </p>
          </div>
          <div class="surface">
            <h3>Why AGEON Exists</h3>
            <ul class="clean-list">
              <li>Structured, measurable longevity outcomes</li>
              <li>Protocol-driven, clinician-led system</li>
              <li>Premium member experience with continuity</li>
              <li>Built for scale across India</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section" id="platform">
        <div class="container">
          <div class="section-heading">
            <h2>AGEON is a protocol-driven longevity platform.</h2>
            <p>
              It is not a wellness clinic. It is not a collection of therapies.
              AGEON integrates diagnostics, structured protocols, therapy
              delivery, and outcome tracking into a single premium ecosystem.
            </p>
          </div>
          <div class="feature-grid">
            <div class="feature-card">
              <h4>Integrated Diagnostics Engine</h4>
              <p>
                Deep health measurement establishes a true biological baseline
                for precision-led care.
              </p>
            </div>
            <div class="feature-card">
              <h4>Protocol-Led Care</h4>
              <p>
                No random treatments. Each pathway is designed, governed, and
                tracked for outcomes.
              </p>
            </div>
            <div class="feature-card">
              <h4>Membership-First Model</h4>
              <p>
                Continuity, accountability, and optimized healthspan — not
                one-time visits.
              </p>
            </div>
            <div class="feature-card">
              <h4>Measurable Outcomes</h4>
              <p>
                Continuous tracking and optimization make longevity a measurable
                system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="system">
        <div class="container">
          <div class="section-heading">
            <h2>The AGEON System: structured, clinical, repeatable.</h2>
            <p>
              A clearly defined journey ensures consistency, outcomes, and a
              premium member experience across every centre.
            </p>
          </div>
          <div class="journey-grid">
            <div class="journey-card">
              <div class="journey-index">01</div>
              <h4>Assessment</h4>
              <p>Structured intake focused on goals, lifestyle, and performance.</p>
            </div>
            <div class="journey-card">
              <div class="journey-index">02</div>
              <h4>Diagnostic Baseline</h4>
              <p>Advanced measurements to map biological age and risk factors.</p>
            </div>
            <div class="journey-card">
              <div class="journey-index">03</div>
              <h4>Protocol Assignment</h4>
              <p>Data-led longevity protocols with clinical logic and targets.</p>
            </div>
            <div class="journey-card">
              <div class="journey-index">04</div>
              <h4>Guided Delivery</h4>
              <p>Expert-led therapy delivery with consistency and oversight.</p>
            </div>
            <div class="journey-card">
              <div class="journey-index">05</div>
              <h4>Tracking</h4>
              <p>Outcome tracking, progress reviews, and member accountability.</p>
            </div>
            <div class="journey-card">
              <div class="journey-index">06</div>
              <h4>Optimization</h4>
              <p>Protocol refinement based on outcomes, not assumptions.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="stack">
        <div class="container split">
          <div>
            <h2>Diagnostics and therapy stack — integrated by protocol.</h2>
            <p>
              AGEON begins with advanced measurement and applies therapies only
              when clinically indicated. This ensures precision, safety, and
              long-term outcome visibility.
            </p>
            <div class="stack-card">
              <h4>Integrated Diagnostics</h4>
              <ul class="clean-list">
                <li>Metabolic & body composition profiling</li>
                <li>Cardiovascular and recovery indicators</li>
                <li>Inflammation, stress load, and resilience markers</li>
                <li>Biological ageing and vitality assessments</li>
                <li>Performance baselines for personalized protocols</li>
              </ul>
            </div>
          </div>
          <div class="stack-card">
            <h4>Therapy Stack (Protocol-Led)</h4>
            <ul class="clean-list">
              <li>Protocol-led therapy sequencing</li>
              <li>Recovery, oxygen efficiency, and cellular repair focus</li>
              <li>Clinician-supervised delivery and safety standards</li>
              <li>Integrated scheduling and member tracking</li>
              <li>No standalone therapy sales—only need-based selection</li>
            </ul>
            <div class="note">
              Therapies are never sold in isolation. Each delivery is tied to a
              protocol and a measurable objective.
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="franchise">
        <div class="container">
          <div class="section-heading">
            <h2>Franchise opportunity built for premium category leaders.</h2>
            <p>
              AGEON combines a differentiated category position with a
              membership-led business model and repeatable operational systems.
              Designed for long-term scalability.
            </p>
          </div>
          <div class="feature-grid">
            <div class="feature-card"><p>Premium, category-defining positioning in longevity</p></div>
            <div class="feature-card"><p>Membership-first, continuity-led revenue logic</p></div>
            <div class="feature-card"><p>Standardized, repeatable clinical and operational systems</p></div>
            <div class="feature-card"><p>Centralized protocol control and quality governance</p></div>
            <div class="feature-card"><p>Scalable centre economics built for multi-city expansion</p></div>
          </div>
        </div>
      </section>

      <section class="section" id="model">
        <div class="container">
          <div class="section-heading">
            <h2>AGEON franchise model — simple, controlled, premium.</h2>
            <p>
              AGEON operates every centre to ensure clinical discipline, member
              experience, and brand consistency.
            </p>
          </div>
          <div class="franchise-grid">
            <div class="franchise-card">
              <h4>Investor Funds the Centre</h4>
              <p>
                Capital is deployed into a premium AGEON location with the
                defined footprint and build standards.
              </p>
            </div>
            <div class="franchise-card">
              <h4>Company Operates It</h4>
              <p>
                AGEON manages operations, staffing, protocols, and performance
                delivery.
              </p>
            </div>
            <div class="franchise-card">
              <h4>Brand Controls Standards</h4>
              <p>
                Centralized systems govern quality, training, and member
                experience.
              </p>
            </div>
          </div>
          <div class="franchise-note">
            Designed for investors who want participation without day-to-day
            operations.
          </div>
        </div>
      </section>

      <section class="cta-band">
        <div class="container cta-band-inner">
          <div>
            <h3>Secure a premium longevity franchise position.</h3>
            <p>Request the investment deck and start the qualification.</p>
          </div>
          <div class="cta-actions">
            <a class="btn btn-primary" href="#apply">Apply for Franchise</a>
          </div>
        </div>
      </section>

      <section class="section" id="investment">
        <div class="container">
          <div class="section-heading">
            <h2>Investment options</h2>
            <p>
              Two clear investment pathways for premium, protocol-led longevity
              centres. Detailed financials and rollout assumptions available in
              the investment deck.
            </p>
          </div>
          <div class="investment-grid full">
            <div class="investment-card large">
              <div class="investment-amount">₹1.75 Cr</div>
              <div class="investment-label">Premium centre</div>
              <p>
                Optimized footprint with full longevity protocols, diagnostics,
                and core therapy stack.
              </p>
              <div class="note">
                Illustrative business case: potential ₹4.5–₹5 Cr over 3–4 years,
                subject to execution and market conditions.
              </div>
            </div>
            <div class="investment-card large">
              <div class="investment-amount">₹2.25 Cr</div>
              <div class="investment-label">Flagship format</div>
              <p>
                Expanded experience with larger capacity, enhanced diagnostics,
                and broader protocol delivery.
              </p>
              <div class="note">
                Designed for premium catchments and long-term scalability.
              </div>
            </div>
          </div>
          <div class="placeholder-link">
            <span>Investment deck link:</span>
            <span>[Placeholder — add secure deck URL]</span>
          </div>
        </div>
      </section>

      <section class="section" id="presence">
        <div class="container split">
          <div>
            <h2>Current presence</h2>
            <p>
              AGEON currently operates one centre in Kerala, establishing the
              foundation for a premium, protocol-led longevity network.
            </p>
            <div class="presence-card">
              <div>
                <h4>Kerala flagship centre</h4>
                <p>Operational with full diagnostics and protocol delivery.</p>
              </div>
              <div class="presence-badge">Live</div>
            </div>
          </div>
          <div class="surface">
            <h3>Future city expansion</h3>
            <p>
              [Placeholder for upcoming cities and launch timeline based on
              franchise approvals.]
            </p>
            <div class="city-tags">
              <span>Metro 1</span>
              <span>Metro 2</span>
              <span>Tier 2 Hub</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="vision">
        <div class="container">
          <div class="section-heading">
            <h2>Building India’s longevity infrastructure</h2>
            <p>
              AGEON is designed as a national platform — not a local clinic
              chain. The expansion strategy is structured, premium, and
              outcomes-led.
            </p>
          </div>
          <div class="feature-grid">
            <div class="feature-card">
              <h4>Flagship Centres</h4>
              <p>
                High-visibility destinations showcasing AGEON’s full longevity
                ecosystem.
              </p>
            </div>
            <div class="feature-card">
              <h4>Metro Growth</h4>
              <p>
                Strategic expansion into India’s top cities with premium member
                adoption.
              </p>
            </div>
            <div class="feature-card">
              <h4>Tier 2 Expansion</h4>
              <p>
                Scaled formats bringing smart-ageing to emerging affluent
                markets.
              </p>
            </div>
            <div class="feature-card">
              <h4>Corporate Formats</h4>
              <p>
                Performance-led longevity programs for enterprise and
                leadership cohorts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="trust">
        <div class="container">
          <div class="section-heading">
            <h2>Trust, governance, and operating discipline</h2>
            <p>
              AGEON prioritizes clinical governance, operational rigor, and
              premium experience design. Proof points can be added here as they
              are finalized.
            </p>
          </div>
          <div class="feature-grid">
            <div class="feature-card">
              <h4>Leadership & Expertise</h4>
              <p>Founder and medical leadership profiles (placeholder for credentials).</p>
            </div>
            <div class="feature-card">
              <h4>Clinical Discipline</h4>
              <p>Protocol governance, documentation, and clinical audits (placeholder).</p>
            </div>
            <div class="feature-card">
              <h4>Operating Systems</h4>
              <p>Training, SOPs, and member journey controls (placeholder).</p>
            </div>
            <div class="feature-card">
              <h4>Quality Control</h4>
              <p>Outcome tracking, feedback loops, and safety standards (placeholder).</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="apply">
        <div class="container form-grid">
          <div class="form-copy">
            <h2>Apply for the AGEON franchise</h2>
            <p>
              Share your details to receive the investment deck and schedule
              a confidential discussion with the AGEON team.
            </p>
            <div class="form-note">
              All submissions are reviewed. Limited franchise slots available
              per city.
            </div>
          </div>
          <form class="form-card">
            <div class="form-row">
              <label for="name">Name</label>
              <input id="name" name="name" placeholder="Full name" />
            </div>
            <div class="form-row">
              <label for="phone">Phone</label>
              <input id="phone" name="phone" placeholder="+91" />
            </div>
            <div class="form-row">
              <label for="email">Email</label>
              <input id="email" name="email" placeholder="name@email.com" />
            </div>
            <div class="form-row">
              <label for="city">City</label>
              <input id="city" name="city" placeholder="Preferred city" />
            </div>
            <div class="form-row">
              <label for="investment">Investment range</label>
              <select id="investment" name="investment">
                <option>₹1.75 Cr</option>
                <option>₹2.25 Cr</option>
                <option>₹1.75–₹2.25 Cr</option>
              </select>
            </div>
            <div class="form-row">
              <label for="model">Preferred model</label>
              <select id="model" name="model">
                <option>AGEON Franchise (Company Operated)</option>
              </select>
            </div>
            <div class="form-row">
              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Share investment profile, timelines, and questions."
                rows="4"
              ></textarea>
            </div>
            <button class="btn btn-primary" type="submit">
              Submit Franchise Enquiry
            </button>
            <div class="form-disclaimer">
              Placeholder form. Connect to CRM or lead capture system.
            </div>
          </form>
        </div>
      </section>

      <section class="final-cta">
        <div class="container final-cta-inner">
          <div>
            <h2>Secure a premium AGEON franchise position.</h2>
            <p>
              A high-trust, protocol-led longevity platform built for serious
              investors. Begin the qualification process today.
            </p>
          </div>
          <div class="cta-actions">
            <a class="btn btn-primary" href="#apply">Apply for Franchise</a>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer-inner">
        <div>
          <div class="brand-name">AGEON</div>
          <div class="muted">India’s Smart-Ageing & Longevity Platform</div>
        </div>
        <div class="footer-links">
          <div>
            <span>Website:</span> [Placeholder URL]
          </div>
          <div>
            <span>LinkedIn:</span> [Placeholder URL]
          </div>
          <div>
            <span>Instagram:</span> [Placeholder URL]
          </div>
          <div>
            <span>Deck link:</span> [Placeholder secure URL]
          </div>
        </div>
      </div>
    </footer>

  </div>
`;
