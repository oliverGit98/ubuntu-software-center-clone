const apps = [
    {
        "title": "discord",
        "snippet": "All-in-one voice and text chat for gamers",
        "icon": "./images/discord/icon.png",
        "installed": true,
        "rating": 4,
        "size": "150 MB",
        "images": ["./images/discord/image1.jpg", "./images/discord/image2.jpg", "./images/discord/image3.jpg", "./images/discord/image4.jpg", "./images/discord/image5.webp"]
    },
    {
        "title": "intelliJ IDEA",
        "snippet": "Capable & Ergonomic Java IDE",
        "icon": "./images/idea/icon.png",
        "installed": true,
        "rating": 5,
        "size": "930 MB",
        "images": ["./images/idea/image1.jpg", "./images/idea/image2.jpg", "./images/idea/image3.png"]
    },
    {
        "title": "obs studio",
        "snippet": "Free and open source software for live streaming and screen recording",
        "icon": "./images/obs/icon.png",
        "installed": false,
        "rating": 3,
        "size": "570 MB",
        "images": ["./images/obs/image1.jpg", "./images/obs/image2.webp", "./images/obs/image3.jpg"]
    },
    {
        "title": "Stellarium",
        "snippet": "Desktop Planetarium",
        "icon": "./images/stellarium/icon.png",
        "installed": true,
        "rating": 4,
        "size": "140 MB",
        "images": ["./images/stellarium/image1.jpg", "./images/stellarium/image2.png", "./images/stellarium/image3.jpg", "./images/stellarium/image4.jpg"]
    },
    {
        "title": "telegram",
        "snippet": "Fast. Secure. Powerful.",
        "icon": "./images/telegram/icon.png",
        "installed": true,
        "rating": 5,
        "size": "240 MB",
        "images": ["./images/telegram/image1.jpg", "./images/telegram/image2.webp", "./images/telegram/image3.jpeg"]
    },
    {
        "title": "foobar2000",
        "snippet": "foobar2000 is an advanced freeware audio player.",
        "icon": "./images/foobar2000/icon.png",
        "installed": false,
        "rating": 4,
        "size": "160 MB",
        "images": "./images/foobar2000/image.jpg"
    },
    {
        "title": "julia",
        "snippet": "The Julia programming language",
        "icon": "./images/julia/icon.png",
        "installed": false,
        "rating": 3,
        "size": "380 MB",
        "images": ["./images/julia/image1.jpg", "./images/julia/image2.png", "./images/julia/image3.webp", "./images/julia/image4.jpeg"]
    },
    {
        "title": "audacity",
        "snippet": "Audio software for multi-track recording and editing",
        "icon": "./images/audacity/icon.png",
        "installed": false,
        "rating": 4,
        "size": "160 MB",
        "images": "./images/audacity/image.jpg"
    }
]

const categories = [
    {
        "title": "art and design",
        "icon": "fa-solid fa-brush"
    },
    {
        "title": "books and reference",
        "icon": "fa-solid fa-book"
    },
    {
        "title": "Development",
        "icon": "fa-solid fa-wrench"
    },
    {
        "title": "Devices and ioT",
        "icon": "fa-solid fa-tablet"
    },
    {
        "title": "Education",
        "icon": "fa-solid fa-graduation-cap"
    },
    {
        "title": "Entertainment",
        "icon": "fa-solid fa-film"
    },
    {
        "title": "Finance",
        "icon": "fa-solid fa-bitcoin-sign"
    },
    {
        "title": "Games",
        "icon": "fa-solid fa-chess"
    },
    {
        "title": "health and fitness",
        "icon": "fa-solid fa-heart-pulse"
    },
    {
        "title": "music and audio",
        "icon": "fa-solid fa-music"
    },
    {
        "title": "news and weather",
        "icon": "fa-solid fa-sun"
    },
    {
        "title": "personalisation",
        "icon": "fa-solid fa-circle-user"
    },
    {
        "title": "photo and video",
        "icon": "fa-solid fa-photo-film"
    },
    {
        "title": "productivity",
        "icon": "fa-solid fa-circle-check"
    },
    {
        "title": "science",
        "icon": "fa-solid fa-flask"
    },
    {
        "title": "security",
        "icon": "fa-solid fa-shield"
    },
    {
        "title": "server and cloud",
        "icon": "fa-solid fa-server"
    },
    {
        "title": "social",
        "icon": "fa-solid fa-message"
    },
    {
        "title": "utilities",
        "icon": "fa-solid fa-box"
    }
]

//select elements
const selectElement = (selecter) => {
    const element = document.querySelector(selecter);

    if(element) return element
    throw err = new Error(`Element ${selecter} does not exist or type selecter name correctly`);

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

setInterval(() => {

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

}, 5000)

//Editors picks
window.addEventListener('DOMContentLoaded', () => {
    const container = selectElement(".apps");

    
    apps.forEach((app, index) => {
        
        let ratings = ['fa-regular', 'fa-regular', 'fa-regular', 'fa-regular', 'fa-regular'];
        for(let i = 0; i < app.rating; i++) {
            ratings.unshift('fa-solid')
            ratings.pop();
        }

        const element = document.createElement('div')
        element.setAttribute('data-id', index)
        element.classList.add('card', 'app');
        element.innerHTML = `<img src="${app.icon}" alt="${app.title}-image" class="icon">
                                <h5 class="title card-title">${app.title}</h5>
                                <div class="ratings">
                                    <i class="${ratings[0]} fa-star"></i>
                                    <i class="${ratings[1]} fa-star"></i>
                                    <i class="${ratings[2]} fa-star"></i>
                                    <i class="${ratings[3]} fa-star"></i>
                                    <i class="${ratings[4]} fa-star"></i>
                                </div>
                                <i aria-checked="${app.installed}" class="fa-solid fa-circle-check"></i>`;

        container.appendChild(element);
    })

    const applications = document.querySelectorAll(".app");
    
    applications.forEach((app, index) => {
        app.addEventListener('click', () => {
            const currentApp = apps[index];
            localStorage.setItem('currentApp', JSON.stringify(currentApp));

            window.location.href = './appinfo.html';
        })
    })
})

//categories
window.addEventListener('DOMContentLoaded', () => {
    const container = selectElement(".categories");

    categories.forEach((category) => {
        const element = document.createElement('a');
        element.setAttribute('href', '#');
        element.classList.add('category', 'card');
        
        element.innerHTML = `<i class="${category.icon}"></i>
                            <h5 class="title card-title">${category.title}</h5>`

        container.appendChild(element);
    })
})
