import { useState } from "react";
import storeIcon from "../../store-icon.png";
import { ArrowIcon, CheckIcon, SiteFooter, SiteHeader } from "../components/SiteChrome";

import trainingHome from "../../artifacts/showcase/01-training-home.png";
import trainingHistory from "../../artifacts/showcase/05-training-exercise-history.png";
import trainingToday from "../../artifacts/showcase/09-training-today-editor.png";

import cardioHome from "../../artifacts/showcase/10-cardio-home.png";
import cardioStats from "../../artifacts/showcase/20-cardio-statistics.png";

import bodyweightHome from "../../artifacts/showcase/21-bodyweight-home.png";
import bodyweightPhases from "../../artifacts/showcase/22-bodyweight-phases.png";

export function LandingPage() {
  const [activeTab, setActiveTab] = useState<"training" | "cardio" | "bodyweight">("training");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const galleryItems = [
    { src: trainingHome,      alt: "Training Home",           caption: "Training Home" },
    { src: trainingToday,     alt: "Active Workout Editor",   caption: "Active Workout" },
    { src: trainingHistory,   alt: "Exercise History",        caption: "Exercise 1RM History" },
    { src: cardioHome,        alt: "Cardio Home",             caption: "Cardio Dashboard" },
    { src: cardioStats,       alt: "Cardio Statistics",       caption: "Cardio Stats" },
    { src: bodyweightHome,    alt: "Bodyweight Home",         caption: "Bodyweight Trends" },
    { src: bodyweightPhases,  alt: "Bodyweight Phases",       caption: "Phase Management" },
  ];

  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <SiteHeader page="home" />

      <main id="content">
        {/* HERO SECTION */}
        <section className="tracked-hero" id="home">
          <div className="hero-background-effects" aria-hidden="true">
            <div className="ambient-glow" />
            <div className="grid-overlay" />
          </div>

          <div className="shell hero-grid">
            <div className="hero-text-col">
              <h1 className="hero-headline">
                The workout & health journal built for{" "}
                <span className="highlight-text">serious lifters</span>
              </h1>

              <p className="hero-subtitle">
                Strength training, cardio, and bodyweight tracking in a lightning-fast, offline app.
                No accounts, no ads, no subscriptions, and zero tracking.
              </p>

              <div className="hero-actions">
                <a className="google-play-btn" href="#download">
                  <svg className="google-play-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#4285F4" d="M3.6 2.3c-.2.2-.4.6-.4 1.1v17.2c0 .5.2.9.4 1.1l.1.1 9.6-9.6v-.2L3.7 2.2l-.1.1z"/>
                    <path fill="#FBBC05" d="M16.9 15.6l-3.6-3.6v-.2l3.6-3.6.1.1 4.3 2.4c1.2.7 1.2 1.8 0 2.5l-4.4 2.4z"/>
                    <path fill="#EA4335" d="M13.3 11.9L3.6 21.6c.4.4 1.1.5 1.8.1l11.6-6.6-3.7-3.2z"/>
                    <path fill="#34A853" d="M13.3 11.9l3.7-3.2L5.4 2.1c-.7-.4-1.4-.3-1.8.1l9.7 9.7z"/>
                  </svg>
                  <div className="btn-text">
                    <span className="btn-sub">Coming soon on</span>
                    <span className="btn-main">Google Play</span>
                  </div>
                </a>

              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-header">
                    <svg className="stat-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <span className="stat-val">100%</span>
                  </div>
                  <span className="stat-lbl">Offline First</span>
                </div>

                <div className="stat-item">
                  <div className="stat-header">
                    <svg className="stat-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span className="stat-val">0</span>
                  </div>
                  <span className="stat-lbl">No Account Needed</span>
                </div>

                <div className="stat-item">
                  <div className="stat-header">
                    <svg className="stat-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span className="stat-val">0</span>
                  </div>
                  <span className="stat-lbl">Ads & Analytics</span>
                </div>
              </div>
            </div>

            <div className="hero-visual-col">
              <div className="hero-phone-stage">
                <div className="hero-glow-halo" aria-hidden="true" />
                
                {/* Floating Metric Badge 1 */}
                <div className="hero-floating-card floating-top-card" aria-hidden="true">
                  <div className="floating-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="floating-card-info">
                    <span className="card-label">Estimated 1RM</span>
                    <div className="card-value-row">
                      <strong>46.7 kg</strong>
                      <span className="trend-up">+8.8 kg</span>
                    </div>
                  </div>
                </div>

                {/* Smartphone Mockup */}
                <figure className="phone-frame hero-phone">
                  <img
                    src={trainingHome}
                    alt="Liftbook training home screen showing workouts and training volume"
                    width="513"
                    height="928"
                  />
                </figure>

                {/* Floating Metric Badge 2 */}
                <div className="hero-floating-card floating-bot-card" aria-hidden="true">
                  <div className="floating-card-icon lock-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                  </div>
                  <div className="floating-card-info">
                    <span className="card-label">Local Storage</span>
                    <strong>100% Private SQLite</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK PILLS BAR */}
        <section className="pills-strip" aria-label="Key features highlight">
          <div className="shell pills-container">
            <span className="pill-tag">Strength & 1RM Progression</span>
            <span className="pill-tag">Recoverable Cardio Timer</span>
            <span className="pill-tag">Bodyweight Phase Targets</span>
            <span className="pill-tag">100% Offline Functionality</span>
            <span className="pill-tag">Zero Telemetry or Accounts</span>
            <span className="pill-tag">Independent CSV Exports</span>
            <span className="pill-tag">Android Home Widget</span>
          </div>
        </section>

        {/* FEATURES BENTO GRID */}
        <section className="tracked-features" id="features">
          <div className="shell">
            <div className="section-header">
              <span className="section-label">Core Capabilities</span>
              <h2>
                Everything you need to <span className="highlight-text">track your gains</span>
              </h2>
              <p>
                Built by lifters, for lifters. Every feature is designed to maximize progressive
                overload without bloatware, accounts, or friction.
              </p>
            </div>

            <div className="bento-grid">
              {/* Card 1: Strength */}
              <article className="bento-card">
                <div className="bento-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 5v14M18 5v14M2 9h4M18 9h4M2 15h4M18 15h4M6 12h12" />
                  </svg>
                </div>
                <h3>Strength & 1RM Tracking</h3>
                <p>
                  Build custom exercises, categories, and reusable workout templates. Log weight,
                  reps, RIR, comments, and local video attachments with automatic 1RM progression charts.
                </p>
                <ul className="bento-checklist">
                  <li><CheckIcon /> Reusable templates & editable workouts</li>
                  <li><CheckIcon /> Repetition in Reserve (RIR) logging</li>
                  <li><CheckIcon /> Automatic Estimated 1RM calculation</li>
                </ul>
              </article>

              {/* Card 2: Cardio */}
              <article className="bento-card">
                <div className="bento-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3>Cardio & Active Session Timer</h3>
                <p>
                  Record endurance with a reliable foreground timer that survives app minimization.
                  Track metrics tailored for running, cycling, swimming, rowing, and stairs.
                </p>
                <ul className="bento-checklist">
                  <li><CheckIcon /> Recoverable foreground stopwatch & timer</li>
                  <li><CheckIcon /> 4-week, 12-week & annual statistics</li>
                  <li><CheckIcon /> Privacy-filtered PNG activity summaries</li>
                </ul>
              </article>

              {/* Card 3: Bodyweight */}
              <article className="bento-card">
                <div className="bento-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v18M3 9l9-6 9 6M6 14l-3 6h6l-3-6M18 14l-3 6h6l-3-6" />
                  </svg>
                </div>
                <h3>Bodyweight & Phase Planning</h3>
                <p>
                  Log daily weight in kg or lbs. Group measurements into 7-day rolling averages and
                  set cut, bulk, or maintenance phases with weekly targets.
                </p>
                <ul className="bento-checklist">
                  <li><CheckIcon /> Weekly average smoothing & trend analysis</li>
                  <li><CheckIcon /> Lose, gain, or maintain phase targets</li>
                  <li><CheckIcon /> Android home-screen widget support</li>
                </ul>
              </article>

              {/* Card 4: Offline */}
              <article className="bento-card">
                <div className="bento-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="1" y1="1" x2="23" y2="23" />
                    <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
                    <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
                    <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
                    <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                    <line x1="12" y1="20" x2="12.01" y2="20" />
                  </svg>
                </div>
                <h3>True Offline-First Architecture</h3>
                <p>
                  Your complete journal lives right on your device in SQLite. Instant startup,
                  zero latency, and reliable logging even in deep gym basements without cellular service.
                </p>
                <ul className="bento-checklist">
                  <li><CheckIcon /> Zero network dependence or loading spinners</li>
                  <li><CheckIcon /> Instant session opening & saving</li>
                  <li><CheckIcon /> Battery efficient & lightweight</li>
                </ul>
              </article>

              {/* Card 5: Privacy */}
              <article className="bento-card">
                <div className="bento-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3>Zero Telemetry & Private by Design</h3>
                <p>
                  No accounts, passwords, or emails. No telemetry SDKs, ad trackers, or analytics.
                  Android cloud backup is disabled by design to ensure data stays yours alone.
                </p>
                <ul className="bento-checklist">
                  <li><CheckIcon /> No user account or authentication required</li>
                  <li><CheckIcon /> Zero ads, tracking SDKs, or analytics</li>
                  <li><CheckIcon /> No third-party data transmission</li>
                </ul>
              </article>

              {/* Card 6: CSV Data Ownership */}
              <article className="bento-card">
                <div className="bento-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                <h3>Independent CSV Backup & Restore</h3>
                <p>
                  Total data sovereignty. Export Strength, Cardio, or Bodyweight to separate, clean
                  CSV files. Restore one area without overriding your other logs.
                </p>
                <ul className="bento-checklist">
                  <li><CheckIcon /> Clean standard CSV exports for Excel & Python</li>
                  <li><CheckIcon /> Granular independent area restoration</li>
                  <li><CheckIcon /> No proprietary vendor lock-in</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* INTERACTIVE APP TOUR SECTION */}
        <section className="tour-section" id="showcase">
          <div className="shell">
            <div className="section-header">
              <span className="section-label">Interactive Tour</span>
              <h2>
                Crafted for every aspect of <span className="highlight-text">your routine</span>
              </h2>
              <p>Switch between modules to see how Liftbook streamlines your day-to-day fitness data.</p>
            </div>

            {/* Tab Navigation */}
            <div className="tour-tabs-nav">
              <button
                type="button"
                className={`tour-tab-btn ${activeTab === "training" ? "active" : ""}`}
                onClick={() => setActiveTab("training")}
              >
                Strength Training
              </button>
              <button
                type="button"
                className={`tour-tab-btn ${activeTab === "cardio" ? "active" : ""}`}
                onClick={() => setActiveTab("cardio")}
              >
                Cardio Activities
              </button>
              <button
                type="button"
                className={`tour-tab-btn ${activeTab === "bodyweight" ? "active" : ""}`}
                onClick={() => setActiveTab("bodyweight")}
              >
                Bodyweight & Phases
              </button>
            </div>

            {/* Tab Content */}
            <div className="tour-tab-content">
              {activeTab === "training" && (
                <div className="tour-panel">
                  <div className="tour-info">
                    <span className="module-badge">Module 01</span>
                    <h3>Strength Training & Progressive Overload</h3>
                    <p>
                      Log weight, repetitions, and Reps In Reserve (RIR) with rapid step buttons.
                      Track performance over time with automatic 1RM estimates and clean exercise history.
                    </p>
                    <div className="tour-feature-points">
                      <div className="point-item">
                        <strong>Custom Templates:</strong> Build routine splits (Push/Pull/Legs, Upper/Lower) with quick duplicate and reorder actions.
                      </div>
                      <div className="point-item">
                        <strong>Live Session Editor:</strong> Keep today&apos;s workout open and editable throughout your entire training session.
                      </div>
                      <div className="point-item">
                        <strong>Video & Form Notes:</strong> Link local form check videos and per-set cues directly in your journal.
                      </div>
                    </div>
                  </div>
                  <div className="tour-phone-wrap">
                    <figure className="phone-frame tour-phone">
                      <img
                        src={trainingHistory}
                        alt="Liftbook strength training exercise history screen"
                        width="513"
                        height="928"
                        loading="lazy"
                      />
                    </figure>
                  </div>
                </div>
              )}

              {activeTab === "cardio" && (
                <div className="tour-panel">
                  <div className="tour-info">
                    <span className="module-badge">Module 02</span>
                    <h3>Cardio Logging & Foreground Timer</h3>
                    <p>
                      Track running, rowing, cycling, swimming, and HIIT with a battery-efficient
                      foreground stopwatch. View comprehensive multi-week statistics and target weekly volume.
                    </p>
                    <div className="tour-feature-points">
                      <div className="point-item">
                        <strong>Crash-Proof Timer:</strong> Never lose an active workout when switching apps or locking your phone.
                      </div>
                      <div className="point-item">
                        <strong>Period Statistics:</strong> Review total duration, weekly average minutes, and session counts across 4 and 12 weeks.
                      </div>
                      <div className="point-item">
                        <strong>Privacy Sharing:</strong> Export beautiful PNG cards of your cardio workouts without revealing sensitive route maps.
                      </div>
                    </div>
                  </div>
                  <div className="tour-phone-wrap">
                    <figure className="phone-frame tour-phone">
                      <img
                        src={cardioStats}
                        alt="Liftbook cardio statistics screen"
                        width="513"
                        height="928"
                        loading="lazy"
                      />
                    </figure>
                  </div>
                </div>
              )}

              {activeTab === "bodyweight" && (
                <div className="tour-panel">
                  <div className="tour-info">
                    <span className="module-badge">Module 03</span>
                    <h3>Bodyweight Trends & Goal Phases</h3>
                    <p>
                      Stop obsessing over day-to-day water weight fluctuations. Liftbook calculates
                      smooth 7-day rolling averages and projects your progress against your goal phase.
                    </p>
                    <div className="tour-feature-points">
                      <div className="point-item">
                        <strong>Phase Targets:</strong> Set structured loss, gain, or maintenance periods with targeted weekly rates.
                      </div>
                      <div className="point-item">
                        <strong>Home-Screen Widget:</strong> Check today&apos;s logged weight and current week average directly from your home screen.
                      </div>
                      <div className="point-item">
                        <strong>Private Progress Photos:</strong> Attach optional progress photos stored exclusively in your local device storage.
                      </div>
                    </div>
                  </div>
                  <div className="tour-phone-wrap">
                    <figure className="phone-frame tour-phone">
                      <img
                        src={bodyweightHome}
                        alt="Liftbook bodyweight home screen"
                        width="513"
                        height="928"
                        loading="lazy"
                      />
                    </figure>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SCREENSHOT GALLERY CAROUSEL */}
        <section className="app-gallery-section" id="gallery">
          <div className="shell">
            <div className="section-header">
              <span className="section-label">Screen Showcase</span>
              <h2>
                Pure, distraction-free <span className="highlight-text">interface</span>
              </h2>
              <p>Designed for serious lifters, designed to keep your focus where it belongs</p>
            </div>
          </div>

          <div className="gallery-marquee">
            <div className="gallery-track">
              {[...galleryItems, ...galleryItems].map((item, i) => (
                <figure className="gallery-item" key={i}>
                  <div className="phone-frame gallery-phone">
                    <img src={item.src} alt={item.alt} width="513" height="928" loading="lazy" />
                  </div>
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* PRIVACY GUARANTEE CALLOUT */}
        <section className="privacy-callout-section" id="privacy">
          <div className="shell">
            <div className="privacy-card">
              <div className="privacy-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>Zero-Knowledge Architecture</span>
              </div>

              <h2>Your training data never leaves your device.</h2>
              
              <p>
                Unlike mainstream fitness apps that require mandatory accounts, sync your private health logs
                to remote cloud servers, and monetize your behavior with telemetry, Liftbook operates 
                <strong> 100% locally on your phone</strong>.
              </p>

              <div className="privacy-points-grid">
                <div className="privacy-point">
                  <strong>No Account</strong>
                  <span>Open the app and log immediately. Zero registration.</span>
                </div>
                <div className="privacy-point">
                  <strong>No Ads or Trackers</strong>
                  <span>No Facebook SDK, Google Analytics, or third-party ads.</span>
                </div>
                <div className="privacy-point">
                  <strong>No Cloud Backup</strong>
                  <span>Android cloud backup is disabled to prevent accidental leaks.</span>
                </div>
                <div className="privacy-point">
                  <strong>Full CSV Ownership</strong>
                  <span>Export and inspect your raw database records anytime.</span>
                </div>
              </div>

              <a className="privacy-text-link" href="./privacy-policy/">
                Read our full Privacy Policy
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section className="faq-section" id="faq">
          <div className="shell">
            <div className="section-header">
              <span className="section-label">Questions & Answers</span>
              <h2>Frequently asked questions</h2>
              <p>Everything you need to know about Liftbook&apos;s privacy, features, and design.</p>
            </div>

            <div className="faq-list">
              <div className={`faq-item ${openFaq === 0 ? "open" : ""}`}>
                <button type="button" className="faq-question" onClick={() => toggleFaq(0)}>
                  <span>Is Liftbook really 100% free with no ads?</span>
                  <svg className="faq-chevron" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {openFaq === 0 && (
                  <div className="faq-answer">
                    <p>
                      Yes. Liftbook was built out of frustration with modern workout apps stuffed
                      with intrusive paywalls, subscription fees, and advertisements. Liftbook is
                      completely free to log strength training, cardio, and bodyweight.
                    </p>
                  </div>
                )}
              </div>

              <div className={`faq-item ${openFaq === 1 ? "open" : ""}`}>
                <button type="button" className="faq-question" onClick={() => toggleFaq(1)}>
                  <span>Does Liftbook work in gym basements without internet?</span>
                  <svg className="faq-chevron" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {openFaq === 1 && (
                  <div className="faq-answer">
                    <p>
                      Yes, completely. Liftbook does not need Wi-Fi or cellular service. All your
                      exercises, workout history, bodyweight entries, and cardio sessions are stored
                      in a high-performance local SQLite database on your device.
                    </p>
                  </div>
                )}
              </div>

              <div className={`faq-item ${openFaq === 2 ? "open" : ""}`}>
                <button type="button" className="faq-question" onClick={() => toggleFaq(2)}>
                  <span>How does the Estimated 1RM calculation work?</span>
                  <svg className="faq-chevron" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {openFaq === 2 && (
                  <div className="faq-answer">
                    <p>
                      Liftbook uses proven scientific 1RM formulas (incorporating logged weight,
                      repetitions, and optional Reps In Reserve) to estimate your maximum single-repetition
                      strength. This allows you to track strength progression across different rep ranges over time.
                    </p>
                  </div>
                )}
              </div>

              <div className={`faq-item ${openFaq === 3 ? "open" : ""}`}>
                <button type="button" className="faq-question" onClick={() => toggleFaq(3)}>
                  <span>Can I export my data to Excel or Google Sheets?</span>
                  <svg className="faq-chevron" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {openFaq === 3 && (
                  <div className="faq-answer">
                    <p>
                      Yes. You can export your Training, Cardio, and Bodyweight data into standard,
                      clean CSV files at any time. You can open them in Microsoft Excel, Google Sheets,
                      or custom data analysis scripts without any proprietary restrictions.
                    </p>
                  </div>
                )}
              </div>

              <div className={`faq-item ${openFaq === 4 ? "open" : ""}`}>
                <button type="button" className="faq-question" onClick={() => toggleFaq(4)}>
                  <span>Do I need an account or login?</span>
                  <svg className="faq-chevron" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {openFaq === 4 && (
                  <div className="faq-answer">
                    <p>
                      No. There are no sign-ups, no email requirements, and no passwords. When you
                      install Liftbook, you are ready to log your first set in 5 seconds flat.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING DOWNLOAD CTA */}
        <section className="closing-section" id="download">
          <div className="shell closing-card">
            <div className="closing-glow" aria-hidden="true" />
            <img
              className="closing-icon"
              src={storeIcon}
              alt="Liftbook icon"
              width="80"
              height="80"
              loading="lazy"
            />
            <h2 className="closing-heading">Take total control of your training</h2>
            <p className="closing-sub">
              Your workouts. Your records. Your bodyweight trends. Stored privately on your device.
            </p>
            
            <div className="closing-actions">
              <a className="google-play-btn large-btn" href="#">
                <svg className="google-play-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M3.6 2.3c-.2.2-.4.6-.4 1.1v17.2c0 .5.2.9.4 1.1l.1.1 9.6-9.6v-.2L3.7 2.2l-.1.1z"/>
                  <path fill="#FBBC05" d="M16.9 15.6l-3.6-3.6v-.2l3.6-3.6.1.1 4.3 2.4c1.2.7 1.2 1.8 0 2.5l-4.4 2.4z"/>
                  <path fill="#EA4335" d="M13.3 11.9L3.6 21.6c.4.4 1.1.5 1.8.1l11.6-6.6-3.7-3.2z"/>
                  <path fill="#34A853" d="M13.3 11.9l3.7-3.2L5.4 2.1c-.7-.4-1.4-.3-1.8.1l9.7 9.7z"/>
                </svg>
                <div className="btn-text">
                  <span className="btn-sub">Coming soon on</span>
                  <span className="btn-main">Google Play (Android)</span>
                </div>
              </a>
            </div>

            <p className="health-note">
              Liftbook is not a medical device. Trends and estimates are for personal tracking
              only; consult a qualified healthcare professional for medical advice.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter page="home" />
    </>
  );
}
