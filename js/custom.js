//for tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//for popover

$(function () {
  $('[data-toggle="popover"]').popover()
})
//scrollspy
$('body').scrollspy({ target: '#main-menu' })
//for scroll-top
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});