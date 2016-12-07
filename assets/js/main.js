$(function(){

	// $(document).foundation();

	$('.content a[target="_blank"]').each(function () {
		$(this).attr('title', 'Open in a new tab');
		// $(this).addClass('external-link');
	});

	// var popup = new Foundation.Reveal($('#videoModal'));

	// $('.your-class').slick({
	// 	dots: false,
	// 	speed: 300
	// });

	$(window).scroll(function () {
	    if ($(this).scrollTop() > 50) {
	        $('#back-to-top').fadeIn();
	    } else {
	        $('#back-to-top').fadeOut();
	    }
	});
	// scroll body to 0px on click
	$('#back-to-top').click(function () {
	    $('body,html').animate({scrollTop: 0}, 500, 'linear');
	    return false;
	});
});