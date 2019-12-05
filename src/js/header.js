$(function () {
  let $searchToggle = $('[data-search-toggle]'),
    $mobileBoardToggle = $('[data-mobile-board-toggle]'),
    $headerInput = $('[data-header-search-input]'),
    $headerSearchClear = $('[data-header-search-clear]'),
    $body = $('body');
  
  $(document).mouseup(function(e) {
    let $form = $(".header-search__body");
    
    if ($body.is('.search-active') && !$form.is(e.target) && $form.has(e.target).length === 0) {
      $body.toggleClass('search-active');
    }
  });
  
  $searchToggle.on('click', () => {
    $body.toggleClass('search-active');
  });
  
  $headerSearchClear.on('click', () => {
    $headerInput.val('').focus();
  });
  
  $mobileBoardToggle.on('click', () => {
    $body.toggleClass('mobile-board-active');
  });
});