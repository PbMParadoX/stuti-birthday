document.addEventListener('DOMContentLoaded', () => {
  const blowBtn = document.getElementById('blow-candle-btn');
  const wishBtn = document.getElementById('wish-made-btn');
  const candleText = document.getElementById('candle-text');
  const flames = Array.from(document.querySelectorAll('.flame'));

  if (!blowBtn || !flames.length) return;

  /* ================= BLOW CANDLES ================= */

  blowBtn.addEventListener('click', () => {
    blowBtn.disabled = true;

    /*
      Candle layout (DOM order):
      24 candles → 4 rows → 6 per row

      Row index mapping:
      0–5   → top
      6–11  → 2nd
      12–17 → 3rd
      18–23 → bottom

      Animation:
      Bottom → Top
      Center → Edges (semi-circle)
    */

    const rows = [
      flames.slice(18, 24), // bottom row
      flames.slice(12, 18),
      flames.slice(6, 12),
      flames.slice(0, 6)    // top row
    ];

    const ROW_DELAY = 700; // slow & emotional
    const ARC_DELAY = 140; // semi-circle curve

    rows.forEach((row, rowIndex) => {
      const centerIndex = (row.length - 1) / 2;

      row.forEach((flame, i) => {
        const delay =
          rowIndex * ROW_DELAY +
          Math.abs(i - centerIndex) * ARC_DELAY;

        setTimeout(() => {
          flame.classList.add('blown');
        }, delay);
      });
    });

    // Total animation duration
    const totalDuration =
      rows.length * ROW_DELAY +
      (rows[0].length / 2) * ARC_DELAY +
      400;

    // Reveal meaning text + wish button
    setTimeout(() => {
      candleText.classList.remove('hidden');
      wishBtn.classList.remove('hidden');
    }, totalDuration);
  });

  /* ================= MOVE TO CELEBRATION ================= */

  wishBtn.addEventListener('click', () => {
    document.getElementById('cake-screen').classList.add('hidden');
    document.getElementById('celebration-screen').classList.remove('hidden');
  });
});
