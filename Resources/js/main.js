
$(document).ready(function(){

    
    // STICKY-NAV-VAR(HEADER SECCTION)
    $(".services-section").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        }else {
            $("nav").removeClass("sticky");
        }
    });


    // ACTIVE-CLASS
    $("nav ul li").click(function(){
        $("nav ul li").removeClass("active");
        $(this).addClass("active");

    });
    $("nav .logo").click(function(){
        $("nav ul li").removeClass("active");
        $("nav ul li:nth-child(1)").addClass("active");
    });


    
    // MIXITUP(SKILL SECTION)
    var mixer= mixitup (".container");




    // HAM-BURGER-MENU
    $(".open-btn").click(function(){
        $(".overlay").css({
            "width":"100%",
        })
    });
    $(".close-btn").click(function(){
        $(".overlay").css({
            "width":"0%",
        })
    });
    $(".overlay a").click(function(){
        $(".overlay").css({
            "width":"0%",
        })
    });



    // SMOOTH SROLL FOR IE/EDGE/SAFARI
    $("a").click(function(event){
        if(this.hash !==""){
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
                },800,function(){
                    window.location.hash = hash;
            });
        }
    });




});



















