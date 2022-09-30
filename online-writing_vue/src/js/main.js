(function ($) {
    "use strict";
// Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    $('.scroll-link').click(function () {
        $('html, body').animate({scrollTop: "#welcome-tab"}, 1500, 'easeInOutExpo');
        return false;
    });
    // $("body, html").stop().animate({
    //     scrollTop: $("#" + $(this).attr('data-custom-scroll-to')).offset().top
    //   }, 1000, function() {
    //     $(window).trigger("resize");
    //   });
})(jQuery);
