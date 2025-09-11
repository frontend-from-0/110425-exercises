/*
1. Check Password Length
   - Define a function `checkPassword(password)` that checks if `password` length
     is at least 8 characters.
   - If >= 8, log: "Password length is sufficient."
   - Otherwise, log: "Password is too short."
   - Call the function with different passwords and log the result.
*/
function checkPassword(password) {
  console.log("Password.length:", password.length);
  if (password.length >= 12) {
    console.log("Password is strong.");
  } else if (password.length >= 8) {
    console.log("Password length is sufficient.");
  } else if (password.length >= 6) {
    console.log("Password length is sufficient but you have a weak password.");
  } else {
    console.log("Password is too short.");
  }
}
checkPassword("123456789101");
checkPassword("12345678");
checkPassword("123456");
checkPassword("apple");
console.log("---------------------------------");
/*
2. Uppercase Name
   - Define a function `uppercaseName(name)` that converts a given name to uppercase.
   - Log the uppercase result to the console.
   - Example: "John Doe" -> "JOHN DOE"
*/
const name = "jane";

function uppercaseName(name) {
  console.log(name.toUpperCase());
}
uppercaseName(name);
uppercaseName("tom");
uppercaseName("asjdnasjkdn");
console.log("---------------------------------");
/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/

const email = "ayjan.muradova@code2career.eu";

function normalizeEmail(email) {
  console.log(email.toLowerCase());
}
normalizeEmail(email);
normalizeEmail("ABCD@GMAIL.COM");
normalizeEmail("AYJAN@MAIL.RU");
console.log("---------------------------------");
/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/
function getDomain(email) {
  console.log(email.indexOf("@"));
  const separatorIndex = email.indexOf("@");
  const domain = email.substring(separatorIndex + 1);
  console.log("Domain is:", domain);
}

getDomain("havva.unal@codetocareer.eu");
getDomain("user@example.com");

// 2. type of to slice
function getDomain(email) {
  const atIndex = email.indexOf("@");
  const domain = email.slice(atIndex + 1);
  console.log("Domain is:", domain);
}
getDomain("ayjan.muradova@gmail.com");
console.log("---------------------------------");

/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/
function containsWord(sentence, word) {
  if (sentence.includes(word)) {
    console.log(word + " found in sentence.");
  } else {
    console.log(word + " not found in sentence.");
  }
}
containsWord("I am learning JS", "JS");
containsWord("This word is much better", "word");
containsWord("Hello World", "JS");
console.log("---------------------------------");
/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/
function checkFileExtension(filename) {
  filename.endsWith(".pdf");
  if (filename.endsWith(".pdf")) {
    console.log("This is a PDF file.");
  } else {
    console.log("Not a PDF file.");
  }
}

checkFileExtension("bjjsf.pdf");

checkFileExtension("bjjsf.svc");
console.log("---------------------------------");
/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/
function compareNumbers(a, b) {
  if (a > b) {
    return "a is bigger than b";
  } else if (b > a) {
    return "b is bigger than a";
  } else {
    return "Numbers are equal";
  }
}

console.log(compareNumbers(3, 4));
console.log(compareNumbers(5, 5));
console.log(compareNumbers(9, 6));
console.log("---------------------------------");
/*
8. Palindrome Check onden arkadan ayni okunan ex: madam gibi
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards.
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
   split()=> metni (string) belirtilen bir ayırıcıya göre bölerek bir dizi (array) haline getirir.
   reverse()=> bir dizinin (array) elemanlarının sırasını tersine çevirir.
   join()=> bir dizinin (array) elemanlarını birleştirerek tek bir metin (string) haline getirir.
*/
function isPalindrome(str) {
  const reverseStr = str.split("").reverse().join(" ");
  if (str === reverseStr) {
    console.log(str + " is a palindrome");
  } else {
    console.log(str + " is not a palindrome");
  }
}
isPalindrome("madam");
isPalindrome("hello");
isPalindrome("ada");
console.log("---------------------------------");
/*
9. String Truncation - String Kısaltma
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/
function truncateString(text, maxLength) {
  const truncated = text.slice(0, maxLength) + "...";
  if (text.length > maxLength) {
    console.log(truncated);
  } else {
    console.log(text);
  }
}
truncateString("This is a long sentence that needs to be truncated.", 20);
truncateString("My name is Ayjan", 10);
truncateString("Short text", 20);
console.log("---------------------------------");
/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log("The number is: " + evenOrOdd(5));
console.log("The number is: " + evenOrOdd(6));
console.log("The number is: " + evenOrOdd(2));

console.log("---------------------------------");
/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
function checkProtocol(url) {
  const lowerCasedUrl = url.toLowerCase();
  if (lowerCasedUrl.startsWith("https")) {
    console.log("Secure connection");
  } else {
    console.log("Unsecure connection");
  }
}
checkProtocol("https://w3schools.com");
checkProtocol("HTTP://google.com");
checkProtocol("www.example.com");
console.log("---------------------------------");
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

  if (typeof sanitizedInput !== "number" || isNaN(sanitizedInput)) {
    console.log("Invalid input", num);
    return;
  }

  switch (sanitizedInput) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;

    default:
      console.log("Provided number is outside the range", num);
      break;
  }
}
getDayOfWeek("oads");
getDayOfWeek(5);
getDayOfWeek(10);
console.log("---------------------------------");
// value == value
/// value and type === value and type

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/
function repeatWord(word, times) {
  console.log(word.repeat(times));
}
repeatWord("Happy ", 2);
repeatWord("Hello ", 3);
repeatWord("JS ", 4);
console.log("---------------------------------");
/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
function censorWord(sentence, target) {
  const censoredWord = sentence.replaceAll(target, "****");
  console.log(censoredWord);
}
censorWord("O iyi bir insan ama karakteri kötü.", "kötü");
censorWord("This is a bad word. Such a bad thing to say.", "bad");

console.log("---------------------------------");
/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
function startsWithA(str) {
  if (str.charAt(0) === "A") {
    console.log("Starts with A");
  } else {
    console.log("Does not start with A");
  }
}
startsWithA("Ayjan");
startsWithA("ayjan");
startsWithA("John");
console.log("---------------------------------");
/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
function sliceLastN(text, n) {
  const lastNCharacter = text.slice(-n);
  console.log(lastNCharacter);
}
sliceLastN("Ayjan", 2);
sliceLastN("JavaScript", 3);
sliceLastN("My name is Ayjan", 8);
console.log("---------------------------------");
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
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}
gradeChecker(30);
gradeChecker(65);
gradeChecker(85);
console.log("---------------------------------");

function gradeChecker(score) {
  const sanitizedScore = parseInt(score);

  if (typeof sanitizedScore !== "number" || isNaN(sanitizedScore)) {
    console.log("Invalid input", score);
    return;
  }
  switch (true) {
    case sanitizedScore >= 90:
      console.log("A");
      break;
    case sanitizedScore >= 80:
      console.log("B");
      break;
    case sanitizedScore >= 70:
      console.log("C");
      break;
    case sanitizedScore >= 60:
      console.log("D");
      break;
    case sanitizedScore < 60:
      console.log("F");
      break;

    default:
      console.log("Provided number is outside the range", score);
      break;
  }
}
gradeChecker(30);
gradeChecker(65);
gradeChecker(85);
console.log("---------------------------------");
/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
function replaceCharacter(str, oldChar, newChar) {
  const replacedStr = str.replaceAll(oldChar, newChar);
  console.log(replacedStr);
}
replaceCharacter("flowers", "f", "F");
replaceCharacter("hella", "a", "o");

console.log("---------------------------------");

/*19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word // burada map() methodu kullan.
     - Joins them back
   - Log the transformed string.
*/
function titleCase(sentence) {
  const words = sentence.split(" ");
  const titleCasedWords = words.map(
    (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
  );
  const titleCasedSentence = titleCasedWords.join(" ");
  console.log(titleCasedSentence);
}
titleCase("hello world from ayjan");
titleCase("javaScript is fun");
console.log("---------------------------------");
/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/
function trafficLight(color) {
  switch (color) {
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
trafficLight("yellow");
trafficLight("green");
trafficLight("blue");
console.log("---------------------------------");
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
isLongString("I am writing code");
isLongString("Hello");
console.log("---------------------------------");
/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
function isSpam(text) {
  const lowerCasedText = text.toLowerCase();
  if (lowerCasedText.includes("spam")) {
    console.log("This text is spam.");
  } else {
    console.log("This text is not spam.");
  }
}
isSpam("She sends me spam emails.");
isSpam("She sends me SPAM emails.");
isSpam("Hello World");
console.log("---------------------------------");
/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name 
   part,  then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
function getInitials(fullName) {
  const nameParts = fullName.split(" ");
  const initials = nameParts.map((part) => part[0].toUpperCase()).join(".");
  console.log(initials);
}
getInitials("John Doe");
getInitials("muradova ayjan");

console.log("---------------------------------");

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
  const month = parseInt(monthNum);
  switch (month) {
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
getSeason(4);
getSeason(7);
getSeason(10);
getSeason(13);
console.log("---------------------------------");
/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/
function containsNumber(str) {
  //Regular Expressions (regex)
  // \d means any digit from 0 to 9
  const regex = /\d/;
  if (regex.test(str)) {
    console.log("Contains number");
  } else {
    console.log("No number found");
  }
}
containsNumber("Hello123");
containsNumber("Hello");
console.log("---------------------------------");
/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
function padString(str, maxLength) {
  if (str.length < maxLength) {
    console.log(str.padEnd(maxLength, "*"));
  } else {
    console.log(str);
  }
}
padString("Hello", 7);
padString("JavaScript", 5);
console.log("---------------------------------");
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
console.log("---------------------------------");
/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back
   - Log the result.
*/
function reverseWords(sentence) {
  const words = sentence.split(" ");
  const reversedWords = words.map((word) => word.split("").reverse().join(""));
  const reversedSentence = reversedWords.join(" ");
  console.log(reversedSentence);
}
reverseWords("Hello World");
reverseWords("I am doing my homework");
reverseWords("I need more practice");
console.log("---------------------------------");

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
function findWordPosition(sentence, word) {
  const index = sentence.indexOf(word);
  if (index !== -1) {
    console.log(`Index found: ${index}`);
  } else {
    console.log("Not found");
  }
}
findWordPosition("I am learning JavaScript", "JavaScript");
findWordPosition("This is a test sentence", "hello");
console.log("---------------------------------");
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
  switch (operator) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;
    default:
      console.log("Invalid operator");
      break;
  }
}
calculate(6, "+", 4);
calculate(6, "-", 4);
calculate(6, "*", 4);
calculate(6, "/", 4);
calculate(6, "%", 4);

console.log("---------------------------------");
