$(document).ready(function() {

	////////////////////////////////////
	// Add active class to navigation //
	////////////////////////////////////
	var url = window.location.href;
	console.log('URL: ', url);
 	var page = url.substr(url.lastIndexOf('/'));
 	console.log('Page: ', page);
 	if(page === '/web' || page === '/photo') {
 		$('.work-nav').addClass('active');
 	} else {
 		$('a[href="'+page+'"]').parent().addClass('active');
 	}

	//////////////////////////
	// Footer functionality //
	//////////////////////////
	$('.footer-chevron').on('click', function(event) {
		event.preventDefault();
		if($('.footer').hasClass('footer-up')) {
			$('.footer').removeClass('footer-up').addClass('footer-down');
			$('.footer-chevron').removeClass('footer-chevron-down').addClass('footer-chevron-up');
		} else if ($('.footer').hasClass('footer-down')) {
			$('.footer').removeClass('footer-down').addClass('footer-up');
			$('.footer-chevron').removeClass('footer-chevron-up').addClass('footer-chevron-down');
		} else {
			$('.footer').addClass('footer-up');
			$('.footer-chevron').addClass('footer-chevron-down');
		}
	});

	//////////////////
	// Slick Slider //
	//////////////////
	$('.work-photo').slick({
		dots: true,
		infinite: true,
		arrows: true
	});

});