const dateInput = document.querySelector('#date');
const selectedDate = document.getElementById('selected-date');
const timeSlotButtons = document.querySelectorAll('.slot');
const selectedTime = document.getElementById('selected-time');
const confirmButton = document.getElementById('confirm');
const bookingForm = document.getElementById('booking-form');
const confirmation = document.getElementById('confirmation');
const confirmDate = document.getElementById('confirmed-date');
const confirmTime = document.getElementById('confirmed-time');
const nameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const selectedName = document.getElementById('selected-name');
const selectedEmail = document.getElementById('selected-email');
const confirmName = document.getElementById('confirmed-name');
const confirmEmail = document.getElementById('confirmed-email');



dateInput.min = getMinAvailableDate();


const appointmentDetails = {
  date: '',
  time: '',
  name: '',
  email: '',
};

function checkForm() {
  if (
    appointmentDetails.name &&
    appointmentDetails.email &&
    appointmentDetails.date &&
    appointmentDetails.time
  ) {
    confirmButton.disabled = false;
  } else {
    confirmButton.disabled = true;
  }
}

dateInput.addEventListener('change', () => {
  selectedDate.textContent = dateInput.value;
  appointmentDetails.date = dateInput.value;
  checkForm();
});

nameInput.addEventListener('input', () => {
  appointmentDetails.name = nameInput.value;
  selectedName.textContent = nameInput.value;
  checkForm();
});

emailInput.addEventListener('input', () => {
  appointmentDetails.email = emailInput.value;
  selectedEmail.textContent = emailInput.value;
  checkForm();
});

timeSlotButtons.forEach((timeSlotButton) => {
  timeSlotButton.addEventListener('click', () => {
    selectedTime.textContent = timeSlotButton.textContent;
    appointmentDetails.time = timeSlotButton.textContent;
    checkForm();
  });
});

confirmButton.addEventListener('click', () => {
  bookingForm.classList.add('hidden');
  confirmation.classList.remove('hidden');
  confirmDate.textContent = appointmentDetails.date;
  confirmTime.textContent = appointmentDetails.time;
  confirmName.textContent = appointmentDetails.name;
  confirmEmail.textContent = appointmentDetails.email;
});


function getMinAvailableDate() {
  // Test string 'October 31, 2025 03:24:00'
  const currentDate = new Date();
  const buffer = 3;
  const currentDateNumber = currentDate.getDate();
  const currentMonthNumber = currentDate.getMonth() + 1;

  let monthToUse = currentMonthNumber;
  let dateToUse = currentDateNumber;
  // TODO: update this check to accomodate months with 31 and 28 days.
  switch (currentDateNumber) {
    case 29:
      dateToUse = 1;
      monthToUse = monthToUse + 1;
      break;
    case 30:
      dateToUse = 2;
      monthToUse = monthToUse + 1;
    case 31:
      dateToUse = 3;
      monthToUse = monthToUse + 1;
      break;
  }

  return `${currentDate.getFullYear()}-${pad(monthToUse)}-${pad(dateToUse)}`;
}

function pad(num) {
  return num.toString().padStart(2, '0');
}
