/*
=====================================================
  APPOINTMENT BOOKING SYSTEM - LESSON 22
=====================================================
Features implemented:
- Real-time form validation
- Live preview of booking details  
- 3-day minimum date buffer
- Professional confirmation page
- Responsive design with elegant styling
=====================================================
*/

// DOM Elements - Form inputs and display elements
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const dateInput = document.querySelector('#date');
const selectedName = document.getElementById('selected-name');
const selectedEmail = document.getElementById('selected-email');
const selectedDate = document.getElementById('selected-date');
const timeSlotButtons = document.querySelectorAll('.slot');
const selectedTime = document.getElementById('selected-time');
const confirmButton = document.getElementById('confirm');
const bookingForm = document.getElementById('booking-form');
const confirmation = document.getElementById('confirmation');
const confirmName = document.getElementById('confirmed-name');
const confirmEmail = document.getElementById('confirmed-email');
const confirmDate = document.getElementById('confirmed-date');
const confirmTime = document.getElementById('confirmed-time');

// Set minimum selectable date (3 days from today)
dateInput.min = getMinAvailableDate();

// Appointment data object - stores all booking information
const appointmentDetails = {
  name: '',
  email: '',
  date: '',
  time: '',
};

// Function to validate form and enable/disable confirm button
function validateForm() {
  const isValid = appointmentDetails.name && 
                  appointmentDetails.email && 
                  appointmentDetails.date && 
                  appointmentDetails.time;
  
  confirmButton.disabled = !isValid;
  if (isValid) {
    confirmButton.style.opacity = '1';
    confirmButton.style.cursor = 'pointer';
  } else {
    confirmButton.style.opacity = '0.5';
    confirmButton.style.cursor = 'not-allowed';
  }
}

// Name input event listener (shows info when user stops typing)
nameInput.addEventListener('input', () => {
  selectedName.textContent = nameInput.value || '-';
  appointmentDetails.name = nameInput.value;
  validateForm();
});

// Email input event listener (shows info when user stops typing)
emailInput.addEventListener('input', () => {
  selectedEmail.textContent = emailInput.value || '-';
  appointmentDetails.email = emailInput.value;
  validateForm();
});

// Date input event listener
dateInput.addEventListener('change', () => {
  selectedDate.textContent = dateInput.value || '-';
  appointmentDetails.date = dateInput.value;
  validateForm();
});

// Time slot button event listeners
timeSlotButtons.forEach((timeSlotButton) => {
  timeSlotButton.addEventListener('click', () => {
    // Remove active class from all buttons
    timeSlotButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    timeSlotButton.classList.add('active');
    
    selectedTime.textContent = timeSlotButton.textContent;
    appointmentDetails.time = timeSlotButton.textContent;
    validateForm();
  });
});

// Confirm button event listener
confirmButton.addEventListener('click', () => {
  if (!confirmButton.disabled) {
    bookingForm.classList.add('hidden');
    confirmation.classList.remove('hidden');
    
    // Populate confirmation details
    confirmName.textContent = appointmentDetails.name;
    confirmEmail.textContent = appointmentDetails.email;
    confirmDate.textContent = appointmentDetails.date;
    confirmTime.textContent = appointmentDetails.time;
  }
});

// Initialize validation on page load
validateForm();
