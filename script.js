const countBtn = document.getElementById('countBtn');
const counterValue = document.getElementById('counterValue');
let contador = 0;

countBtn.addEventListener('click', function() {
    contador++;
    counterValue.textContent = contador;
});

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Modo Normal';
    } else {
        themeToggle.textContent = 'Cambiar Tema';
    }
});
