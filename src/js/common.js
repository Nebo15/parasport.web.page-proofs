$(document).ready(function() {

	// quotes slider

	$('.js-quotes').on('beforeChange init', function(event, slick, currentSlideIdx, nextSlideIdx){
		$(slick.$slides).removeClass('slick-slide-enter');
		$(slick.$slides[nextSlideIdx]).addClass('slick-slide-enter');
	}).on('afterChange init', function (event, slick, currentSlideIdx) {
		$(slick.$slides).removeClass('slick-slide-left slick-slide-right');
		currentSlideIdx = currentSlideIdx || 0;
		var prevSlideIdx = (currentSlideIdx - 1 + slick.$slides.length) % slick.$slides.length,
			nextSlideIdx = (currentSlideIdx + 1 + slick.$slides.length) % slick.$slides.length;

		$(slick.$slides[prevSlideIdx]).addClass('slick-slide-left');
		$(slick.$slides[nextSlideIdx]).addClass('slick-slide-right');

	}).slick({
		slidesToShow: 1,
		dots: true,
		centerMode: true,
		centerPadding: '140px',
		slidesToScroll: 1,
		arrows: false,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					centerPadding: '60px'
				}
			}
		]
	});
	// carousel

	$('.js-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		fade: true,
		dots: true,
		responsive: [
		    {
		    	breakpoint: 1024,
		    	settings: {
		    		dots: false
		    	}
		    }
		]

	});

	$('.js-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 568,
		      settings: {
		        slidesToShow: 2
		      }
		    }
		   ] 
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

	
	$('.js-dropdown-btn').on('click', function(){
		if ($(window).width() < 1024) {

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
		};
	});
	
	// tabs tablet

	$('.js-tabs').each(function(){
		var tabs = $(this);

		var flag = false;

		var next = tabs.find('.js-tabs-next'),
			prev = tabs.find('.js-tabs-prev'),
			wrap = tabs.find('.js-tabs-wrap'),
			list = tabs.find('.js-tabs-list');

		// detect tablet view	
		function tabletTabsInit(){
			if (list.width() > wrap.width()) {
				next.addClass('is-visible');
				flag = true;
			}
			else {
				prev.removeClass('is-visible');
				next.removeClass('is-visible');
				flag = false;
			}

			if (flag == true) {
				function tabletTabs(){

					var diff = list.width() - wrap.width();

					if (wrap.scrollLeft() > 1) {
						prev.addClass('is-visible');
						console.log('is-scrolled');
					}
					else {
						prev.removeClass('is-visible');
						console.log('is-not-scrolled');
					}
					if (wrap.scrollLeft() < diff){
						next.addClass('is-visible');
					}
					else {
						next.removeClass('is-visible');
						console.log('is-scrolled-to-end');
					}

				}
				tabletTabs();
				$(wrap).scroll(function(){
					tabletTabs();
				});
			};
		}
		tabletTabsInit();
		$(window).resize(function(){
			tabletTabsInit();
		});

		// click next button
		next.on('click', function(){
			var scrollPos = wrap.scrollLeft();
			scrollPos = scrollPos + 193;

			wrap.animate({
				scrollLeft: scrollPos
			}, 300);
		});
		// click prev button
		prev.on('click', function(){
			var scrollPos = wrap.scrollLeft();
			scrollPos = scrollPos - 193;

			wrap.animate({
				scrollLeft: scrollPos
			}, 300);
		});
			
	});

	// chronology accordion

	$('.js-chronology-nav').on('click', function(){

		if ($(this).hasClass('is-open')) {
			$(this).removeClass('is-open');
			$(this).closest('.js-chronology').find('.js-chronology-content').slideUp();
		}
		else {
			$(this).addClass('is-open');
			$(this).closest('.js-chronology').find('.js-chronology-content').slideDown();
		}
	});






















});