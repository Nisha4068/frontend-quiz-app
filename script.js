const toggle = document.getElementById('toggleTheme');
const body = document.body;

toggle.addEventListener('change', () => {
  body.classList.toggle('dark');
});
