$(document).ready(function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        asNavFor: '.slider-nav',
        verticalSwiping: true,
        vertical: true,
        variableWidth: false
    });
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider',
        focusOnSelect: true,
        variableWidth: false,
        fade: true
    });
    $('.swiper').slick({
        slidesToShow: 9,
        variableWidth: false,
        swipe: false
    });
    $('.companies').slick({
        slidesToShow: 6,
        variableWidth: false,
        swipe: false
    });
    $('.news-latest').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: false,
        swipe: false
    });
    $("input[type='number']").InputSpinner({
        decrementButton: "<strong>-</strong>",
        incrementButton: "<strong>+</strong>",
        groupClass: "input-group-spinner",
        buttonsWidth: "0",
        textAlign: "center",
        autoDelay: 500,
        autoInterval: 100,
        boostThreshold: 15,
        boostMultiplier: 2,
        locale: null
    });

    $('.slick-dots').prependTo( '.slick-dotted' );
});