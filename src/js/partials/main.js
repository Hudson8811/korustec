$(document).ready(function() {
	AOS.init();

	$('.lang-switcher select').select2({
		dropdownParent: $('.lang-switcher')
	});

	$('.key-words select').select2({
		dropdownParent: $('.key-words')
	});

	/* Add clear button on opening dropdown */
	$('.key-words select').on('select2:open', function () {
		setTimeout(() => {
			$('.key-words .select2-results').append('<li class="select2-results__option select2-results__option--another select2-results__option--selectable">ANOTHER TAG<div class="key-words__close"><svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">' +
				'<path d="M1 1L6 6"/>' +
				'<path d="M1 6L6 1"/>' +
				'</svg></div></li>');
		}, 0);
	});

	/* Remove clear button on closing dropdown */
	$('.key-words select').on('select2:closing', function () {
		$('.key-words .select2-results .select2-results__option--another ').remove();
	});

	/* Partners marquee */
	$('.js-marquee-partners').marquee({
		duration: 50000,
		delayBeforeStart: 0,
		duplicated: true,
		gap: 0,
		startVisible: true,
		direction: 'left'
	});

	/* Content toggle button */
	$('.js-content-toggle').on('click', function () {
		const content = $(this).parent().next();

		if (content.is(':hidden')) {
			content.slideDown(300);
			$(this).text('CLOSE');
		} else {
			content.slideUp(300);
			$(this).text('OPEN');
		}
	});

	/* Attachments toggle button */
	$('.js-attachments-toggle').on('click', function () {
		const content = $(this).prev().find('ul');

		if (content.is(':hidden')) {
			content.slideDown(300);
			$(this).addClass('open');
			$(this).find('span').text('Show less');
		} else {
			content.slideUp(300);
			$(this).removeClass('open');
			$(this).find('span').text('Show more');
		}
	});
})