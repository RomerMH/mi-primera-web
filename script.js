const countBtn = document.getElementById('countBtn');
const counterValue = document.getElementById('counterValue');
let count = 0;

countBtn.addEventListener('click', () => {
    count++;
    counterValue.textContent = count;
});

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        themeToggle.textContent = 'Modo Oscuro 🌙';
    } else {
        themeToggle.textContent = 'Modo Claro ☀️';
    }
});
