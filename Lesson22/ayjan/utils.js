
function getMinAvailableDate() {
  // Test string 'October 30, 2025 03:24:00'
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

  return `${currentDate.getFullYear()}-${monthToUse}-${dateToUse}`;
}
