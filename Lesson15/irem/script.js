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
const userName = 'irem';
const userAge = 39;

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
const greeting = "Hello" + " " + "World";
console.log("Ex. 7:", greeting);

// 8. Check the type of a variable, e.g., let x = 42. Log the type using typeof.
// CODE HERE
const x = 42 + 10 + 10;
const y = x + '10';
console.log('type of x is: ', typeof x, x, typeof y, y);

// 9. Convert the number 100 to a string and log the result.
// CODE HERE
const number100 = 100;
const number100AsString = number100.toString();
console.log("Ex. 9:", number100AsString, typeof number100AsString);

// 10. Convert the string "50" to a number and log its type to confirm the conversion.
// CODE HERE
const stringFifty = "50";
const numberFifty = Number(stringFifty);
console.log("Ex. 10:", numberFifty, typeof numberFifty);

// 11. Generate a random integer between 2 and 10 and log it.
// 0 8 => from 2 to 10
const randomNumber = Math.floor( Math.random() * 9 ) + 2;

console.log('random number is', randomNumber);


// 12. Round the number 3.7 down using Math.floor and 3.2 up using Math.ceil, log both.
// CODE HERE
const floorResult = Math.floor(3.7);
const ceilResult = Math.ceil(3.2);
console.log("Ex. 12:", "Math.floor(3.7) =", floorResult, "Math.ceil(3.2) =", ceilResult);

// 13. Declare a boolean variable isStudent = true. Log it.
// CODE HERE
const isStudent = true;
console.log("Ex. 13:", isStudent);

// 14. Initialize counter = 0, then increment it by 1 using counter++ and log it.
// CODE HERE
let counter = 0;
counter++;
console.log("Ex. 14:", counter);

// 15. Initialize points = 10, add 5 to it using points += 5, then log points.
// CODE HERE
let points = 10;
points += 5;
console.log("Ex. 15:", points);

// 16. Declare name="Alice", age=30, city="Paris". Log "Alice (30) lives in Paris" using template literals.
// CODE HERE
const name = "Alice";
const age = 30;
const city = "Paris";
console.log(`Ex. 16: ${name} (${age}) lives in ${city}`);

// 17. Declare variables x=5, y=10, z=15. Log their total sum.
// CODE HERE
const x17 = 5;
const y17 = 10;
const z17 = 15;
console.log("Ex. 17:", x17 + y17 + z17);

// 18. Declare dividend=10 and divisor=3. Log the quotient (divisionResult) and difference (differenceResult).
// CODE HERE
const dividend = 10;
const divisor = 3;
const divisionResult = dividend / divisor;
const differenceResult = dividend - divisor;
console.log("Ex. 18:", "quotient =", divisionResult, "difference =", differenceResult);

// 19. Declare firstName and lastName. Create fullName by concatenating them with a space and log it.
// CODE HERE
const firstName = "irem";
const lastName = "haritaoglu";
const fullName = firstName + " " + lastName;
console.log("Ex. 19:", fullName);

// 20. Declare firstFactor=7 and secondFactor=2. Log the product.
// CODE HERE
const firstFactor = 7;
const secondFactor = 2;
console.log("Ex. 20:", firstFactor * secondFactor);

// 21. Log the value of Math.PI.
// CODE HERE
console.log("Ex. 21:", Math.PI);

// 22. Declare counter=0. Increment it using three different methods (e.g., counter++, counter+=1, counter=counter+1) and log the result each time.
// CODE HERE
let counter22 = 0;
counter22++;
console.log("Ex. 22 method 1:", counter22);
counter22 += 1;
console.log("Ex. 22 method 2:", counter22);
counter22 = counter22 + 1;
console.log("Ex. 22 method 3:", counter22);

// 23. Declare initialTemperature=20. Increase it by 5 and log the result.
// CODE HERE
let initialTemperature = 20;
initialTemperature += 5;
console.log("Ex. 23:", initialTemperature);

// 24. Declare numberEx9=6. Increment it using the prefix ++ operator and log both the variable and the incremented value.
// CODE HERE
let numberEx9 = 6;
console.log("Ex. 24 before increment:", numberEx9);
console.log("Ex. 24 prefix increment result:", ++numberEx9);
console.log("Ex. 24 after increment:", numberEx9);

// 25. Declare numberEx10=8. Increment it using the postfix ++ operator and log both the original variable and the incremented value.
// CODE HERE
let numberEx10 = 8;
console.log("Ex. 25 before increment:", numberEx10);
console.log("Ex. 25 postfix increment result:", numberEx10++);
console.log("Ex. 25 after increment:", numberEx10);

// 26. Declare numberEx11=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
// CODE HERE
let numberEx11 = -3;
const result26 = (++numberEx11) * 2;
console.log("Ex. 26:", result26);

// 27. Declare a=2 and b=3. Increment a using the prefix ++ operator, then add b to the result and log it.
// CODE HERE
let a27 = 2;
const b27 = 3;
const result27 = (++a27) + b27;
console.log("Ex. 27:", result27);