$(document).ready(function(){
    $('.slider-head').owlCarousel({
        items:1,
        nav: true,
        dots:false,
        navText:[,],
        smartSpeed:1000
    });
    $('.brand__slider').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:30,
        video:true,
        nav: true,
        dots:false,
        navText:[,]
    });
    $('.lang__active').on('click',function () {
        if($(this).closest('.lang').hasClass('open')){
            $(this).closest('.lang').removeClass('open');
        }else{
            $(this).closest('.lang').addClass('open');
        }
    });
    $(window).scroll(function () {
        if($(this).scrollTop() >= 40){
            $('.header-scroll').addClass('active');
            $('.header-mob-menu').removeClass('mob-d');
        }else{
            $('.header-scroll').removeClass('active');
            $('.header-mob-menu').addClass('mob-d');
        }
    });
//    MENU OPEN
    $('.header__menu__but').on('click',function(e){
        e.preventDefault();
        if($('.header-mob-menu').hasClass('open')){
            $('.header-mob-menu,.header__menu__but').removeClass('open');
        }else{
            $('.header-mob-menu,.header__menu__but').addClass('open');
        }
    });
    if($('body').width() <= 992){
        $('.footer').prepend($('.footer__info__list'));
        $('.footer').prepend($('.footer__contacts'));
        $('.footer').prepend($('.footer__info__soc'));
    }else{
        $('.footer__info').prepend($('.footer__info__list'));
        $('.footer__info').prepend($('.footer__info__soc'));
        $('.footer').prepend($('.footer__menu'));
    }
    $(window).resize(function () {
        if($('body').width() <= 992){
            $('.footer').prepend($('.footer__info__list'));
            $('.footer').prepend($('.footer__contacts'));
            $('.footer').prepend($('.footer__info__soc'));
        }else{
            $('.footer__info').prepend($('.footer__info__list'));
            $('.footer__info').prepend($('.footer__info__soc'));
            $('.footer').prepend($('.footer__menu'));
        }
    });
});
