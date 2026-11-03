-- D3.5 optional pseudonymous evidence store. No person name or email.
CREATE TABLE IF NOT EXISTS decisions (
  event_id TEXT PRIMARY KEY NOT NULL,
  learner_id TEXT NOT NULL,
  attempt_id TEXT NOT NULL,
  scenario INTEGER NOT NULL CHECK (scenario BETWEEN 1 AND 15),
  step INTEGER NOT NULL CHECK (step BETWEEN 1 AND 5),
  grade INTEGER NOT NULL CHECK (grade BETWEEN 0 AND 2),
  skill TEXT NOT NULL,
  choice TEXT NOT NULL,
  occurred_at TEXT NOT NULL,
  role TEXT NOT NULL,
  app_version TEXT NOT NULL,
  recorded_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_decisions_learner ON decisions(learner_id,scenario,attempt_id);
CREATE INDEX IF NOT EXISTS idx_decisions_time ON decisions(recorded_at);
-- Retention example: delete records older than an approved time window:
-- DELETE FROM decisions WHERE recorded_at < datetime('now', '-24 months');
