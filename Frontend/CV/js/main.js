$(document).ready(function() {

    $("a[href*='#']").mPageScroll2id();
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
    offset:82
    }); //slow scroll

    var $menu = $("nav");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 500 && $menu.hasClass("default") ){
            $menu.fadeOut('fast',function(){
                $(this).removeClass("default")
                    .addClass("fixed")
                    .fadeIn('fast');
            });
            if ($(".sandwich").is(':visible')) {
                $("nav ul").css("background", "none");
                $(".toggle_mnu").removeClass("mnu-default").addClass("mnu-fixed");
            }
        } else if($(this).scrollTop() <= 500 && $menu.hasClass("fixed")) {
            $menu.fadeOut('fast',function(){
                $(this).removeClass("fixed")
                    .addClass("default")
                    .fadeIn('fast');
            });
        if ($(".sandwich").is(':visible')) {
            $("nav ul").css("background", "rgba(0,0,0,.8)");
            $(".toggle_mnu").removeClass("mnu-fixed").addClass("mnu-default");
        }
        }
    }); //fixed menu

    $(".toggle_mnu").click(function() {
        $("nav ul").slideToggle(500);
        $(".sandwich").toggleClass("active");
    });
    $("nav ul li a").click(function() {
    	if ($(".sandwich").is(':visible')) {
        $("nav ul").slideToggle(500);
        $(".sandwich").toggleClass("active");
    }}); //Responsive menu

    var $button = $("div.button-up");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100 && $button.hasClass("hide") ){
            $button.fadeIn('fast',function(){
                $(this).removeClass("hide")
                    .addClass("default");
            });
        } else if($(this).scrollTop() <= 100 && $button.hasClass("default")) {
            $button.fadeOut('fast',function(){
                $(this).removeClass("default")
                    .addClass("hide");
            });
        }
    }); //up button

    var $button2 = $("header div.button-down");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100 && $button2.hasClass("default") ){
            $button2.fadeIn('fast',function(){
                $(this).removeClass("default")
                    .addClass("hide");
            });
        } else if($(this).scrollTop() <= 100 && $button2.hasClass("hide")) {
            $button2.fadeOut('fast',function(){
                $(this).removeClass("hide")
                    .addClass("default");
            });
        }
    }); //down button

    $(".owl-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items:1,
        smartSpeed:450,
        nav: true,
        navText: ["<", ">"],
        loop: true
    }); //owl

    //ANIMATION
    $("section .box-wrapper h2").animated("fadeInUp");
    $(".my-photo img").animated("flipInY");
});