
function getMinAvailableDate() {
  // Test string 'October 30, 2025 03:24:00'
  const buffer = 3;
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + buffer);

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
