$(function () {

    //헤더
    $('header .inner>ul>li').mouseenter(function () {
        $('.sub').stop().slideDown();
        $('.header_back').stop().slideDown();
    })

    $('header .inner>ul>li').mouseleave(function () {
        $('.sub').stop().slideUp();
        $('.header_back').stop().slideUp();
    })


    // 헤더 포커스인
    $('header .inner>ul>li').focusin(function () {
        $('.sub').stop().slideDown();
        $('.header_back').stop().slideDown();
        $('header .inner>ul>li>a').removeClass('on')
        $(this).children('a').addClass('on')

    })
    $('header .inner>ul>li').focusout(function () {
        $('.sub').stop().slideUp();
        $('.header_back').stop().slideUp();
        $(this).children('a').removeClass('on')
    })

    $('.sub>li').focusin(function () {
        $('.sub>li>a').removeClass('on')
        $(this).children('a').addClass('on')
    })



    // 슬라이드
    function slide() {
        $('.slide ul').animate({ left: '-1200px' }, 1000, function () {
            $('.slide ul').append($('.slide ul li').first());
            $('.slide ul').css({ left: '0' });
        })
    }
    setInterval(slide, 3000)


    // 팝업
    $('.popup_on').click(function () {
        $('.popup').show();
    })

    $('.popup_off').click(function () {
        $('.popup').hide();
    })
})