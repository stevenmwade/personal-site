$(document).ready(function() {

	$('.navlist, a').on('click', function(event) {
		var linkText = $(this).text();
		var path = $(this).attr('href');
		console.log('Link text: ', linkText)
		console.log('Path: ', path)
		$('.active').removeClass('active');
		if(linkText == 'Photo' || linkText == 'Web') {
			$('.work-nav').addClass('active');
		} else {
			$(this).parent('li').addClass('active');
		}
		window.location.pathname(path);
		return false;
	});

	// Footer functionality
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

	// Slick Slider
	$('.work-photo').slick({
		dots: true,
		infinite: true,
		arrows: true
	});

});