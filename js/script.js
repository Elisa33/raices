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




    $(function(){
        $('#abrir').click(abrirOverlay)
        $('.overlay button').click(cerrarOverlay)
    })
    
    function abrirOverlay(){
        $('.overlay').slideDown()
    }

    function cerrarOverlay(){
        $('.overlay').slideUp()
    }
