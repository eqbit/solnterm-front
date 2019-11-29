$(function () {
  let $select2 = $('[data-select-2]');
  
  $select2.each(function() {
    $(this).select2({
      minimumResultsForSearch: Infinity,
    });
  });
  
  let $form = $('[data-calc-form]');
  
  $form.on('submit', e => {
    e.preventDefault();
    
    $.ajax({
      url: '/ajax/converter.php',
      type: 'GET',
      data: $form.serialize(),
      dataType: 'json',
      success: response => {
        ['HRA', 'HRC', 'HV', 'HB'].map(item => {
          $(`[data-value=${item}]`).text(response.item);
        });
      }
    });
  });
});