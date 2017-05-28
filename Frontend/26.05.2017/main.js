$(document).ready(function(){
	$(".btn").click(function(){
		$(this).toggleClass("click");
		$(this).fadeOut(500);
		$(this).siblings(".answer_desc").fadeIn(500);
	});

	$(".slide").click(function(){
		$(this).toggleClass("click");
		$(this).fadeOut(500);
		$(this).siblings(".answer_desc").slideToggle(500);
	});

	$('a[href^="#"]').click(function(){
	var el = $(this).attr('href');
	$("body").animate({
	scrollTop: $(el).offset().top}, 1000);
	return false;
	});

	$(".toggle_mnu").click(function() {
		$("nav ul").slideToggle(500);
		$(".sandwich").toggleClass("active");
	});
});
