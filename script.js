const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const namePattern = /^[\p{L}][\p{L}'\- ]{0,49}$/;
const form = document.getElementById('checkoutForm');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const firstName = document.getElementById('firstname');
const successButton = document.getElementById('successButton');
const successMessage = document.getElementById('successMessage');
const lastName = document.getElementById('lastname');
const lastNamePattern = /^[\p{L}][\p{L}'\- ]{0,49}$/;
const cardNumber = document.getElementById('cardnumber');
const expDate = document.getElementById('expDate');
const cvv = document.getElementById('cvv');
const confirmationText = document.getElementById('confirmationText');
const confirmationMessage = document.getElementById('confirmationMessage');



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

function validateLastName() {
  const lastNameValue = lastName.value.trim();
  const lastNameError = document.getElementById('lastnameError');

  if (lastNameValue.length >= 2) {
    lastNameError.classList.add('hidden');
    lastNameError.innerText = '';
    successButton.disabled = false;
    return true;
  } else {
    lastNameError.classList.remove('hidden');
    lastNameError.innerText =
      'Last Name should be at least 2 characters long.';
    successButton.disabled = true;

    return false;
  }
}

function validateCardNumber() {
  const cardNumberValue = cardNumber.value.trim();
  const cardNumberError = document.getElementById('cardnumberError');

  if (cardNumberValue.length === 16 && /^\d{16}$/.test(cardNumberValue)) {
    cardNumberError.classList.add('hidden');
    cardNumberError.innerText = '';
    successButton.disabled = false;
    return true;
  } else {
    cardNumberError.classList.remove('hidden');
    cardNumberError.innerText =
      'Card Number should be 16 digits long.';
    successButton.disabled = true;

    return false;
  }
}

function validateExpDate() {
  const expDateValue = expDate.value.trim();
  const expDateError = document.getElementById('expDateError');
  const today = new Date();
  const [month, year] = expDateValue.split('/').map(Number);
  const expDate = new Date(`20${year}`, month - 1);

  if (
    /^(0[1-9]|1[0-2])\/\d{2}$/.test(expDateValue) &&
    expDate > today
  ) {
    expDateError.classList.add('hidden');
    expDateError.innerText = '';
    successButton.disabled = false;
    return true;
  } else {
    expDateError.classList.remove('hidden');
    expDateError.innerText =
      'Expiry Date should be in MM/YY format and a future date.';
    successButton.disabled = true;

    return false;
  }
}
function validateCVV() {
  const cvvValue = cvv.value.trim();
  const cvvError = document.getElementById('cvvError'); // DİKKAT: cvvError

  if (cvvValue.length >= 3 && cvvValue.length <= 4 && /^\d{3,4}$/.test(cvvValue)) {
    cvvError.classList.add('hidden');
    cvvError.innerText = '';
    successButton.disabled = false;
    return true;
  } else {
    cvvError.classList.remove('hidden');
    cvvError.innerText = 'CVV should be 3 or 4 digits long.';
    successButton.disabled = true;
    return false;
  }
}
function updateSuccessMessage() {
  successMessage.textContent = 'All fields are valid. You can place your order now!';
}

function updateSuccessButton() {
  const allValid =
    validateEmail() &&
    validatePhone() &&
    validateFirstName() &&
    validateLastName() &&
    validateCardNumber() &&
    validateExpDate() &&
    validateCVV();

  successButton.disabled = !allValid;
  if (allValid) {
    updateSuccessMessage();
  } else {
    successMessage.textContent = '';
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

lastName.addEventListener('input', () => {
  validateLastName();
});

cardNumber.addEventListener('input', () => {
  validateCardNumber();
});

expDate.addEventListener('input', () => {
  validateExpDate();
});

cvv.addEventListener('input', () => {
  validateCVV();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let isFormValid = true;

  isFormValid = validateEmail()
  isFormValid = validatePhone()
  isFormValid = validateFirstName()
  isFormValid = validateLastName()
  isFormValid = validateCardNumber()
  isFormValid = validateExpDate()
  isFormValid = validateCVV();



  if (isFormValid) {
    const data = {
      email: email.value.trim(),
      phone: phone.value.trim(),
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim(),
      cardNumber: '****' + cardNumber.value.slice(-4), // Show only last 4 digits
      expDate: expDate.value.trim(),
      cvv: '***',
    };
    const message = `Thank you ${data.firstName}!
      Your order has been submitted successfully.
      We'll send a confirmation email to ${data.email}
    `;
    alert(message);
    console.table(data);
    form.reset();
    successButton.disabled = true;
  }
});