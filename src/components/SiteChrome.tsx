import storeIcon from "../../store-icon.png";

type HeaderProps = {
  page: "home" | "privacy";
};

export function SiteHeader({ page }: HeaderProps) {
  const isHome = page === "home";

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <a
          className="brand"
          href={isHome ? "#home" : "../"}
          aria-label="Liftbook, home"
        >
          <img src={storeIcon} alt="" width="40" height="40" />
          <span>Liftbook</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href={isHome ? "#features" : "../#features"}>Features</a>
          <a href={isHome ? "#app" : "../#app"}>The app</a>
          <a
            href={isHome ? "#privacy" : "#privacy-policy"}
            aria-current={isHome ? undefined : "page"}
          >
            Privacy
          </a>
        </nav>

        <a className="nav-action" href="mailto:liftbook.support@gmail.com">
          Support
        </a>
      </div>
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
        <a className="brand footer-brand" href={isHome ? "#home" : "../"}>
          <img src={storeIcon} alt="" width="36" height="36" loading="lazy" />
          <span>Liftbook</span>
        </a>
        <p>
          {isHome
            ? "© 2026 Liftbook · Made for logging, not tracking."
            : "Liftbook's public privacy policy."}
        </p>
        <div className="footer-links">
          {isHome ? (
            <a href="./privacy-policy/">Privacy</a>
          ) : (
            <a href="../">Home</a>
          )}
          <a href="mailto:liftbook.support@gmail.com">Contact</a>
          <a href={isHome ? "#home" : "#privacy-policy"}>Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  );
}
