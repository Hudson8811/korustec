$(document).ready(function() {
	const selects = $('.pdf__select');

	selects.each(function () {
		$(this).select2({
			closeOnSelect: false,
			dropdownCssClass: 'dropdown-pdf'
			//dropdownParent: $('.pdf__select-wrapper')
		});
	});
})