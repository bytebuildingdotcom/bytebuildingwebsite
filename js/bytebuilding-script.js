function sendContactEmail() {
  var name = document.getElementById('bb-contact-name');
  var email = document.getElementById('bb-contact-email');
  var subject = document.getElementById('bb-contact-subject');
  var message = document.getElementById('bb-contact-message');

   message.value = message.value + '%0D%0A%0D%0A' + ',' + name.value;

  window.open('mailto:'+email.value+'?subject='+subject.value+'&body='+message.value);

  document.getElementById('bb-contact-name').value = '';
  document.getElementById('bb-contact-email').value = '';
  document.getElementById('bb-contact-subject').value = '';
  document.getElementById('bb-contact-message').value = '';
}