function sendContactEmail() {
  var name = document.getElemenetById('bb-contact-name');
  var email = document.getElemenetById('bb-contact-email');
  var subject = document.getElemenetById('bb-contact-subject');
  var message = document.getElemenetById('bb-contact-message');

  alert(name);
  alert(email);
  alert(subject);
  alert(message);

  window.open('mailto:test@example.com?subject=subject&body=body');
}