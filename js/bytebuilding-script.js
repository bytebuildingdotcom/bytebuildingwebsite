function sendContactEmail() {
  var name = document.getElementById('bb-contact-name');
  var email = document.getElementById('bb-contact-email');
  var subject = document.getElementById('bb-contact-subject');
  var message = document.getElementById('bb-contact-message');

  alert(name.value);
  alert(email.value);
  alert(subject.value);
  alert(message.value);

  window.open('mailto:test@example.com?subject=subject&body=body');
}