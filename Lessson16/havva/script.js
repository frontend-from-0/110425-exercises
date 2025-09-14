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
uppercaseName('asjdnasjkdn');

/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/

function normalizeEmail(email) {
  console.log(email.toLowerCase());
}

normalizeEmail('HAVVANURUNAL207@ICLOUD.COM');
normalizeEmail('Userexample@gmail.com');
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

getDomain('havvanur.unal@codetocareer.eu');
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
    return console.log(`${word} found in sentence.`);
  }
  else {
    return console.log(`${word} not found in sentence.`);
  }
}

containsWord('I love JavaScript programming', 'JavaScript');
containsWord('I love JavaScript programming', 'Python');
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

checkFileExtension('bjjsf.pdf');
checkFileExtension('bjjsf.svc');
/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/
function compareNumbers(a, b) {
  if (a > b) {
    return 'a is bigger than b';
  } else if (b > a) {
    return 'b is bigger than a';
  }
  else {
    return 'Numbers are equal';
  }
}

console.log(compareNumbers(3, 4));
console.log(compareNumbers(5, 5));
console.log(compareNumbers(9, 6));
/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards.
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
*/

function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  if (str === reversedStr) {
    return console.log(`${str} is a palindrome`);
  }
  else {
    return console.log(`${str} is not a palindrome`);
  }
}

isPalindrome('refer');
isPalindrome('hello');
isPalindrome('level');
/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/
function truncateString(text, maxLength) {
  if (text.length > maxLength) {
    const truncated = text.slice(0, maxLength);
    console.log(truncated + '...');
  }
  else {
    console.log(text);
  }
}

truncateString('This is a long sentence that needs to be truncated.', 20);
truncateString('Short text.', 20);

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return console.log('Even');
  }
  else {
    return console.log('Odd');
  }
}

evenOrOdd(6);
evenOrOdd(9);
evenOrOdd(0);
evenOrOdd(-3);
evenOrOdd(-8);


/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/

function checkProtocol(url) {
  const lowercasedUrl = url.toLowerCase();
  if (lowercasedUrl.startsWith('https')) {
    console.log('Secure connection');
  }
  else {
    console.log('Unsecure connection');
  }
}

checkProtocol('HTTPS://example.com');
checkProtocol('http://example.com');

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
// The || symbol is called the OR operator. It means that the entire condition is true if either the left side OR the right side is true.

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/

function repeatWord(word, times) {
  console.log(word.repeat(times));
}

repeatWord('Hi!', 5);
repeatWord('Code', 3);

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
function censorWord(sentence, target) {
  const censoredSentence = sentence.replaceAll(target, '****');
  console.log(censoredSentence);
}

censorWord('This is a bad word. This bad word should be censored.', 'bad');
/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/

function startsWithA(str) {
  if (str.charAt(0) === 'A') {
    console.log('Starts with A');
  }
  else {
    console.log('Does not start with A')
  }
}

startsWithA('Apple');
startsWithA('Banana');

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/

function sliceLastN(text, n) {
  const lastNChars = text.slice(-n);
  console.log(lastNChars);
}

sliceLastN('Hello, world!', 6);
sliceLastN('JavaScript is fun', 3);
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
    return console.log('A');
  }
  else if (score >= 80) {
    return console.log('B');
  }
  else if (score >= 70) {
    return console.log('C');
  }
  else if (score >= 60) {
    return console.log('D');
  }
  else {
    return console.log('F');
  }
}

gradeChecker(90);
gradeChecker(67);
gradeChecker(85);
gradeChecker(74);
gradeChecker(53);

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



function replaceCharacterLoop(str, oldChar, newChar) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === oldChar) {
      newStr += newChar;
    }
    else {
      newStr += str[i];
    }
  }
  return console.log(newStr);
}


replaceCharacter('hello world', 'o', '0');
replaceCharacter('banana', 'a', 'e');
replaceCharacterLoop('I love Javascript and coding!', 'o', '0');


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
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  const titleCased = words.join(' ');
  console.log(titleCased);
}


titleCase('hello world from javascript');
titleCase('javaScript is fun');
titleCase('i love coding');

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
    case 'red':
      console.log('Stop');
      break;
    case 'yellow':
      console.log('Caution');
      break;
    case 'green':
      console.log('Go');
      break;

    default:
      console.log('Invalid color');
      break;
  }
}

trafficLight('red');
trafficLight('yellow');
trafficLight('green');
trafficLight('blue');

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/

function isLongString(str) {
  if (str.length > 10) {
    console.log('Long string');
  }
  else {
    console.log('Short string');
  }
}

isLongString('I am learning JavaScript');
isLongString('String');

/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
function isSpam(text) {
  const lowercasedText = text.toLowerCase();
  if (lowercasedText.includes('spam')) {
    console.log('This text is spam.');
  }
  else {
    console.log('This text is not spam.');
  }
}

isSpam('This is a SPAM message.');
isSpam('Why are you sending me emails?');


/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
function getInitials(fullName) {
  const nameParts = fullName.split(' ');
  let initials = '';
  for (let i = 0; i < nameParts.length; i++) {
    initials += nameParts[i].charAt(0).toUpperCase() + '.';
  }
  console.log(initials);
}

getInitials('John Doe');
getInitials('Jane Ann Smith');
getInitials('alice');
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
      console.log('Winter');
      break;
    case 3:
    case 4:
    case 5:
      console.log('Spring');
      break;
    case 6:
    case 7:
    case 8:
      console.log('Summer');
      break;
    case 9:
    case 10:
    case 11:
      console.log('Autumn');
      break;

    default:
      console.log('Invalid month');
      break;
  }
}

getSeason(1);
getSeason(4);
getSeason(7);
getSeason(10);
getSeason(13);

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/

function containsNumber(str) {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (!isNaN(parseInt(char))) {
      return console.log('Contains number');

    }
  }
  console.log('No number found');
}

containsNumber('Hello123');
containsNumber('NoDigitsHere');
containsNumber('2024 is the year');
containsNumber('Just some text');

/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string. 
*/

function padString(str, maxLength) {
  if (str.length < maxLength) {
    const paddedStr = str.padEnd(maxLength, '*');
    console.log(paddedStr);
  }
  else {
    console.log(str);
  }
}

padString('Hello', 10);
padString('This is a long string', 10);
padString('Short', 8);


/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
function canVote(age) {
  if (age >= 18) {
    console.log('Can vote');
  }
  else {
    console.log('Too young to vote');
  }
}

canVote(19);
canVote(15);
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
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split('').reverse().join('');
  }
  const reversedSentence = words.join(' ');
  console.log(reversedSentence);
}

reverseWords('Hello world from JavaScript');
reverseWords('I love coding');

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1. -- ask this 
*/

function findWordPosition(sentence, word) {
  const index = sentence.indexOf(word);
  if (index !== -1) {
    console.log(`The word "${word}" is found at index:`, index);
  }
  else {
    console.log('Not found');
  }

}
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
    case '+':
      console.log(a + b);
      break;
    case '-':
      console.log(a - b);
      break;
    case '*':
      console.log(a * b);
      break;
    case '/':
      if (b !== 0) {
        console.log(a / b);
      } else {
        console.log('Cannot divide by zero');
      }
      break;
    default:
      console.log('Invalid operator');
      break;
  }
}

calculate(5, '+', 3);
calculate(10, '-', 4);
calculate(6, '*', 7);
calculate(8, '/', 2);
calculate(9, '/', 0);
calculate(4, '^', 2);