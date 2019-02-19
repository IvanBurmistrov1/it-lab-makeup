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
        swipe: false,
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
        swipe: false
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

    $(".gallery-list li").hover(function () {
        $(".gallery-list .active").toggleClass('active');
        $(this).toggleClass('active');
        $(".item-image img").attr('src', $(".gallery-list .active").data('img'));

    });
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
    $("#search").click(function () {
        if ($("#search input").css('width') == '0px')
            $("#search input").css('width', "155px").css("padding", "0 12px").focus();


    });
    $("#search input").focusout(function (e) {
        if ($("#header_adaptive").css("width") != "1200px")
            $(this).css("width", '0px').css("padding", "0 0");

    })
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

