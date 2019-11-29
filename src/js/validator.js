let validators = {
  phone: phone => {
    let regExp = /^[+\d][\d\(\)\ -]{4,14}\d$/;
    return regExp.test(phone);
  },
  email: email => {
    let regExp = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    return regExp.test(email);
  },
  name: name => {
    const regExp = /[а-яА-ЯёЁ ]/;
    return (name.length > 1 && regExp.test(name));
  }
};

let $validation = $('[data-validation]');

const validate = ($this, hard) => {
  
  const validator = $this.data('validation'),
    correct = validators[validator]($this.val()),
    $parent = $this.parent();
  
  if (!$parent.is('.required')) {
    return false;
  }
  
  if (correct) {
    $parent.removeClass('error').addClass('correct');
  } else {
    if (hard) {
      $parent.removeClass('correct').addClass('error');
    } else {
      $parent.removeClass('correct');
    }
  }
};

// $validation.on('change input keypressed', function () {
//   validate($(this));
// });
//
// $validation.on('blur', function () {
//   validate($(this), true);
// });

$('[type=tel]').inputmask({
  mask: '+7(999)999-99-99',
  showMaskOnHover: false
});