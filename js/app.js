//select elements
const selectElement = (selecter) => {
    const element = document.querySelector(selecter);

    if(element) return element
    throw err = new Error('Element does not exist or type selecter name correctly');

}

const searchBtn = selectElement(".search-btn");
const searchBar = selectElement(".search-bar");
const showcase = selectElement(".showcase");
const hamburgerBtn = selectElement(".hamburger-btn");
const toggleMenu = selectElement(".toggle-menu");
const menuOverlay = selectElement(".menu-overlay");
const slider = selectElement(".slider");
const sliderItems = document.querySelectorAll(".slider-item");
const nextBtn = selectElement(".next-btn");
const prevBtn = selectElement(".prev-btn");
const dots = document.querySelectorAll(".dot");

//nav-bar
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


//slider
let count = 0;

nextBtn.addEventListener('click', () => {
    if(count === sliderItems.length - 1){
        count = 0;
        slider.style.transform = `translateX(${-100 * count}vw)`;
    }
    else {
        slider.style.transform = `translateX(${-100 * (count + 1)}vw)`;
        count++;
    }
    
    dots.forEach((dot) => {
        dot.setAttribute("aria-selected", false);
    })
    dots[count].setAttribute("aria-selected", true);
    
})

prevBtn.addEventListener('click', () => {
    if(count === 0){
        count = 4;
        slider.style.transform = `translateX(${-100 * count}vw)`;
    }
    else {
        slider.style.transform = `translateX(${-100 * (count - 1)}vw)`;
        count--;
        console.log(count);
    }

    dots.forEach((dot) => {
        dot.setAttribute("aria-selected", false);
    })
    dots[count].setAttribute("aria-selected", true);
    
})

