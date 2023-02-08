$(document).ready(function() {
	const selects = $('.pdf__select-wrapper');
	const closeBtn = $('.pdf__close');

	selects.on('click', function () {
		$(this).addClass('open');
		$(this).siblings('.pdf__quantity').hide();
		$(this).siblings('.pdf__close').css('display', 'flex');
	});

	closeBtn.on('click', function () {
		$(this).siblings('.pdf__select-wrapper').removeClass('open');
		$(this).siblings('.pdf__quantity').css('display', 'flex');
		$(this).hide();
		$(this).siblings('.pdf__select-wrapper').find('.pdf__select-scroll').animate({
			scrollTop: 0
		}, 0);
	});
})