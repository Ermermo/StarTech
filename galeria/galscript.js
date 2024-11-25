let currentImageIndex = 0;
const images = [
    '/arquivos/galeriafotos/logotipofinal.png',
    '/arquivos/galeriafotos/img1.jpeg',
    '/arquivos/galeriafotos/img2.jpeg',
    '/arquivos/galeriafotos/img3.jpeg',
    '/arquivos/galeriafotos/img4.jpeg',
    '/arquivos/galeriafotos/img5.jpeg',
    '/arquivos/galeriafotos/img6.jpeg',
    '/arquivos/galeriafotos/img7.jpeg', 
];

function updateImage() {
    const imageElement = document.getElementById('gallery-image');
    imageElement.src = images[currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    updateImage();
}

function nextImage() {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    updateImage();
}



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

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

window.onload = function() {
    document.getElementById("gallery-container").style.animation = "fadeIn 1s ease-in-out";
    document.getElementById("gallery-container").style.opacity = 0;
    setTimeout(() => {
      document.getElementById("gallery-container").style.opacity = 1;
    }, 100);
};
