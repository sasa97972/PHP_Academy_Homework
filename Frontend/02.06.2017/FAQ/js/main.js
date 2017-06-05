$(document).ready(function() {

	function heightDetect() {
		$("header").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".btn-slide").click(function() {
		if($(this).next(".code:first").is(":visible")) {
			$(this).next(".code:first").slideToggle(500);
			$(this).html("Показать");
		} else {
			$(this).next(".code:first").slideToggle(500);
			$(this).html("Спрятать");
		};
	});

	$(".toggle_mnu").click(function() {
		$("nav").fadeToggle(500);
		$(".sandwich").toggleClass("active");
	});

	$("nav ul li a").click(function() {
		$("nav").fadeToggle(500);
		$(".sandwich").toggleClass("active");
	});

	$('a[href^="#"]').click(function(){
	var el = $(this).attr('href');
	$("body").animate({
	scrollTop: $(el).offset().top}, 1000);
	return false;
	});

});