$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip()

    $('.navbar-toggler').click(function(e) {
        e.preventDefault();
        if ($(this).children('i').attr('class') == 'fas fa-bars') {
            $(this).children('i').removeClass('fa-bars').addClass('fa-times');
        } else {
            $(this).children('i').removeClass('fa-times').addClass('fa-bars');
        }
    });


    $('.owl-carousel').owlCarousel({
        // loop: true,
        margin: 10,
        nav: true,
        items: 1,
        center: true,
        stagePadding: 30,
        autoHeight: true

    });




});