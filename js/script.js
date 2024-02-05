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

//======================================== Toggle Menu Icon ========================================
// let toggleIcon = document.querySelector('.menuIcon');

// toggleIcon.addEventListener('click', () => {
//     if (toggleIcon.className != 'menuIcon toggle') {
//         toggleIcon.className += ' toggle';
//     } else {
//         toggleIcon.className = 'menuIcon';
//     }
// });

window.onscroll = () => {

    /*==================== scroll sections active link ====================*/
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 120;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                // document.querySelector('#menu a[href*=' + id + ']').classList.add('active');
            })
        }
    })
    /*==================== stiky navbar ====================*/
    let header = document.querySelector('header');

    // header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    navbar.classList.remove('active');
};