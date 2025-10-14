/*
1. Check Password Length
   - Define a function `checkPassword(password)` that checks if `password` length
     is at least 8 characters.
   - If >= 8, log: "Password length is sufficient."
   - Otherwise, log: "Password is too short."
   - Call the function with different passwords and log the result.
*/
function checkPassword(password) {
  console.log('Password.length:', password.length);
  if (password.length >= 12) {
    console.log('Password is strong.');
  } else if (password.length >= 8) {
    console.log('Password length is sufficient.');
  } else if (password.length >= 6) {
    console.log('Password length is sufficient but you have a weak password.');
  } else {
    console.log('Password is too short.');
  }
}
checkPassword('123456789101');
checkPassword('12345678');
checkPassword('123456');
checkPassword('apple');

/*
2. Uppercase Name
   - Define a function `uppercaseName(name)` that converts a given name to uppercase.
   - Log the uppercase result to the console.
   - Example: "John Doe" -> "JOHN DOE"
*/
const name = 'jane';

function uppercaseName(name) {
  console.log(name.toUpperCase());
}
uppercaseName(name);
uppercaseName('tom');
uppercaseName('irem haritaoglu');

/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/
function normalizeEmail(email) {
  const normalized = email.toLowerCase();
  console.log(normalized);
  return normalized;
}
normalizeEmail("USER@Example.COM");
normalizeEmail("IREM.HARITAOGLU@GMAIL.COM");

/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/
function getDomain(email) {
  console.log(email.indexOf('@'));
  const separatorIndex = email.indexOf('@');
  const domain = email.substring(separatorIndex + 1);
  console.log('Domain is:', domain);
}

getDomain('havva.unal@codetocareer.eu');
getDomain('user@example.com');

/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/
function containsWord(sentence, word) {
  if (sentence.includes(word)) {
    console.log(`${word} found in sentence.`);
  } else {
    console.log(`${word} not found in sentence.`);
  }
}
containsWord("Hello world", "world");
containsWord("The weather is nice today.", "rain");
containsWord("I love Javascript programming", "love");

/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/
function checkFileExtension(filename) {
  filename.endsWith('.pdf');
  if (filename.endsWith('.pdf')) {
    console.log('This is a PDF file.');
  } else {
    console.log('Not a PDF file.');
  }
}

checkFileExtension('document.pdf');
checkFileExtension('photo.jpeg');
checkFileExtension('reportError.PDF');

/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/
function compareNumbers(a,b) {
   if (a > b) {
      return 'a is bigger than b';
   } else if (b > a) {
      return 'b is bigger than a';
   }
   else {
      return 'Numbers are equal';
   }
}

console.log(compareNumbers(3,4));
console.log(compareNumbers(5,5));
console.log(compareNumbers(21,21));  

/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards.
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
*/
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  if (str === reversed) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }
}
isPalindrome("car");
isPalindrome("hello");
isPalindrome("madam");

/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/
function truncateString(text, maxLength) {
  if (text.length > maxLength) {
    const truncated = text.slice(0, maxLength) + "...";
    console.log(truncated);
  } else {
    console.log(text);
  }
}
truncateString("This is a very long string", 10);
truncateString("Short", 10);
truncateString("JavaScript is fun", 16);

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
evenOrOdd(4);
evenOrOdd(7);
evenOrOdd(0);

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
function checkProtocol(url) {
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.startsWith("https")) {
    console.log("Secure connection");
  } else {
    console.log("Unsecure connection");
  }
}
checkProtocol("HTTPS://www.example.com");
checkProtocol("http://www.example.com");

/*
12. Switch: Day of the Week
   - Define a function `getDayOfWeek(num)` that uses a switch statement:
     1 -> "Monday"
     2 -> "Tuesday"
     ...
     7 -> "Sunday"
     - Log the matched day or "Invalid day" if out of range.
*/
function getDayOfWeek(num) {
  const sanitizedInput = parseInt(num);

  if (typeof sanitizedInput !== 'number' || isNaN(sanitizedInput)) {
    console.log('Invalid input', num);
    return;
  }

  switch (sanitizedInput) {
    case 1:
      console.log('Monday');
      break;
    case 2:
      console.log('Tuesday');
      break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
    case 7:
      console.log('Sunday');
      break;

    default:
      console.log('Provided number is outside the range', num);
      break;
  }
}
getDayOfWeek('oads');
getDayOfWeek(5);
getDayOfWeek(10);

// value == value
/// value and type === value and type

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/
function repeatWord(word, times) {
  const repeated = word.repeat(times);
  console.log(repeated);
}
repeatWord("Hello ", 3);
repeatWord("*", 5);

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
function censorWord(sentence, target) {
  const censored = sentence.replaceAll(target, "****");
  console.log(censored);
}
censorWord("This is a bad word and another bad word", "bad");
censorWord("Hello world hello", "hello");

/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
function startsWithA(str) {
  if (str.charAt(0) === 'A' || str.charAt(0) === 'a') {
    console.log("Starts with A");
  } else {
    console.log("Does not start with A");
  }
}
startsWithA("Apple");
startsWithA("banana");
startsWithA("awesome");

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
function sliceLastN(text, n) {
  const lastChars = text.slice(-n);
  console.log(lastChars);
}
sliceLastN("JavaScript", 3);
sliceLastN("Hello World", 5);

/*
17. Switch: Grade Checker
   - Define a function `gradeChecker(score)` that uses a switch (or if-else chain):
     90+ -> "A"
     80-89 -> "B"
     70-79 -> "C"
     60-69 -> "D"
     below 60 -> "F"
   - Log the grade.
*/
function gradeChecker(score) {
  let grade;
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  console.log(`Score ${score} = Grade ${grade}`);
}
gradeChecker(95);
gradeChecker(85);
gradeChecker(75);
gradeChecker(65);
gradeChecker(45);

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
function replaceCharacter(str, oldChar, newChar) {
  const result = str.replaceAll(oldChar, newChar);
  console.log(result);
}
replaceCharacter("hello world", "l", "x");
replaceCharacter("JavaScript", "a", "@");

/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/
function titleCase(sentence) {
  const words = sentence.split(' ');
  const titleCased = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  const result = titleCased.join(' ');
  console.log(result);
}
titleCase("hello world from javascript");
titleCase("irem haritaoglu");

/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/
function trafficLight(color) {
  switch (color.toLowerCase()) {
    case "red":
      console.log("Stop");
      break;
    case "yellow":
      console.log("Caution");
      break;
    case "green":
      console.log("Go");
      break;
    default:
      console.log("Invalid color");
      break;
  }
}
trafficLight("red");
trafficLight("GREEN");
trafficLight("blue");

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/
function isLongString(str) {
  if (str.length > 10) {
    console.log("Long string");
  } else {
    console.log("Short string");
  }
}
isLongString("This is a very long string");
isLongString("Short");

/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
function isSpam(text) {
  const lowerText = text.toLowerCase();
  if (lowerText.includes("spam")) {
    console.log("This text is spam.");
  } else {
    console.log("This text is not spam.");
  }
}
isSpam("Buy now! This is SPAM!");
isSpam("Hello, how are you?");
isSpam("This is a spamming message.");

/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
function getInitials(fullName) {
  const names = fullName.split(' ');
  const initials = names.map(name => name.charAt(0).toUpperCase()).join('.');
  console.log(initials);
}
getInitials("John Doe");
getInitials("irem haritaoglu");
getInitials("Mary Jane Watson");

/*
24. Switch: Month to Season
   - Define a function `getSeason(monthNum)` (1-12). Use switch or if-else:
     - 12, 1, 2  -> "Winter"
     - 3, 4, 5   -> "Spring"
     - 6, 7, 8   -> "Summer"
     - 9, 10, 11 -> "Autumn"
   - Log the season or "Invalid month" if out of range.
*/
function getSeason(monthNum) {
  switch (monthNum) {
    case 12:
    case 1:
    case 2:
      console.log("Winter");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Spring");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Summer");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Autumn");
      break;
    default:
      console.log("Invalid month");
      break;
  }
}
getSeason(1);
getSeason(6);
getSeason(9);
getSeason(13);

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/
function containsNumber(str) {
  if (/\d/.test(str)) {
    console.log("Contains number");
  } else {
    console.log("No number found");
  }
}
containsNumber("Hello123");
containsNumber("Hello World");
containsNumber("Test 2024");

/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
function padString(str, maxLength) {
  if (str.length < maxLength) {
    const padded = str.padEnd(maxLength, '*');
    console.log(padded);
  } else {
    console.log(str);
  }
}
padString("Hello", 10);
padString("JavaScript", 5);

/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
function canVote(age) {
  if (age >= 18) {
    console.log("Can vote");
  } else {
    console.log("Too young to vote");
  }
}
canVote(20);
canVote(16);
canVote(18);

/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back
   - Log the result.
*/
function reverseWords(sentence) {
  const words = sentence.split(' ');
  const reversedWords = words.map(word => word.split('').reverse().join(''));
  const result = reversedWords.join(' ');
  console.log(result);
}
reverseWords("Hello World");
reverseWords("JavaScript is fun");

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
function findWordPosition(sentence, word) {
  const index = sentence.indexOf(word);
  if (index === -1) {
    console.log("Not found");
  } else {
    console.log(`Found at index: ${index}`);
  }
}
findWordPosition("Hello world", "world");
findWordPosition("JavaScript is great", "Python");

/*
30. Switch: Simple Calculator
   - Define a function `calculate(a, operator, b)` that uses switch to handle:
     - "+" -> a + b
     - "-" -> a - b
     - "*" -> a * b
     - "/" -> a / b
     - Otherwise -> "Invalid operator"
   - Log the result.
*/
function calculate(a, operator, b) {
  let result;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (b !== 0) {
        result = a / b;
      } else {
        result = "Cannot divide by zero";
      }
      break;
    default:
      result = "Invalid operator";
      break;
  }
  console.log(`${a} ${operator} ${b} = ${result}`);
}
calculate(10, "+", 5);
calculate(10, "-", 3);
calculate(4, "*", 7);
calculate(15, "/", 3);
calculate(10, "/", 0);
calculate(5, "%", 2);