$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    items: 1,
	    dots: true
	})

	$('a[href^="#"]').click(function(){
		pos = $(this).attr("href");
		dest = $(pos).offset().top;
		$('html').animate({scrollTop:dest}, 1000);
		$('body').animate({scrollTop:dest}, 1000);
		return false;
	})

	$('.history-day__date').hover(function(){
		$('.history-day__text.active').removeClass("active");
		$(this).next().addClass("active");
	},
	function(){
		$(this).next().removeClass("active");
		$('.history-day__text.active').removeClass("active");
		$('.last').addClass("active");
	})

	$('.history-day__date').on('click', function(){
		$('.history-day__text.active').removeClass("active");
		$('.history-day__text.last').removeClass("last");
		$(this).next().addClass("last");
		$(this).next().addClass("active");
	})
})