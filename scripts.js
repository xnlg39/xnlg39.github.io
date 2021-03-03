$(document).ready(function () {
    $('.home__nav').toggleClass('home__nav--top', $(this).scrollTop() < 5);
    $(window).scroll(function () {
        $('.home__nav').toggleClass('home__nav--top', $(this).scrollTop() < 5);
    });
});

function handleNavToggle() {
    $('.home__nav').toggleClass('home__nav--open');
}
function handleArrowClick(doc) {
    //could add a check here to make sure it is collapsed
    doc.classList.toggle('arrow--active');
}
lastHeader = 'headingOne';
function handleHeaderClick(doc) {
    if (lastHeader === doc.id) {
        doc.classList.toggle('info-drop__button--active');
    } else {
        document
            .getElementById(lastHeader)
            .classList.toggle('info-drop__button--active');
        doc.classList.toggle('info-drop__button--active');
        lastHeader = doc.id;
    }
}
