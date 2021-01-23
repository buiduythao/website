$('.customer_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    dots:true,
    arrows:false
});
new WOW().init();

$('#next_section').click(function(){
    $("html, body").animate(
        {
            scrollTop: $($.attr(this,'href')).offset().top
        }
        ,200
        ,"linear"
    );
})
// $('#next_section').click(function(){
//     var fuller = $(this).closest('.fullscreen').next(),
//         section = $(this).closest('#service');

//     section.animate({
//         scrollTop: section.scrollTop() + fuller.offset().top
//     }, 700);
// });
