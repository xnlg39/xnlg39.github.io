$(document).ready(function () {
    $(window).scroll(function () {
        $('.home__nav').toggleClass(
            'home__nav--scrolled',
            $(this).scrollTop() >= 50
        );
        $('.home__nav').toggleClass('home__nav--top', $(this).scrollTop() < 50);
    });
});
function handleNavToggle() {
    $('.home__nav').toggleClass('home__nav--open');
}
