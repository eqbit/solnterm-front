$(function () {
  let $sidebar = $('[data-sidebar]'),
    $header = $('header'),
    initialSidebarTop = $sidebar.offset().top
  
  let checkPos = () => {
    if($(window).outerWidth() >= 1200) {
      if(!$sidebar.is('.sticky')) {
        
        if($(window).scrollTop() + $header.outerHeight() + 8 >= initialSidebarTop) {
          $sidebar.addClass('sticky');
        }
      } else {
        if($(window).scrollTop() + $header.outerHeight() + 8 < initialSidebarTop) {
          $sidebar.removeClass('sticky');
        }
      }
    }
    
  };
  
  $(document).on('scroll', () => {
    checkPos();
  })
});