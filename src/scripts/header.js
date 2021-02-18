const header = window.document.querySelector('.l-header');

window.onscroll = function() {
    scrollTop();
}

function scrollTop() {
    if(this.scrollY > 50) {
        header.classList.add('is-scroll');
    } else {
        header.classList.remove('is-scroll');
    }
}