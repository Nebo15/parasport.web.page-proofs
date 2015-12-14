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

});