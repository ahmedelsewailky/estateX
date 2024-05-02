$(function() {
    "use strict";

    $(window).scroll(function(e) {
        if ($(this).scrollTop() > 450 && $(this).scrollTop() < 1100) {
            $(".section.about-us .position-relative").animateTransform("rotate(180deg)")
        }
    });
});