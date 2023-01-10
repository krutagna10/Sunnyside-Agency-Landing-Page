'use strict';

const navList = document.querySelector('.header__nav-list');
const navToggle = document.querySelector('.header__mobile-nav-toggle');
const overlay = document.querySelector('.overlay');

navToggle.addEventListener('click', () => {
    const visibility = navList.getAttribute('data-visible');
    if (visibility === 'false') {
        navList.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
        overlay.classList.remove('hidden');
    } else {
        navList.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
        overlay.classList.add('hidden');
    }
})

// // Function for hiding mobile navigation
// const hideMobileNavigation = () => {
//     header.classList.remove('nav-open');
//     overlay.classList.add('hidden');
// };
//
// // When the user clicks on navigation button
// mobileNavButton.addEventListener('click', () => {
//     header.classList.toggle('nav-open');
//     overlay.classList.toggle('hidden');
// });
//
// // When the user clicks on escape key
// document.addEventListener('keydown', (event) => {
//     if (event.key === 'Escape') {
//         hideMobileNavigation();
//     }
// });
//
// // When the width is greater than 768 pixels
// window.addEventListener('resize', () => {
//     if (window.innerWidth > 768) {
//         hideMobileNavigation()
//     }
// });

