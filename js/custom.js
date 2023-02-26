$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(document).ready(function () {
    $(".reviewSlider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
      speed: 500,
      infinite: true,
      cssEase: "ease-in-out",
      loop: true,
      dots: true,
      arrows: false,
    });
  });
});
