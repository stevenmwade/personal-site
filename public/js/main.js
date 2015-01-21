$(document).ready(function() {
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


});