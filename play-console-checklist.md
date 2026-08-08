# Google Play publishing checklist

## Prepared in the repository

- [x] Name, slug, version `1.0.0`, and `versionCode` `3`.
- [x] Android identifier `com.rabpaulo.liftbook`.
- [x] Project linked to Expo/EAS with the owner and project ID in `app.json`.
- [x] App icon, adaptive icon, store icon, and feature graphic synchronized
  with the current visual identity.
- [x] Android backup disabled to keep local data out of Google Drive.
- [x] Microphone and overlay permissions blocked.
- [x] Explanation and consent shown before camera or media selection.
- [x] In-app privacy screen and health disclaimer.
- [x] Separate user-initiated CSV backups for Bodyweight, Cardio, and Training.
- [x] Production EAS profile configured for AAB with automatic increment.
- [x] English descriptions and release notes updated for progress charts, set
  controls, widget, backups, and local privacy.
- [x] Store icon and feature graphic in the required dimensions.
- [x] Draft Data safety and Health apps declarations re-audited on August 8,
  2026.
- [x] Bodyweight widget discovery and responsive 4×2, 2×2, and 2×1 layouts
  validated on a Samsung Android device.
- [x] Four real 1080 × 1920 phone screenshots prepared without system bars,
  mock data, or overlaid promotional text.

## Depends on the publisher

- [ ] Create or verify a Google Play developer account as an
  **organization** and complete verification. Google directs accounts offering
  health apps to choose this type; verification requires a D-U-N-S number and
  organization documents.
- [ ] Confirm in Play Console that the package name is available and create the
  app.
- [ ] Decide whether to keep the name. A recent public listing already exists
  under the name **LiftBook** (`com.liftbook.app`):
  https://play.google.com/store/apps/details?id=com.liftbook.app. Titles are not
  exclusive, but this creates a risk of confusion, poor discoverability, and a
  potential trademark conflict.
- [ ] Add `liftbook.support@gmail.com` as the listing's public contact. The
  privacy policy already uses this address.
- [ ] Host the landing page and `privacy-policy/index.html` over HTTPS at a
  public, active URL without login or geoblocking and not as a PDF. Enter the
  policy's direct URL in Play Console and test it in a private window.
- [ ] Confirm that the public developer name in Play Console matches
  `rabpaulodev`, or update that identification in the policy before publishing.
- [ ] Identify the hosting provider in the policy if it processes technical
  logs beyond what is necessary to deliver and protect the site.
- [ ] Confirm the publisher's access to the `@rabpaulodev/liftbook` project and
  securely configure or recover production credentials.
- [ ] Generate the final signed AAB with production credentials and enable Play
  App Signing on the first upload.
- [ ] Confirm authorization to publish the real values visible in the
  screenshots and upload the four images to Play Console in numerical order.
- [ ] Complete Data safety, Health apps, content, target audience, ads, and app
  access declarations according to `data-safety.md`.
- [ ] Choose countries and free/paid pricing, and accept the applicable terms.
- [ ] Submit to a test track, run the pre-launch report, and fix any issues
  before production.
- [ ] Validate video recording, playback, permissions, and cleanup on a physical
  Android device.
- [ ] Validate the cardio timer, PNG preview capture, and native sharing on a
  physical Android device.
- [ ] Validate selection, export, and restoration of all three CSV backup types
  on a physical Android device.
- [ ] Validate the widget deep link and hourly update, plus discovery and
  responsive sizes on launchers other than Samsung's.

Official references:

- https://support.google.com/googleplay/android-developer/answer/17190352
- https://support.google.com/googleplay/android-developer/answer/13634885
- https://support.google.com/googleplay/android-developer/answer/14151465
- https://support.google.com/googleplay/android-developer/answer/14738291
- https://support.google.com/googleplay/android-developer/answer/9866151
- https://support.google.com/googleplay/android-developer/answer/6112435
