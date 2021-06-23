$(function() {
    "use strict";
    // Nav Bar Fixed
    $(window).on("scroll", function() {
        $(window).scrollTop() >= $(".navbar").height() ? $(".navbar").addClass("fixed-top") : $(".navbar").removeClass("fixed-top");
        $(window).scrollTop() >= $(".navbar").height() ? $(".navbar").addClass("scrolled") : $(".navbar").removeClass("scrolled");
    });
    //End Nav Bar Fixed

    // Custom placeholder for inputs in header
    $(".header form input").on("focusout", function() {
        if ($(this).val() != '') {
            $(this).parent().addClass("has-data");
        } else {
            $(this).parent().removeClass("has-data")
        }
    });
    $(".contact-us form input").on("focusout", function() {
        if ($(this).val() != '') {
            $(this).parent().addClass("has-data");
        } else {
            $(this).parent().removeClass("has-data")
        }
    });
    $(".contact-us form textarea").on("focusout", function() {
        if ($(this).val() != '') {
            $(this).parent().addClass("has-data");
        } else {
            $(this).parent().removeClass("has-data")
        }
    });
    //End Custom placeholder for inputs in header

    // Tabs Settings

    $(".tabs .tab-switsh li").on("click", function() { //Add class Active on curent tab
        $(this).addClass("selected").siblings().removeClass("selected");
    });

    $(".tab-switsh li").click(function() {

        $(".tabs .tabs-content > div").hide();

        $($(this).data("class")).fadeIn(1500)
    })

    // Tabs Settings
    // Back To top: 
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 800) {
            $(".bc-to-btn").fadeIn();
            $(".bc-to-btn").addClass("ele-hvr-up-dwn");
        } else {
            $(".bc-to-btn").fadeOut();
            $(".bc-to-btn").removeClass("ele-hvr-up-dwn");

        }
    });
    $(".bc-to-btn").on("click", function() {
        $("html").animate({
            scrollTop: 0
        }, 1000);
    });

    // nav links
    $(".navbar .navbar-nav li a").on("click", function(e) {
        e.preventDefault();
        $(this).addClass("active");
        $(this).parent().siblings().children().removeClass("active");
        $("html").animate({
            scrollTop: $($(this).data("id")).offset().top
        }, 1500);
    });

});