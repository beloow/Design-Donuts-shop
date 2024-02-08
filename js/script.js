// ============================================= Navigation =============================================

let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else { 
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
        }
    });

/*======================================================
                        Audio player
  ======================================================*/

const button = document.querySelector('.play-button');
const audio = document.querySelector('.audio');
const icon = document.querySelector('.button-icons');

button.addEventListener('click', () =>{
    audio.volume = 0.02;
    player();
})

function player(){
    if (audio.paused) {
        audio.play();
        button.classList.toggle("play");
        icon.classList.replace("fa-volume-xmark", "fa-volume-high");
     } else {
        audio.pause();
        button.classList.toggle("play");
        icon.classList.replace("fa-volume-high","fa-volume-xmark");
     }
}



/*======================================================
                        Scroll Reveal
  ======================================================*/


ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.donut-one, .donut-two, .donut-three, .donut-four, .cane-image, .img-box, .contact-section-container, .footer-content', { origin: 'bottom' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content, .heading', { origin: 'right' });