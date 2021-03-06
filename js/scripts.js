$(document).ready(function () {
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
   $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        asNavFor: '.slider-nav',
        verticalSwiping: true,
        vertical: true,

        adaptiveHeight: true,
        useTransform: true,

    });
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider',
        focusOnSelect: true,
        variableWidth: false,
        verticalSwiping: true,
        fade: true
    });

    const $gl= $(".gallery-images");
    const  $gl2=$(".gallery-list");

    $gl.slick({

        slidesToShow: 1,
        arrows: false,
        //draggable: true,

        useTransform: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'

    });

    $(".gallery-list li").click(function(){
        const index = $(this).attr("data-slick-index");

        $(".gallery-list .active").toggleClass('active');
        $(this).toggleClass('active');
        $gl.slick("slickGoTo", index);

    });
    $gl.on("afterChange", (event, slick, currentSlide) => {
        if( $(".gallery-list").attr("data-slick-index")!=slick.currentSlide) {
            $(".gallery-list .active").toggleClass('active');
            $(".gallery-list li[data-slick-index='" + slick.currentSlide +"']").toggleClass('active');
        }

    });
    $('.swiper').slick({
        slidesToShow: 9,
        variableWidth: false,
        swipe: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object

        ]
    });

    $('.companies').slick({
        slidesToShow: 6,
        variableWidth: false,
        swipe: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object

        ]
    });

    $('.news-latest').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: false,
        swipe: false,
        responsive: [{
            breakpoint: 1200,
            settings: "unslick"
        },{
            breakpoint: 1200,
            settings: "unslick"
        }]
    });

    $(window).on('resize orientationChange', function(event) {
            if(!$('.news-latest').hasClass('slick-initialized') && $(window).width()>=1200) {
            $('.news-latest').slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                variableWidth: false,
                swipe: false,
                responsive: [{
                    breakpoint: 1200,
                    settings: "unslick"
                },{
                    breakpoint: 1200,
                    settings: "unslick"
                }]
            });
        }
    });

 /*   $(".gallery-list li").hover(function () {
        $(".gallery-list .active").toggleClass('active');
        $(this).toggleClass('active');
        $(".item-image img").attr('src', $(".gallery-list .active").data('img'));
    });*/

    $('.slick-dots').prependTo('.slick-dotted');

    $(".gallery").slick();

    $(".similar-items").slick({
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('#tab4' + " .related-items").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object

        ]
    });



    // вкладки с содержанием
// http://dbmast.ru
    $(".tab_content").hide();
    $(".tab_content:first").show();
    /* в режиме вкладок */
    $("ul.tabs li").click(function () {
        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_accordion").removeClass("d_active");
        $(".tab_accordion[rel^='" + activeTab + "']").addClass("d_active");
        $("#" + activeTab).addClass('selected-tab');

        if (activeTab == 'tab4') {
            try {
                $('#' + activeTab + ' .related-items').slick('setPosition');
            } catch (e) {
                alert(e);
            }
        }
    });

    /* в режиме аккордеона */
    $(".tab_accordion").click(function () {
        if ($('.selected-tab').length) {
            var id = $(".selected-tab")[0].id;
        }
        $(".tab_content").hide().removeClass('selected-tab');
        var d_activeTab = $(this).attr("rel");
        if (id != d_activeTab) {
            $("#" + d_activeTab).addClass('selected-tab').fadeIn();
            $(".tab_accordion").removeClass("d_active");
            $(this).addClass("d_active");
            $("ul.tabs li").removeClass("active");
            $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");

            if (d_activeTab == 'tab4') {
                try {
                    $('#' + d_activeTab + ' .related-items').slick('setPosition');
                } catch (e) {
                    alert(e);
                }
            }

       }
        else {

            $(this).removeClass('d_active');

        }
    });
    /* дополнительный класс tab_last,
    чтобы добавить границу к правой
    стороне последней вкладки. */
    $('ul.tabs li').last().addClass("tab_last");



})
;

