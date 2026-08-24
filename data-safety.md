# Google Play Data Safety and Health Apps draft

Last audited: 2026-08-24 for Premium v1. This is the source-of-truth worksheet for
the Play Console owner, not proof that the console form has been submitted. Recheck
the exact production SDK integrations, optionality, processor contracts, and console
wording immediately before submission and archive the submitted form.

## Data Safety summary

- Data is encrypted in transit: **Yes**. Account, entitlement, monitoring, and
  cloud-backup traffic uses HTTPS/TLS.
- Users can request deletion: **Yes**. Use the in-app deletion flow or
  `https://rabpaulo.github.io/Liftbook-site/account-deletion/`.
- Data is sold: **No**.
- Data is shared for advertising or with data brokers: **No**.
- The local core can be used without an account. Google sign-in, Premium purchase,
  and cloud backup are optional.
- Service-provider processing by Google/Firebase and RevenueCat must be entered
  according to the current Play form's definitions and exceptions. Do not reuse the
  former “no data collected” answer.

## Data inventory to declare

| Play category | Data | Required or optional | Purposes | Route/processors |
| --- | --- | --- | --- | --- |
| Personal info | Email address, display name, Google/Firebase account identifiers | Optional; required only for account features | Account management, authentication, security | Google Sign-In, Firebase Auth |
| Financial info / purchase history | Product, transaction, entitlement, renewal, cancellation, grace, refund, expiry | Optional; required for Premium | App functionality, purchase validation, fraud prevention, account management | Google Play, RevenueCat, Firebase entitlement mirror |
| Health and fitness | Bodyweight, strength, cardio, Recovery/wellness entries and derived history inside a requested cloud archive | Optional cloud upload | Cloud backup/restore | Firebase Storage |
| Photos and videos | Bodyweight photos and set videos included in a requested archive | Optional cloud upload | Cloud backup/restore | Firebase Storage |
| App activity / user-generated content | Notes, comments, templates, categories, schedules, preferences, and journal structure inside a requested archive | Optional cloud upload | Cloud backup/restore | Firebase Storage |
| App info and performance | Operation outcome, duration, bytes, bounded failure category, webhook lag, retry count, random per-operation ID | Collected when account/Premium/cloud operations run | Reliability, security, fraud prevention, support | Firebase Functions/Cloud Logging |
| Device or other identifiers | Firebase installation/authentication and integrity identifiers used by the configured Google SDKs | Required for the applicable account/cloud operation | Authentication, security, fraud prevention | Google/Firebase; verify exact production SDK behavior in console |

Local-only processing is not collection when data never leaves the device. Manual
`.liftbook`/CSV exports and PNG shares are initiated by the user and delivered to a
destination they choose. Confirm the current Play exemption wording before excluding
them from “collected” or “shared.” Android system app-data backup remains disabled.

Operational telemetry must never contain workout, bodyweight, wellness or Recovery
values; ratings or scores; notes; custom category/exercise/template contents;
filenames or object paths; photos/videos; archive manifests or contents; email/name;
raw Firebase UID or RevenueCat App User ID; OAuth/ID tokens; purchase tokens/receipts;
webhook bodies/secrets; or unsanitized exceptions.

## Retention and deletion answers

- Active accounts retain only the currently allowed cloud generations: up to two
  ready archives, 1 GB each and 2 GB total.
- After server-observed Premium expiry, uploads stop and existing cloud backups are
  available for one non-extending 30-day recovery period, then permanently deleted.
- Authenticated account deletion removes Storage objects, Firestore account and
  backup metadata, the RevenueCat customer identity, and Firebase Auth. It does not
  wait for the Premium-expiry recovery window.
- Local data remains until the user deletes it, clears Android app data, or uninstalls.
- Restricted operational/support/legal records follow the documented production
  retention schedule and legal exceptions; verify the configured log-bucket retention.
- Deleting a Liftbook account does not cancel the Google Play subscription.

## Health Apps declaration

Declare that Liftbook provides health-related features and select the categories that
match the console's current taxonomy:

- **Activity and fitness:** strength training, cardio sessions, sets, weights,
  repetitions, RIR, schedules, fitness goals, progress, ratings/scores, distribution,
  and progression.
- **Nutrition and weight management:** bodyweight entries and lose, maintain, or gain
  goals/phases.
- **Wellness management** only if the console places the shipped Recovery check-in in
  this category; describe it as a self-reported informational journal feature.

Liftbook is not a medical device. Do not describe Recovery as a medical, diagnostic,
physiological-readiness, injury-risk, or treatment assessment. The listing, in-app
copy, Privacy Policy, and Terms must consistently state that calculations and scores
are informational and do not replace professional medical advice.

## Final console evidence

- [ ] Production package, artifact, SDK list, and network destinations re-audited.
- [ ] Data Safety answers submitted and screenshots/export archived with release evidence.
- [ ] Health Apps declaration submitted with the exact shipped feature descriptions.
- [ ] Public privacy and deletion URLs tested signed out and in a private window.
- [ ] Account deletion badge/link in Play Console points to the direct deletion page.
- [ ] No claims conflict across the listing, app, policy, Terms, and console forms.

Official references:

- https://support.google.com/googleplay/android-developer/answer/10787469
- https://support.google.com/googleplay/android-developer/answer/14738291
- https://support.google.com/googleplay/android-developer/answer/10144311
- https://www.revenuecat.com/docs/platform-resources/google-platform-resources/google-plays-data-safety
