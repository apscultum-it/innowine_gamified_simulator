# INNOWINE — D3.5 Gamified Simulator

**Delivery:** playable bilingual decision-based simulator (EN/IT) + trainer guidance + downloadable local evaluation evidence + optional consortium telemetry service. **Version:** 1.0.0-beta, 3 November 2026. **WP3 leader / D3.5 leader:** CULTUM. **Grant reference:** 2026-1-IT01-KA220-VET-000450353.

> IMPORTANT: This is a fully playable **development version**, not a partner-approved final deliverable. Regulatory and technical examples need expert validation by UniFG, the relevant national partners and industry reviewers. The project-wide multilingual target and consortium analytics are not yet delivered merely by publishing these files. The ≥300/≥5,000/≥20% requirements are KPIs to be achieved during actual use, **not achieved results**.

## 1. Open and play now

1. Unzip the package.
2. Double-click **`index.html`**. The game works without installing applications and without an internet connection.
3. Select **EN** or **IT**. Start with scenario **01**, then complete other scenarios and finish with scenario **15**.
4. Open **Evidence / Risultati** to view the individual before/after comparison, export decisions as CSV and download a structured JSON report.

The whole game works with ordinary HTML, CSS and JavaScript. It contains **15 complete scenarios and 49 decisions**, each with three alternatives, a unique explanation for each choice, a learning takeaway and a decision-quality grade. A local per-browser pseudonymous session is generated automatically. No user account is required.

## 2. Publish free of charge on GitHub Pages

1. Sign in to GitHub and create a new **public** repository, for example `innowine-simulator`.
2. Select **Add file → Upload files**. Upload the contents **inside** this package folder: `index.html`, `app.js`, `content.js`, `styles.css`, `config.js`, `assets/`, etc. Make sure `index.html` is at the repository root. GitHub's browser uploader supports drag-and-drop of folders; alternatively upload through GitHub Desktop or Git.
3. **Commit changes**.
4. Open the repository's **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, branch **main**, folder **/(root)**, then **Save**.
5. Open the GitHub Pages URL displayed in Settings → Pages. A typical project-site address is `https://USERNAME.github.io/innowine-simulator/`.

**To update a scenario:** edit `build_content.py` (editable source), regenerate `content.js` by running `python build_content.py`, then upload the updated file to GitHub. Alternatively, edit `content.js` directly if you are comfortable with JSON/JavaScript.

**Embedding in a learning platform:** if the platform permits HTML iframes, embed the published URL in an iframe. Completion tracking inside EduOpen or any LMS requires the LMS administrator to verify its actual integration requirements; no SCORM/LTI certification is claimed here.

## 3. Functional coverage

- 15 scenarios covering production technology, sensory characteristics, quality, resource efficiency, circularity, EU alcohol claims, smart labels, packaging, prices, export, storytelling, accessible wine tourism and incident management.
- 49 decisions; three options each; illustrative stateful impact on five winery indicators: product quality, sustainability, consumer trust, market fit and inclusion.
- Educational feedback and explicit learning points after each answer.
- Baseline assessment (**scenario 01**, five questions) and matched final assessment (**scenario 15**, five questions).
- Browser persistence (`localStorage`), replay, keyboard-friendly buttons, mobile layout, reduced-motion support.
- Local decision-event logging and CSV/JSON exports for audit evidence.
- Optional **Cloudflare Worker + D1** evidence backend in `analytics-worker/` for multisite/multi-device KPIs. This is **not deployed** in the supplied package.
- Original project logo preserved **byte-for-byte** in `assets/INNOWINE_original_logo.png`, including its original Erasmus+ graphic. No separate EU funding banner has been invented or changed.

## 4. Educational scoring and limitations

Each choice receives `grade = 2` (strongly evidence-led decision), `1` (partly helpful but incomplete trade-off) or `0` (avoidable risk). The scenario's percentage score is the mean of `100`, `50`, and `0` points. A **grade-0 answer counts as an error**, while grade-1 answers are separately recorded as partial decisions. Performance meters change by predefined *illustrative* teaching points, not technical measurements of energy consumption, emissions, prices, or real-world safety.

For each learner with both assessments completed:

`relative error reduction (%) = (baseline error rate − final error rate) ÷ baseline error rate × 100`

Each assessment has five questions covering equivalent skill domains: wine claims, environment, pricing, QR/e-label practices, and visitor inclusion. When baseline errors are zero, a relative percentage cannot be calculated, and the report shows **n/a**. Negative results indicate more errors, not improvement. At consortium level, the optional service calculates reduction from **matched completers' pooled errors**, using the latest completed attempt for each of the two assessments. Review the evaluation rubric with project partners before using this as an official impact indicator.

## 5. What is required to meet the D3.5 KPIs

| Indicator | Project target | Evidence mechanism | Status at package delivery |
|---|---:|---|---|
| Complete decision scenarios | ≥15 | 15 scenarios in `content.js` | Implemented, content validation pending |
| Learners complete at least one scenario | ≥300 | Unique pseudonymous IDs with completed attempts | Not yet measured across users |
| Recorded choices | ≥5,000 | Local choice events; optional D1 backend | Logging implemented, aggregate collection not deployed |
| Reduction in error rates | ≥20% | Five-question first and last assessments | Formula implemented, real learning impact untested |

If every learner completes the full simulation, **49 choices per learner** are logged. This describes the software design, not a forecast of participation. Under the assumption of 300 complete users, 14,700 events would be possible; partial users can still contribute choices.

## 6. Privacy and professional validation

All gameplay data stays locally in the browser by default; there is no mandatory account, analytics cookie or third-party script. Browser-local data are visible only in that browser profile and can be exported or deleted. The optional remote evidence service **must** have a documented legal basis, participant notice, retention period, governance procedure and security testing before activation. Pseudonymous user IDs are not automatically anonymous under GDPR. Do not enable it simply to meet reporting targets.

Technical/rule references are linked inside the game's privacy and sources screen. In particular, **Regulation (EU) 2026/471** updates EU nomenclature for reduced/no-alcohol wine. Product categories and labelling also depend on other provisions and national enforcement. This training tool is not a substitute for legal review or laboratory analysis.

The **project-wide** language target mentions IT, ES/CAT, GR, BG, NL and AL; this playable version currently offers fully bilingual **English and Italian**. Translations in the remaining partner languages, scientific/producer review, accessibility testing with target learners and deployment of central statistics remain finalisation tasks.

## 7. Package contents

| File | Purpose |
|---|---|
| `index.html` | Main playable page |
| `styles.css` | Responsive visual design |
| `app.js` | Game logic, scoring, logging, export, language handling |
| `content.js` | 15 bilingual scenarios and 49 decisions |
| `build_content.py` | Editable authoring source to regenerate `content.js` |
| `config.js` | Optional remote logging configuration (OFF by default) |
| `assets/INNOWINE_original_logo.png` | Exact user-supplied INNOWINE project logo |
| `analytics-worker/` | Optional backend, SQL schema and deployment settings |
| `docs/FACILITATOR_GUIDE.md` | VET delivery, rubrics and pilot protocol |
| `docs/SCENARIO_MAP.md` | Structured inventory and learning outcomes |
| `docs/DEPLOY_ANALYTICS.md` | Optional backend setup and GDPR prerequisites |
| `docs/QUALITY_CHECKLIST.md` | Checklist for final consortium approval |

### Partner review and ownership

**CULTUM**: D3.5 development, user experience, integration and evidence methodology. **University of Foggia**: scientific checks on technologies, product analysis and consumer research. **ERGASIA / PGEB**: VET testing and pedagogical relevance. **Innovì / DARe / ANRD / Amico del Vino**: producer reality checks, market and tourism scenarios, business validation, translation/localisation and piloting as relevant. Specific review assignments should be confirmed in the consortium's WP3 implementation plan.

## 8. Sources

- Project application KA220-VET-72C43213, **WP3 pages 49–56**, especially D3.5 pages 50 and 54, and learning objectives.
- INNOWINE Partner Targets and KPIs briefing, **pages 12 and 19**.
- University of Foggia, *Dealcoholized wine: research and initiatives*, 12 October 2026, **pages 3–8**, research design across six markets and evidence-led pricing.
- [Regulation (EU) 2026/471](https://eur-lex.europa.eu/eli/reg/2026/471/oj/eng), official EU wine-sector rules.
- [Commission Notice C/2023/1190](https://eur-lex.europa.eu/eli/C/2023/1190/oj/eng), wine e-labelling Q&A.
- [European Commission: wine labelling (7 December 2023)](https://agriculture.ec.europa.eu/media/news/new-rules-wine-labelling-enter-application-2023-12-07_en).

**No results are represented as officially validated or achieved at this stage.**
