const dateInput = document.querySelector('#date');
const selectedDate = document.getElementById('selected-date');
const timeSlotButtons = document.querySelectorAll('.slot');
const selectedTime = document.getElementById('selected-time');
const confirmButton = document.getElementById('confirm');
const bookingForm = document.getElementById('booking-form');
const confirmation = document.getElementById('confirmation');
const confirmDate = document.getElementById('confirmed-date');
const confirmTime = document.getElementById('confirmed-time');

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
});

timeSlotButtons.forEach((timeSlotButton) => {
  timeSlotButton.addEventListener('click', () => {
    selectedTime.textContent = timeSlotButton.textContent;
    appointmentDetails.time = timeSlotButton.textContent;
  });
});

confirmButton.addEventListener('click', () => {
  bookingForm.classList.add('hidden');
  confirmation.classList.remove('hidden');
  confirmDate.textContent = appointmentDetails.date;
  confirmTime.textContent = appointmentDetails.time;
});
