(function(){

    'use strict';


    $('.card').mouseenter(function(){

        $(this).find('.card-overlay').css({'top': '-100%'});
        $(this).find('.card-hover').css({'top':'0'});

    }).mouseleave(function(){

        $(this).find('.card-overlay').css({'top': '0'});
        $(this).find('.card-hover').css({'top':'100%'});

    });

    if ($(window).width() < 1028) {
        $('.flex-child:nth-child(1)').removeAttr("data-aos");
        $('.flex-child:nth-child(2)').removeAttr("data-aos");
        $('.header-unit').removeAttr("data-aos");
        $('.right').removeAttr("data-aos");
        $('.left').removeAttr("data-aos");
        $('.card-div .card').removeAttr("data-aos");
    } else {
        $('.flex-child:nth-child(1)').attr("data-aos", "fade-left");
        $('.flex-child:nth-child(2)').attr("data-aos", "fade-right");
        $('.header-unit').attr("data-aos", "fade-left");
        $('.right').attr("data-aos", "fade-left");
        $('.left').attr("data-aos", "fade-right");
        $('.card-div .card').attr("data-aos", "flip-left");
    }

})(jQuery);