//Dark-mode

document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggle-button');
    const toggleIcon = document.getElementById('toggle-icon');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            toggleIcon.src = '/arquivos/svgs/modes/moon-svgrepo-com.svg'; 
            toggleIcon.alt = 'Modo Escuro';
        } else {
            toggleIcon.src = '/arquivos/svgs/modes/sun-svgrepo-com.svg'; 
            toggleIcon.alt = 'Modo Claro';
        }
    });
});

// xxxxxxxxxxxxxxxxxxxxxxxxxx

window.onload = function() {
    document.getElementById("formulario").style.animation = "fadeIn 1s ease-in-out";
    document.getElementById("formulario").style.opacity = 0;
    setTimeout(() => {
      document.getElementById("formulario").style.opacity = 1;
    }, 100);
};

// xxxxxxxxxxxxxxxxxxxxxxxxx


const light = document.createElement('div');
light.classList.add('light');
document.body.appendChild(light);


function moveLight(event) {
  light.style.left = event.clientX + 'px';
  light.style.top = event.clientY + 'px';
}


document.addEventListener('mousemove', moveLight);