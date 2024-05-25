$(function () {
    "use strict";

    $("section.about-us-area").on("mousemove", function (e) {
        $("section.about-us-area img:nth-child(1)").css({
            transform: `translateX(${e.clientX / 50}px) translateY(${e.clientY / 50}px)`
        })
        $("section.about-us-area img:nth-child(2)").css({
            transform: `translateX(${e.clientX / 20}px) translateY(${e.clientY / 20}px)`
        })
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

    $(window).on("scroll", function(e) {
        if ($(this).scrollTop() > 700) {
            $(".odometer").each(function () {
                $(this).html($(this).attr("data-value"));
            });
        }
    });

    $(".testimonial-area .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause:true,
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

    $('.property-gallery').slick({
        centerMode: true,
        centerPadding: '60px',
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    $('.popular-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        dots: true,
    });

    $("a[data-rel]").lightcase();

    $("[data-bs-toggle='tooltip']").tooltip();

    $(window).on("mousemove", function (e) {
        $(".cursor").css({
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
        })
    });
});