const searchBtn = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-bar");
const showcase = document.querySelector(".showcase");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const toggleMenu = document.querySelector(".toggle-menu");
const menuOverlay = document.querySelector(".menu-overlay");

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('active')
    searchBar.classList.toggle('show-search-bar');
    showcase.classList.toggle('push-down')
    menuOverlay.classList.remove('active');
    toggleMenu.classList.remove('show-toggle-menu')
    hamburgerBtn.classList.remove('active')
})

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active')
    toggleMenu.classList.toggle('show-toggle-menu')
    menuOverlay.classList.toggle('active')
})

menuOverlay.addEventListener('click', (e) => {
    e.currentTarget.classList.remove('active');
    toggleMenu.classList.remove('show-toggle-menu')
    hamburgerBtn.classList.remove('active')
})
