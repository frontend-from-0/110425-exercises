const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const namePattern = /^[a-zA-Z\s'-]+$/;
const cardNumberPattern = /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;
const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
const cvvPattern = /^\d{3,4}$/;

const form = document.getElementById("checkoutForm");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const cardNumber = document.getElementById("cardnumber");
const expDate = document.getElementById("expDate");
const cvv = document.getElementById("cvv");
const successButton = document.getElementById("successButton");
const successMessage = document.getElementById("success");

function validateField(inputId, errorId, validationRule, errorMessage){
  const inputElement = document.getElementById(inputId);
  const errorElement = document.getElementById(errorId);
  const value = inputElement.value.trim();
  let isValid = false;
  if(validationRule instanceof RegExp){
    isValid = validationRule.test(value);
  } else if(typeof validationRule === "function"){
    isValid = validationRule(value);
  }
  if(isValid){
    errorElement.classList.add("hidden");
    return true;
  } else{
    errorElement.classList.remove("hidden");
    errorElement.textContent = errorMessage;
    return false;
  }
}

function checkFormValidity() {
  const isEmailValid = validateField('email', 'emailError', emailPattern, 'Please provide email in the following format john@gmail.com.');
  const isPhoneValid = validateField('phone', 'phoneError', phonePattern, 'Please provide phone number in the following format: +1 234 567 8901');
  const isFirstNameValid = validateField('firstname', 'firstNameError', namePattern, 'Please enter a valid first name.');
  const isLastNameValid = validateField('lastname', 'lastNameError', namePattern, 'Please enter a valid last name.');
  const isCardNumberValid = validateField('cardnumber', 'cardNumberError', cardNumberPattern, 'Please enter a valid 16-digit card number.');
  const isExpDateValid = validateField('expDate', 'expDateError', expDatePattern, 'Please enter a valid expiration date (MM/YY).');
  const isCvvValid = validateField('cvv', 'cvvError', cvvPattern, 'Please enter a valid 3 or 4-digit CVV.');

  const isFormValid =
    isEmailValid &&
    isPhoneValid &&
    isFirstNameValid &&
    isLastNameValid &&
    isCardNumberValid &&
    isExpDateValid &&
    isCvvValid;

  successButton.disabled = !isFormValid;
  return isFormValid;
}


form.addEventListener("input", checkFormValidity);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (checkFormValidity()) {
    const data = {
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      firstName: document.getElementById("firstname").value.trim(),
      lastName: document.getElementById("lastname").value.trim(),
    };
    console.table(data);

    form.classList.add("hidden");
    successMessage.classList.remove("hidden");
  }
});
