$(function(){
	tl = TweenMax;
	/*tl.staggerFromTo($("body"), 0.7, {opacity: 0}, {opacity: 1, delay:0.2, ease: Power1.easeOut});
	tl.staggerFromTo($("#wrap header .main_logo"), 0.7, {opacity: 0,x:'50px'}, {opacity: 1, x:'0px',delay:0.3, ease: Power1.easeInOut});
	tl.staggerFromTo($("#wrap header .area_r"), 0.7, {opacity: 0,x:'-50px'}, {opacity: 1, x:'0px',delay:0.3, ease: Power1.easeInOut});
	tl.staggerFromTo($("#wrap header #nav [class*='menu'] > a "), 1, {opacity: 0,}, {opacity: 1,delay:0.3, ease: Power1.easeInOut},0.1);*/


	var mainSlider = new Swiper('.main_slider', {
		effect: 'fade',
		speed:500,
		loop:true,
		autoplay: {
			delay:3500,
			disableOnInteraction: false,
		},
		fadeEffect: {
			crossFade: false,
		 },
		mousewheel: false,
		pagination: {
          el: ".main_home .dot",
			clickable: true,
        },
		watchSlidesVisibility: true,
		on: {
			init: function () {
				$('.main_slider .item').removeClass('swiper-slide-active');
				$('.main_slider').addClass('start');
				tl.staggerFromTo($(".main_home .main_slider .text_g .title1 > * > *"), 0.8, {opacity: 0,rotate:'0deg',y:'0%'}, {opacity: 1, rotate:'0deg',y:'0%',delay:0.3, ease: Power1.easeInOut}, .02);
				tl.staggerFromTo($(".main_home .main_slider .text_g .title2 > *"), 0.8, {opacity: 0,rotate:'0deg',y:'0%'}, {opacity: 1, rotate:'0deg',y:'0%',delay:0.4, ease: Power1.easeInOut}, .02);
				tl.staggerFromTo($(".main_home .main_slider .item .bg .img span"), 2, {scale:'1.2'}, {scale:'1',ease: Power1.easeInOut});
				tl.staggerFromTo($(".main_home .main_slider .text_g"), 0.8, {opacity: 0}, {opacity: 1, delay:0.3, ease: Power1.easeInOut});
				tl.staggerFromTo($(".main_home .indicator,.main_home .scroll_down a"), 1, {opacity: 0,y:'0%'}, {opacity: 1, y:'0%',delay:0.3, ease: Power1.easeInOut});
			},
			transitionStart: function () {
				var secNum = this.activeIndex;
				$('.main_slider').removeClass('start');
				$('.main_slider').addClass('slide_next');
				$('.main_slider').removeClass('slide_prev');
				tl.staggerFromTo($(".main_home .main_slider .text_g .title1 > * > *"), 0.8, {opacity: 0,rotate:'0deg',y:'0%'}, {opacity: 1, rotate:'0deg',y:'0%',delay:0.3, ease: Power1.easeInOut}, .02);
				tl.staggerFromTo($(".main_home .main_slider .text_g .title2 > *"), 0.8, {opacity: 0,rotate:'0deg',y:'0%'}, {opacity: 1, rotate:'0deg',y:'0%',delay:0.4, ease: Power1.easeInOut}, .02);
				tl.staggerFromTo($(".main_home .main_slider .item .bg .img span"), 1.5, {scale:'1.3'}, {scale:'1', ease: Power1.easeOut});
			},
			transitionEnd: function () {
				var secNum = this.activeIndex +1;
			},
		},
	});
	
	$(".sec1 .main_slider").removeClass("slide_next");
	/*
		 var businessSlider = new Swiper(".business_slider", {
			slidesPerView: "auto",
			spaceBetween: 16,
			loop: true,
			effect: "slide",
		  });
	*/

/*
	$(window).on('load resize', function() { 
		if($(window).width() > 1540) { 
			meritSlider.filter('.slick-initialized').slick('unslick');
		}else{ 
			meritSlider.not('.slick-initialized').slick(meritSlickOptions); 
		} 
	});
	if($(window).width() > 1540) { 
		meritSlider.filter('.slick-initialized').slick('unslick');
	}else{ 
		meritSlider.not('.slick-initialized').slick(meritSlickOptions); 
	} 
*/


});