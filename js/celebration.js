document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function createConfetti() {
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * 0.5 + 0.5,
        color: `hsl(${Math.random() * 360}, 80%, 70%)`
      });
    }
  }

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    updateConfetti();
  }

  function updateConfetti() {
    particles.forEach((p) => {
      p.y += p.d * 6;
      if (p.y > canvas.height) {
        p.y = -10;
      }
    });
  }

  function animateConfetti() {
    drawConfetti();
    requestAnimationFrame(animateConfetti);
  }

  // Start confetti when celebration screen becomes visible
  const observer = new MutationObserver(() => {
    if (!document.getElementById('celebration-screen').classList.contains('hidden')) {
      particles = [];
      createConfetti();
      animateConfetti();

      // After a few seconds → move to story intro
      setTimeout(() => {
        document.getElementById('celebration-screen').classList.add('hidden');
        document.getElementById('story-intro').classList.remove('hidden');

        // ✅ ENABLE SCROLLING FROM HERE
        document.body.classList.remove('no-scroll');
        document.body.classList.add('allow-scroll');
      }, 4500);

    }
  });

  observer.observe(document.getElementById('celebration-screen'), {
    attributes: true,
    attributeFilter: ['class']
  });
});
