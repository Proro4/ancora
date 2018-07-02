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
            $('.header-top').removeClass('scroll-open');
            $('.header-scroll').removeClass('active'); 
            $('.header-mob-menu').addClass('mob-d');
            $('.header-scroll').removeClass('hide');
        }
    });
//    MENU OPEN
    $('.menu-mob').on('click',function(e){
        e.preventDefault();
        if($('.header-mob-menu').hasClass('open')){
            $('.header-mob-menu,.header__menu__but').removeClass('open');
        }else{
            $('.header-mob-menu,.header__menu__but').addClass('open');
        }
    });
    $('.menu-scroll').on('click',function(e){
        e.preventDefault();
        if($('.header-top').hasClass('scroll-open')){
            $('.header-top').removeClass('scroll-open');
            $('.header-scroll').removeClass('hide');
        }else{
            $('.header-top').addClass('scroll-open');
            $('.header-scroll').addClass('hide');
        }
    }); 
    $('.scroll-menu-exit').on('click',function(){
        $('.header-top').removeClass('scroll-open');
        $('.header-scroll').removeClass('hide');
    })
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
    $('.select p').on('click',function(){
        if($(this).parent().hasClass('open')){
            $(this).parent().removeClass('open');
        }else{
            $(this).parent().addClass('open');
        }
    });
});
