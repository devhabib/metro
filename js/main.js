(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		// Counter start
        $('.counter').counterUp({
			delay: 10,
			time: 1000
		})
        // Counter ends

        // Magnific Popup starts
		$('.image-popup').magnificPopup({
			type: 'image',
			gallery: {
					enabled: true
				}
		})
		// Magnific Popup ends

		// Owl carousel
		$('.testimonial-slider').owlCarousel({
			items: 1,
			loop:true,
			autoplay:true
		});
		// Owl Carousel ends

		// Wow Js for Animation load
		new WOW().init();

		// One page nav

		$('#menu').onePageNav({
			scrollSpeed: 600,
			scrollThreshold: 1
		});

		// SlickNav
		$('#menu').slicknav();


	});


	jQuery(window).load(function () {

		/* Sticky Header */
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 100) {
				$('.header-fixed').addClass("sticky");
			} else {
				$('.header-fixed').removeClass("sticky");
			}
		});
		
	});
}(jQuery));