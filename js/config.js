/* ================= CONFIG ================= */

// Target birthday time (IST)
const TARGET_DATE = {
  year: 2026,
  month: 0,        // January = 0
  day: 15,
  hour: 23,
  minute: 5,
  second: 0
  // hour: new Date().getHours(),
  // minute: new Date().getMinutes(),
  // second: new Date().getSeconds() + 5
};

// Timezone offset for IST (UTC +5:30)
const IST_OFFSET_MINUTES = 330;

// Feature toggles (safe fallbacks)
const CONFIG = {
  autoRevealIfPassed: true,
  debug: false
};


