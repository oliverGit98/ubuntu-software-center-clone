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
        "images": ["./images/stellarium/image1.jpg", "./images/stellarium/image2.png", "./images/stellarium/image3.png", "./images/stellarium/image4.jpg", "./images/stellarium/image5.png"]
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

const selectElement = (selecter) => {
    const element = document.querySelector(selecter);

    if(element) return element
    throw err = new Error(`Element ${selecter} does not exist or type selecter name correctly`);

}

const hamburgerBtn = selectElement(".hamburger-btn");
const toggleMenu = selectElement(".toggle-menu");
const menuOverlay = selectElement(".menu-overlay");

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

window.addEventListener('DOMContentLoaded', () => {
    const container = selectElement(".app-container");

    const installedApps = apps.filter((app) => {
        if(app.installed){
            return app;
        }
    })

    installedApps.forEach((app) => {
        const element = document.createElement('a');
        element.setAttribute('href', '#');
        element.classList.add('single-app');

        element.innerHTML = `<div class="logo">
                                <img class="icon" src="${app.icon}" alt="${app.title}-image">
                            </div>
                            <div class="title">
                                <h5>${app.title}</h5>
                            </div>
                            <div class="snippet">
                                <p>${app.snippet}</p>
                            </div>
                            <div class="rm-btn">
                                <button class="btn btn-regular" aria-label="danger">remove</button>
                                <span>${app.size}</span>
                            </div>`

        container.appendChild(element);

    })
})