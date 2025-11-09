// Validation patterns
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+\d{1,4}\s?\d{4,15}$/;
const namePattern = /^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ'\- ]{0,49}$/;
const cardPattern = /^\d{16}$/;
const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
const cvvPattern = /^\d{3,4}$/;

// DOM elements
const form = document.getElementById('checkoutForm');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const cardNumber = document.getElementById('cardnumber');
const expDate = document.getElementById('expDate');
const cvv = document.getElementById('cvv');
const successButton = document.getElementById('successButton');
const success = document.getElementById('success');

function validateEmail() {
  const emailValue = email.value;
  const emailError = document.getElementById('emailError');

  if (emailPattern.test(emailValue)) {
    emailError.classList.add('hidden');
    emailError.innerText = '';
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
    return true;
  } else {
    phoneError.classList.remove('hidden');
    phoneError.innerText =
      'Please provide phone number starting with + followed by country code and number (e.g., +1 234 567 8901, +44 20 7946 0958)';
    return false;
  }
}

// Helper function to format phone number
function formatPhoneNumber(value) {
  // Always ensure it starts with +
  if (!value.startsWith('+')) {
    return '+';
  }
  
  // Only allow digits after the + sign
  const cleanValue = '+' + value.slice(1).replace(/\D/g, '');
  
  // Limit total length to reasonable phone number length (+ plus up to 15 digits)
  return cleanValue.slice(0, 16);
}

function validateFirstName() {
  const firstNameValue = firstName.value.trim();
  const firstNameError = document.getElementById('firstnameError');

  if (firstNameValue.length >= 2) {
    firstNameError.classList.add('hidden');
    firstNameError.innerText = '';
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
    return true;
  } else {
    lastNameError.classList.remove('hidden');
    lastNameError.innerText =
      'Last Name should be at least 2 characters long.';
    return false;
  }
}

function validateCardNumber() {
  const cardValue = cardNumber.value.replace(/\s/g, ''); // Remove spaces for validation
  const cardError = document.getElementById('cardnumberError');

  if (cardPattern.test(cardValue)) {
    cardError.classList.add('hidden');
    cardError.innerText = '';
    return true;
  } else {
    cardError.classList.remove('hidden');
    cardError.innerText =
      'Please enter a valid 16-digit card number (e.g., 1234 5678 9101 1121).';
    return false;
  }
}

function validateExpDate() {
  const expValue = expDate.value;
  const expError = document.getElementById('expDateError');

  if (expDatePattern.test(expValue)) {
    // Additional check for valid month and future date
    const [month, year] = expValue.split('/');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;
    
    const expYear = parseInt(year);
    const expMonth = parseInt(month);
    
    if (expYear > currentYear || (expYear === currentYear && expMonth >= currentMonth)) {
      expError.classList.add('hidden');
      expError.innerText = '';
      return true;
    } else {
      expError.classList.remove('hidden');
      expError.innerText = 'Card has expired. Please enter a valid future date.';
      return false;
    }
  } else {
    expError.classList.remove('hidden');
    expError.innerText =
      'Please enter expiration date in MM/YY format (e.g., 12/25).';
    return false;
  }
}

function validateCVV() {
  const cvvValue = cvv.value;
  const cvvError = document.getElementById('cvvError');

  if (cvvPattern.test(cvvValue)) {
    cvvError.classList.add('hidden');
    cvvError.innerText = '';
    return true;
  } else {
    cvvError.classList.remove('hidden');
    cvvError.innerText =
      'Please enter a valid 3 or 4 digit CVV code.';
    return false;
  }
}

// Helper function to format card number with spaces
function formatCardNumber(value) {
  // Remove all spaces and non-digits
  const numbers = value.replace(/\D/g, '');
  // Add spaces every 4 digits
  return numbers.replace(/(\d{4})(?=\d)/g, '$1 ');
}

// Helper function to format expiration date
function formatExpDate(value) {
  // Remove all non-digits
  const numbers = value.replace(/\D/g, '');
  // Add slash after 2 digits
  if (numbers.length >= 2) {
    return numbers.slice(0, 2) + '/' + numbers.slice(2, 4);
  }
  return numbers;
}

// Helper function to validate entire form
function validateForm() {
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isFirstNameValid = validateFirstName();
  const isLastNameValid = validateLastName();
  const isCardValid = validateCardNumber();
  const isExpDateValid = validateExpDate();
  const isCVVValid = validateCVV();
  
  const isFormValid = isEmailValid && isPhoneValid && isFirstNameValid && 
                     isLastNameValid && isCardValid && isExpDateValid && isCVVValid;
  
  successButton.disabled = !isFormValid;
  return isFormValid;
}

// Event listeners
email.addEventListener('input', () => {
  validateEmail();
  validateForm();
});

phone.addEventListener('input', (e) => {
  // Format phone number with +1 prefix
  e.target.value = formatPhoneNumber(e.target.value);
  validatePhone();
  validateForm();
});

// Handle backspace/delete to prevent removing + prefix
phone.addEventListener('keydown', (e) => {
  const cursorPosition = e.target.selectionStart;
  if ((e.key === 'Backspace' || e.key === 'Delete') && cursorPosition <= 1) {
    e.preventDefault();
  }
});

// Position cursor after + when field is focused
phone.addEventListener('focus', (e) => {
  if (e.target.value === '+') {
    setTimeout(() => {
      e.target.setSelectionRange(1, 1);
    }, 0);
  }
});

firstName.addEventListener('input', () => {
  validateFirstName();
  validateForm();
});

lastName.addEventListener('input', () => {
  validateLastName();
  validateForm();
});

cardNumber.addEventListener('input', (e) => {
  // Format card number with spaces
  e.target.value = formatCardNumber(e.target.value);
  validateCardNumber();
  validateForm();
});

expDate.addEventListener('input', (e) => {
  // Format expiration date with slash
  e.target.value = formatExpDate(e.target.value);
  validateExpDate();
  validateForm();
});

cvv.addEventListener('input', () => {
  validateCVV();
  validateForm();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Validate all fields
  const isFormValid = validateForm();

  if (isFormValid) {
    // Collect all form data
    const formData = {
      email: email.value.trim(),
      phone: phone.value.trim(),
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim(),
      cardNumber: cardNumber.value.replace(/\s/g, ''), // Remove spaces for storage
      expDate: expDate.value,
      cvv: cvv.value
    };
    
    // Log data for demo purposes
    console.log('Order submitted successfully!');
    console.table(formData);
    
    // Show success message
    showSuccessMessage(formData);
  }
});

// Function to show meaningful success message
function showSuccessMessage(data) {
  const successElement = document.getElementById('success');
  
  // Create a more detailed success message
  successElement.innerHTML = `
    <div class="success-content">
      <h2>🎉 Order Placed Successfully!</h2>
      <div class="success-details">
        <p><strong>Thank you, ${data.firstName} ${data.lastName}!</strong></p>
        <p>Your order has been confirmed and will be processed shortly.</p>
        <div class="order-summary">
          <h3>Order Details:</h3>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Card ending in:</strong> ****${data.cardNumber.slice(-4)}</p>
        </div>
        <p class="confirmation-note">
          📧 A confirmation email has been sent to <strong>${data.email}</strong>
        </p>
        <p class="next-steps">
          📦 You can track your order status in your email or contact us at ${data.phone}
        </p>
      </div>
      <button onclick="resetForm()" class="btn-success">Place Another Order</button>
    </div>
  `;
  
  // Hide form and show success message
  form.classList.add('hidden');
  successElement.classList.remove('hidden');
}

// Function to reset form for another order
function resetForm() {
  form.reset();
  form.classList.remove('hidden');
  success.classList.add('hidden');
  
  // Hide all error messages
  document.querySelectorAll('.input-error').forEach(error => {
    error.classList.add('hidden');
    error.innerText = '';
  });
  
  // Disable submit button
  successButton.disabled = true;
}

// Initialize form validation state
validateForm();
