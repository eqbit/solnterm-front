$(function () {
  let $toggle = $('[data-fixed-front-panel-toggle]');
  
  $toggle.on('click', () => {
    $('body').toggleClass('front-panel-hidden')
  })
})