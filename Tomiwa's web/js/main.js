function setTheme(theme) {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark-mode');
    localStorage.setItem('preferred-theme', 'dark');
  } else {
    root.classList.remove('dark-mode');
    localStorage.setItem('preferred-theme', 'light');
  }
}
function toggleTheme() {
  const currentTheme = document.documentElement.classList.contains('dark-mode') ? 'light' : 'dark';
  setTheme(currentTheme);
}
const preferredTheme = localStorage.getItem('preferred-theme');
if (preferredTheme === 'dark') {
  setTheme('dark');
}
const darkModeButton = document.querySelector('.dark-mode');
if (darkModeButton) {
  darkModeButton.addEventListener('click', toggleTheme)
}
