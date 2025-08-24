/* 
Topic: JavaScript Basics

Focus: Variables, data types, arithmetic, strings, random numbers, template literals, increments
*/

// Instructions: Complete each exercise below by writing your code where indicated.

// 1. Declare variables firstNumber=5 and secondNumber=3 and log their sum.
// CODE HERE

const firstNumber = 5;
const secondNumber = 3;

console.log('EX. 1', firstNumber + secondNumber);

// 2. Declare variables userName and userAge. Log a greeting: "Hello! I am (userName) and I am (userAge) years old."
// CODE HERE
// Keywords to create variables are let, const, var
// IN JS, we use camelCase
const userName = 'Jason';
const userAge = 32;

// String interpolation `Some text ${aVariable} some other text`
console.log(`Hello! I am ${userName} and I am ${userAge} years old.`);
console.log('Hello! I am ' + userName + ' and I am ' + userAge + ' years old.');

console.log(
  'Hello! I am '.concat(userName, ' and I am ', userAge, ' years old.'),
);

// 3. Declare variables a=10 and b=4. Log the result of a-b, a*b, and a/b.
// CODE HERE

const a = 10;
const b = 4;
console.log('Ex. 3', 'a - b =', a - b, 'a * b =', a * b, 'a / b =', a / b);
console.log(`
  Ex. 3: a - b = ${a - b} a * b = ${a * b} a / b = ${a / b}
  `);


// 4. Use template literals to log: "My name is (userName). I like JS."
// CODE HERE

console.log(`My name is ${userName}. I like JS.`);


// 5. Declare a string password = "securePass". Log the length of password.
// CODE HERE

const securePass = '1234567';

console.log('The length of the password is:', securePass.length);



// 6. Convert the string "hello world" to uppercase and log it.
// CODE HERE
const sentence = 'Hello world';
console.log(sentence.toUpperCase(), sentence);


// 7. Concatenate "Hello" and "World" with a space in between and log the result.
// CODE HERE
console.log("Hello" + " " + "World");


// 8. Check the type of a variable, e.g., let x = 42. Log the type using typeof.
// CODE HERE
const x = 42 + 10 + 10;
const y = x + '10';
console.log('type of x is: ', typeof x, x, typeof y, y);


// 9. Convert the number 100 to a string and log the result.
// CODE HERE
const numberToString = 100;
const convertedString = String(numberToString);
// Alternatively, you can use numberToString.toString();
console.log('Converted number to string:', convertedString, 'Type:', typeof convertedString);

// 10. Convert the string "50" to a number and log its type to confirm the conversion.
// CODE HERE

const stringToNumber = '50';
const convertedNumber = Number(stringToNumber);
// Alternatively, you can use parseInt(stringToNumber) or parseFloat(stringToNumber);
// const convertedNumber = parseInt(stringToNumber, 10); // Using parseInt with base 10
console.log('Converted string to number:', convertedNumber, 'Type:', typeof convertedNumber);


// 11. Generate a random integer between 2 and 10 and log it.
// 0 8 => from 2 to 10
const randomNumber = Math.floor(Math.random() * 9) + 2;

console.log('random number is', randomNumber);


// 12. Round the number 3.7 down using Math.floor and 3.2 up using Math.ceil, log both.
// CODE HERE

const number1 = 3.7;
const number2 = 3.2;
const roundedDown = Math.floor(number1);
const roundedUp = Math.ceil(number2);
console.log('Rounded down:', roundedDown, 'Rounded up:', roundedUp);

// 13. Declare a boolean variable isStudent = true. Log it.
// CODE HERE

const isStudent = true;
console.log('Is student:', isStudent);

// 14. Initialize counter = 0, then increment it by 1 using counter++ and log it.
// CODE HERE

let counter = 0;
counter++;
console.log('Counter after increment:', counter);

// 15. Initialize points = 10, add 5 to it using points += 5, then log points.
// CODE HERE

let points = 10;
points += 5;
console.log('Points after addition:', points);

// 16. Declare name="Alice", age=30, city="Paris". Log "Alice (30) lives in Paris" using template literals.
// CODE HERE

const name = 'Alice';
const age = 30;
const city = 'Paris';
console.log(`${name} (${age}) lives in ${city}`);

// 17. Declare variables x=5, y=10, z=15. Log their total sum.
// CODE HERE

const x1 = 5;
const y1 = 10;
const z1 = 15;
const totalSum = x1 + y1 + z1;
console.log('Total sum of x, y, z:', totalSum);

// 18. Declare dividend=10 and divisor=3. Log the quotient (divisionResult) and difference (differenceResult).
// CODE HERE

const dividend = 10;
const divisor = 3;
const divisionResult = dividend / divisor;
const differenceResult = dividend - divisor;
console.log('Division result:', divisionResult, 'Difference result:', differenceResult);


// 19. Declare firstName and lastName. Create fullName by concatenating them with a space and log it.
// CODE HERE

const firstName = "Havva";
const lastName = "Ünal";
const fullName = firstName + ' ' + lastName;
console.log('Full name:', fullName);

// 20. Declare firstFactor=7 and secondFactor=2. Log the product.
// CODE HERE

const firstFactor = 7;
const secondFactor = 2;
const product = firstFactor * secondFactor;
console.log('Product of firstFactor and secondFactor:', product);

// 21. Log the value of Math.PI.
// CODE HERE

console.log('Value of Math.PI:', Math.PI);

// 22. Declare counter=0. Increment it using three different methods (e.g., counter++, counter+=1, counter=counter+1) and log the result each time.
// CODE HERE

let counter1 = 0;
counter1++;
console.log('Incremented using counter++:', counter1);
counter1 += 1;
console.log('Incremented using counter+1:', counter1);
counter1 = counter1 + 1;
console.log('Incremented using counter=counter+1:', counter1);


// 23. Declare initialTemperature=20. Increase it by 5 and log the result.
// CODE HERE

let initialTemperature = 20;
initialTemperature += 5;
console.log('Increased temperature:', initialTemperature);

// 24. Declare numberEx9=6. Increment it using the prefix ++ operator and log both the variable and the incremented value.
// CODE HERE 

let numberEx9 = 6;
let incrementedValue = ++numberEx9;
console.log('Original numberEx9:', numberEx9, 'Incremented value:', incrementedValue);

// 25. Declare numberEx10=8. Increment it using the postfix ++ operator and log both the original variable and the incremented value.
// CODE HERE

let numberEx10 = 8;
let incrementedValuePostfix = numberEx10++;
console.log('Original numberEx10:', numberEx10, 'Incremented value:', incrementedValuePostfix);

// 26. Declare numberEx11=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
// CODE HERE

let numberEx11 = -3;
let incrementedAndMultiplied = ++numberEx11 * 2;
console.log('Incremented and multiplied value:', incrementedAndMultiplied);

// 27. Declare a=2 and b=3. Increment a using the prefix ++ operator, then add b to the result and log it.
// CODE HERE */

let aEx27 = 2;
let bEx27 = 3;
let resultEx27 = ++aEx27 + bEx27;
console.log('Result after incrementing a and adding b:', resultEx27);