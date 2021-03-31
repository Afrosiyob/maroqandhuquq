$(document).ready(function() {

    $('.navbar-toggler').click(function(e) {
        e.preventDefault();




        if ($(this).children('i').attr('class') == 'fas fa-bars') {
            $(this).children('i').removeClass('fa-bars').addClass('fa-times');

        } else {
            $(this).children('i').removeClass('fa-times').addClass('fa-bars');
        }




    });

});