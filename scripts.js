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
    console.log(doc);
    doc.classList.toggle('arrow--active');
}

lastHeader = 'headingOne';

function handleHeaderClick(doc) {
    doc.classList.toggle('info-drop__button--active');
    if (lastHeader === doc.id) return;
    if (
        document
            .getElementById(lastHeader)
            .classList.contains('info-drop__button--active')
    ) {
        document
            .getElementById(lastHeader)
            .classList.toggle('info-drop__button--active');
    }

    lastHeader = doc.id;
}
