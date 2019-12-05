$(function () {
  let $toggle = $('[data-fixed-front-panel-toggle]'),
    $body = $('body'),
    $innerPanel = $('.fixed-front-panel--inner-page');
  
  $toggle.on('click', () => {
    $body.toggleClass('front-panel-hidden')
  });
  
  const setBottomPadding = () => {
    if($(window).outerWidth() <= 1199) {
      $body.css('padding-bottom', $innerPanel.outerHeight())
    } else {
      $body.css('padding-bottom', 'unset');
    }
  };
  
  setBottomPadding();
  
  if($innerPanel.length) {
    window.addEventListener('resize', setBottomPadding);
  }
});