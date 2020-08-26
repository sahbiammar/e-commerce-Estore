// Select element function

$(document).ready(function(){  

    AOS.init({
        easing: 'ease',
        duration: 1800,      
        once: true              
    })

    $('nav a[href*="#"]').on('click', function() {                 
        $('html, body').animate({                              
            scrollTop: $($(this).attr('href')).offset().top - 100  
        }, 2000);                                                       
    });

    $(".menu-btn").click(function(){   
        $(".nav-desc").slideToggle("slow"); 
    });    

    $(".nav-desc ul li").click(function(){
        $(".nav-desc").fadeToggle("slow"); 
    }); 

    

    $grid = $('.list').isotope({
        // options
        itemSelector: '.list__item',
        layoutMode: 'masonry',
        masonry: {
            gutter: 0
        }
    });
      // filter items on button click
    $('.iso-js-filter').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $( '.iso-js-filter button' ).removeClass( 'iso-active' );
        $( this ).addClass( 'iso-active' );
    });




    var placeAttr = '';                          
    $('[placeholder]').focus(function() {
        placeAttr = $(this).attr('placeholder');
        $(this).attr('placeholder', '');
    }).blur(function() {
        $(this).attr('placeholder', placeAttr);
    }); 


    $('#up').on('click', function() { 
        $('html, body').animate({ 
            scrollTop: 0
        }, 2000);
    });   


    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 450) {
            $('.up').fadeIn(1000);
        } else {
            $('.up').fadeOut(1000);
        }
    }); 

    

});    