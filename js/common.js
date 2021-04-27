//preloader
$(window).load(function() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

    $(".logo_text h1").animated("fadeInDown", "fadeOutUp");
    $(".logo_text p").animated("fadeInUp", "fadeOutDown");
});


$(document).ready(function() {
    //mixItUp
    $('.tile_container').mixItUp();

    //scroll2id
    $("a[href*='#']").mPageScroll2id();

    //popup
    $(".popup").magnificPopup({type: 'image'});
    $(".work_popup").magnificPopup({type: 'inline'});

    //paralax resize
    function heightDetect() {
    $(".main_head").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function(){
        heightDetect();
    });
    $(".portfolio_item").each(function(i){
        $(this).find("a").attr("href", "#work_"+i);
        $(this).find(".portfolio_popup").attr("id", "work_"+i);

    });

 //sandwich
    $('.nav_button').click(function(){
        $('#burger').toggleClass('active-sandwich');
    });
    //animate

    $(".section_logo").animated("fadeInUp", "fadeOutDown");
    $(".left_block").animated("fadeInLeft", "fadeOutLeft");
    $(".right_block").animated("fadeInRight", "fadeOutRight");
    $(".centr_block").animated("flipInY", "flipOuYt");

    $(".left_resume .resume_item").animated("fadeInLeft", "fadeOutLeft");
    $(".right_resume .resume_item").animated("fadeInRight", "fadeOutRight");

    //porfolio list toggle
    $(".s_portfolio li").click(function(){
        $(".s_portfolio li").removeClass("active");
        $(this).addClass("active")

    })
    //switch button menu

    $(".top_menu ul li a").click(function(){
        $(".top_menu").fadeOut(600);
        $(".top_menu li a").removeClass("fadeInUp animated");
        $('#burger').toggleClass('active-sandwich');
    })

    $(".toggle_menu").click(function() {
        if ($(".top_menu").is(":visible")) {
            $(".top_menu").fadeOut(600);
            $(".top_menu li a").removeClass("fadeInUp animated");
            $(".logo_text").removeClass("h_opacity");
        } else{
            $(".top_menu").fadeIn(600);
            $(".top_menu li a").addClass("fadeInUp animated");
            $(".logo_text").addClass("h_opacity");

        }
    });

    $(function(){
        $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
    });
});


