import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const sections = [
  ["service", "The service"],
  ["subscriptions", "Subscriptions"],
  ["premium", "Premium access"],
  ["cloud", "Cloud backup"],
  ["health", "Fitness information"],
  ["conduct", "Acceptable use"],
  ["availability", "Availability and liability"],
  ["changes", "Changes and contact"],
] as const;

export function TermsPage() {
  return (
    <>
      <a className="skip-link" href="#legal-content">Skip to the terms</a>
      <SiteHeader page="terms" />
      <main id="legal-content">
        <section className="policy-hero">
          <div className="shell policy-hero-grid">
            <div>
              <p className="eyebrow">Terms of use</p>
              <h1>Terms &amp; Subscriptions</h1>
              <p className="policy-hero-summary">
                The rules for using Liftbook and the billing, cancellation, expiry, quota, and
                recovery terms for optional Premium subscriptions.
              </p>
            </div>
            <p className="policy-date"><strong>Effective date</strong><br />August 24, 2026</p>
          </div>
        </section>

        <div className="shell policy-layout">
          <aside className="policy-toc" aria-label="Terms contents">
            <p>In these terms</p>
            <ol>{sections.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
          </aside>

          <article className="policy-content">
            <p className="policy-lead">
              <strong>Summary:</strong> Liftbook remains usable as a local journal without an
              account. Premium is optional, renews through Google Play until cancelled, and adds
              the features shown in the app. Cloud backup is a user-controlled transfer, not a
              continuous or guaranteed background-sync service.
            </p>

            <section id="service">
              <h2>1. The service and these terms</h2>
              <p>
                These terms apply to the Liftbook Android app, package
                <strong> com.rabpaulo.liftbook</strong>, provided by rabpaulodev. By using the app
                you agree to these terms and the <a href="../privacy-policy/">Privacy Policy</a>.
                If you do not agree, do not use the app.
              </p>
              <p>
                Core local logging and manual <strong>.liftbook</strong> and CSV transfer remain
                available without Premium. Feature availability shown in the app controls what is
                included at the time you subscribe.
              </p>
            </section>

            <section id="subscriptions">
              <h2>2. Recurring subscriptions, billing, and cancellation</h2>
              <ul>
                <li>The final localized price, currency, billing period, and any trial are shown by Google Play before purchase.</li>
                <li>Payment is charged to your Google Play account when the purchase is confirmed.</li>
                <li>Your subscription renews automatically for the selected period unless you cancel it in Google Play before renewal.</li>
                <li>Cancellation stops future renewal; it normally does not refund the current paid period or remove access before that period ends.</li>
                <li>Refund eligibility and processing are governed by Google Play and applicable law.</li>
              </ul>
              <p>
                Manage or cancel in <a href="https://play.google.com/store/account/subscriptions?sku=liftbook_premium&amp;package=com.rabpaulo.liftbook">Google Play subscriptions</a>.
                Deleting Liftbook or deleting your Liftbook account does <strong>not</strong>
                cancel a Play subscription.
              </p>
            </section>

            <section id="premium">
              <h2>3. Premium access, restoration, and expiry</h2>
              <p>
                Premium access depends on a valid Google Play purchase and the entitlement
                processed by RevenueCat. Pending purchases do not unlock Premium. If you reinstall,
                change devices, or use another Liftbook account, use Restore purchases while signed
                into the Google account that owns the Play purchase. Purchase transfer rules may
                prevent one receipt from granting access to multiple Liftbook accounts.
              </p>
              <p>
                When a subscription expires or is refunded, Premium-only creation and ranges can
                lock after entitlement reconciliation. Existing local records remain usable and
                are never deleted merely because they exceed a free limit. Reactivating a valid
                entitlement restores Premium access.
              </p>
            </section>

            <section id="cloud">
              <h2>4. Cloud backup limits and recovery</h2>
              <p>
                Cloud backup is opt-in and must be started in the foreground. Liftbook does not
                promise automatic background synchronization. Network, device storage, service
                availability, validation, and foreground interruption can delay or fail a transfer.
                Keep an independent manual backup.
              </p>
              <ul>
                <li>Each cloud archive is limited to 1 GB.</li>
                <li>At most two ready archives and 2 GB in total are retained per account.</li>
                <li>Only one active device may upload; another device can request an explicit takeover.</li>
                <li>After Premium expires, uploads stop. Existing backups remain available for one non-extending 30-day recovery period, then are permanently deleted.</li>
                <li>A restore replaces the included local modules as disclosed by the confirmation screen. Review it before proceeding.</li>
              </ul>
              <p>
                Account deletion is different from subscription expiry: requesting deletion begins
                permanent account and cloud-data removal without waiting for the 30-day recovery
                window.
              </p>
            </section>

            <section id="health">
              <h2>5. Fitness and wellness information</h2>
              <p>
                Liftbook records information you enter and produces informational training,
                cardio, bodyweight, recovery, rating, score, distribution, and progression views.
                These are not medical advice, diagnoses, treatment, physiological-readiness
                assessments, or substitutes for a qualified healthcare professional. Stop and seek
                appropriate help if an activity causes pain, illness, or concern.
              </p>
            </section>

            <section id="conduct">
              <h2>6. Acceptable use</h2>
              <p>
                Do not misuse the service, interfere with its security or quotas, access another
                person's account or backups, automate abusive traffic, or use Liftbook in violation
                of law. You are responsible for your device, Google and Liftbook accounts, and the
                accuracy and legality of content you enter or upload.
              </p>
            </section>

            <section id="availability">
              <h2>7. Availability, changes, and liability</h2>
              <p>
                Liftbook is provided on an “as available” basis to the extent permitted by law.
                Features may be corrected, secured, limited, suspended, or discontinued. Rollback
                may disable affected Premium features while preserving subscriptions, local data,
                and already-stored backups. Nothing in these terms excludes rights or liability
                that cannot lawfully be excluded.
              </p>
            </section>

            <section id="changes">
              <h2>8. Changes, governing terms, and contact</h2>
              <p>
                Material updates will be dated here and, where required, communicated in the app.
                Google Play terms also apply to store billing. Applicable mandatory consumer law
                remains unaffected. Questions: <a href="mailto:liftbook.support@gmail.com">liftbook.support@gmail.com</a>.
              </p>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter page="terms" />
    </>
  );
}
