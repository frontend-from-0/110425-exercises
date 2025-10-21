const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const namePattern = /^[\p{L}][\p{L}'\- ]{0,49}$/;
const form = document.getElementById('checkoutForm');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const firstName = document.getElementById('firstname');
const successButton = document.getElementById('successButton');

function validateEmail() {
  const emailValue = email.value;
  const emailError = document.getElementById('emailError');

  if (emailPattern.test(emailValue)) {
    emailError.classList.add('hidden');
    emailError.innerText = '';
    successButton.disabled = false;
    return true;
  } else {
    emailError.classList.remove('hidden');
    emailError.innerText =
      'Please provide email in the following format john@gmail.com.';
    successButton.disabled = true;
    return false;
  }
}
function validatePhone() {
  const phoneValue = phone.value;
  const phoneError = document.getElementById('phoneError');

  if (phonePattern.test(phoneValue)) {
    phoneError.classList.add('hidden');
    phoneError.innerText = '';
    successButton.disabled = false;
    return true;
  } else {
    phoneError.classList.remove('hidden');
    phoneError.innerText =
      'Please provide phone number in the following format: +1 234 567 8901';
    successButton.disabled = true;

    return false;
  }
}

function validateFirstName() {
  const firstNameValue = firstName.value.trim();
  const firstNameError = document.getElementById('firstnameError');

  if (firstNameValue.length >= 2) {
    firstNameError.classList.add('hidden');
    firstNameError.innerText = '';
    successButton.disabled = false;
    return true;
  } else {
    firstNameError.classList.remove('hidden');
    firstNameError.innerText =
      'First Name should be at least 2 characters long.';
    successButton.disabled = true;

    return false;
  }
}

email.addEventListener('input', () => {
  validateEmail();
});

phone.addEventListener('input', () => {
  validatePhone();
});

firstName.addEventListener('input', () => {
  validateFirstName();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let isFormValid = true;

  isFormValid = validateEmail();
  isFormValid = validatePhone();
  isFormValid = validateFirstName();

  if (isFormValid) {
    const data = {
      email: email.value.trim(),
      phone: phone.value.trim(),
      firstName: firstName.value.trim(),
    };
    console.table(data);
  }
});
