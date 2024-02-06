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
