import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export function AccountDeletionPage() {
  return (
    <>
      <a className="skip-link" href="#legal-content">Skip to account deletion</a>
      <SiteHeader page="deletion" />
      <main id="legal-content">
        <section className="policy-hero">
          <div className="shell policy-hero-grid">
            <div>
              <p className="eyebrow">Liftbook account controls</p>
              <h1>Delete your account</h1>
              <p className="policy-hero-summary">
                Permanently delete your Liftbook sign-in identity and associated Premium cloud data,
                either in the app or by contacting support.
              </p>
            </div>
            <p className="policy-date"><strong>Last updated</strong><br />August 24, 2026</p>
          </div>
        </section>

        <div className="shell policy-layout">
          <aside className="policy-toc" aria-label="Account deletion contents">
            <p>On this page</p>
            <ol>
              <li><a href="#app">Delete in the app</a></li>
              <li><a href="#web">Request without the app</a></li>
              <li><a href="#deleted">What is deleted</a></li>
              <li><a href="#subscription">Play subscription</a></li>
              <li><a href="#retention">Timing and retention</a></li>
            </ol>
          </aside>

          <article className="policy-content">
            <p className="policy-lead">
              <strong>Before you delete:</strong> Export any local or cloud data you want to keep.
              Deletion cannot be undone. It does not cancel a Google Play subscription, and it does
              not automatically erase Liftbook journal files that remain only on your device.
            </p>

            <section id="app">
              <h2>Delete in the Android app</h2>
              <ol>
                <li>Open Liftbook and go to <strong>Settings → Account &amp; Premium</strong>.</li>
                <li>Open <strong>Delete account</strong> and review every consequence.</li>
                <li>Confirm the acknowledgement and choose <strong>Delete account</strong>.</li>
                <li>Complete Google authentication again when requested, then confirm the final destructive dialog.</li>
              </ol>
              <p>
                Liftbook requires a recent authentication before accepting deletion. After the
                request is accepted, the app signs the account out locally and the server completes
                the deletion job.
              </p>
            </section>

            <section id="web">
              <h2>Request deletion without the app</h2>
              <p>
                Email <a href="mailto:liftbook.support@gmail.com?subject=Liftbook%20account%20deletion%20request">liftbook.support@gmail.com</a>
                from the Google email address used for Liftbook. Use the subject
                <strong> “Liftbook account deletion request”</strong>. Include only that email
                address and, if known, the approximate date you last signed in. Do not attach
                workouts, backups, photos, videos, receipts, tokens, or identity documents unless
                support specifically requests the minimum information needed to verify ownership.
              </p>
              <p>
                Support will verify account ownership before initiating deletion and will not ask
                for your Google password or full payment details. If you no longer control the
                sign-in email, explain that in the request so support can provide the available
                verification path.
              </p>
            </section>

            <section id="deleted">
              <h2>Data deleted with the Liftbook account</h2>
              <ul>
                <li>the Firebase Authentication account and Google sign-in association used by Liftbook;</li>
                <li>account and entitlement-mirror records in Firebase;</li>
                <li>cloud-backup metadata and every Liftbook cloud archive stored for the account;</li>
                <li>device-ownership and pending-transfer records; and</li>
                <li>the RevenueCat customer identity associated with the Liftbook account.</li>
              </ul>
              <p>
                Local workouts, bodyweight entries, cardio history, photos, videos, and manual
                exports on your device are not part of the online account and are not remotely
                erased. Use Android's app-data controls or uninstall Liftbook to remove the app's
                private local data, and delete exports from their destination separately.
              </p>
            </section>

            <section id="subscription">
              <h2>Your Play subscription is separate</h2>
              <p>
                <strong>Deleting the account or uninstalling Liftbook does not cancel recurring
                billing.</strong> Cancel separately in <a href="https://play.google.com/store/account/subscriptions?sku=liftbook_premium&amp;package=com.rabpaulo.liftbook">Google Play subscriptions</a>.
                Google retains transaction records under its own terms and legal obligations.
              </p>
            </section>

            <section id="retention">
              <h2>Timing, retention, and exceptions</h2>
              <p>
                In-app deletion is normally completed within 24 hours. Support-assisted requests
                begin after ownership verification. Failed jobs are retried and escalated for
                support review. Account deletion does not use the Premium-expiry 30-day recovery
                window: account cloud archives are deleted as part of the request.
              </p>
              <p>
                Minimal security, deletion-job, support, billing, tax, fraud-prevention, or legal
                records may be retained only for the period required by law or legitimate dispute
                handling. They are access-controlled and are not used to recreate deleted journal
                content. Google Play and RevenueCat may independently retain records they are
                legally required to keep. See the <a href="../privacy-policy/">Privacy Policy</a>
                for details.
              </p>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter page="deletion" />
    </>
  );
}
