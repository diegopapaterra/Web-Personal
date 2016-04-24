console.info("Welcome to my WEB! Thanks for check the code :)");
var altoNav = $(window).height();
$("body>section").css("min-height", altoNav);
$(window).scroll(ajustarSeccion);
$("header li a").click(cambiarSeccion);
$('.card').click(function(){
    $(this).toggleClass('flipped');
});
$( ".draggable" ).draggable();

function ajustarSeccion(){

    var scrollActual = parseInt($("body").scrollTop());
    
    $("a").removeClass("activo");
    
    if(scrollActual >= parseInt($("#section5").offset().top)){

        $("#v5").addClass("activo");

    }else if(scrollActual >= parseInt($("#section4").offset().top)){

        $("#v4").addClass("activo");

    }else if(scrollActual >= parseInt($("#section3").offset().top)){

        $("#v3").addClass("activo");

    }else if(scrollActual >= parseInt($("#section2").offset().top)){

        $("#v2").addClass("activo");

    }else{

        $("#v1").addClass("activo");
    }
}

function cambiarSeccion(){
    var secction=$(this).attr("id");

    switch(secction){
        case "v1":
            $("html, body").animate({scrollTop:$("#section1").offset().top}, "slow");
        break;
        case "v2":
            $("html, body").animate({scrollTop:$("#section2").offset().top}, "slow");
        break;
        case "v3":
            $("html, body").animate({scrollTop:$("#section3").offset().top}, "slow");
        break;
        case "v4":
            $("html, body").animate({scrollTop:$("#section4").offset().top}, "slow");
        break;
        case "v5":
            $("html, body").animate({scrollTop:$("#section5").offset().top}, "slow");
            break;
    }
    
}

/*Function Menu Resize*/
$(document).on("scroll", function() {

    if($(document).scrollTop()>20) {
        $("header").removeClass("largeNav").addClass("smallNav");
    } else {
        $("header").removeClass("smallNav").addClass("largeNav");
    }

});

/*Vertical Timeline*/
jQuery(document).ready(function($){
    var timelineBlocks = $('.cd-timeline-block'),
        offset = 0.8;

    //hide timeline blocks which are outside the viewport
    hideBlocks(timelineBlocks, offset);

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function(){
        (!window.requestAnimationFrame)
            ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
            : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
    });

    function hideBlocks(blocks, offset) {
        blocks.each(function(){
            ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        });
    }

    function showBlocks(blocks, offset) {
        blocks.each(function(){
            ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        });
    }
});