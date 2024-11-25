const text = 'StarTech';
    const element = document.querySelector('.typing');
    let i = 0;
    let isDeleting = false;

    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100); 
      } else {
        isDeleting = true;
        setTimeout(deleteText, 1000); 
      }
    }

    function deleteText() {
      if (i > 0) {
        element.textContent = text.substring(0, i - 1);
        i--;
        setTimeout(deleteText, 50); 
      } else {
        isDeleting = false;
        setTimeout(type, 1000); 
      }
    }
type();

// xxxxxxxxxxxxxxxxxxxxxxxxxxx

var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

// xxxxxxxxxxxxxxxxxxxxx

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

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Scroll To Section

function scrollToSection(elementId, duration = 1500) {
  const element = document.getElementById(elementId);

  if (element) {
    const startingPosition = window.pageYOffset;
    const targetPosition = element.offsetTop - 22; 
    const distance = targetPosition - startingPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;   


      const progress = currentTime - startTime;   


      const easeInOutQuart = (x) => x < 0.5 ? 8 * x * x * x * x : 1 - 8 * (x - 1) * (x - 1) * (x - 1) * (x - 1);
      const easedProgress = easeInOutQuart(progress / duration);
      window.scrollTo(0, startingPosition + distance * easedProgress);

      if (progress < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

window.onload = function() {
  document.getElementById("container1").style.animation = "fadeIn 1s ease-in-out";
  document.getElementById("container1").style.opacity = 0;
  setTimeout(() => {
    document.getElementById("container1").style.opacity = 1;
  }, 100);
};