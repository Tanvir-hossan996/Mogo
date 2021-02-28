$(document).ready(function () {


    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > 300) {

            $(".header-bg").addClass("fixed-nav");

        } else {


            $(".header-bg").removeClass("fixed-nav");

        };


        if (scrolling > 350) {

            $(".scroll-btn").fadeIn(1000);

        } else {

            $(".scroll-btn").fadeOut(800);

        }

    });


    $(".scroll-btn").click(function () {


        $("html,body").animate({
            scrollTop: "0px"
        }, 1000);


    });


    //    counter plugin


    $('.counter').counterUp({

        time: 1800,
    });



})
