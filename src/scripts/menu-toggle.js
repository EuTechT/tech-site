const btnMenu = window.document.querySelector('#btn-menu');
let btnMenuIcon = window.document.querySelector('#btn-menu__icon');
const menuNavigation = window.document.querySelector('#navigation');

btnMenu.addEventListener('click', (e) => {
    menuNavigation.classList.toggle('is-open');
});