$(function () {
  let progressAnimationDuration = 10000; //Тут можно поменять длительность анимации
  
  let $slider = $('[data-front-slider]'),
    $nav = $('[data-front-slider-nav]');
  
  $slider.on('init reInit afterChange', function () {
    $('[data-progress-circle]').remove();
    
    let $dot = $('[data-front-slider-dots]').find('.slick-active');
    $dot.append('<div class="progress-circle" data-progress-circle></div>');
    
    let $progressCircle = $('[data-progress-circle]');
    
    $progressCircle.hide().circleProgress({
      startAngle: -Math.PI / 4 * 2,
      animationStartValue: 1,
      value: 0,
      lineCap: 'round',
      thickness: 8,
      fill: {color: '#FFF'},
      animation: {
        duration: progressAnimationDuration
      }
    }).on('circle-animation-start').fadeIn().on('circle-animation-end', function () {
      $slider.slick('slickNext')
    });
  });
  
  $slider.on('beforeChange', function () {
    $('[data-progress-circle]').fadeOut(300, function () {
      $('[data-progress-circle]').remove();
    });
    
    setTimeout(() => {
      if(!$('[data-progress-circle]').length) {
        $slider.trigger('afterChange');
      }
    }, 800)
  });
  
  $slider.slick({
    prevArrow: $('[data-front-slider-prev]'),
    nextArrow: $('[data-front-slider-next]'),
    dots: true,
    appendDots: $('[data-front-slider-dots]'),
    asNavFor: $nav
  });
  
  $nav.slick({
    asNavFor: $slider,
    slidesToShow: 3,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});