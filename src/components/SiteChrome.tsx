import { useState } from "react";
import storeIcon from "../../store-icon.png";

type HeaderProps = {
  page: "home" | "privacy";
};

export function SiteHeader({ page }: HeaderProps) {
  const isHome = page === "home";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const prefix = isHome ? "" : "../";

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <a
          className="brand"
          href={isHome ? "#home" : "../"}
          aria-label="Liftbook home"
        >
          <div className="brand-icon-wrap">
            <img src={storeIcon} alt="Liftbook logo" width="34" height="34" />
          </div>
          <span className="brand-name">Liftbook</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href={`${prefix}#features`}>Features</a>
          <a href={`${prefix}#showcase`}>App Tour</a>
          <a href={`${prefix}#gallery`}>Gallery</a>
          <a href={`${prefix}#faq`}>FAQ</a>
          <a
            href={isHome ? "#privacy" : "#privacy-policy"}
            aria-current={isHome ? undefined : "page"}
          >
            Privacy
          </a>
        </nav>

        <div className="nav-actions-desktop">
          <a
            className="nav-btn-secondary"
            href="mailto:liftbook.support@gmail.com"
          >
            Support
          </a>
          <a
            className="nav-btn-primary"
            href={`${prefix}#download`}
          >
            Get App
          </a>
        </div>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span className={`burger-line ${mobileMenuOpen ? "open-top" : ""}`} />
          <span className={`burger-line ${mobileMenuOpen ? "open-mid" : ""}`} />
          <span className={`burger-line ${mobileMenuOpen ? "open-bot" : ""}`} />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" onClick={() => setMobileMenuOpen(false)}>
          <nav className="mobile-nav-links">
            <a href={`${prefix}#features`}>Features</a>
            <a href={`${prefix}#showcase`}>App Tour</a>
            <a href={`${prefix}#gallery`}>Gallery</a>
            <a href={`${prefix}#faq`}>FAQ</a>
            <a href={isHome ? "#privacy" : "#privacy-policy"}>Privacy</a>
            <div className="mobile-nav-actions">
              <a
                className="nav-btn-primary full-width"
                href={`${prefix}#download`}
              >
                Get Liftbook
              </a>
              <a
                className="nav-btn-secondary full-width"
                href="mailto:liftbook.support@gmail.com"
              >
                Contact Support
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

type FooterProps = {
  page: "home" | "privacy";
};

export function SiteFooter({ page }: FooterProps) {
  const isHome = page === "home";

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand-col">
          <a className="brand footer-brand" href={isHome ? "#home" : "../"}>
            <div className="brand-icon-wrap">
              <img src={storeIcon} alt="Liftbook" width="32" height="32" loading="lazy" />
            </div>
            <span className="brand-name">Liftbook</span>
          </a>
          <p className="footer-tagline">
            Focused offline journal for strength training, cardio, and bodyweight.
            No account, no ads, no analytics.
          </p>
        </div>

        <div className="footer-nav-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href={isHome ? "#features" : "../#features"}>Features</a></li>
            <li><a href={isHome ? "#showcase" : "../#showcase"}>App Tour</a></li>
            <li><a href={isHome ? "#gallery" : "../#gallery"}>Screenshots</a></li>
            <li><a href={isHome ? "#faq" : "../#faq"}>FAQ</a></li>
          </ul>
        </div>

        <div className="footer-nav-col">
          <h4>Legal & Support</h4>
          <ul>
            <li>
              {isHome ? (
                <a href="./privacy-policy/">Privacy Policy</a>
              ) : (
                <a href="../">Home</a>
              )}
            </li>
            <li>
              <a href="mailto:liftbook.support@gmail.com">liftbook.support@gmail.com</a>
            </li>
            <li>
              <span className="footer-dev-credit">Developer: rabpaulodev</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="shell footer-bottom">
        <p>© 2026 Liftbook · Made for logging, not tracking.</p>
        <a className="back-to-top" href={isHome ? "#home" : "#privacy-policy"}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}
