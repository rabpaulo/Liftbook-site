import bodyweightWeekScreenshot from "../../screenshots/04-bodyweight-week.png";
import cardioStatisticsScreenshot from "../../screenshots/03-cardio-statistics.png";
import exerciseLibraryScreenshot from "../../screenshots/02-exercise-library.png";
import trainingProgressScreenshot from "../../screenshots/01-training-progress.png";
import storeIcon from "../../store-icon.png";
import { ArrowIcon, SiteFooter, SiteHeader } from "../components/SiteChrome";

export function LandingPage() {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <SiteHeader page="home" />

      <main id="content">
        <section className="hero" id="home">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" aria-hidden="true" /> Your progress journal
              </p>
              <h1>
                Your training.
                <br />
                Your data.
                <br />
                <em>Yours alone.</em>
              </h1>
              <p className="hero-summary">
                Strength training, cardio, and bodyweight in a focused, offline,
                distraction-free app. No account, no ads, and no analytics.
              </p>
              <div className="button-row">
                <a className="button button-primary" href="#features">
                  Explore Liftbook
                  <ArrowIcon />
                </a>
                <a className="button button-secondary" href="#privacy">
                  How we protect your data
                </a>
              </div>
              <p className="availability">Android · First release coming soon</p>
            </div>

            <div className="hero-visual" aria-label="Liftbook preview">
              <div className="metric-card metric-top" aria-hidden="true">
                <span className="metric-label">Estimated 1RM</span>
                <strong>46.7 kg</strong>
                <span className="metric-positive">↗ +8.8 kg</span>
              </div>
              <figure className="phone-frame hero-phone">
                <img
                  src={trainingProgressScreenshot}
                  alt="Estimated 1RM chart for the Cuffed Extension exercise across eight logged workouts."
                  width="1080"
                  height="1920"
                />
              </figure>
              <div className="metric-card metric-bottom" aria-hidden="true">
                <span className="metric-label">Progress</span>
                <svg className="mini-chart" viewBox="0 0 112 36">
                  <path d="M2 31h108" />
                  <polyline points="3,29 28,25 51,27 77,17 108,4" />
                  <circle cx="108" cy="4" r="3" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Liftbook commitments">
          <div className="shell trust-grid">
            <div>
              <span>01</span>
              <strong>No account</strong>
            </div>
            <div>
              <span>02</span>
              <strong>No ads</strong>
            </div>
            <div>
              <span>03</span>
              <strong>No analytics</strong>
            </div>
            <div>
              <span>04</span>
              <strong>Offline by default</strong>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">One journal</p>
                <h2>Everything you need to see your progress.</h2>
              </div>
              <p>
                Log what matters, compare what changed, and keep moving forward. Every area is
                built to work simply, even without a connection.
              </p>
            </div>

            <div className="feature-grid">
              <article className="feature-card feature-dark">
                <div className="feature-number">01</div>
                <div className="feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 10v4M7 8v8M10 11h4M14 8v8M17 10v4M3 12h18" />
                  </svg>
                </div>
                <h3>Strength training</h3>
                <p>
                  Build exercises and templates, log weight, repetitions, and RIR, and track
                  records and progress charts.
                </p>
                <ul className="feature-list">
                  <li>Reusable templates</li>
                  <li>Local comments and videos</li>
                  <li>Estimated 1RM, weight, and repetitions</li>
                </ul>
              </article>

              <article className="feature-card">
                <div className="feature-number">02</div>
                <div className="feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="13" r="7" />
                    <path d="M12 13l3-2M9 3h6M12 3v3" />
                  </svg>
                </div>
                <h3>Cardio</h3>
                <p>
                  Add activities manually or use a recoverable timer. Review goals, history, and
                  statistics across time periods.
                </p>
                <ul className="feature-list">
                  <li>Metrics tailored to each activity</li>
                  <li>Weekly goals</li>
                  <li>Privacy-filtered PNG summaries</li>
                </ul>
              </article>

              <article className="feature-card feature-warm">
                <div className="feature-number">03</div>
                <div className="feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M5 19V7M5 19h14M8 15l3-4 3 2 4-6" />
                    <circle cx="18" cy="7" r="1" />
                  </svg>
                </div>
                <h3>Bodyweight</h3>
                <p>
                  Log your daily weight, follow weekly averages, and create phases to lose,
                  maintain, or gain weight.
                </p>
                <ul className="feature-list">
                  <li>Kilograms or pounds</li>
                  <li>Optional local photos</li>
                  <li>Weekly Android widget</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section product-section" id="app">
          <div className="shell">
            <div className="section-heading centered-heading">
              <p className="eyebrow">See clearly</p>
              <h2>Your history becomes context.</h2>
              <p>
                A direct, monochrome interface designed to highlight your logs—not the app itself.
              </p>
            </div>

            <div className="screen-gallery">
              <figure className="screen-card screen-card-tall">
                <div className="screen-number" aria-hidden="true">
                  01
                </div>
                <div className="phone-frame">
                  <img
                    src={exerciseLibraryScreenshot}
                    alt="Exercise library with search, category filters, and strength exercises."
                    width="1080"
                    height="1920"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <strong>Organize it your way</strong>
                  <span>A searchable library, custom categories, and workout templates.</span>
                </figcaption>
              </figure>

              <figure className="screen-card screen-card-offset">
                <div className="screen-number" aria-hidden="true">
                  02
                </div>
                <div className="phone-frame">
                  <img
                    src={cardioStatisticsScreenshot}
                    alt="Four-week cardio statistics with sessions, total time, and minutes per week."
                    width="1080"
                    height="1920"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <strong>Understand your consistency</strong>
                  <span>Sessions, time, and activity distribution across different periods.</span>
                </figcaption>
              </figure>

              <figure className="screen-card screen-card-tall">
                <div className="screen-number" aria-hidden="true">
                  03
                </div>
                <div className="phone-frame">
                  <img
                    src={bodyweightWeekScreenshot}
                    alt="Bodyweight average, trend, daily log, and weekly history."
                    width="1080"
                    height="1920"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <strong>Follow the trend</strong>
                  <span>
                    Weekly averages, phases, and goals without turning every day into noise.
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="control-section">
          <div className="shell control-grid">
            <div className="control-copy">
              <p className="eyebrow eyebrow-light">Local control</p>
              <h2>
                The app works for you.
                <br />
                Not to harvest your data.
              </h2>
              <p>
                Liftbook requires no account and operates no server that receives your journal.
                Your logs remain in your device's private storage.
              </p>
              <a className="text-link text-link-light" href="./privacy-policy/">
                Read the full policy
                <ArrowIcon />
              </a>
            </div>

            <div className="data-flow" aria-label="Liftbook local data flow">
              <div className="data-device">
                <span className="data-kicker">Your device</span>
                <div className="data-app-row">
                  <img src={storeIcon} alt="" width="56" height="56" loading="lazy" />
                  <div>
                    <strong>Liftbook</strong>
                    <span>Local database + private files</span>
                  </div>
                </div>
                <div className="data-items">
                  <span>Training</span>
                  <span>Cardio</span>
                  <span>Bodyweight</span>
                  <span>Preferences</span>
                </div>
              </div>
              <div className="data-boundary">
                <span aria-hidden="true">×</span>
                <p>
                  <strong>No automatic transmission</strong> to the developer or third parties
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section backup-section">
          <div className="shell backup-grid">
            <div className="backup-visual" aria-hidden="true">
              <div className="file-card file-card-back">
                <span>TRAINING</span>
                <strong>.CSV</strong>
              </div>
              <div className="file-card file-card-middle">
                <span>CARDIO</span>
                <strong>.CSV</strong>
              </div>
              <div className="file-card file-card-front">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3v12M7 10l5 5 5-5M5 20h14" />
                </svg>
                <span>BODYWEIGHT</span>
                <strong>.CSV</strong>
              </div>
            </div>
            <div className="backup-copy">
              <p className="eyebrow">Backups under your control</p>
              <h2>Export one area. Preserve everything else.</h2>
              <p>
                Training, cardio, and bodyweight use separate CSV backups. When you restore one,
                only the chosen area is replaced; preferences and other records remain intact.
              </p>
              <div className="detail-list">
                <div>
                  <span>✓</span> Exports initiated by you
                </div>
                <div>
                  <span>✓</span> Restores require explicit confirmation
                </div>
                <div>
                  <span>✓</span> No automatic Android cloud backup
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section privacy-section" id="privacy">
          <div className="shell privacy-panel">
            <div className="privacy-intro">
              <p className="eyebrow">Privacy from the start</p>
              <h2>Transparency without fine print.</h2>
              <p>
                Liftbook's policy explains what information the app handles, where it stays, how
                exports work, and how you can delete it.
              </p>
              <a className="button button-primary" href="./privacy-policy/">
                Privacy Policy
                <ArrowIcon />
              </a>
            </div>

            <div className="privacy-points">
              <article>
                <span className="privacy-mark" aria-hidden="true">
                  A
                </span>
                <div>
                  <h3>What stays on your device</h3>
                  <p>Training, cardio, bodyweight, preferences, and attachments you choose.</p>
                </div>
              </article>
              <article>
                <span className="privacy-mark" aria-hidden="true">
                  B
                </span>
                <div>
                  <h3>What we do not do</h3>
                  <p>We do not sell data, show ads, use analytics, or require accounts.</p>
                </div>
              </article>
              <article>
                <span className="privacy-mark" aria-hidden="true">
                  C
                </span>
                <div>
                  <h3>When data leaves the app</h3>
                  <p>
                    Only when you export a CSV or share a PNG and choose its destination through
                    the system.
                  </p>
                </div>
              </article>
              <article>
                <span className="privacy-mark" aria-hidden="true">
                  D
                </span>
                <div>
                  <h3>Retention and deletion</h3>
                  <p>Delete records in the app or uninstall Liftbook to remove your local data.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="shell closing-inner">
            <img
              src={storeIcon}
              alt="Liftbook icon"
              width="88"
              height="88"
              loading="lazy"
            />
            <p className="eyebrow">Liftbook</p>
            <h2>
              Consistency logged.
              <br />
              Privacy preserved.
            </h2>
            <p className="closing-summary">
              An offline strength training, cardio, and bodyweight journal for Android.
            </p>
            <span className="coming-soon">Coming soon to Google Play</span>
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
