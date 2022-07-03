const selectElement = (selecter) => {
    const element = document.querySelector(selecter);

    if(element) return element
    throw err = new Error(`Element ${selecter} does not exist or type selecter name correctly`);

}

const hamburgerBtn = selectElement(".hamburger-btn");
const toggleMenu = selectElement(".toggle-menu");
const menuOverlay = selectElement(".menu-overlay");
const backBtn = selectElement('.back-btn');
const appTitle = selectElement("#header-title");
const logo = selectElement("#logo");
const appname = selectElement(".appname");
const snippet = selectElement(".snippet");
const appRatings = selectElement('.ratings');
const appBtn = selectElement('#app-btn');
const imgContainer = selectElement('.image-container');
const mainImage = selectElement('#main-image');
const sideImageBar = selectElement('.side-images');

//nav-bar
hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    toggleMenu.classList.toggle('show-toggle-menu');
    menuOverlay.classList.toggle('active');
})

menuOverlay.addEventListener('click', (e) => {
    e.currentTarget.classList.remove('active');
    toggleMenu.classList.remove('show-toggle-menu')
    hamburgerBtn.classList.remove('active')
})

backBtn.addEventListener('click', () => {
    const pathname = JSON.parse(localStorage.getItem('pathName'));
    window.location.href = pathname;
})

const currentApp = JSON.parse(localStorage.getItem('currentApp'));

window.addEventListener('DOMContentLoaded', () => {
    appTitle.textContent = currentApp.title;
    logo.src = currentApp.icon;
    appname.textContent = currentApp.title;
    snippet.textContent = currentApp.snippet;

    let ratings = ['fa-regular', 'fa-regular', 'fa-regular', 'fa-regular', 'fa-regular'];
    for(let i = 0; i < currentApp.rating; i++) {
        ratings.unshift('fa-solid')
        ratings.pop();
    }

    ratings.forEach((rating) => {
        const element = document.createElement('i');
        element.classList.add(rating, 'fa-star');

        appRatings.appendChild(element)
    })

    const span = document.createElement('span');
    span.textContent = '(456)';
    appRatings.appendChild(span);

    if(currentApp.installed){
        appBtn.setAttribute('aria-label', 'danger');
        appBtn.textContent = 'remove';
    }else {
        appBtn.setAttribute('aria-label', 'success');
        appBtn.textContent = 'install'
    }

    const images = currentApp.images;

    if(!Array.isArray(images)) {
        imgContainer.setAttribute('aria-selected', 'false');
        sideImageBar.setAttribute('aria-selected', 'false');
        mainImage.src = images;
    }else {
        mainImage.src = images[0];

        images.forEach((image) => {
            const element = document.createElement('div');
            element.setAttribute('aria-selected', false)
            element.classList.add('side-image');
            element.innerHTML = `<img src="${image}" alt=""></img>`
            sideImageBar.appendChild(element);
        })
    }
    
    const sideImages = document.querySelectorAll('.side-image');
    sideImages[0].setAttribute('aria-selected', true);

    sideImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            mainImage.src = images[index];

            sideImages.forEach(image => {
                image.setAttribute('aria-selected', false);
            })
            image.setAttribute('aria-selected', true);
        })
    })

})