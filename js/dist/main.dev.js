"use strict";

$(function () {
  // ----------- slick slider-----------------------
  $(".sale__slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    prevArrow: '<button type="button" class="slider_btn slider_prev"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.89958 21.7989L18.7991 11.8994L8.89958 1.99992" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="slider_btn slider_next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.89958 21.7989L18.7991 11.8994L8.89958 1.99992" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    responsive: [{
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1020,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }]
  }); // ------------------ tabs--------------------------

  $(".products__inner .tab").on("click", function (event) {
    var id = $(this).attr("data-id");
    $(".products__inner").find(".tab-item").removeClass("active-tab").hide();
    $(".products__inner .tabs").find(".tab").removeClass("active");
    $(this).addClass("active");
    $("#" + id).addClass("active-tab").fadeIn();
    return false;
  }); // ----------- swiper-slider ----------

  new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    breakpoints: {
      600: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1000: {
        slidesPerView: 4
      },
      1500: {
        slidesPerView: 5,
        spaceBetween: 10
      }
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    }
  }); //  ----------- header on scroll ---------------------------

  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 5) {
        $(".header__top").hide();
        $(".header__bottom").css("background-color", "#5b8792");
        $(".menu__link, .jq-selectbox__select").css("color", "#ffffff");
        $(".select__line").css("background-color", "#ffffff");
      } else {
        $(".header__top").show();
        $(".header__bottom").css("background-color", "#ffffff");
        $(".menu__link, .jq-selectbox__select").css("color", "#1a1919");
        $(".select__line").css("background-color", "#1a1919");
      }
    });
  });
  $(window).resize(function () {
    if ($(window).width() < 950) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 5) {
          $(".header__top").show();
          $(".menu__link, .jq-selectbox__select").css("color", "#1a1919");
          $(".select__line").css("background-color", "#1a1919");
        }
      });
    }
  }); // ---------------- btn up---------------------------------------

  $(".back_top").hide();
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $(".back-top").fadeIn();
      } else {
        $(".back-top").fadeOut();
      }
    });
    $(".back_top a").click(function () {
      $("body,html").animate({
        scrollTop: 0
      }, 0);
      return false;
    });
  }); // ------- infinite carousel sale ----------------------------------

  $(document).ready(function () {
    $slides = $('.sale__slides');
    $slides.bind('contentchanged', function () {
      animate($slides);
    });
    animate($slides);
  });

  function animate($slides) {
    var slidesLength = $slides.find('li').length;

    if (slidesLength > 3) {
      $slides.find('li:nth-last-child(n-10)').clone().prependTo($slides);
      $slides.addClass('animate');
      $slides.css('animation-duration', slidesLength * 2 + 's');
    }
  } // -------------- mouse button ----------------------------


  if (window.matchMedia("(min-width: 992px)").matches) {
    var delayMouseFollow = function delayMouseFollow() {
      requestAnimationFrame(delayMouseFollow);
      revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
      revisedMousePosY += (mousePosY - revisedMousePosY - s) / delay;
      mouseCircle.style.top = revisedMousePosY + "px";
      mouseCircle.style.left = revisedMousePosX + "px";
    };

    var mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById("mouse_pointer");

    document.onmousemove = function (e) {
      mousePosX = e.pageX;
      mousePosY = e.pageY;
    };

    var widget = $(".widget");
    var s = widget.offset().top - $(window).scrollTop();
    console.log(s);
    var delay = 6,
        revisedMousePosX = 0,
        revisedMousePosY = 0;
    delayMouseFollow();
  } // ------ menu-burger -------------


  $(".menu__btn").on("click", function () {
    $(".menu__btn").toggleClass("menu__btn--active");
    $(".menu__list").toggleClass("menu__list--active");
  }); // ---------style select --------- 

  $(function () {
    $("input, select").styler();
  });
});