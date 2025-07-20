document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-response').innerText = "Thank you! We’ll get back to you soon.";
  this.reset();
});
