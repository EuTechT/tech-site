const header = window.document.querySelector('.l-header');

window.onscroll = function() {
    scrollTop();
}

function scrollTop() {
    if(window.scrollY > 50) {
        header.classList.add('is-scroll');
    } else {
        header.classList.remove('is-scroll');
    }
}