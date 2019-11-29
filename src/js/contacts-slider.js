$(function () {
  let $slider = $('[data-clients-slider]'),
    $prev = $('[data-clients-prev]'),
    $next = $('[data-clients-next]');
  
  if($slider.length) {
    $slider.slick({
      prevArrow: $prev,
      nextArrow: $next,
      slidesToShow: 5,
      responsive: [
        {
          breakpoint: 1439,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 959,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 719,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    })
  }
});