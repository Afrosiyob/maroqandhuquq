$( document ).ready( function () {

    $( '[data-toggle="tooltip"]' ).tooltip()

    $( '.navbar-toggler' ).click( function ( e ) {
        e.preventDefault();
        if ( $( this ).children( 'i' ).attr( 'class' ) == 'fas fa-bars' ) {
            $( this ).children( 'i' ).removeClass( 'fa-bars' ).addClass( 'fa-times' );
        } else {
            $( this ).children( 'i' ).removeClass( 'fa-times' ).addClass( 'fa-bars' );
        }
    } );


    $( '.owl-carousel' ).owlCarousel( {
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    } )

} );