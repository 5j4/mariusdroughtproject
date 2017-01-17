$(function(){

	$('.content a[target="_blank"]').each(function () {
		$(this).attr('title', 'Open in a new tab');
		// $(this).addClass('external-link');
	});


	// // Check if window top, if false, display button
    // $(window).scroll(function () {
	//     if ($(this).scrollTop() > 100) {
	//         $('#back-to-top').fadeIn();
	//     } else {
	//         $('#back-to-top').fadeOut();
	//     }
	// });
    // // Click event scroll to top
    // $('.scrollToTop').click(function () {
     //    $('.content').animate({scrollTop: 0}, 800);
	//     return false;
	// });

    var offset = 250;
    var duration = 300;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });
    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });

});