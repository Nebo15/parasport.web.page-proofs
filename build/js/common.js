$(document).ready(function() {

	// quotes slider

	$('.js-quotes').slick({
		slidesToShow: 1,
		dots: true,
		slidesToScroll: 1,
		arrows: false
	});
	$('.js-quotes').on('afterChange', function(event, slick, currentSlide){
		var prevIndex = currentSlide -1,
			prevItem = $(this).find('.slick-slide[data-slick-index='+prevIndex+']'),
			prevImg = prevItem.find('.quotes__img img').attr('src'),
			nextIndex = currentSlide + 1,
			nextItem = $(this).find('.slick-slide[data-slick-index='+nextIndex+']'),
			nextImg = nextItem.find('.quotes__img img').attr('src');
		$('.js-quotes-prev').find('img').attr('src', prevImg);
		$('.js-quotes-next').find('img').attr('src', nextImg);
	});

	$('.js-quotes-prev').on('click', function(){
		$('.js-quotes').slick('slickPrev');
	});
	$('.js-quotes-next').on('click', function(){
		$('.js-quotes').slick('slickNext');
	});

	// carousel

	$('.js-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		fade: true,
		dots: true
	});

	$('.js-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1
	});

	$('.js-events-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1
	});

	// language selection

	$(document).on('click', function(e){
		$('.js-lang-list').removeClass('is-open');
	});

	$('.js-lang-status').on('click', function(e){
		$('.js-lang-list').addClass('is-open');
		e.stopPropagation();
	});
	$('.js-lang-btn').on('click', function(e){

		if ($(window).width() < 1024) {
			var langName = $(this).find('span').text(),
				langImgPath = $(this).find('img').attr('src'),
				langStatusName = $('.js-lang-status').find('span'),
				langStatusImg = $('.js-lang-status').find('img');

			langStatusName.text(langName);
			langStatusImg.attr('src', langImgPath);
		}
		else {
			e.stopPropagation();
		}

		$('.js-lang-btn').removeClass('active');
		$(this).addClass('active');


	});


	// mobile menu

	$('.js-humb').on('click', function(){
		$(this).toggleClass('is-open');
		$('.js-mob-menu').slideToggle();
	});

	if ($(window).width() < 1024) {
		$('.js-dropdown-btn').on('click', function(){
			if ($(this).hasClass('is-open')) {
				$(this).closest('.menu__link').find('.js-dropdown').slideUp();
				$(this).removeClass('is-open');
			}
			else {
				$('.js-dropdown').slideUp();
				$('.js-dropdown-btn').removeClass('is-open');

				$(this).closest('.menu__link').find('.js-dropdown').slideDown();
				$(this).addClass('is-open');
			}
			return false;
		});
	};













});