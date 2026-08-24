# Google Play Premium v1 publishing checklist

Last updated: 2026-08-24. Keep all Premium server/client flags disabled until every
production and physical-device gate below has signed evidence.

## Repository and public-surface preparation

- [x] Production Android identifier is `com.rabpaulo.liftbook`.
- [x] Android system app-data backup is disabled.
- [x] Microphone and overlay permissions are blocked.
- [x] Public Privacy Policy, Terms & Subscriptions, and account-deletion pages are
  prepared in this repository.
- [x] Store descriptions no longer claim that Liftbook never uses accounts or a backend.
- [x] Data Safety and Health Apps draft reflects optional account, purchase, and cloud data.
- [ ] Merge this branch and confirm all three legal URLs are public over HTTPS without
  login, geoblocking, or broken deep links.
- [ ] Enter and save the direct privacy and account-deletion URLs in Play Console.

## Production identity and services

- [ ] Verify the Play app, package, store listing identity, developer identity, support
  email, countries, pricing, and production version/versionCode.
- [ ] Record both the upload/release SHA-1 and Play App Signing SHA-1; register them in
  the production Firebase Android app and OAuth configuration. Register the Play signing
  SHA-256 for App Check when enabled.
- [ ] Verify the production web OAuth client ID and a Play-installed Google sign-in.
- [ ] Verify the production Firebase project ID/number, Android app, bucket, immutable
  Firestore/Storage location, Functions region, billing account, IAM, rules, indexes,
  cleanup scheduler, Secret Manager bindings, and App Check rollout.
- [ ] Verify the production RevenueCat project/app/package, public SDK key, Play service
  account validator, RTDN/Pub/Sub, `premium` entitlement, products/base plans, current
  offering, restore/transfer behavior, webhook URL, Authorization value, HMAC secret,
  secret API key, and production/sandbox handling.
- [ ] Prove development and production Firebase, OAuth, Storage, RevenueCat, webhooks,
  secrets, EAS environments, logs, and test accounts are isolated.

## Billing, budgets, monitoring, and support

- [ ] Configure Google Cloud/Firebase budget thresholds and alert recipients. Document
  that budget alerts are delayed operational warnings, not hard spending caps.
- [ ] Configure privacy-safe metrics and alerts for auth outcomes, purchase/validation
  lifecycle, upload/download outcomes and bytes, failure categories, quota rejection,
  webhook lag/signature/backlog, cleanup retries, deletion SLA, Functions error/latency,
  Firestore/Storage usage, and billing thresholds.
- [ ] Confirm log retention, access control, and exclusion of private content and raw IDs.
- [ ] Exercise support procedures for restore purchase, wrong Google/Play account,
  cloud quota, failed restore, active-device takeover, expiry recovery, and deletion.
- [ ] Confirm rollback disables affected flags without cancelling subscriptions or
  deleting local data or already-stored backups.

## Console declarations

- [ ] Submit and archive Data Safety answers from `data-safety.md` after inspecting the
  production artifact and current processor integrations.
- [ ] Submit and archive the Health Apps declaration without medical/readiness claims.
- [ ] Complete Ads, App access, Content rating, Target audience, permissions, and all
  other current policy declarations.
- [ ] Confirm subscription listing, localized benefits, recurring-billing disclosure,
  base plans, cancellation link, privacy URL, Terms URL, and support contact.

## Track rollout and physical acceptance

- [ ] Install the exact production-signed AAB from the Play internal track using license
  testers; verify package, signer, version, OAuth account, Firebase project/bucket/region,
  RevenueCat environment/offering/products, legal URLs, and listing.
- [ ] Verify approved/declined/pending purchase, renewal, cancellation, grace, hold,
  expiry, controlled real refund or explicitly labelled simulation, restore, reinstall,
  account switching, and offline entitlement reconciliation.
- [ ] Verify all free/Premium limits and ranges, custom dates, ratings/scores,
  distribution/progression, and over-limit local data after expiry.
- [ ] Verify small/large cloud archives, photos/videos, quotas, foreground interruption,
  cancellation/retry, corrupt/missing objects, validation/storage failure, two-device
  restore/takeover, and 30-day recovery/cleanup simulation.
- [ ] Verify authenticated and support-assisted deletion, cloud/object removal,
  RevenueCat identity removal, Firebase Auth removal, local sign-out, and separate Play
  subscription management.
- [ ] Verify manual `.liftbook` and module CSV transfer remain free and complete.
- [ ] Complete TalkBack, focus order, touch targets, large text/display scale, light/dark,
  screen-reader chart alternatives, progress cancellation, and error recovery audit.
- [ ] Promote first to internal/license testers, then a small closed cohort. Broaden only
  after monitoring and support evidence is healthy. Do not advertise disabled features.

Official references are captured in the app repository's
`docs/premium-release-compliance-research.md` and release runbook.
