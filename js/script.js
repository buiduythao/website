$('.customer_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    dots:true,
    arrows:false
});
new WOW().init();
$(document).ready(function(){
    $("#next_section").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-us").offset().top
        }, 1000);
    });
});