const apps = [
    {
        "title": "discord",
        "snippet": "All-in-one voice and text chat for gamers",
        "icon": "./images/discord/icon.png"
    },
    {
        "title": "inteliJ IDEA",
        "snippet": "Capable & Ergonomic Java IDE",
        "icon": "./images/idea/icon.png"
    },
    {
        "title": "obs studio",
        "snippet": "Free and open source software for live streaming and screen recording",
        "icon": "./images/obs/icon.png"
    },
    {
        "title": "telegram",
        "snippet": "Fast. Secure. Powerful.",
        "icon": "./images/telegram/icon.png"
    },
    {
        "title": "foobar2000",
        "snippet": "foobar2000 is an advanced freeware audio player.",
        "icon": "./images/foobar2000/icon.png"
    },
    {
        "title": "julia",
        "snippet": "The Julia programming language",
        "icon": "./images/julia/icon.png"
    },
    {
        "title": "go",
        "snippet": "The Julia programming language",
        "icon": "./images/go/icon.png"
    },
    {
        "title": "audacity",
        "snippet": "Audio software for multi-track recording and editing",
        "icon": "./images/audacity/icon.png"
    }
]

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

window.addEventListener('DOMContentLoaded', () => {
    const container = selectElement(".apps");
    
    apps.forEach((app) => {
        const element = document.createElement('div')
        element.classList.add('card', 'app');
        element.innerHTML = `<img src="${app.icon}" alt="${app.title}-image"            class="icon">
                                <h5 class="title">${app.title}</h5>
                                <div class="ratings">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>`;

        container.appendChild(element);
    })
})


