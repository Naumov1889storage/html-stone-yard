/*intresting tab*/
$(document).ready(function () {
	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function () {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn(300)
	}).eq(0).addClass("active");
})


$(".filter_title").click(function () {
	$(this).toggleClass("active");
	$(".catalog_accordion").toggleClass("catalog_accordion__show");
});


$(".border-green").click(function () {
	$(this).toggleClass("border-active");
});


/*Counter*/
$(document).ready(function () {
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});


$(document).on("click", ".header_more__btn", function () {
	if ($(window).width() > 950) {
		$(".header_second").toggleClass("header_second__height-up");
	}
	else {
		$(".header_second__nav").toggleClass("header_second__height-up");
	}
});


$(document).on("click", ".header_more__btn", function () {
	if ($(window).width() < 950) {
		$(this).removeClass("cmn-toggle-switch");
		$(this).removeClass("cmn-toggle-switch__htx");
	}
	else {
		$(this).addClass("cmn-toggle-switch");
		$(this).addClass("cmn-toggle-switch__htx");
	}
});


/*intresting tab*/


/*header search*/
$(document).on("click", ".header_search__loupe", function () {
	$(".header_search input").toggleClass("header_input__show");
	$(".header_search__loupe").toggleClass("header_search__loupe-green");
});

/*mouseenter mouseleave = hover*/
$(document).on("mouseenter mouseleave", ".popup_item", function () {
	if ($(window).width() > 950) {
		var popupBorder = $(this).find(".popup_item__border");
		var popupCircle = $(this).find(".popup_item__circle");
		var popupText = $(this).find(".popup_item__text");
		var popupLine = $(this).find(".popup_text__line");
		$(popupText).toggleClass("popup_item__text__show");
		$(popupBorder).toggleClass("popup_item__border__stop");
		$(popupCircle).toggleClass("popup_item__circle__stop");
		$(popupLine).animate({
			width: '0%',
		}, 0)
		$(popupLine).animate({
			width: '100%',
		}, 300);
	}
});


/*slick slider*/
$(function () {
	popupbg();
	$(window).resize(function () {
		popupbg();
	});


	$(".regular").slick({
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3
	});
	$(".center").slick({
		dots: true,
		infinite: true,
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 3
	});
	$(".variable").slick({
		dots: true,
		infinite: true,
		variableWidth: true
	});

	$('.responsive4').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				}
			}
		]
	});

	$('.responsive5').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
			{
				breakpoint: 1060,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 860,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: true,
				}
			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true,
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				}
			}
		]
	});

});


/*index popup-bg*/
function popupbg() {
	if ($(window).width() < 940) {
		$(".header_bg__popup-container").addClass("responsive1");
		$('.responsive1').slick({
			dots: true,
			arrows: false,
			infinite: false,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			settings: 'unslick',
			responsive: [
				{
					breakpoint: 2830,
					settings: 'unslick',
				},
				{
					breakpoint: 951,
					settings: 'slick',
				}
			]
		});
	}
	else {
		$(".header_bg__popup-container").removeClass("responsive1");
		$('.responsive1').slick({});
	}
}


/*index action slider*/
$(function () {
	actionslider();
	$(window).resize(function () {
		actionslider();
	});

});

function actionslider() {
	if ($(window).width() < 970) {
		$(".action_block").addClass("responsiveaction");
		$('.responsiveaction').slick({
			dots: true,
			arrows: false,
			infinite: false,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			settings: 'unslick',
			responsive: [
				{
					breakpoint: 2830,
					settings: 'unslick',
				},
				{
					breakpoint: 1000,
					settings: 'slick',
				}
			]
		});
	}
	else {
		$(".action_block").removeClass("responsiveaction");
	}
}


$(function () {
	viewslider();
	$(window).resize(function () {
		viewslider();
	});

});

function viewslider() {
	if ($(window).width() < 685) {
		$(".view_gallery__miniature").addClass("viewslider");
		$('.viewslider').slick({
			dots: true,
			arrows: false,
			infinite: false,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			settings: 'unslick',
			responsive: [
				{
					breakpoint: 2830,
					settings: 'unslick',
				},
				{
					breakpoint: 1000,
					settings: 'slick',
				}
			]
		});
	}
	else {
		$(".view_gallery__miniature").removeClass("viewslider");
	}
}


$(document).on("click", ".header_first__mob-btn", function () {
	$(".header_first__nav").toggleClass("header_first__nav__mob");
	$(".popup_overlay").toggleClass("popup_overlay__show");
});

$(document).on("click", ".popup_overlay", function () {
	$(".header_first__nav").toggleClass("header_first__nav__mob");
	$(".popup_overlay").toggleClass("popup_overlay__show");
	$(".header_first__mob-btn").toggleClass("active");
});


/*catalog accordion*/
$(document).on("click", ".accordion_preview", function () {
	var accordionCurrent = $(this).parent();
	var accordionCurrentContent = accordionCurrent.find(".accordion_content");
	accordionCurrentContent.toggleClass("accordion_content__show");
	$(this).toggleClass("accordion_preview__active");
	$(".contact .accordion_content").not(accordionCurrentContent).removeClass("accordion_content__show");
	$(".contact .accordion_content").not(accordionCurrentContent).removeClass("accordion_content__show");
	$(".contact .accordion_preview__active").not(this).removeClass("accordion_preview__active");
});/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!to templates - not() !!!!!!!!
and accordionCurrentContent.toggleClass("accordion_content__show"); to templates*/


/*view accordion*/
$(document).on("click", ".view_section .accordion_preview", function () {
	if ($(window).width() > 685) {
		var accordionCurrent = $(this).parent();
		var accordionCurrentContent = accordionCurrent.find(".accordion_content");
		$(accordionCurrentContent).toggleClass("accordion_content__show");
		$(this).toggleClass("accordion_preview__active");
	}
});


/*catalog accordion*/
/*
$(document).on("click", ".accordion_preview", function () {
	$(".accordion_content").removeClass( "accordion_content__show" );
	$(".accordion_preview__active").removeClass( "accordion_preview__active" );
	var accordionCurrent = $(this).parent();
	var accordionCurrentContent = accordionCurrent.find(".accordion_content");
	$(accordionCurrentContent).toggleClass( "accordion_content__show" );
	$(this).toggleClass( "accordion_preview__active" );
});
*/


/*dropdown*/
$('.ui.dropdown')
	.dropdown();
$('.autumn.leaf')
	.transition('fade down')
;


/*catalog input range*/
$(function () {
	$("#slider-range").slider({
		/*orientation: "vertical",*/
		step: 100,
		range: true,
		min: 1000,
		max: 20000,
		values: [2000, 12000],
		slide: function (event, ui) {
			$("#amount").val(ui.values[0] + " р.");
			$("#amount2").val(ui.values[1] + " р.");
		}
	});
	$("#amount").val($("#slider-range").slider("values", 0));
	$("#amount2").val($("#slider-range").slider("values", 1));


	// Изменение местоположения ползунка при вводиде данных в первый элемент input
	$("input#amount").change(function(){
		var value1=$("input#amount").val();
		var value2=$("input#amount2").val();
		if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("input#amount").val(value1);
		}
		$("#slider-range").slider("values",0,value1);
	});

	// Изменение местоположения ползунка при вводиде данных в второй элемент input
	$("input#amount2").change(function(){
		var value1=$("input#amount").val();
		var value2=$("input#amount2").val();

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#amount2").val(value2);
		}
		$("#slider-range").slider("values",1,value2);
	});

	// фильтрация ввода в поля
	jQuery('#amount, #amount2').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;

		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;

		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);

		if(!/\d/.test(keyChar))	return false;

	});

	$("input#amount").change(function() {
		$(".accordion_preview__value1").html($("#amount").val())
		$(".accordion_preview__value2").html($("#amount2").val())
	});
	$("input#amount2").change(function() {
		$(".accordion_preview__value1").html($("#amount").val())
		$(".accordion_preview__value2").html($("#amount2").val())
	});
});

