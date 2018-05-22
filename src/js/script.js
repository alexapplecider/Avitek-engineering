$(document).ready(function () {

	// кнопка мобильного меню
	var mobMenuButton = $('.mobile-menu__btn'),
			mobMenuBlock = $('.mobile-menu-nav-list');
	$('.mobile-menu__btn').on('click', function (event) {
		mobMenuBlock.toggleClass('mobile-menu-nav-list--show');
	});

	// настройка списка в мобильном меню
	$('.mobile-menu-drop').hide();
	$('.mobile-menu-nav-list__item--title').click(function () {
		$('.mobile-menu-nav-list__item--title').toggleClass('mobile-menu-nav-list__item-link--active');
		$('.mobile-menu-drop').slideToggle(100);
	});

	// настройка слайдера Последние новости
	$('.responsive-last-news-slider').slick({
		dots: false,
		infinite: true,
		speed: 400,
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
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	// настройка слайдера Отзывы
	$('.reviews-slider').slick({
		dots: false,
		infinite: true,
		speed: 400,
		autoplay: false,
		autoplaySpeed: 8000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '.slider-buttons__prev--reviews',
		nextArrow: '.slider-buttons__next--reviews'
	});

	// настройка слайдера Наши объекты
	$('.our-objects-slider').slick({
		dots: false,
		infinite: true,
		speed: 400,
		autoplay: true,
		autoplaySpeed: 8000,
		slidesToShow: 1,
		arrows: true,
		prevArrow: '.slider-buttons__prev--our-objects',
		nextArrow: '.slider-buttons__next--our-objects'
	});

	// настройка слайдера Что мы делаем
	$('.what-we-do-slider').slick({
		dots: false,
		infinite: true,
		speed: 400,
		autoplay: true,
		autoplaySpeed: 8000,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '.slider-buttons__prev--what-we-do',
		nextArrow: '.slider-buttons__next--what-we-do',
		responsive: [{
				breakpoint: 768,
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
		]
	});

	// настройка слайдера Наша команда
	$('.our-team-slider').slick({
		dots: false,
		infinite: true,
		speed: 400,
		autoplay: true,
		autoplaySpeed: 8000,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '.slider-buttons__prev--our-team',
		nextArrow: '.slider-buttons__next--our-team',
		responsive: [{
				breakpoint: 768,
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
		]
	});

	// Scroll to Top button
	$(".btnScroll").click(function() {
		$("body").animate({ "scrollTop": 0}, 1000);
		$("html").animate({ "scrollTop": 0}, 1000);
	});
	$(window).scroll(function() {
		if( $(window).scrollTop() > 250 ){ 
			$(".btnScroll").addClass("btnActive");
		} else {
			$(".btnScroll").removeClass("btnActive");		
		}
	})
});


const footerLink = document.querySelectorAll(".footer-nav__list-link");
for(let i of footerLink) {
	i.addEventListener('click', openFooterList);
}
function openFooterList(event) {
	event.preventDefault();
	const target = event.target;
	const list = target.nextElementSibling;
	list.classList.toggle('footer-nav__sub-list--show');
}


const sliderButtons = document.querySelectorAll('.slider-buttons button');
for(let i of sliderButtons) {
	i.addEventListener('click', changeButtonColor);
}
function changeButtonColor(event) {
	const target = event.currentTarget;
	if( target.classList.contains('slider-buttons__prev') ) {
		target.classList.add('slick-arrow--active');
		target.nextElementSibling.classList.remove('slick-arrow--active');
	} else if ( target.classList.contains('slider-buttons__next') ) {
		target.classList.add('slick-arrow--active');
		target.previousElementSibling.classList.remove('slick-arrow--active');
	}
}


$('#aniimated-thumbnials').lightGallery({
	thumbnail:true
});