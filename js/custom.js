$(function () {
    const MVS = new Swiper('.main_visual_slide', {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".main_visual .arrows .next",
            prevEl: ".main_visual .arrows .prev",
        }
    });



});
$(function () {


    $('.header .mopen').on('click', function () {
        $('.header .gnb').toggleClass('on')
    })
    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('ul').stop().slideUp()

        }

    });

    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on')
        $('.header .gnb>ul>li ul').removeAttr('style')
    })
})