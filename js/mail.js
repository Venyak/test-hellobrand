const sendForm = () => {
  $(document).ready(function () {
    $('#form').submit(function () {
      if (document.form.bio.value == '' || document.form.phone.value == '') {
        valid = false;
        return valid;
      }
      $.ajax({
        type: 'POST',
        url: 'mail/mail.php',
        data: $(this).serialize(),
      }).done(function () {
        $(this).find('input').val('');
        $('#form').trigger('reset');
      });
      return false;
    });
  });
};

$(function ($) {
  $('[name="phone"]').mask('+7(999) 999-9999');
});

export default sendForm;
