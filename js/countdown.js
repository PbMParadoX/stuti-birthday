/* ================= COUNTDOWN ================= */

const hhEl = document.getElementById('hh');
const mmEl = document.getElementById('mm');
const ssEl = document.getElementById('ss');

let countdownInterval = null;

function getISTTime() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  return new Date(utc + (IST_OFFSET_MINUTES * 60000));
}

function getTargetTime() {
  return new Date(
    TARGET_DATE.year,
    TARGET_DATE.month,
    TARGET_DATE.day,
    TARGET_DATE.hour,
    TARGET_DATE.minute,
    TARGET_DATE.second
  );
}

function startCountdown() {
  const targetTime = getTargetTime();

  countdownInterval = setInterval(() => {
    const nowIST = getISTTime();
    const diff = targetTime - nowIST;

    // If time already passed
    if (diff <= 0) {
      clearInterval(countdownInterval);
      revealNextPhase();
      return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    hhEl.textContent = String(hours).padStart(2, '0');
    mmEl.textContent = String(minutes).padStart(2, '0');
    ssEl.textContent = String(seconds).padStart(2, '0');

  }, 1000);
}

function revealNextPhase() {
  // Hide countdown
  document.getElementById('countdown-screen').classList.add('hidden');

  // Show curtain screen
  document.getElementById('curtain-screen').classList.remove('hidden');

  // Let main.js know
  document.dispatchEvent(new CustomEvent('MIDNIGHT_REACHED'));
}

// Auto start
document.addEventListener('DOMContentLoaded', startCountdown);
