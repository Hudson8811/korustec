$(document).ready(function() {
	const selects = $('.pdf__select');

	selects.each(function () {
		$(this).select2({
			closeOnSelect: false,
			dropdownCssClass: 'dropdown-pdf'
			//dropdownParent: $('.pdf__select-wrapper')
		});

		/*$(this).on('select2:opening', function (e) {
			const dropdown = e.currentTarget.parentElement.querySelector('.pdf__dropdown');
			setTimeout(() => {
				//dropdown.style.pointerEvents = 'auto';
			}, 0);
		});*/

		/*$(this).on('select2:closing', function (e) {
			const dropdown = e.currentTarget.parentElement.querySelector('.pdf__dropdown');
			setTimeout(() => {
				dropdown.style.pointerEvents = 'none';
			}, 0);
		});*/
	});
})