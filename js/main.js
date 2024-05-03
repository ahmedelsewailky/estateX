$(function() {
    "use strict";

    $(".section.about-us").on("mousemove", function(e) {
        $(".section.about-us .position-relative").css({
            transform: `translateX(${e.clientX / 50}px) translateY(${e.clientY / 50}px)`
        })
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
});