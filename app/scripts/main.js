$(document).ready(function(){
    $('.slider-head').owlCarousel({
        items:1,
        nav: true,
        dots:false,
        navText:[,],
        smartSpeed:1000,
        loop:true
    });
    $('.brand__slider').owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin:30,
        video:true,
        nav: true,
        dots:false,
        navText:[,],
        responsive :{
            992:{
                items:2
            }
        }
    });
    $('.pen__slider').owlCarousel({
        items:3,
        loop:false,
        margin:30,
        nav: true,
        dots:false,
        navText:[,]
    });
    $('.gallery').owlCarousel({
        items:1,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        nav: true,
        dots:false,
        navText:[,]
    });
    $('.gallery__links').owlCarousel({
        items:3,
        nav:false,
        dots:false
    });
    $('.lang__active').on('click',function () {
        if($(this).closest('.lang').hasClass('open')){
            $(this).closest('.lang').removeClass('open');
        }else{
            $(this).closest('.lang').addClass('open');
        }
    });
    $(window).scroll(function () {
        $('.lang ').removeClass('open');
        if($(this).scrollTop() >= 1000){
            $('.load-up').addClass('open');
        }else{
            $('.load-up').removeClass('open');
        }
        if($(this).scrollTop() >= 40){
            $('.header-scroll').addClass('active');
            $('.header-mob-menu').removeClass('mob-d');
            $('.header-second-menu').hide();
        }else{
            $('.header-top').removeClass('scroll-open');
            $('.header-scroll').removeClass('active'); 
            $('.header-mob-menu').addClass('mob-d');
            $('.header-scroll').removeClass('hide');
            $('.header-second-menu').show();
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
    });
    $('.pen-detail__info__numb__detal span').on('click',function(){
        $('.pen-detail__info__numb__select').addClass('open');
        $('.pen-detail__info__numb').removeClass('choice');
    });
    $('.pen-detail__info__numb__select li a').on('click',function(e){
        e.preventDefault();
       $('.pen-detail__info__numb__detal input').val($(this).html());
        $('.pen-detail__info__numb__select').removeClass('open');
        $('.pen-detail__info__numb').addClass('choice');
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
    $('.select p').on('click',function(){
        if($(this).parent().hasClass('open')){
            $(this).parent().removeClass('open');
        }else{
            $(this).parent().addClass('open');
        }
    });
//Select2
    if($('select').length != 0){
        $('.country-select').select2({
            placeholder:'Страна'
        });
        $('.city-select').select2({
            placeholder:'Город'
        });
    }
});
var t;
function up() {
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollBy(0,-100);
        t = setTimeout('up()',20);
    } else clearTimeout(t);
    return false;
}
