const selectElement = (selecter) => {
    const element = document.querySelector(selecter);

    if(element) return element
    throw err = new Error(`Element ${selecter} does not exist or type selecter name correctly`);

}

const hamburgerBtn = selectElement(".hamburger-btn");
const toggleMenu = selectElement(".toggle-menu");
const menuOverlay = selectElement(".menu-overlay");
const upToDate = selectElement(".up-to-date");
const refreshAnimation = selectElement(".refresh-animation");
const refreshBtn = selectElement('.refresh-btn');
const time = selectElement('#time');

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

refreshBtn.addEventListener('click', () => {
    upToDate.setAttribute('aria-selected', false)
    refreshAnimation.setAttribute('aria-selected', true)

    const date = new Date();

    setTimeout(() => {
        upToDate.setAttribute('aria-selected', true)
        refreshAnimation.setAttribute('aria-selected', false)
    }, 5000)

    time.textContent = `Last checked: ${date.getHours()}:${date.getMinutes()}`
})
