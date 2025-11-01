const dateInput = document.querySelector('#date');
const selectedDate = document.getElementById('selected-date');
const timeSlotButtons = document.querySelectorAll('.slot');
const selectedTime = document.getElementById('selected-time');
const confirmButton = document.getElementById('confirm');
const bookingForm = document.getElementById('booking-form');
const confirmation = document.getElementById('confirmation');
const confirmDate = document.getElementById('confirmed-date');
const confirmTime = document.getElementById('confirmed-time');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const confirmName = document.getElementById('confirmed-name');
const confirmEmail = document.getElementById('confirmed-email');
const selectedName = document.getElementById('selected-name');
const selectedEmail = document.getElementById('selected-email');


function getMinAvailableDate(){
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 3);
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

function checkFormValidity(){
  const isDateSelected = dateInput.value !== '';
  const isTimeSelected = selectedTime.textContent !== '';
  const isNameFilled = nameInput.value.trim() !== '';
  const isEmailFilled = emailInput.value.trim() !== '';

  if (isDateSelected && isTimeSelected && isNameFilled && isEmailFilled) {
    confirmButton.disabled = false;
  } else {
    confirmButton.disabled = true;
  }
}
dateInput.min = getMinAvailableDate();

const appointmentDetails = {
  date: '',
  time: '',
  name: '',
  email: '',
};

dateInput.addEventListener('change', () => {
  selectedDate.textContent = dateInput.value;
  appointmentDetails.date = dateInput.value;
  checkFormValidity();
});

timeSlotButtons.forEach((timeSlotButton) => {
  timeSlotButton.addEventListener('click', () => {
    selectedTime.textContent = timeSlotButton.textContent;
    appointmentDetails.time = timeSlotButton.textContent;
    checkFormValidity();
  });
});

nameInput.addEventListener('blur', () => {
  selectedName.textContent = nameInput.value;
  appointmentDetails.name = nameInput.value;
  checkFormValidity();
});

emailInput.addEventListener('blur', () => {
  selectedEmail.textContent = emailInput.value;
  appointmentDetails.email = emailInput.value;
  checkFormValidity();
});

confirmButton.addEventListener('click', () => {
  bookingForm.classList.add('hidden');
  confirmation.classList.remove('hidden');
  confirmDate.textContent = appointmentDetails.date;
  confirmTime.textContent = appointmentDetails.time;
  confirmName.textContent = appointmentDetails.name;
  confirmEmail.textContent = appointmentDetails.email;
  

});
checkFormValidity();
