var altoNav = $(window).height();
$("body>section").css("min-height", altoNav);
$(window).scroll(ajustarSeccion);
$("header li a").click(cambiarSeccion);
$('.card').click(function(){
    $(this).toggleClass('flipped');
});

function ajustarSeccion(){

    var scrollActual = $("body").scrollTop();
    
    $("a").removeClass("activo");
    
    if(scrollActual >= $("#section4").offset().top){

        $("#v4").addClass("activo");

    }else if(scrollActual >= $("#section3").offset().top){

        $("#v3").addClass("activo");

    }else if(scrollActual >= $("#section2").offset().top){

        $("#v2").addClass("activo");

    }else{

        $("#v1").addClass("activo");
    }
}

function cambiarSeccion(){
    var secction=$(this).attr("id");

    switch(secction){
        case "v1":
            $("htm, body").animate({scrollTop:$("#section1").offset().top}, "slow"); 
        break;
        case "v2":
            $("htm, body").animate({scrollTop:$("#section2").offset().top}, "slow"); 
        break;
        case "v3":
            $("htm, body").animate({scrollTop:$("#section3").offset().top}, "slow"); 
        break;
        case "v4":
            $("htm, body").animate({scrollTop:$("#section4").offset().top}, "slow"); 
        break;
    }
    
}