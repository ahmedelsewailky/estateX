$(function () {
    // "use strict";

    $(window).on("resize", function (e) {
        console.log(e.clientX);
    });
    $("section.about-us-area").on("mousemove", function (e) {
        $("section.about-us-area img:nth-child(1)").css({
            transform: `translateX(${e.clientX / 50}px) translateY(${e.clientY / 50}px)`
        })
        $("section.about-us-area img:nth-child(2)").css({
            transform: `translateX(${e.clientX / 20}px) translateY(${e.clientY / 20}px)`
        })
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });

    $('.featured-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        dots: true,
        navText: [
            "<i class='bx bx-left-arrow-alt' ></i>", "<i class='bx bx-right-arrow-alt' ></i>"
        ],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    });

    $(".testimonial-area .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        dots: true,
        navText: [
            "<i class='bx bx-left-arrow-alt' ></i>", "<i class='bx bx-right-arrow-alt' ></i>"
        ],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    });

    $("select").niceSelect();

    $("#price-range").slider({
        step: 500,
        range: true,
        min: 0,
        max: 20000,
        values: [0, 20000],
        slide: function (event, ui) { $("#priceRange").val(ui.values[0] + " - " + ui.values[1]); }
    });
    $("#priceRange").val($("#price-range").slider("values", 0) + " - " + $("#price-range").slider("values", 1));
});