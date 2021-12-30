"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	btnToggleMenuMobileInner: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--inner-js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileSub: [].slice.call(document.querySelectorAll(".menu-mobile-sub--js")),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			autoFocus: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
	},
	// /magnificPopupCall
	toggleMenu: function toggleMenu() {
		var _this = this;

		_this.btnToggleMenuMobile.forEach(function (element) {
			element.addEventListener('click', function () {
				_this.btnToggleMenuMobile.forEach(function (element) {
					element.classList.toggle("on");
				});

				_this.menuMobile.classList.toggle("active");

				_this.menuMobileSub.forEach(function (element) {
					element.classList.remove("active");
				});

				_this.body.classList.toggle("fixed");

				return false;
			});
		});
	},
	closeMenu: function closeMenu() {
		var _this = this;

		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");
		});

		_this.menuMobile.classList.remove("active");

		_this.body.classList.remove("fixed");

		_this.menuMobileSub.forEach(function (element) {
			element.classList.remove("active");
		});
	},
	mobileMenu: function mobileMenu() {
		// закрыть/открыть мобильное меню
		var _this = this;

		_this.toggleMenu(); // _this.menuMobileLink.forEach(function (element) {
		// 	element.addEventListener('click', function (e) {
		// 		console.log(element);
		// 		_this.closeMenu();
		// 	});
		// })


		document.addEventListener('mouseup', function (event) {
			var container = event.target.closest(".menu-mobile--js.active"); // (1)

			if (!container) {
				_this.closeMenu();
			}
		});
	},
	// /mobileMenu
	// табы  . 
	tabscostume: function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).show().addClass('active');
		});
	},
	// /табы  
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	} // /inputMask

};

function eventHandler() {
	var _;

	// полифил для object-fit
	objectFitImages(); // Picture element HTML5 shiv

	document.createElement("picture"); // для свг

	svg4everybody({});
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.mobileMenu();
	JSCCommon.inputMask(); // JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	//$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/019-360.png);"></div>')
	// /добавляет подложку для pixel perfect
	// /закрыть/открыть мобильное меню

	function heightses() {
		var w = $(window).width(); // скрывает моб меню

		var topH = $("header ").innerHeight(); // $(window).scroll(function () {
		// 	if ($(window).scrollTop() > 150) {
		// 		$('.top-line  ').addClass('fixed');
		// 	} else {
		// 		$('.top-line  ').removeClass('fixed');
		// 	}
		// 	// if (document.body.scrollTop === 0) $('.top-line').addClass('fixed-mob');
		// 	// else $('.top-line').removeClass('fixed-mob');
		// });
		// листалка по стр
		//to js

		/*$(".sidebar__nav > li > a").click(function () {
			const elementClick = $(this).attr("href");
			const destination = $(elementClick).offset().top;
				$('html, body').animate({ scrollTop: destination }, 1100);
				return false;
		});*/
		// vanila js

		function smoothScroll(qSelector) {
			var elements = document.querySelectorAll(qSelector);
			if (elements.length === 0) return;

			var _iterator = _createForOfIteratorHelper(elements),
					_step;

			try {
				for (_iterator.s(); !(_step = _iterator.n()).done;) {
					var elem = _step.value;
					elem.addEventListener('click', function () {
						event.preventDefault();
						var destinyID = this.getAttribute('href'); //this.attributes.href.nodeValue

						var destinyElem = document.querySelector(destinyID);
						if (!destinyElem) return;
						var destinyTop = getCoords(destinyElem).top;
						window.scrollTo({
							top: destinyTop,
							behavior: "smooth"
						});
					});
				}
			} catch (err) {
				_iterator.e(err);
			} finally {
				_iterator.f();
			}
		}

		smoothScroll('.sidebar__nav > li > a, .sReportPreheader__slide-link');

		function getCoords(elem) {
			// crossbrowser version
			var box = elem.getBoundingClientRect();
			var body = document.body;
			var docEl = document.documentElement;
			var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
			var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
			var clientTop = docEl.clientTop || body.clientTop || 0;
			var clientLeft = docEl.clientLeft || body.clientLeft || 0;
			var top = box.top + scrollTop - clientTop;
			var left = box.left + scrollLeft - clientLeft;
			return {
				top: Math.round(top),
				left: Math.round(left)
			};
		} //


		var lastScrollTop = 0;

		if ($("div").is(".top-line-sub")) {
			$('.top-line-sub-inner').height($('.top-line-sub').innerHeight());
		}

		$(window).scroll(function (event) {
			var st = $(this).scrollTop();

			if (st > lastScrollTop) {
				$('.top-line  ').addClass('fixed');
				$(' .top-line-sub  ').removeClass('fixed');
			} else {
				$('.top-line  ').removeClass('fixed');
				$(' .top-line-sub  ').addClass('fixed');
			}

			lastScrollTop = st;
		});
		$(window).scroll(function (event) {
			var st = $(this).scrollTop();

			if (st > 0) {
				$('.top-line  ').addClass('fixed-ready');
			} else {
				$('.top-line   ').removeClass('fixed-ready');
			}
		});
		$(window).scroll(function (event) {
			var st = $(this).scrollTop();

			if (st == 0) {
				$('.top-line  ').removeClass('fixed ');
			}
		});

		if ($("div").is(".top-line-sub")) {
			$('.top-line-sub-inner').height($('.top-line-sub').innerHeight());
			var lastScrollTop2 = $('.top-line-sub-inner').offset().top;
			$(window).scroll(function (event) {
				var st2 = $(window).scrollTop(); // console.log(lastScrollTop2)
				// console.log(st2)

				if (st2 > lastScrollTop2) {
					$('.top-line-sub  ').addClass('fixed-ready');
				} else {
					$('.top-line-sub  ').removeClass('fixed-ready');
				} // lastScrollTop2 = st2;

			});
			$(window).scroll(function (event) {
				var st2 = $(window).scrollTop();

				if (st2 <= lastScrollTop2) {
					$('.top-line-sub-inner  ').removeClass('fixed ');
				}
			});
		} // $(window).scroll(function (event) {
		// 	var st2 = $(window).scrollTop();
		// 	if (st2 <= lastScrollTop2) {
		// 		$('.top-line-sub-inner  ').removeClass('fixed ');
		// 	}
		// });
		// var lastScrollTop2 = 0;
		// $(window).scroll(function (event) {
		// 	var st2 = $(this).scrollTop();
		// 	if (st2 > lastScrollTop2) {
		// 		$('.top-line  ').removeClass('fixed-mob');
		// 	} else {
		// 		$('.top-line  ').addClass('fixed-mob');
		// 	}
		// 	lastScrollTop2 = st2;
		// });
		// конец добавил
		// 	if (window.matchMedia("(min-width: 992px)").matches) {
		// 		JSCCommon.closeMenu();
		// 	}

	}

	$(window).resize(function () {
		heightses();
	});
	heightses(); // листалка по стр

	$(" .top-nav li a, .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - 80;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
	var mySwiperC = new Swiper('.slider-auto-js', {
		speed: 400,
		// loop: true,
		loopedSlides: 4,
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		navigation: {
			nextEl: '.s-cards .swiper-button-next',
			prevEl: '.s-cards .swiper-button-prev'
		},
		breakpoints: {
			576: {
				spaceBetween: 20,
				slidesPerView: 'auto',
				watchOverflow: true,
				freeMode: true,
				freeModeMomentum: true,
				loop: true // slidesPerView: 4,
				// spaceBetween: 40

			},
			1200: (_ = {
				spaceBetween: 30,
				slidesPerView: 'auto'
			}, _defineProperty(_, "slidesPerView", 'auto'), _defineProperty(_, "watchOverflow", true), _defineProperty(_, "freeMode", true), _defineProperty(_, "freeModeMomentum", true), _defineProperty(_, "loop", false), _)
		}
	});
	var mySwiper2 = new Swiper('.s-project__slider--js', {
		// effect: 'coverflow',
		// grabCursor: true,
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		loopedSlides: 6,
		breakpoints: {
			// 576: {
			// },
			576: {
				slidesPerView: 2
			},
			991: {
				slidesPerView: 3
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
				slidesOffsetBefore: -80,
				slidesOffsetAfter: -80,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
			}
		}
	});
	var mySwiper3 = new Swiper('.s-project__slider--3-js', {
		slidesPerView: 'auto',
		watchOverflow: true,
		freeMode: true,
		freeModeMomentum: true,
		spaceBetween: 20,
		loopedSlides: 6,
		loop: false,
		breakpoints: {
			576: _defineProperty({
				// slidesPerView: 1,
				loop: true,
				watchOverflow: false,
				freeMode: false,
				freeModeMomentum: false,
				slidesPerView: 'auto'
			}, "loop", true),
			991: {
				loop: true,
				watchOverflow: false,
				freeMode: false,
				freeModeMomentum: false,
				slidesPerView: 2
			},
			1200: {
				loop: true,
				watchOverflow: false,
				freeMode: false,
				freeModeMomentum: false,
				slidesPerView: 2,
				spaceBetween: 30,
				slidesOffsetBefore: -80,
				slidesOffsetAfter: -80,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
			}
		}
	});
	var mySwiperMob2222 = new Swiper('.project-lg__slider--mob-js', {
		slidesPerView: 'auto',
		// loop: true,
		speed: 400,
		spaceBetween: 20,
		loopedSlides: 4,
		watchOverflow: true,
		freeMode: true // freeModeMomentum: true,

	});
	var currentProjectSliderThumb = new Swiper(".currentProjectSlider-thumb-js", {
		spaceBetween: 10,
		slidesPerView: 'auto',
		freeMode: true,
		watchSlidesProgress: true
	});
	var swipcurrentProjectSlider1 = new Swiper(".currentProjectSlider-js", {
		// centeredSlidesBounds: true,
		thumbs: {
			swiper: currentProjectSliderThumb
		}
	});
	var mySwiperRew = new Swiper('.slider-rew-js', {
		speed: 400,
		loop: true,
		loopedSlides: 4,
		slidesPerView: 'auto',
		spaceBetween: 20,
		watchOverflow: true,
		freeMode: true,
		freeModeMomentum: true,
		navigation: {
			nextEl: '.s-rews .swiper-button-next',
			prevEl: '.s-rews .swiper-button-prev'
		},
		breakpoints: {
			992: {
				slidesPerView: 3,
				watchOverflow: false,
				freeMode: false,
				freeModeMomentum: false
			}
		}
	});
	$(".section").each(function () {
		var _Swiper;

		var mySwiperMob = new Swiper($(this).find('.slider-auto-mob-js'), (_Swiper = {
			speed: 400,
			loop: true,
			loopedSlides: 4,
			spaceBetween: 20,
			slidesPerView: 'auto',
			watchOverflow: true,
			freeMode: true,
			freeModeMomentum: true
		}, _defineProperty(_Swiper, "loop", false), _defineProperty(_Swiper, "navigation", {
			nextEl: $(this).find('.swiper-button-next'),
			prevEl: $(this).find('.swiper-button-prev')
		}), _defineProperty(_Swiper, "breakpoints", {
			576: {
				watchOverflow: true,
				spaceBetween: 30
			}
		}), _Swiper));
		var mySwiper4 = new Swiper($(this).find('.slider-js'), {
			speed: 400,
			loop: true,
			loopedSlides: 4,
			slidesPerView: 1,
			spaceBetween: 20,
			navigation: {
				nextEl: $(this).find('.swiper-button-next'),
				prevEl: $(this).find('.swiper-button-prev')
			}
		});
	});
	var mySwiper5 = new Swiper('.s-news__slider--js', {
		slidesPerView: 'auto',
		spaceBetween: 20,
		watchOverflow: true,
		freeMode: true,
		freeModeMomentum: true,
		breakpoints: {
			992: {
				watchOverflow: false,
				freeMode: false,
				freeModeMomentum: false,
				slidesPerView: 2
			}
		}
	});
	$(".project-item").hover(function () {
		$(this).find(".project-item__hidden").toggle(); // $(this).find(".project-item__hidden.active").hide(300)
	});
	var headerSwiper3 = new Swiper('.header-block__slider--js', {
		slidesPerView: 1,
		watchOverflow: true,
		spaceBetween: 0,
		loop: true,
		pagination: {
			el: '.header-block__swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});
	var mySwiperBody = new Swiper('.s-project-body__slider--js', {
		slidesPerView: 1,
		watchOverflow: true,
		spaceBetween: 20,
		loopedSlides: 6,
		loop: true,
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			991: {
				slidesPerView: 2,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					renderBullet: function renderBullet(index, className) {
						return '<span class="' + className + '">' + (index + 1) + '</span>';
					}
				}
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30
			}
		}
	}); // $(".custom-select").chosen({
	// 	html_template: '<span class="option-row"><span class="option-img-wrap"><img  class="{class_name}" src="{url}" /></span><span class="option-text">{text}</span></span> '
	// });

	$('.custom-select').ddslick();
	$(".s-continue__col--map").click(function () {
		$(".info-block").show();
	});
	$(".info-block-close").click(function () {
		$(".info-block").toggle();
	}); // $('.custom-select').select2({
	// 	theme: 'bootstrap4',
	// });

	$(".nav__item--has-children-js > .nav__link").each(function () {
		$(this).append('<div class="toggle-l"></div>');
	});
	$(".nav__item--has-children-js   .nav__link").click(function () {
		return false;
	});
	$(".nav__item--has-children-js  .nav__link ").on('click', function () {
		$(this).next('.menu-mobile-sub--js').addClass('active'); // return false;
	});
	$(".toggle-menu-mobile--inner-js").click(function () {
		$(this).parents('.menu-mobile-sub--js.active').removeClass('active');
	}); // боковое меню
	// Cache selectors

	var lastId,
			topMenu = $(" .s-about__nav"),
			topMenuHeight = 0,
			// topMenuHeight = topMenu.outerHeight()+15,
	// All list items
	menuItems = topMenu.find("a"),
			// Anchors corresponding to menu items
	scrollItems = menuItems.map(function () {
		var item = $($(this).attr("href"));

		if (item.length) {
			return item;
		}
	}); // Bind click handler to menu items
	// so we can get a fancy scroll animation

	menuItems.click(function (e) {
		var href = $(this).attr("href"),
				offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 1100);
		e.preventDefault();
	}); // Bind to scroll

	$(window).scroll(function () {
		// Get container scroll position
		var fromTop = $(this).scrollTop() + topMenuHeight; // Get id of current scroll item

		var cur = scrollItems.map(function () {
			if ($(this).offset().top < fromTop) return this;
		}); // Get the id of the current element

		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : "";

		if (lastId !== id) {
			lastId = id; // Set/remove active class

			menuItems.removeClass("active").parent().end().filter("[href='#" + id + "']").addClass("active");
		}
	}); // $(".sticky-js").data("margin-top",'200')

	var sticky = new Sticky('.sticky-js'); // слайдер в модалке

	var mySwiperModal = new Swiper('.modal-rew__slider--js', {
		speed: 400,
		spaceBetween: 20,
		watchOverflow: true,
		loop: true,
		navigation: {
			nextEl: '.modalArrow.swiper-button-next',
			prevEl: '.modalArrow.swiper-button-prev'
		}
	});
	$(".s-rews ").on('click', ".rew-modal", function () {
		$.fancybox.open({
			src: '#modal-rew',
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			autoFocus: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад"
				}
			}
		});
		var indexSlide = $(this).data('index'); // console.log(indexSlide);

		mySwiperModal.slideTo(indexSlide);
		mySwiperModal.update();
	}); //luckyoneJS
	//020

	var wonderSlider = new Swiper('.wonderfull-cases-js', {
		spaceBetween: 20,
		//loop: true,
		//lazy
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 3
		},
		//naviation
		navigation: {
			nextEl: '.wonderful-next',
			prevEl: '.wonderfull-prev'
		},
		breakpoints: {
			996: {
				slidesPerView: 1
			},
			576: {
				slidesPerView: 'auto'
			},
			0: {
				slidesPerView: 1
			}
		}
	}); //old temple slider

	$('.old-temple-slider').each(function () {
		var oldTempleSlider = new Swiper($(this).find('.old-temple-slider-js'), {
			slidesPerView: 1,
			//loop: true,
			//breakpoints
			breakpoints: {
				996: {
					slidesPerView: 1
				},
				576: {
					slidesPerView: 'auto',
					spaceBetween: 20
				},
				0: {
					slidesPerView: 1,
					spaceBetween: 10
				}
			},
			//lazy
			lazy: {
				loadPrevNext: true,
				loadPrevNextAmount: 3
			},
			//naviation
			navigation: {
				nextEl: $(this).find('.old-temple-slider-next-js'),
				prevEl: $(this).find('.old-temple-slider-prev-js')
			}
		});
	}); //023
	//

	var donateSlider = new Swiper('.donate-target-slider-js', {
		spaceBetween: 0,
		slidesPerView: 5,
		//initialSlide: 2,
		loop: true,
		//auto
		autoplay: {
			delay: 4000
		},
		//lazy
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 7
		},
		on: {
			slideChange: function slideChange() {
				var SliderExist = window.setInterval(function () {
					if (!donateSlider) return;
					window.clearInterval(SliderExist);
					getCenterSlide(donateSlider);
				}, 10);
			}
		}
	});

	function switchSlideOnClick() {
		var allSlides = document.querySelectorAll('.donate-target-slider-js .swiper-slide .slide-content');
		if (allSlides.length === 0) return;

		var _iterator2 = _createForOfIteratorHelper(allSlides),
				_step2;

		try {
			for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
				var slide = _step2.value;
				slide.addEventListener('click', function () {
					var parent = this.parentElement;
					var centerSlide = document.querySelector('.center-slide');
					window.setTimeout(function () {
						//clicked this
						if (parent.classList.contains('center-slide')) {
							return;
						} //clicked neibor
						else if (parent.classList.contains('center-neighbor')) {
							if (centerSlide.nextElementSibling === parent) {
								donateSlider.slideNext();
							} else {
								donateSlider.slidePrev();
							}
						} //clicked neibor of neibor
						else {
							var activeIndex = donateSlider.realIndex;

							if (centerSlide.nextElementSibling.nextElementSibling === parent) {
								donateSlider.slideTo(activeIndex + 2);
							} else {
								var slideToNum = activeIndex - 2;

								if (slideToNum < 0) {
									var totalSlides = $('.swiper-slide:not(.swiper-slide-duplicate)').length;
									slideToNum = totalSlides - 2;
								}

								donateSlider.slideTo(slideToNum);
							}
						}
					}, 30);
				});
			}
		} catch (err) {
			_iterator2.e(err);
		} finally {
			_iterator2.f();
		}
	}

	switchSlideOnClick();

	function getCenterSlide(swiper) {
		var activeSlide = document.querySelector('.swiper-slide-active');
		var centerSlide = activeSlide.nextElementSibling.nextElementSibling;
		var leftSibling = centerSlide.previousElementSibling;
		var rightSibling = centerSlide.nextElementSibling;
		$('.center-slide').removeClass('center-slide');
		$(centerSlide).addClass('center-slide');
		$('.center-neighbor').removeClass('center-neighbor');
		$(rightSibling).addClass('center-neighbor');
		$(leftSibling).addClass('center-neighbor');
	} //name inputs js 023


	function setAddRemoveInpsWork(parentContSelector) {
		var parent = document.querySelector(parentContSelector);
		if (!parent) return;
		var addBtn = parent.querySelector('.add-name-btn-js');
		if (!addBtn) return;
		addBtn.addEventListener('click', appendNewInp.bind(undefined, parent)); //it happens only at once
		//bind removeItself to existing input
		//for new items look at appendNewInp chain

		var crossBtns = parent.querySelectorAll('.cross-btn');

		var _iterator3 = _createForOfIteratorHelper(crossBtns),
				_step3;

		try {
			for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
				var btn = _step3.value;
				btn.addEventListener('click', removeItself.bind(btn, parent));
			}
		} catch (err) {
			_iterator3.e(err);
		} finally {
			_iterator3.f();
		}
	}

	setAddRemoveInpsWork('.inputs-parent-js');
	setAddRemoveInpsWork('.about-health-js');
	setAddRemoveInpsWork('.about-piece-js'); //remove Btn Js

	function removeItself(parent) {
		var allInps = parent.querySelectorAll('.donate-input-name-box');

		if (allInps.length > 1) {
			//scenarion for case we have a lot of inps
			//remove clicked box
			this.parentElement.parentElement.removeChild(this.parentElement);
		} else {
			//scenarion for case we have 1 inp
			//just clean it
			this.parentElement.querySelector('input').value = '';
		}

		setSeqNumsForAllInps(parent);
	} //create New inp funcs


	function appendNewInp(parent) {
		var allInps = parent.querySelectorAll('.donate-input-name-box');
		var lasInp = allInps[allInps.length - 1].querySelector('input');
		var lastInpName = lasInp.getAttribute('name');
		var newName = generateNewName(lastInpName);
		createNewInpBox(newName, parent);
	}

	function generateNewName(name) {
		var re = /\d+$/;
		var nameNumber = name.match(re)[0];
		return Number(nameNumber) + 1;
	}

	function createNewInpBox(seqNumber, parent) {
		var newBox = document.createElement('div');
		newBox.classList.add('donate-input-name-box');
		var innerInp = document.createElement('input');
		innerInp.setAttribute('placeHolder', "Введите Им'я");
		innerInp.setAttribute('type', 'text');
		innerInp.setAttribute('name', 'donate-inp-name-' + seqNumber);
		var crossBtn = document.createElement('div');
		crossBtn.classList.add('cross-btn');
		var inpsBox = parent.querySelector('.donates-inputs-box-js');
		inpsBox.appendChild(newBox);
		newBox.appendChild(innerInp);
		newBox.appendChild(crossBtn); //

		crossBtn.addEventListener('click', removeItself.bind(crossBtn, parent));
		setSeqNumsForAllInps(parent);
	} //setSeqNumsForAllInps


	function setSeqNumsForAllInps(parent) {
		var allInps = parent.querySelectorAll('.donate-input-name-box input');

		for (var _i = 0, _Object$entries = Object.entries(allInps); _i < _Object$entries.length; _i++) {
			var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
					index = _Object$entries$_i[0],
					inp = _Object$entries$_i[1];

			inp.setAttribute('name', 'donate-inp-name-' + (Number(index) + 1));
		}
	} // end setSeqNumsForAllInps
	//024


	var preheader024Slider = new Swiper('.preheader024-slider-js', {
		slidesPerView: 'auto',
		// loop: true,
		watchOverflow: true,
		freeMode: true,
		freeModeMomentum: true,
		//breakpoints
		breakpoints: {
			1200: {
				spaceBetween: 128
			},
			996: {
				spaceBetween: 80
			},
			576: {
				spaceBetween: 60
			},
			0: {
				spaceBetween: 20
			}
		},
		//lazy
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 5
		}
	});
	var templeSlider024 = new Swiper('.temple-project-slider-js', {
		slidesPerView: 'auto',
		// loop: true,
		watchOverflow: true,
		freeMode: true,
		freeModeMomentum: true,
		//breakpoints
		breakpoints: {
			576: {
				spaceBetween: 30
			},
			0: {
				spaceBetween: 0
			}
		},
		//lazy
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 5
		}
	}); //report-full-screen-slider

	$('.report-full-screen-slider').each(function () {
		var reportFSSlider = new Swiper($(this).find('.report-fs-slider-js'), {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			//autoplay
			//autoplay: {
			//	delay: 4000,
			//},
			//lazy
			lazy: {
				loadPrevNext: true
			},
			//naviation
			navigation: {
				nextEl: $(this).find('.report-fs-next'),
				prevEl: $(this).find('.report-fs-prev')
			}
		});
	}); //026

	var newsSlider026 = new Swiper('.news026-slider-js', {
		//loop: true,
		watchOverflow: true,
		spaceBetween: 21,
		//breakpoints
		breakpoints: {
			992: {
				slidesPerView: 1
			},
			0: {
				slidesPerView: 'auto'
			}
		},
		//nav
		navigation: {
			nextEl: '.news-slider026-next-js',
			prevEl: '.news-slider026-prev-js'
		},
		//lazy
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 5
		}
	}); //019

	var dtSlider019 = new Swiper('.donate-target-slider019-js', {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		//autoplay
		//autoplay: {
		//	delay: 4000,
		//},
		//lazy
		lazy: {
			loadPrevNext: true
		},
		//naviation
		navigation: {
			nextEl: '.dt-slider019-next-js',
			prevEl: '.dt-slider019-prev-js'
		}
	});
	var certificatSlider019 = new Swiper('.certificat-slider-019-js', {
		slidesPerView: 'auto',
		// loop: true,
		watchOverflow: true,
		freeMode: true,
		freeModeMomentum: true,
		//breakpoints
		breakpoints: {
			576: {
				spaceBetween: 30
			},
			0: {
				spaceBetween: 20
			}
		},
		//lazy
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 5
		}
	}); //bottom red strip js
	//to use
	//1 add mixin to page
	//2 add class '.red-hook-js' to element,  scroll over/above of which will show/hide red str

	function redBottomStip() {
		var redBStrip = document.querySelector('.bottom-red-strip');
		if (!redBStrip) return;
		var redHook = document.querySelector('.red-hook-js');
		if (!redBStrip) return;
		var donateItemsParent = redBStrip.querySelector('.bottom-red-strip__donate-items');
		window.addEventListener("scroll", toggleRedBStrip.bind(undefined, redHook, redBStrip), {
			passive: true
		}); //mob red strip

		window.addEventListener('resize', function () {
			if (window.matchMedia("(min-width: 768px)").matches) {
				donateItemsParent.classList.remove('active');
			}
		}, {
			passive: true
		});
		redBStrip.addEventListener('click', function () {
			donateItemsParent.classList.add('active');
		});
	}

	redBottomStip();

	function toggleRedBStrip(redHook, redBStrip) {
		var hookTop = $(redHook)[0].getBoundingClientRect().top + $(window)['scrollTop']();
		var hookHeight = redHook.offsetHeight;
		var hookBot = hookTop + hookHeight;
		var footerTop = $('.footer')[0].getBoundingClientRect().top + $(window)['scrollTop']();
		var windowHeight = vh(100);

		if (hookBot > window.scrollY || footerTop - windowHeight < window.scrollY) {
			$(redBStrip).removeClass('active');
		} else {
			$(redBStrip).addClass('active');
		}
	} //slider


	var redStripSlider = new Swiper('.donates-items-slider-js', {
		slidesPerView: 'auto',
		// loop: true,
		watchOverflow: true,
		freeMode: true,
		freeModeMomentum: true,
		spaceBetween: 42
	}); // custom select

	$('.custom-select2').select2({
		minimumResultsForSearch: Infinity,
		dropdownCssClass: "drop-down-full-grey"
	});

	function vh(v) {
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		return v * h / 100;
	} //endLuckyoneJs

}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

var btnsRemoveOpacity = document.querySelectorAll('.subheadline_on-js');
btnsRemoveOpacity.forEach(function (btn) {
	btn.addEventListener('click', function () {
		document.querySelector('[data-id="' + btn.dataset.btnid + '"]').classList.remove('subheadline_opacity');
	});
});