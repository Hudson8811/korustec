$(document).ready(function() {
	const selects = $('.pdf__select');

	selects.each(function () {
		$(this).select2({
			closeOnSelect: false,
			dropdownCssClass: 'dropdown-pdf'
			//dropdownParent: $('.pdf__select-wrapper')
		}).on('select2:open', function () {
			$(this).parent().siblings('.pdf__quantity').hide();
			$(this).parent().siblings('.pdf__close').css('display', 'flex');
		}).on('select2:close', function () {
			$(this).parent().siblings('.pdf__close').hide();
			$(this).parent().siblings('.pdf__quantity').css('display', 'flex');
		});
	});
})