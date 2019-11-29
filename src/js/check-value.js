$(function () {
  let $checkValue = $('[data-check-value]');
  
  $checkValue.on('input change keypressed', function(e) {
    if(e.target.value) {
      $(this).parent().addClass('got-value')
    } else {
      $(this).parent().removeClass('got-value')
    }
  });
});