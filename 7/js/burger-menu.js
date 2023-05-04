const mainMenu = document.querySelector('.main-nav__wrapper');
const menuButton = document.querySelector('.main-nav__toggle');

mainMenu.classList.remove('main-nav__wrapper--nojs');
mainMenu.classList.add('main-nav__wrapper--closed');
menuButton.classList.remove('main-nav__toggle--nojs');
menuButton.classList.add('main-nav__toggle--closed');

menuButton.addEventListener('click', function () {
  if (mainMenu.classList.contains('main-nav__wrapper--closed')) {
    mainMenu.classList.remove('main-nav__wrapper--closed');
    menuButton.classList.remove('main-nav__toggle--closed');
    mainMenu.classList.add('main-nav__wrapper--opened');
    menuButton.classList.add('main-nav__toggle--opened')
  } else {
    mainMenu.classList.add('main-nav__wrapper--closed');
    menuButton.classList.add('main-nav__toggle--closed')
    mainMenu.classList.remove('main-nav__wrapper--opened');
    menuButton.classList.remove('main-nav__toggle--opened')
  }
});
