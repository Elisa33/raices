$(document).ready(function(){
    var altura = $('#slider').offset().top;

    $(window).on('scroll',function(){
        if($(window).scrollTop() > altura){
            $('header').addClass('verde');
            
        }else{
            $('header').removeClass('verde');
        }
    });
});

