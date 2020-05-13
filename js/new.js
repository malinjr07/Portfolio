$(function () {
    $(window).on('load', function () {
        $('.loader').delay(100).fadeOut(100);
    });
    $('.projects').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: false, autoplaySpeed: 1500,
        prevArrow: '.left',
        nextArrow: '.right',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});