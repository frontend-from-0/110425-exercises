
/*
=====================================================
  DATE UTILITY FUNCTIONS - LESSON 22
=====================================================
*/

/**
 * Calculate the minimum available booking date
 * Adds a 3-day buffer to prevent same-day bookings
 * Automatically handles month and year boundaries
 * 
 * @returns {string} Date in YYYY-MM-DD format for HTML date input
 */
function getMinAvailableDate() {
  const currentDate = new Date();
  const buffer = 3; // 3 day buffer for appointment bookings
  
  // Add buffer days to current date (automatically handles month/year boundaries)
  const minDate = new Date(currentDate);
  minDate.setDate(currentDate.getDate() + buffer);
  
  // Format date as YYYY-MM-DD for HTML date input compatibility
  const year = minDate.getFullYear();
  const month = String(minDate.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11
  const day = String(minDate.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}
