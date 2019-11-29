$(function () {
  let $menu = $('[ data-accordion]'),
    $head = $('[ data-accordion-head]'),
    $content = $('[ data-accordion-content]');
  
  if($menu.length) {
    $head.on('click', function () {
      $(this).toggleClass('active').next().slideToggle();
    });
    
    $content.hide();
  }
});