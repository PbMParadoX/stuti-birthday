// Disable right-click
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable inspect-related keyboard shortcuts
document.addEventListener('keydown', function (e) {
  // F12
  if (e.key === 'F12') {
    e.preventDefault();
  }

  // Ctrl + Shift + I / J / C
  if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) {
    e.preventDefault();
  }

  // Ctrl + U (view source)
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
  }
});
