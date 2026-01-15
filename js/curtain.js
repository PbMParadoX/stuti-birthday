document.addEventListener('DOMContentLoaded', () => {
  const curtainScreen = document.getElementById('curtain-screen');
  const openCurtainBtn = document.getElementById('open-curtain-btn');

  if (!openCurtainBtn || !curtainScreen) return;

  openCurtainBtn.addEventListener('click', () => {
    curtainScreen.classList.add('open');

    setTimeout(() => {
      curtainScreen.classList.add('hidden');
      document.getElementById('cake-screen').classList.remove('hidden');
    }, 1700);
  });
});
