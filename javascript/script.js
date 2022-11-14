'use strict';

const header = document.querySelector('header');
const mobileNavButton = document.querySelector('.header__mobile-nav-toggle');
const overlay = document.querySelector('.overlay');

mobileNavButton.addEventListener('click', () => {
    header.classList.toggle('nav-open');
    overlay.classList.toggle('hidden');
})