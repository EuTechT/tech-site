const btnMenu = window.document.querySelector('#btn-menu');
let btnMenuIcon = window.document.querySelector('#btn-menu__icon');
const menuNavigation = window.document.querySelector('#navigation');

btnMenu.addEventListener('click', (e) => {
    btnMenuIcon.innerText = changeIcon(btnMenuIcon.innerText);
    menuNavigation.classList.toggle('is-open');
});

function changeIcon(icon) {
    if(icon == 'menu'){
        return 'close';
    }else{
        return 'menu';
    }
}