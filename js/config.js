/* ================= CONFIG ================= */

// Target birthday time (IST)
const TARGET_DATE = {
  year: 2026,
  month: 0,        // January = 0
  day: 16,
  hour: 0,
  minute: 0,
  second: 0
};

// Timezone offset for IST (UTC +5:30)
const IST_OFFSET_MINUTES = 330;

// Feature toggles (safe fallbacks)
const CONFIG = {
  autoRevealIfPassed: true,
  debug: false
};
