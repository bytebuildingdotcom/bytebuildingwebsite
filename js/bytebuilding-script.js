function sendContactEmail() {
  var name = document.getElementById('bb-contact-name');
  var email = document.getElementById('bb-contact-email');
  var subject = document.getElementById('bb-contact-subject');
  var message = document.getElementById('bb-contact-message');

   message.value = message.value + '<br/>' + ',' + name.value;

  window.open('mailto:'+email.value+'?subject='+subject.value+'&body='+message.value);
}