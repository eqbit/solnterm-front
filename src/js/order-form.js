$(function () {
  let state = {},
    $form = $('[data-order-form]'),
    $nextStepBtn = $('[data-order-form-next-step]'),
    $error = $('[data-order-form-error]'),
    $fileInput = $form.find('[data-file-input]'),
    $fileRow = $form.find('[data-file-doc-row]'),
    $fileRowParent = $fileRow.closest('[data-file-doc-row-parent'),
    filesArray = [],
    $startAgain = $('[data-popup-start-again]');
  
  $form.on('change', function (e) {
    state[e.target.name] = e.target.value;
  });
  
  $nextStepBtn.on('click', function (e) {
    let $this = $(this),
      $localValidation = $this.closest('[data-order-form-step]').find('[data-validation]');
  
    $localValidation.each(function () {
      validate($(this), true);
    });
  
    if (!$form.find('.required.error').length) {
      $('[data-order-form-step]').hide();
      $('[data-order-form-step=1]').fadeIn();
      $error.slideUp();
    } else {
      $error.css('display', 'flex').hide().slideDown();
      $nextStepBtn.text('Повторить');
    }
  });
  
  let $autoValidate = $('[data-validation]');
  
  $autoValidate.on('input change keypressed', function() {
    if($(this).closest('.required').is('.error')) {
      validate($(this), true);
    }
  });
  
  $fileInput.on('change', function(e) {
    let fileList = e.originalEvent.target.files;
  
    if(fileList.length) {
      [...fileList].forEach(file => {
        let duplicate = false;
        
        filesArray.forEach(item => {
          if(item.name === file.name) {
            duplicate = true;
          }
        });
        
        if(!duplicate) {
          filesArray.push(file);
        }
      });
    }
  
    $fileInput.val('');
    
    updateFileRow();
  });
  
  const handleFileRemove = ($fileItem, index) => {
    $fileItem.remove();
    filesArray.splice(index, 1);
    
    updateFileRow();
  };
  
  const updateFileRow = () => {
    $fileRow.html('');
    
    if(filesArray.length) {
      filesArray.forEach((item, index) => {
        insertFileItem(item.name, index);
      });
  
      $fileRowParent.slideDown();
    } else {
      $fileRowParent.slideUp();
    }
  };
  
  const insertFileItem = (text, index) => {
    let $fileItem = $('<div/>').addClass('order-form-documents-item'),
      $removeLink = $(`<svg xmlns="http://www.w3.org/2000/svg" width="12.414" height="12.414" viewBox="0 0 12.414 12.414">
                        <g id="Group_106" data-name="Group 106" transform="translate(0.707 0.707)">
                          <line id="Line_44" data-name="Line 44" x1="11" y1="11" transform="translate(0 0)" fill="none" stroke="#fff" stroke-width="2"/>
                          <line id="Line_45" data-name="Line 45" x1="11" y1="11" transform="translate(11 0) rotate(90)" fill="none" stroke="#fff" stroke-width="2" opacity="0.9"/>
                        </g>
                      </svg>`),
      $text = $('<span/>').text(text);
  
    $fileItem.append($removeLink).append($text);
    $fileRow.append($fileItem);
    
    $removeLink.on('click', function() {
      handleFileRemove($fileItem, index)
    })
  };
  
  
  $form.on('submit', function (e) {
    e.preventDefault();
    
    let formData = new FormData();

    for(let i = 0; i < filesArray.length; i++) {
      formData.append('userfile[]', filesArray[i]);
    }
    
    for(let key in state) {
      if(!state.hasOwnProperty(key)) continue;
      formData.append(key, state[key]);
    }
  
    $.ajax({
      url: '/ajax-url',
      data: formData,
      type: 'POST',
      processData: false,
      contentType: false,
      dataType: "json",
      success: response => {
        $('[data-order-form-step]').hide();
        $('[data-order-form-step=2]').fadeIn();
      },
      error: error => {
        $('[data-order-form-step]').hide();
        $('[data-order-form-step=3]').fadeIn();
      }
    });
  });
  
  $startAgain.on('click', function() {
    $('[data-order-form-step]').hide();
    $('[data-order-form-step=0]').fadeIn();
  })
});