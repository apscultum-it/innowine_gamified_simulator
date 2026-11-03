# Optional consortium KPI collection with Cloudflare Workers + D1

**Default:** OFF. The playable game is independent of this service. This backend is supplied as deployable **source code**, not as a running service. Do not activate it for participants without consortium approval of a lawful basis, privacy notice, retention policy, security protections and provider arrangements.

## Prerequisites

- A Cloudflare account with Workers and D1 access.
- Node.js and npm (for the `wrangler` command-line utility).
- Your own GitHub Pages origin (for example `https://YOUR_USERNAME.github.io`).
- A published privacy notice approved by the consortium and legally appropriate participant information/consent process.

## Setup

1. `cd analytics-worker`
2. `npx wrangler login`
3. `npx wrangler d1 create innowine-d35`
4. Copy the returned `database_id` into `wrangler.toml`. Set `ALLOWED_ORIGIN` to the **exact origin** of the published simulator, e.g. `https://USERNAME.github.io` (no trailing slash, no path).
5. `npx wrangler d1 execute innowine-d35 --remote --file=./schema.sql`
6. `npx wrangler secret put ADMIN_TOKEN` and enter a long unique secret kept **out** of GitHub. This secret only protects the administration endpoints.
7. `npx wrangler deploy` and copy the resulting Worker URL.
8. In the **web game's** `config.js`, set `telemetryEndpoint: 'https://YOUR-WORKER.workers.dev/event'` and `privacyPolicyUrl: 'https://YOUR-PUBLISHED-PRIVACY-POLICY'`.
9. Commit the updated `config.js` and allow your GitHub Pages site to publish. Open the Evidence panel and opt in explicitly. The simulator will upload pending local events only with consent.

## Server endpoints

| Endpoint | Method | Purpose | Authentication |
|---|---|---|---|
| `/health` | GET | Basic service status | Public |
| `/event` | POST | Validate and record a decision | Allowed site origin; explicit client opt-in |
| `/admin/summary` | GET | Consortium KPIs and cohort comparison | `Authorization: Bearer ADMIN_TOKEN` |
| `/admin/events?limit=1000&offset=0` | GET | Page through recorded events for formal analysis | Same admin token |

Example secure command (do not publish the secret in screenshots/logs):

```bash
curl -H "Authorization: Bearer $ADMIN_TOKEN" "https://YOUR-WORKER.workers.dev/admin/summary"
```

At `/admin/summary`:
- `unique_completers`: distinct pseudonymous learner IDs with at least one fully completed attempt.
- `choice_events`: number of unique recorded decision events.
- `paired_users`: learners with a complete five-question scenario 01 and a complete scenario 15.
- `cohort_error_reduction_percent`: relative reduction calculated from the pooled grade-0 error counts in the **latest completed** pair per learner. Null if no initial errors.

These figures require a documented evaluation method, duplicate-user analysis and independent project review before being represented as results. A learner clearing browser data may get a new ID; this is not guaranteed proof of a unique human participant.

## Mandatory operational safeguards before pilot

- Publish data-controller, purpose, legal basis, recipient/provider, retention and withdrawal/deletion arrangements as required.
- Consider that pseudo-anonymous user IDs, server timestamps and hosting logs can be personal data. No data collection is risk-free.
- Complete a data minimisation and security review; restrict administrative access; rotate secrets.
- Implement production abuse/rate limiting (e.g. Cloudflare WAF) and monitoring to mitigate forged public submissions; origin checks alone are not authentication.
- Configure scheduled retention deletion (the commented SQL in `schema.sql` is an **example only**; choose the approved duration).
- Establish an actual procedure for access, deletion, portability and participant withdrawal requests.
- Do not put admin tokens, API passwords or sensitive identifiers in `config.js`, `wrangler.toml` or GitHub source.

The remote reporting service is optional; without it, the game's CSV/JSON logs can be collected through a separately governed workshop protocol.
