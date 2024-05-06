$(function () {
    "use strict";

    $("section.about-us").on("mousemove", function (e) {
        $("section.about-us .position-relative").css({
            transform: `translateX(${e.clientX / 50}px) translateY(${e.clientY / 50}px)`
        })
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });

    $('.owl-carousel').owlCarousel({
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
    })
});