$(function () {
  let $searchToggle = $('[data-search-toggle]'),
    $mobileBoardToggle = $('[data-mobile-board-toggle]'),
    $headerInput = $('[data-header-search-input]'),
    $headerSearchClear = $('[data-header-search-clear]'),
    $body = $('body');
  
  $searchToggle.on('click', () => {
    $body.toggleClass('search-active');
  });
  
  $headerSearchClear.on('click', () => {
    $headerInput.val('').focus();
  });
  
  $mobileBoardToggle.on('click', () => {
    $body.toggleClass('mobile-board-active');
  })
});