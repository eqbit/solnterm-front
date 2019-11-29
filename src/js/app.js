$(function () {
  $('[data-phone]').inputmask({mask: '+7(999)999-99-99'});
  
  $('[data-anchor]').on('click', function(e) {
    e.preventDefault();
    
    let $target = $($(this).attr('href'));
    if($target.length) {
      $([document.documentElement, document.body]).animate({
        scrollTop: $target.offset().top - $('header').outerHeight()
      }, 300);
    }
  });
  
  let $popup = $('[data-popup]'),
    $popupClose = $('[data-popup-close]'),
    $popupToggle = $('[data-popup-toggle]');
  
  $popupToggle.on('click', function() {
    let targetName = $(this).data('popup-toggle'),
      $target = $(`[data-popup=${targetName}]`);
  
    $target.css("display", "flex")
      .hide().fadeIn('100');
  });
  
  $popupClose.on('click', function() {
    $(this).closest($popup).fadeOut('100');
  });
});