const toggleButton = document.getElementById('toggle-theme');

function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
    toggleButton.style.color = 'white';
  } else {
    document.body.classList.remove('dark-mode');
    toggleButton.textContent = '🌙';
    toggleButton.style.color = 'black';
  }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');
}

toggleButton.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    applyTheme('light');
    localStorage.setItem('theme', 'light');
  } else {
    applyTheme('dark');
    localStorage.setItem('theme', 'dark');
  }
});