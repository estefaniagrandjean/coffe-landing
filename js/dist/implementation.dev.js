"use strict";

$(document).on('ready', function () {
  $("#tabs").tabs();
  $('.center').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    dots: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><img src='./images/arrow-white.png' alt='Arrow'></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='./images/arrow-white.png' alt='Arrow'></button>",
    responsive: [{
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        dots: false,
        prevArrow: "<button type='button' class='slick-prev pull-left'><img src='./images/arrow-white.png' alt='Arrow'></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><img src='./images/arrow-white.png' alt='Arrow'></button>"
      }
    }, {
      breakpoint: 750,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        dots: false,
        prevArrow: "<button type='button' class='slick-prev pull-left'><img src='./images/arrow-white.png' alt='Arrow'></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><img src='./images/arrow-white.png' alt='Arrow'></button>"
      }
    }]
  });
  $(".regular").slick({
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
    responsive: [{
      breakpoint: 1024,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>"
      }
    }, {
      breakpoint: 750,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>"
      }
    }]
  });
  $('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>"
  });
  $(".button--white").after("<img src='./images/arrow.png' alt='Arrow'>");
  $('#menu').hcOffcanvasNav({
    disableAt: 1200,
    position: 'right',
    pushContent: true,
    bodyInsert: 'prepend'
  });
});
$('.parallax-window').parallax({
  imageSrc: './images/top-bg.jpg'
});