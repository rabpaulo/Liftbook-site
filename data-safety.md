# Google Play — proposed answers

These answers reflect the local code audited on August 8, 2026. They must be
reconfirmed if a backend, analytics, ads, crash reporting, login,
synchronization, or new SDKs are added.

## Data safety

- Does the app collect or share any data type required by the form? **No**.
- Rationale: the app does not transmit journal records to the developer or
  third parties. The SQLite database, preferences, private Android widget
  snapshot, and copied videos are processed only on the device. Android backup
  is disabled.
- When the user chooses **Share PNG**, they send a filtered summary to the
  system share sheet and select the destination. This user-initiated export
  does not send data to the developer; the app removes the temporary file when
  possible.
- When the user chooses a **Bodyweight**, **Cardio**, or **Training** CSV backup
  in Settings, they send the records from that area to the system share sheet
  and select the destination. The CSV can contain health and fitness data,
  comments, and local attachment addresses, but it does not embed photos or
  videos. This export is also user-initiated, does not send data to the
  developer, and removes the temporary file when possible.
- Data sharing: **none**.
- User accounts: **none**.
- Account deletion request: **not applicable**.
- Data in transit: **not applicable**, because the app does not transmit
  journal data.

Local data handled by the app:

- Health and fitness: bodyweight, goals/phases, strength training history, and
  cardio sessions/goals.
- Photos: optional local reference in bodyweight entries.
- Videos: optional local file associated with a set.
- User content: set comments.
- Preferences: theme, weight unit, distance unit, and training weight
  increment.
- Android widget: private copy of the current week's average and bodyweight
  values, with the selected unit. The widget does not open SQLite or send this
  snapshot off the device.

On-device-only processing is not declared as collection when data never leaves
the device. This conclusion depends on keeping `android.allowBackup: false` and
not introducing transmission through future SDKs.

## Health apps declaration

Indicate that the app offers health features and select:

- **Activity and fitness** — logging strength training, sets, weights,
  repetitions, RIR, and cardio activities.
- **Nutrition and weight management** — logging bodyweight and loss,
  maintenance, or gain goals.

The app is not a medical device. The store description and the
`Settings > Privacy & health` screen contain the required disclaimer and
recommend consulting a healthcare professional.

## Other declarations

- Ads: **contains no ads**.
- App access: **all features are available without login**.
- Target audience: confirm in Play Console. The conservative recommendation for
  launch is to select only **18 and over**.
- News, government, finance, gambling, or dating content: **no**.
- Sensitive permissions used: camera and media selection, initiated only by a
  user action and preceded by an explanation in the app.

Official references:

- https://support.google.com/googleplay/android-developer/answer/10787469
- https://support.google.com/googleplay/android-developer/answer/14738291
- https://support.google.com/googleplay/android-developer/answer/10144311
