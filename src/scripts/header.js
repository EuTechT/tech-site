const header = window.document.querySelector('.l-header');

window.onscroll = function(e) {
    if(this.scrollY > 50) {
        header.classList.add('is-scroll');
    } else {
        header.classList.remove('is-scroll');
    }
}