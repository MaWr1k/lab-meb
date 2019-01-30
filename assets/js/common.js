$(function () {
    new WOW().init();
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
        let imgId = $(this).data('img-id');
        let $image = $('.img-bg-portfolio[data-img-id='+ imgId +']');
        let imgUrl = $image.data('url');
        $('.img-bg-portfolio').removeClass('active');
        $image.attr('src', imgUrl).addClass('active');
        /*let $img = $('section.portfolio').find(".img-bg-portfolio");
        $img.removeClass('active');
        let imgUrl = $(this).find('.img').data('url');
        $img.attr('src', imgUrl);
        $img.addClass('active');*/
    });

    $(window).scroll(function (e) {
        if ($(window).scrollTop() >= 200) {
            $('header').addClass('scroll');
        } else {
            $('header').removeClass('scroll');
        }
    });

    $(window).on('mousewheel', function(e){
        if (e.originalEvent.wheelDelta < 0) {
            if ($(window).scrollTop() < $('.first-block').height()-500) {
                $('html, body').animate({
                    scrollTop: $('.wwd').offset().top-$('header').height()
                });
            }
        }
    });
    $('.order-modal-open').on('click', function(e){
        e.preventDefault();
        $('.mymodal-container').addClass('open');
    });
    $('.mymodal-container').on('click', function(e){
        if($(e.target).is('.mymodal-container') || $(e.target).is('.mymodal-close')){
            $('.mymodal-container').removeClass('open');
        }
    });

    $('.up-btn').click(function() {
        $('html, body').animate({scrollTop: 0},500);
        return false;
    })

});