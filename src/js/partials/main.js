$(document).ready(function() {
	AOS.init();

	$('.lang-switcher select').select2({
		dropdownParent: $('.lang-switcher')
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
})