function sendContactEmail() {
  var name = document.getElementById('bb-contact-name');
  var email = document.getElementById('bb-contact-email');
  var subject = document.getElementById('bb-contact-subject');
  var message = document.getElementById('bb-contact-message');

  alert(name);
  alert(email);
  alert(subject);
  alert(message);

  window.open('mailto:test@example.com?subject=subject&body=body');
}