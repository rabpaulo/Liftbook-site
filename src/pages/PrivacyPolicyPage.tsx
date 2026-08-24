import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const sections = [
  ["scope", "Scope and contact"],
  ["data", "Data we handle"],
  ["purposes", "How data is used"],
  ["processors", "Processors and sharing"],
  ["cloud", "Cloud backup and security"],
  ["retention", "Retention and deletion"],
  ["local", "Local data and permissions"],
  ["health", "Health information"],
  ["rights", "Choices and rights"],
  ["changes", "Changes"],
] as const;

export function PrivacyPolicyPage() {
  return (
    <>
      <a className="skip-link" href="#legal-content">Skip to the privacy policy</a>
      <SiteHeader page="privacy" />
      <main id="legal-content">
        <section className="policy-hero">
          <div className="shell policy-hero-grid">
            <div>
              <p className="eyebrow">Public privacy notice</p>
              <h1>Privacy Policy</h1>
              <p className="policy-hero-summary">
                How Liftbook handles account, subscription, fitness and wellness, media, cloud
                backup, local journal, and operational data.
              </p>
            </div>
            <p className="policy-date"><strong>Effective date</strong><br />August 24, 2026</p>
          </div>
        </section>

        <div className="shell policy-layout">
          <aside className="policy-toc" aria-label="Privacy policy contents">
            <p>In this policy</p>
            <ol>{sections.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
          </aside>

          <article className="policy-content">
            <p className="policy-lead">
              <strong>Summary:</strong> Liftbook is local-first. Core journaling works without an
              account, advertising, or behavioral analytics. If you choose Google sign-in,
              Premium, or cloud backup, the minimum account, purchase, and backup data needed for
              those services is transmitted to Google/Firebase and RevenueCat. Liftbook does not
              sell personal data.
            </p>

            <section id="scope">
              <h2>1. Scope, controller, and contact</h2>
              <p>
                This policy applies to the Liftbook Android app, package
                <strong> com.rabpaulo.liftbook</strong>, and this website. Liftbook is developed and
                published by <strong>rabpaulodev</strong>, which determines how Liftbook data is
                handled. Contact <a href="mailto:liftbook.support@gmail.com">liftbook.support@gmail.com</a>
                for privacy questions, rights requests, or security reports.
              </p>
              <div className="policy-meta-grid" aria-label="Application and privacy contact">
                <div><span>Application</span><strong>Liftbook</strong></div>
                <div><span>Developer</span><strong>rabpaulodev</strong></div>
                <div><span>Android package</span><strong>com.rabpaulo.liftbook</strong></div>
                <div><span>Privacy contact</span><strong>liftbook.support@gmail.com</strong></div>
              </div>
              <p>
                Google Play, Android, and destinations you choose for manual sharing or export also
                process data under their own privacy terms.
              </p>
            </section>

            <section id="data">
              <h2>2. Data Liftbook handles</h2>
              <h3>Local journal and wellness data</h3>
              <ul>
                <li>bodyweight logs, phases, goals, trends, dates, and optional photos;</li>
                <li>strength exercises, templates, schedules, workouts, weights, repetitions, RIR, notes, comments, records, ratings, scores, distribution, progression, and optional set videos;</li>
                <li>cardio activity types, sessions, schedules, goals, time, distance, speed, effort, heart-rate values, zones, incline, resistance, steps, floors, and observations when entered;</li>
                <li>Recovery answers and calculated informational results; and</li>
                <li>preferences, local identifiers, timestamps, and active-session state.</li>
              </ul>
              <h3>Optional account and subscription data</h3>
              <ul>
                <li>Firebase and Google account identifiers, email address, display name, and profile photo address provided by Google sign-in;</li>
                <li>RevenueCat App User ID, product, purchase history, entitlement, renewal, cancellation, grace, refund, and expiry state;</li>
                <li>device-ownership state for cloud uploads and server timestamps; and</li>
                <li>Google Play handles payment credentials. Liftbook does not receive your full card number.</li>
              </ul>
              <h3>Optional cloud and operational data</h3>
              <ul>
                <li>user-requested <strong>.liftbook</strong> archives, which can include the journal data, photos, and videos listed above;</li>
                <li>archive size, checksum, schema version, creation time, backup state, and quota totals; and</li>
                <li>privacy-safe operation outcome, duration, byte count, failure category, webhook lag, retry count, and random per-operation correlation ID.</li>
              </ul>
              <p>
                Operational monitoring is designed not to contain workout or wellness values,
                ratings or scores, notes, custom names or category contents, filenames, object
                paths, photos, videos, archive contents, email, name, raw account ID, tokens,
                receipts, webhook bodies, or unsanitized exceptions.
              </p>
            </section>

            <section id="purposes">
              <h2>3. Purposes and legal reasons</h2>
              <p>Liftbook uses data to:</p>
              <ul>
                <li>provide local logging, calculations, charts, search, timers, widget summaries, imports, exports, and sharing you request;</li>
                <li>authenticate an optional account and prevent account or backup abuse;</li>
                <li>offer, validate, restore, and support Premium purchases and entitlements;</li>
                <li>create, list, download, restore, retain, and delete opt-in cloud backups;</li>
                <li>diagnose aggregate service failures, capacity, webhook delay, cleanup, and deletion without inspecting private content; and</li>
                <li>meet security, fraud-prevention, accounting, consumer, and legal obligations.</li>
              </ul>
              <p>
                Depending on your location, these activities rely on performing the service you
                request, your consent for optional permissions and cloud transfer, legitimate
                interests in security and reliability, and legal obligations. You may withdraw
                optional use by signing out, disabling cloud backup, cancelling Premium, or
                deleting your account, subject to data already needed for legal obligations.
              </p>
            </section>

            <section id="processors">
              <h2>4. Service providers, disclosure, and sale</h2>
              <p>Liftbook uses these processors only for the stated functions:</p>
              <ul>
                <li><strong>Google Play:</strong> app distribution, subscription checkout, billing, purchase status, refunds, and store security.</li>
                <li><strong>Google Sign-In and Firebase:</strong> authentication, callable backend functions, Firestore account and backup metadata, Cloud Storage archives, integrity and abuse protection where enabled, and restricted operational logs.</li>
                <li><strong>RevenueCat:</strong> purchase validation, entitlement state, lifecycle webhooks, restoration, support diagnostics, and customer-identity deletion.</li>
                <li><strong>GitHub Pages:</strong> delivery and security of this public website, which may involve ordinary web-server technical logs.</li>
              </ul>
              <p>
                These providers may process data in other countries under their contractual and
                legal safeguards. Liftbook does not send journal content to RevenueCat and does not
                sell or rent personal or sensitive data. It does not share data with advertisers or
                data brokers. A service provider processes data only to provide its contracted
                service; legal disclosures may occur when validly required.
              </p>
            </section>

            <section id="cloud">
              <h2>5. Cloud backup, transfers, and security</h2>
              <p>
                Cloud backup is optional, Premium-gated, and started by you in the foreground.
                Archives are transferred over HTTPS/TLS and encrypted at rest using Google/Firebase
                provider-managed encryption. This is <strong>not end-to-end or zero-knowledge
                encryption</strong>: authorized service infrastructure can decrypt data to provide
                storage and deletion operations.
              </p>
              <p>
                Access is protected by Firebase Authentication, UID-scoped rules, server-validated
                entitlement and device ownership, checksums, quotas, and restrictive bucket access.
                No system is perfectly secure, so retain an independent manual backup. Manual
                <strong> .liftbook</strong> and CSV files and PNG shares go only to the destination
                you choose through Android and remain governed by that destination's policy.
              </p>
            </section>

            <section id="retention">
              <h2>6. Retention, Premium expiry, and deletion</h2>
              <ul>
                <li>Local journal data remains until you edit it, delete it, clear app data, or uninstall the app. Files exported elsewhere must be deleted at their destination.</li>
                <li>An active account retains up to two ready cloud archives, each no larger than 1 GB and together no larger than 2 GB; superseded and failed operation files are cleaned up.</li>
                <li>After Premium becomes inactive, uploads stop and existing backups remain available for one non-extending 30-day recovery period. They are permanently deleted after that window unless Premium reactivates first.</li>
                <li>Account deletion removes cloud archives and account records without waiting for the Premium-expiry recovery period. RevenueCat customer deletion is requested and Firebase Authentication is deleted last.</li>
                <li>Restricted operational logs and support correspondence are retained only for configured diagnostic, security, dispute, or legal periods, then deleted or aggregated. Tax, transaction, fraud, and legal records may be retained where required.</li>
              </ul>
              <p>
                Delete in <strong>Settings → Account &amp; Premium → Delete account</strong> or use
                the public <a href="../account-deletion/">account-deletion instructions</a>.
                Deletion normally completes within 24 hours after an authenticated in-app request;
                verified support requests begin after ownership checks. Deleting an account does
                not cancel a Google Play subscription.
              </p>
            </section>

            <section id="local">
              <h2>7. Local permissions, media, and device features</h2>
              <p>
                Liftbook requests access only after you choose a related action. The system photo
                picker or media permission lets you select bodyweight photos or set videos. The
                system camera can record a set video. The document picker reads a backup or CSV you
                select. You can decline or revoke these permissions, although the related feature
                will not work.
              </p>
              <p>
                Managed media is stored in Liftbook's private app files and referenced by the local
                database; cloud archives include it only when you request an upload. The Android
                widget reads a private current-week snapshot. Android system app-data backup is
                disabled. Temporary PNG and manual export files are removed when possible after the
                requested action.
              </p>
            </section>

            <section id="health">
              <h2>8. Health, fitness, and children</h2>
              <p>
                Fitness, wellness, Recovery, rating, score, distribution, and progression features
                are informational journal tools. They are not medical advice, diagnoses,
                treatment, or physiological-readiness assessments. Consult a qualified healthcare
                professional when appropriate. Liftbook is not directed to children, and an adult
                should supervise any use by a minor as required by local law and Google Play rules.
              </p>
            </section>

            <section id="rights">
              <h2>9. Your choices and privacy rights</h2>
              <p>
                You can use the local core without an account, choose whether to upload a backup,
                inspect and delete local records, export portable copies, sign out, cancel Premium,
                and delete your account. Depending on your location, you may also request access,
                correction, deletion, portability, restriction, objection, or withdrawal of
                consent by emailing <a href="mailto:liftbook.support@gmail.com">liftbook.support@gmail.com</a>.
                We may need to verify ownership and may deny or limit a request where law permits.
              </p>
            </section>

            <section id="changes">
              <h2>10. Policy changes</h2>
              <p>
                This notice may change when Liftbook, its providers, or legal requirements change.
                The effective date above will be updated, and material changes will be communicated
                in the app when required. Questions or complaints can be sent to the privacy contact
                above; you may also have the right to contact your local data-protection authority.
              </p>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter page="privacy" />
    </>
  );
}
