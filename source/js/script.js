var navMain = document.querySelector('.main-navigation');
var navToggle = document.querySelector('.main-navigation__toggle');

function openMenu() {
    if (navMain.classList.contains('main-navigation--closed')) {
        navMain.classList.remove('main-navigation--closed');
        navMain.classList.add('main-navigation__toggle--opened');
    } else {
        navMain.classList.add('main-navigation--closed');
        navMain.classList.remove('main-navigation__toggle--opened');
    }
}

navToggle.addEventListener("click", openMenu);
