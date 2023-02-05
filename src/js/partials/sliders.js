$(document).ready(function() {
	let newsSlider = undefined;
	const breakpoint = window.matchMedia( '(min-width: 1280px)' );

	const initSliders = () => {
		if (breakpoint.matches === true) {
			return enableSliders();
		} else if (breakpoint.matches === false) {
			destroySliders(newsSlider);
			return;
		}
	}

	const enableSliders = () => {
		if (newsSlider == undefined || newsSlider.el == undefined) {
			newsSlider = new Swiper('.js-slider-news', {
				slidesPerView: 3.35,
				spaceBetween: 35
			});
		}
	}

	const destroySliders = (sliderName) => {
		if (sliderName !== undefined) {
			if (sliderName.el !== undefined) {
				sliderName.el.querySelector('.swiper-wrapper').removeAttribute('style');
				sliderName.el.querySelector('.swiper-slide').removeAttribute('style');
			}

			sliderName.destroy();
			sliderName = undefined;
		}
	}

	initSliders();

	window.addEventListener('resize', function () {
		initSliders();
	});

	const eventsSlider = new Swiper('.js-slider-events', {
		slidesPerView: 1.27,
		spaceBetween: 10,
		breakpoints: {
			640: {
				slidesPerView: 2.5
			},
			1280: {
				slidesPerView: 4.22,
				spaceBetween: 35
			}
		}
	});

	const eventsSlider2 = new Swiper('.js-slider-events-2', {
		slidesPerView: 1.27,
		spaceBetween: 10,
		navigation: {
			nextEl: '.events-page__slider-next',
			prevEl: '.events-page__slider-prev',
		},
		breakpoints: {
			640: {
				slidesPerView: 2.5
			},
			1280: {
				slidesPerView: 4.22,
				spaceBetween: 35
			}
		}
	});

	const photoSlider = new Swiper('.js-slider-photo', {
		slidesPerView: 1.27,
		spaceBetween: 10,
		breakpoints: {
			640: {
				slidesPerView: 1.5
			},
			1280: {
				slidesPerView: 2.2,
				spaceBetween: 20
			}
		}
	});

	const historySlider = new Swiper('.js-slider-history', {
		slidesPerView: 1.27,
		spaceBetween: 0,
		freeMode: true,
		loop: true,
		autoplay: {
			delay: 1,
			disableOnInteraction: false
		},
		speed: 14000,
		breakpoints: {
			640: {
				slidesPerView: 1.5
			},
			1280: {
				slidesPerView: 3.74
			}
		}
	});
})