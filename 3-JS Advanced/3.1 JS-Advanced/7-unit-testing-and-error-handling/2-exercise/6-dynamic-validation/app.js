function validate() {
  const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
  const emailField = document.querySelector('#email');

  emailField.addEventListener('change', (e) => {
    const email = emailField.value;

    emailField.classList.add('error');

    if (emailPattern.test(email)) {
      emailField.classList.remove('error');
    }
  });
}