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
})