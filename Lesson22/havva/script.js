const dateInput = document.querySelector('#date');
const selectedDate = document.getElementById('selected-date');
const timeSlotButtons = document.querySelectorAll('.slot');
const selectedTime = document.getElementById('selected-time');
const confirmButton = document.getElementById('confirm');
const bookingForm = document.getElementById('booking-form');
const confirmation = document.getElementById('confirmation');
const confirmDate = document.getElementById('confirmed-date');
const confirmTime = document.getElementById('confirmed-time');
const userName = document.querySelector('#name');
const enteredName = document.getElementById('entered-name');
const email = document.querySelector('#email');
const enteredEmail = document.getElementById('entered-email');
const confirmedName = document.getElementById('confirmed-name');
const confirmedEmail = document.getElementById('confirmed-email');

dateInput.min = getMinAvailableDate();

const appointmentDetails = {
  date: '',
  time: '',
  name: '',
  email: '',
};

userName.addEventListener('change', () => {
  enteredName.textContent = userName.value;
  appointmentDetails.name = userName.value;
});

email.addEventListener('change', () => {
  enteredEmail.textContent = email.value;
  appointmentDetails.email = email.value;
})

dateInput.addEventListener('change', () => {
  selectedDate.textContent = dateInput.value;
  appointmentDetails.date = dateInput.value;
});

timeSlotButtons.forEach((timeSlotButton) => {
  timeSlotButton.addEventListener('click', () => {
    timeSlotButtons.forEach(btn => {
      btn.classList.remove('selected');
    });
    timeSlotButton.classList.add('selected');
    selectedTime.textContent = timeSlotButton.textContent;
    appointmentDetails.time = timeSlotButton.textContent;
    checkFormValidity();
  });
});

confirmButton.addEventListener('click', () => {
  bookingForm.classList.add('hidden');
  confirmation.classList.remove('hidden');
  confirmedName.textContent = appointmentDetails.name;
  confirmedEmail.textContent = appointmentDetails.email;
  confirmDate.textContent = appointmentDetails.date;
  confirmTime.textContent = appointmentDetails.time;

});

function checkFormValidity() {
  const timeIsSelected = document.querySelector('.slot.selected');
  const allFieldsValid = (
    userName.value !== "" &&
    email.value != "" &&
    dateInput.value != "" &&
    timeIsSelected);
  if (allFieldsValid) {
    confirmButton.disabled = false;
  } else {
    confirmButton.disabled = true;
  }
}

userName.addEventListener('input', checkFormValidity);
email.addEventListener('input', checkFormValidity);
dateInput.addEventListener('input', checkFormValidity);