$(".slider").slick({
  infinity: true,
  slidesToShow: 1,
  autoplay: true,
  dots: true,
  arrows: true,
  fade: true,
  cssEase: "linear",
  speed: 1000,
  prevArrow:
    '<span><i class="fa-solid fa-arrow-left-long left-arrow"></i></span>',
  nextArrow:
    '<span><i class="fa-solid fa-arrow-right-long right-arrow"></i></span>',
});
