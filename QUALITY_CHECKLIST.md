# D3.5 – Quality assurance and release checklist

**Status: working bilingual playable beta; technical and consortium validation pending.**

## Functional checks

- [x] 15 independent realistic decision scenarios present.
- [x] 49 decision prompts with three alternatives each; 147 feedback messages.
- [x] Score, graded explanation, learning takeaway and five illustrative enterprise indicators.
- [x] Start, replay, progress, evidence dashboard and mobile-responsive layout.
- [x] Matching initial (01) and final (15) assessments, five questions each.
- [x] Error counts and relative reduction (guard for zero-error baseline).
- [x] Local choice-event persistence and CSV/JSON exports.
- [x] Native bilingual EN/IT authored content and interface.
- [x] Source project logo retained without modification.
- [x] Remote aggregation source code provided; disabled by default.
- [ ] Live multi-user backend deployed, protected and tested with the partner legal/privacy lead.
- [ ] Live collection validates ≥300 distinct completers and ≥5,000 logged choices.
- [ ] Empirical cohort analysis verifies ≥20% error reduction.
- [ ] WP3 multilingual target met with translation review across partner languages.

## Expert validation

- [ ] UniFG approves scientific content and quality-management scenarios.
- [ ] Wine-sector technical reviewer checks 2026 regulatory thresholds, terminology and national variations.
- [ ] Producers validate costs, timeframes, trade-offs and plausibility of alternative choices.
- [ ] Amico del Vino / Innovì review marketing, consumer segmentation, pricing and export cases.
- [ ] ERGASIA / PGEB test pedagogical sequencing and learner clarity.
- [ ] Accessibility check with real keyboard/screen-reader and mobile users; WCAG-oriented remediation.
- [ ] Translation/terminology review by all target-country partners.
- [ ] Full privacy documentation, retention schedule and security assessment.

## Test cases to repeat before every publication

1. **Fresh profile:** open `index.html`, inspect 15 navigation entries and start scenario 01.
2. **Scoring:** select any answer, confirm grade-specific feedback and metric movement, proceed to results.
3. **Replays:** replay a completed scenario and check that the most recent completion replaces its previous result while event logs preserve both attempts.
4. **Comparability:** complete 01 with at least one grade-0 answer; complete 15 with fewer errors; check positive reduction. Test a higher final error rate (negative reduction).
5. **Zero baseline:** finish 01 with no grade-0 answers and then 15; comparison must be `n/a`, not infinity.
6. **Exports:** download CSV and JSON and verify 11 event fields including attempt IDs.
7. **Persistence:** refresh the browser after a choice and check that the session and decision history persist.
8. **Mobile:** test 375px viewport, side navigation and options with a touchscreen.
9. **Keyboard:** navigate the entire game with Tab, Shift+Tab, Enter/Space.
10. **Privacy:** with `telemetryEndpoint: ''`, verify no third-party requests or tracking.
11. **Aggregation:** on a legally authorised test backend, record multiple users, verify unique completions, event counts and cohort reduction; then verify data deletion policy.

Any content change requires regenerating `content.js`, source review and regression checks. Versions and reviewers should be documented in the project repository.
