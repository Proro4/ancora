$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        nav: true,
        dots:false,
        navText:[,]
    });
    $('.lang__active').on('click',function () {
        if($(this).closest('.lang').hasClass('open')){
            $(this).closest('.lang').removeClass('open')
        }else{
            $(this).closest('.lang').addClass('open')
        }
    })
    $(window).scroll(function () {
        if($(this).scrollTop() >= 40){
            $('.header-scroll').addClass('active');
        }else{
            $('.header-scroll').removeClass('active');
        }
    });
});