const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const namePattern = /^[\p{L}][\p{L}'\- ]{0,49}$/;
const form = document.getElementById('checkoutForm');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname')
const cardNumber = document.getElementById('cardnumber');
const expDate = document.getElementById('expDate');
const cvv = document.getElementById('cvv');
const successButton = document.getElementById('successButton');
const successMessage = document.getElementById('successMessage');

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
    return false;
  }
}

function validateCardNumber() {
  const cardNumberValue = cardNumber.value.trim();
  const cardNumberError = document.getElementById('cardnumberError');

  if (cardNumberValue.length === 16) {
    cardNumberError.classList.add('hidden');
    cardNumberError.innerText = '';
    successButton.disabled = false;
    return true;
  } else {
    cardNumberError.classList.remove('hidden');
    cardNumberError.innerText =
      'Card Number should be 16 characters long.';
    return false;
  }
}

function validateExpDate() {
  const expDateValue = expDate.value.trim();
  const expDateError = document.getElementById('expDateError');

  const today = new Date();
  const currentYear = today.getFullYear() % 100;
  const currentMonth = today.getMonth() + 1;



  const datePattern = /^(0[1-9]|1[0-2])\/\d{2}$/; // it checks format MM/YY 

  if (!datePattern.test(expDateValue)) {
    expDateError.classList.remove('hidden');
    expDateError.innerText = 'Please use the MM/YY format (e.g., 01/26).';
    successButton.disabled = true;
    return false;
  }

  const [monthStr, yearStr] = expDateValue.split('/');
  const expMonth = parseInt(monthStr, 10);
  const expYear = parseInt(yearStr, 10);

  let isValid = true;

  // is the year in the past?
  if (expYear < currentYear) {
    isValid = false;
  }

  // is the year the current year, but the month is in the past? 
  else if (expYear === currentYear && expMonth < currentMonth) {
    isValid = false;
  }

  if (isValid) {
    expDateError.classList.add('hidden');
    expDateError.innerText = "";
    successButton.disabled = false;
    return true;
  }
  else {
    expDateError.classList.remove("hidden");
    expDateError.innerText = "Expiration Date must be current month or later.";
    return false;
  }
}

function validateCvv() {
  const cvvValue = cvv.value.trim();
  const cvvError = document.getElementById('cvvError');

  if (cvvValue.length === 3) {
    cvvError.classList.add('hidden');
    cvvError.innerText = '';
    successButton.disabled = false;
    return true;
  } else {
    cvvError.classList.remove('hidden');
    cvvError.innerText =
      'CVV number should be 3 characters long.';
    return false;
  }
}

function updateSubmitButtonState() {
  const isFormValid = (
    validateEmail() &&
    validatePhone() &&
    validateFirstName() &&
    validateLastName() &&
    validateCardNumber() &&
    validateExpDate() &&
    validateCvv());
  successButton.disabled = !isFormValid;
};

email.addEventListener('input', () => {
  validateEmail();
  updateSubmitButtonState();
});

phone.addEventListener('input', () => {
  validatePhone();
  updateSubmitButtonState();
});

firstName.addEventListener('input', () => {
  validateFirstName();
  updateSubmitButtonState();
});

lastName.addEventListener('input', () => {
  validateLastName();
  updateSubmitButtonState();
});

cardNumber.addEventListener('input', () => {
  validateCardNumber();
  updateSubmitButtonState();
});

expDate.addEventListener('input', () => {
  let value = expDate.value.replace(/\D/g, '');
  if (value.length > 4) {
    value = value.substring(0, 4);
  }
  // 2. Re-format to MM/YY if there are 3 or 4 digits
  if (value.length >= 3) {
    value = value.substring(0, 2) + '/' + value.substring(2);
  }

  expDate.value = value;
  validateExpDate();
  updateSubmitButtonState();
});

cvv.addEventListener('input', () => {
  validateCvv();
  updateSubmitButtonState();
})

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let isFormValid = true;

  isFormValid = validateEmail();
  isFormValid = validatePhone() && isFormValid;
  isFormValid = validateFirstName() && isFormValid;
  isFormValid = validateLastName() && isFormValid;
  isFormValid = validateCardNumber() && isFormValid;
  isFormValid = validateExpDate() && isFormValid;
  isFormValid = validateCvv() && isFormValid;

  if (isFormValid) {
    const data = {
      email: email.value.trim(),
      phone: phone.value.trim(),
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim(),
      cardNumber: cardNumber.value.trim(),
      expDate: expDate.value.trim(),
      cvv: cvv.value.trim(),
    };
    form.classList.add('hidden');
    successMessage.classList.remove('hidden');
    successMessage.innerText = "Your order is successfully placed!";
  }
});
