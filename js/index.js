$(document).ready(function() {
    $('.home-page-owl-carousel').owlCarousel({

        margin: 10,
        nav: true,
        items: 1,
        center: true,
        stagePadding: 30,
        autoHeight: true

    });
    $('.reagion-card-carousel').owlCarousel({

        loop: false,
        // center: true,
        stagePadding: 30,
        margin: 20,
        nav: true,
        autoHeight: true,
        items: 5,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }

    });
    $('[data-toggle="tooltip"]').tooltip()

    $('.navbar-toggler').click(function(e) {
        e.preventDefault();
        if ($(this).children('i').attr('class') == 'fas fa-bars') {
            $(this).children('i').removeClass('fa-bars').addClass('fa-times');
        } else {
            $(this).children('i').removeClass('fa-times').addClass('fa-bars');
        }
    });



    const circleProgressBars = document.querySelectorAll('.progress-ring-circle');


    circleProgressBars.forEach(circle => {

        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const getPercent = circle.getAttribute('percent');
        var animationNumber = 0;


        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;


        function setProgress(percent) {
            const offset = circumference - percent / 100 * circumference;
            circle.style.strokeDashoffset = offset;

            // $(circle).next('text').text(`${percent}%`);

            var time = setInterval(() => {


                $(circle).next('text').text(`${animationNumber}%`);

                animationNumber += 1;

                if (animationNumber > percent) {
                    clearInterval(time);
                    $(circle).next('text').text(`${percent}%`);
                }

            }, 100);




        }

        setProgress(getPercent);

    });


    const lineProgressBars = document.querySelectorAll('.progress-line');


    lineProgressBars.forEach(line => {

        const getPercent = line.getAttribute('percent');

        const childWidth = 100 - getPercent;

        $(line).children('.progress-line-inner').css({
            'width': `${childWidth}%`
        });

    });



    $('#buxoro').click(function(e) {
        e.preventDefault();
        // alert("this is buhor");
    });


});