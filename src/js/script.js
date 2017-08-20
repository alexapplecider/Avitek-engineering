$(document).ready(function() {

        var mobMenuButton = $('.mobile-menu__btn'),
            mobMenuBlock = $('.mobile-menu-nav-list');
        $('.mobile-menu__btn').on('click', function(event) {
            mobMenuBlock.toggleClass('mobile-menu-nav-list--show');
        });



        $('.mobile-menu-drop').hide();
        $('.mobile-menu-nav-list__item--title').click(function() {
            $('.mobile-menu-nav-list__item--title').toggleClass('mobile-menu-nav-list__item-link--active');
            $('.mobile-menu-drop').slideToggle(100);
        });



        $('.responsive-last-news-slider').slick({
            dots: false,
            infinite: true,
            speed: 900,
            autoplay: true,
            autoplaySpeed: 8000,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '.slider-buttons__prev--last-news',
            nextArrow: '.slider-buttons__next--last-news',
            responsive: [{
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });


        $('.our-objects-slider').slick({
            dots: false,
            infinite: true,
            speed: 900,
            autoplay: true,
            autoplaySpeed: 8000,
            slidesToShow: 1,
            arrows: true,
            prevArrow: '.slider-buttons__prev--our-objects',
            nextArrow: '.slider-buttons__next--our-objects'
        });
    });