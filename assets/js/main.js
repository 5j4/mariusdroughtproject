$(function(){

	$('.content a[target="_blank"]').each(function () {
		$(this).attr('title', 'Open in a new tab');
		// $(this).addClass('external-link');
	});


	/* Scroll to top button */
    var offset = 250;
    var duration = 300;
    // Check if window top, if false, display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });
    // Click event scroll to top
    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: $('main').offset().top}, duration);
        return false;
    });

});