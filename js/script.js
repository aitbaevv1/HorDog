$(document).ready(function() {


    $('.header__burger').click(function() {
        $('.header__mobile').addClass('active');
    });
    $('.header__mobile-top__close').click(function() {
        $('.header__mobile').removeClass('active');
    })
    $('.hits__item-like').click(function() {
        $(this).toggleClass('active');
    });

    $('.hits__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,

        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
        ]
    });
    $('.hits__block-slider').slick({
        slidesToShow: 2,

        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
        ]
    });
    $('.actions__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: false,
                }
            },
        ]
    });
    $('.news__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,

        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.4,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
        ]
    });
    $('.reviews__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,

        responsive: [
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('.see__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
        ]
    });
})