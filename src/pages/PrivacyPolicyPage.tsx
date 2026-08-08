import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const policySections = [
  ["scope", "Scope and contact"],
  ["data", "Data handled on your device"],
  ["use", "How Liftbook uses data"],
  ["collection", "Collection and sharing"],
  ["permissions", "Permissions and media"],
  ["transfers", "Exports, imports, and widget"],
  ["retention", "Retention and deletion"],
  ["security", "Security"],
  ["website", "Website and external services"],
  ["health", "Health disclaimer"],
  ["changes", "Policy changes"],
] as const;

export function PrivacyPolicyPage() {
  return (
    <>
      <a className="skip-link" href="#privacy-policy">
        Skip to the privacy policy
      </a>

      <SiteHeader page="privacy" />

      <main id="privacy-policy">
        <section className="policy-hero">
          <div className="shell policy-hero-grid">
            <div>
              <p className="eyebrow">Public privacy notice</p>
              <h1>Privacy Policy</h1>
              <p className="policy-hero-summary">
                How Liftbook accesses, uses, protects, shares, retains, and deletes the information
                you record in the Android app.
              </p>
            </div>
            <p className="policy-date">
              <strong>Effective date</strong>
              <br />
              August 8, 2026
            </p>
          </div>
        </section>

        <div className="shell policy-layout">
          <aside className="policy-toc" aria-label="Privacy policy contents">
            <p>In this policy</p>
            <ol>
              {policySections.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="policy-content">
            <p className="policy-lead">
              <strong>Summary:</strong> Liftbook is an offline strength training, cardio, and
              bodyweight journal. It has no user accounts, advertising, analytics, or
              Liftbook-operated backend. Your journal is processed locally on your device.
              Liftbook does not sell your data or automatically transmit it to the developer or
              third parties.
            </p>

            <section id="scope">
              <h2>1. Scope, developer, and contact</h2>
              <p>
                This policy applies to the <strong>Liftbook</strong> Android application and the
                Liftbook website that hosts this policy. The app is identified by the Android
                package name <strong>com.rabpaulo.liftbook</strong> and is developed and published
                by <strong>rabpaulodev</strong>.
              </p>
              <p>
                For privacy questions, requests, or reports, contact{" "}
                <a href="mailto:liftbook.support@gmail.com">liftbook.support@gmail.com</a>.
              </p>
              <div className="policy-meta-grid" aria-label="Application and developer details">
                <div>
                  <span>Application</span>
                  <strong>Liftbook</strong>
                </div>
                <div>
                  <span>Developer</span>
                  <strong>rabpaulodev</strong>
                </div>
                <div>
                  <span>Android package</span>
                  <strong>com.rabpaulo.liftbook</strong>
                </div>
                <div>
                  <span>Privacy contact</span>
                  <strong>liftbook.support@gmail.com</strong>
                </div>
              </div>
              <p>
                This policy does not govern Google Play, your device operating system, or any app,
                cloud drive, messaging service, email provider, or other destination you choose
                when exporting or sharing data. Those services handle information under their own
                terms and privacy policies.
              </p>
            </section>

            <section id="data">
              <h2>2. Personal and sensitive data handled on your device</h2>
              <p>
                Liftbook handles only the information needed for the features you choose to use.
                This can include health and fitness information that Google Play treats as personal
                and sensitive user data.
              </p>
              <h3>Bodyweight</h3>
              <ul>
                <li>daily dates and bodyweight values;</li>
                <li>phase names, goals, weekly targets, durations, and history; and</li>
                <li>optional local references to photos you select from your media library.</li>
              </ul>
              <h3>Strength training</h3>
              <ul>
                <li>exercise names, categories, setup notes, and reusable workout templates;</li>
                <li>workout names, dates, exercise snapshots, and workout history;</li>
                <li>set weights, repetitions, repetitions in reserve (RIR), and comments; and</li>
                <li>optional local video files you select or record for workout sets.</li>
              </ul>
              <h3>Cardio</h3>
              <ul>
                <li>activity types, templates, goals, session names, dates, durations, and pauses;</li>
                <li>
                  optional distance, speed, heart-rate, intensity, perceived-effort,
                  heart-rate-zone, incline, resistance, step, floor, and note values you enter; and
                </li>
                <li>the locally persisted state required to recover an active cardio timer.</li>
              </ul>
              <h3>Preferences and technical data</h3>
              <ul>
                <li>theme, weight-unit, distance-unit, and training weight-increment preferences;</li>
                <li>local record identifiers, ordering, and creation or update timestamps; and</li>
                <li>the current-week snapshot used by the Android bodyweight widget.</li>
              </ul>
              <p>
                Liftbook does not ask for your name, email address, phone number, precise location,
                contacts, payment details, advertising ID, or login credentials. It does not
                connect to Health Connect, wearable devices, external health sensors, or location
                services.
              </p>
            </section>

            <section id="use">
              <h2>3. How Liftbook accesses and uses data</h2>
              <p>Liftbook accesses and processes the information above locally to:</p>
              <ul>
                <li>save, edit, search, organize, and display your journal;</li>
                <li>restore active cardio timers and maintain workout or activity history;</li>
                <li>
                  calculate weekly averages, trends, goals, records, estimated one-repetition
                  maximums, pace, speed, and other statistics on the device;
                </li>
                <li>attach the photo or video you choose to the relevant local record;</li>
                <li>prepare a CSV backup or privacy-filtered PNG when you request one; and</li>
                <li>
                  provide the current week's bodyweight summary to the Android home-screen widget.
                </li>
              </ul>
              <p>
                Liftbook does not use journal data for advertising, marketing, analytics,
                profiling, credit decisions, or automated decisions that produce legal or
                similarly significant effects.
              </p>
            </section>

            <section id="collection">
              <h2>4. Data collection, transmission, sale, and sharing</h2>
              <p>
                Liftbook does not automatically transmit journal data off your device. The
                developer does not collect or receive your bodyweight, workout, cardio, photo,
                video, preference, or attachment data. The app includes no advertising, analytics,
                crash-reporting, social-login, or cloud-sync SDK.
              </p>
              <p>
                Liftbook does not sell personal or sensitive user data. It does not share journal
                data with advertisers, analytics providers, data brokers, or other third parties.
              </p>
              <p>
                Data can leave your device only when you deliberately use a system action such as
                sharing a PNG, exporting a CSV backup, or sending an email. You choose the
                destination. The selected destination receives and processes the data under its own
                privacy policy; the Liftbook developer does not receive a copy unless you
                intentionally choose to send it to the developer's support address.
              </p>
              <p>
                Google Play and the Android operating system may separately process store,
                installation, security, and device information under Google's policies. That
                separate platform processing does not give Liftbook access to the contents of your
                journal.
              </p>
            </section>

            <section id="permissions">
              <h2>5. Device permissions, photos, videos, camera, and documents</h2>
              <p>
                Liftbook requests optional access only after you choose a related action and see an
                in-app explanation. You can decline a permission and continue using features that
                do not require it. Android settings let you review or revoke granted permissions.
              </p>
              <ul>
                <li>
                  <strong>Photos and media:</strong> used only when you choose a bodyweight photo or
                  a workout-set video. A bodyweight photo remains in your media library; Liftbook
                  stores only its local address. A selected set video is copied into Liftbook's
                  private app storage so it remains linked to that set.
                </li>
                <li>
                  <strong>Camera:</strong> used only after you choose <em>Record video</em> for a
                  workout set. Liftbook opens the system camera and copies the resulting video into
                  its private storage.
                </li>
                <li>
                  <strong>Microphone:</strong> Liftbook does not request microphone access; the
                  Android microphone permission is blocked in the app configuration.
                </li>
                <li>
                  <strong>Documents:</strong> the system document picker is used only when you
                  choose a CSV backup to import. Liftbook reads the selected file to validate and
                  restore the matching data area.
                </li>
              </ul>
              <p>Liftbook does not upload photos, videos, recordings, or imported documents.</p>
            </section>

            <section id="transfers">
              <h2>6. User-directed exports, imports, and the Android widget</h2>
              <h3>PNG sharing</h3>
              <p>
                When you choose to share a completed workout or cardio summary, Liftbook creates a
                temporary PNG and opens the Android share sheet. Workout notes, exercise setup
                notes, set comments, set video addresses, and cardio observations are excluded from
                the image. You choose the receiving app or service. Liftbook attempts to delete the
                temporary capture after sharing.
              </p>
              <h3>CSV backup and restore</h3>
              <p>
                Bodyweight, Cardio, and Training have separate CSV backup actions. An exported CSV
                can contain the selected area's journal records, health and fitness values,
                comments, and local photo or video addresses. It does not embed or copy the photo
                or video files. Liftbook opens the system share sheet, and you choose the
                destination. The temporary export is deleted when possible.
              </p>
              <p>
                When importing, Liftbook reads only the file you select through the system document
                picker. It accepts a backup only when its embedded area matches the action you
                chose. Import is a replacement of that area, not a merge. Other areas and app
                preferences are preserved. The selected temporary file is removed from Liftbook's
                cache when possible.
              </p>
              <h3>Android bodyweight widget</h3>
              <p>
                Liftbook copies the current week's bodyweight average, seven daily values, selected
                weight unit, and week identifier into private app storage for the widget. The widget
                reads only that snapshot, does not open the SQLite database, and does not transmit
                the snapshot off the device.
              </p>
            </section>

            <section id="retention">
              <h2>7. Retention, deletion, and your controls</h2>
              <p>
                Journal data remains locally on your device until you delete the related record or
                uninstall Liftbook. Liftbook has no user accounts and stores no journal data on a
                developer-operated server, so there is no server-side account or journal copy for
                the developer to retrieve or delete.
              </p>
              <ul>
                <li>
                  You can edit or delete bodyweight entries, phases, cardio activities, templates,
                  goals, exercises, sets, workouts, and other records through the app's controls.
                </li>
                <li>
                  Deleting a set, exercise, or workout also deletes its app-owned workout video when
                  possible and when that file is not referenced elsewhere.
                </li>
                <li>
                  Removing a bodyweight photo reference does not delete the original photo from
                  your media library. Delete the original through your device's photo app if
                  desired.
                </li>
                <li>
                  Uninstalling Liftbook removes its private SQLite database, preferences, widget
                  snapshot, and app-owned files according to Android's standard behavior. Android
                  cloud backup is disabled for Liftbook.
                </li>
                <li>
                  Copies of CSV or PNG files sent to another app, cloud drive, person, or location
                  must be deleted from that destination by you.
                </li>
              </ul>
              <p>
                If you contact support by email, the message is retained by the email providers and
                mailboxes involved until it is deleted under their retention controls. Do not send
                journal exports or sensitive health information unless it is necessary for your
                support request.
              </p>
            </section>

            <section id="security">
              <h2>8. Data security</h2>
              <p>
                Liftbook uses Android's application sandbox to isolate its SQLite database,
                preferences, widget data, cached exports, and private workout-video files from other
                apps. Android cloud backup is disabled. The app does not maintain a backend that
                stores or processes your journal, and it attempts to remove temporary CSV and PNG
                files after the related operation.
              </p>
              <p>
                No storage method is completely secure. Protect your device with an up-to-date
                operating system and a secure screen lock. Files you export are protected according
                to the storage location or service you choose, not by Liftbook.
              </p>
            </section>

            <section id="website">
              <h2>9. This website, hosting, and external services</h2>
              <p>
                The Liftbook landing page and this policy are static pages. They contain no user
                account, input form, cookie, advertising pixel, analytics code, or third-party
                client-side script, and they do not send data to the Liftbook developer.
              </p>
              <p>
                The website hosting provider may process standard technical request logs—such as IP
                address, request time, requested path, and browser user agent—to deliver and protect
                the site. That processing is controlled by the hosting provider and must be reviewed
                against the provider's policy when the final public host is selected.
              </p>
              <p>
                The support link opens your chosen email service. If you send a message, your email
                address, message content, and attachments are processed by the email providers
                involved and received in the Liftbook support mailbox.
              </p>
            </section>

            <section id="health">
              <h2>10. Health and medical disclaimer</h2>
              <p>
                Liftbook is a personal fitness journal. It lets you enter and review strength
                training, cardio, bodyweight, and optional heart-rate information, but it does not
                connect to medical records or health sensors.
              </p>
              <p className="policy-notice">
                Liftbook is not a medical device and does not diagnose, treat, cure, or prevent any
                medical condition. Trends, goals, records, and estimates are for personal logging
                only and may be incomplete or inaccurate. Consult a qualified healthcare
                professional for medical advice and before making health or exercise decisions that
                may affect you.
              </p>
            </section>

            <section id="changes">
              <h2>11. Changes to this policy</h2>
              <p>
                This policy may be updated when Liftbook's features, permissions, providers, or data
                practices change, or when applicable requirements change. The effective date at the
                top identifies the current version. The published policy and the Google Play Data
                safety and Health apps declarations must remain accurate and consistent with the
                released app.
              </p>
              <p>
                Questions about this policy can be sent to{" "}
                <a href="mailto:liftbook.support@gmail.com">liftbook.support@gmail.com</a>.
              </p>
            </section>
          </article>
        </div>
      </main>

      <SiteFooter page="privacy" />
    </>
  );
}
