document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.story-section');
  if (!sections.length) return;

  /* ================= HEARTS ================= */

  const heartsLayer = document.createElement('div');
  heartsLayer.className = 'hearts-layer';
  document.body.appendChild(heartsLayer);

  function spawnHearts(count = 4) {
    for (let i = 0; i < count; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.bottom = '10vh';
      heart.style.animationDelay = Math.random() * 0.8 + 's';
      heartsLayer.appendChild(heart);
      setTimeout(() => heart.remove(), 4500);
    }
  }

  /* ================= BACKGROUND THEMES ================= */

  const bgThemes = ['bg-soft-pink', 'bg-peach', 'bg-lavender', 'bg-warm'];

  function applyBackground(index) {
    document.body.classList.remove(...bgThemes);
    document.body.classList.add(bgThemes[index % bgThemes.length]);
  }

  /* ================= OBSERVER ================= */

  sections.forEach((section, index) => {
    section.dataset.index = index;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          revealSection(entry.target);
        }
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach(section => observer.observe(section));

  /* ================= REVEAL LOGIC ================= */

  function revealSection(section) {
    if (section.classList.contains('visible')) return;

    section.classList.add('visible');
    applyBackground(Number(section.dataset.index));
    spawnHearts(4);

    /* Text stagger */
    const lines = section.querySelectorAll('.story-text p');
    lines.forEach((line, i) => {
      setTimeout(() => {
        line.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        line.style.opacity = '1';
        line.style.transform = 'translateY(0)';
      }, i * 200);
    });

    /* Boy & Girl animation */
    const boy = section.querySelector('.boy');
    const girl = section.querySelector('.girl');

    if (boy) {
      boy.style.opacity = '1';
      boy.style.transform = 'translateY(0)';
    }

    if (girl) {
      girl.style.opacity = '1';
      girl.style.transform = 'translateY(0)';

      // Blur → clear reveal
      setTimeout(() => {
        girl.classList.add('revealed');
      }, 400);
    }
  }
});
