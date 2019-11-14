jQuery(function($) {'use strict';
	/*----------------------------
    START - Smooth scroll animation
    ------------------------------ */
    $("li.smooth-menu a").bind('click',function(event){
        var $anchor = $(this);
        var headerH ='65';
        $('html,body').stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
            
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });
	/*for sticky menu*/
         $('body').scrollspy({
             target: '.navbar-collapse',
             offset:90
         });          
                    
    $(".header-area").sticky({topSpacing: 0});
	/*for parallax effect*/
	$('.parallax-bg').scrolly({bgParallax: true});
		/*----------------------------
		START - Scroll to Top
		------------------------------ */
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 400) {
			  $('.scrollToTop').fadeIn();
			} else {
			  $('.scrollToTop').fadeOut();
			}
		});
		$(document).on('click', '.scrollToTop', function() { // When arrow is clicked
			$('html, body').animate({scrollTop : 0},200);
			return false;
		});
		
		new WOW().init();
});