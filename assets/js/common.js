$(function () {
    $('.rev-container').slick({
        arrows: 'false'
    });
    $('.menu-btn').on('click', function () {
        $('.menu-block').addClass('open');
    });
    $('.menu-close').on('click', function () {
        $('.menu-block').removeClass('open');
    });
    $('.menu-has-children').on('click', function (e) {
        e.preventDefault();
        $('.menu-item').removeClass('open');
        $(this).parent().addClass('open');
        $(this).parent().find('.sub-menu').slideToggle();
    });

    $('.list-dir a').hover(function () {
        let imgUrl = $(this).data('url-img');
        $('.wwd img.img-dir').attr('src', imgUrl);
    });

    $('.portfolio-grid .item').on('mouseover', function () {
        let $img = $('section.portfolio').find(".img-bg-portfolio");
        $img.removeClass('active');
        let imgUrl = $(this).find('.img').data('url');
        $img.attr('src', imgUrl);
        $img.addClass('active');
    });

    $(window).scroll(function (e) {
        console.log("высота до начала страницы "+$(window).scrollTop());
        console.log("высота блока " + $('.first-block').height());
        console.log(e.originalEvent);
        //console.log(e.originalEvent.wheelDelta);
        if (e.originalEvent.wheelDelta < 0) {
            if ($(window).scrollTop() < $('.first-block').height()) {
                $('header').addClass('scroll');
                $('html, body').animate({
                    scrollTop: $('.wwd').offset().top + 40
                });
            } else {
                $('header').removeClass('scroll');
            }
        } else {
            if ($(window).scrollTop() <= $('.first-block').height()) {
                $('header').removeClass('scroll');
            }
        }
    });

});