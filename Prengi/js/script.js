window.addEventListener('DOMContentLoaded', () => {
    const header__links = document.querySelector('.header__links'),
    menuItem = document.querySelectorAll('.header__link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        header__links.classList.toggle('header__links_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            header__links.classList.toggle('header__links_active');
        })
    })
})