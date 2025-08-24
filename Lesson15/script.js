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

// 5. Declare a string password = "securePass". Log the length of password.
// CODE HERE

const securePass = '1234567';

console.log('The length of the password is:', securePass.length);

// 6. Convert the string "hello world" to uppercase and log it.
// CODE HERE
const sentence = 'Hello worl';
console.log(sentence.toUpperCase(), sentence);

// 7. Concatenate "Hello" and "World" with a space in between and log the result.
// CODE HERE

// 8. Check the type of a variable, e.g., let x = 42. Log the type using typeof.
// CODE HERE
const x = 42 + 10 + 10;
const y = x + '10';
console.log('type of x is: ', typeof x, x, typeof y, y);

// 9. Convert the number 100 to a string and log the result.
// CODE HERE

// 10. Convert the string "50" to a number and log its type to confirm the conversion.
// CODE HERE

// 11. Generate a random integer between 2 and 10 and log it.
// 0 8 => from 2 to 10
const randomNumber = Math.floor(Math.random() * 9) + 2;

console.log('random number is', randomNumber);

// 12. Round the number 3.7 down using Math.floor and 3.2 up using Math.ceil, log both.
// CODE HERE
console.log(Math.floor(3.7));
console.log(Math.ceil(3.2));

// 13. Declare a boolean variable isStudent = true. Log it.
// CODE HERE

const isStudent = true;
console.log('isStudent:', isStudent);

// 14. Initialize counter = 0, then increment it by 1 using counter++ and log it.
// CODE HERE
counter = 0;
console.log('counter:', counter);
counter++;
console.log('counter after increment:', counter);

// 15. Initialize points = 10, add 5 to it using points += 5, then log points.
// CODE HERE

points = 10;
points += 5;
console.log('points:', points);

// 16. Declare name="Alice", age=30, city="Paris". Log "Alice (30) lives in Paris" using template literals.
// CODE HERE
const name = 'Alice';
const age = 30;
const city = 'Paris';
console.log(`${name} (${age}) lives in ${city}`);

// 17. Declare variables x=5, y=10, z=15. Log their total sum.
// CODE HERE

const x = 5, y = 10, z = 15;
console.log('Total sum:', x + y + z);

// 18. Declare dividend=10 and divisor=3. Log the quotient (divisionResult) and difference (differenceResult).
// CODE HERE
const dividend = 10, divisor = 3;
console.log('Quotient:', dividend / divisor);
console.log('Difference:', dividend - divisor);

// 19. Declare firstName and lastName. Create fullName by concatenating them with a space and log it.
// CODE HERE

const firstName = 'Aslihan';
const lastName = 'Sözen';
const fullName = firstName + ' ' + lastName;
console.log('fullName:', fullName);

// 20. Declare firstFactor=7 and secondFactor=2. Log the product.
// CODE HERE
const firstFactor = 7;
const secondFactor = 2;
console.log('product:', firstFactor * secondFactor);

// 21. Log the value of Math.PI.
// CODE HERE
console.log('Math.PI:', Math.PI);

// 22. Declare counter=0. Increment it using three different methods (e.g., counter++, counter+=1, counter=counter+1) and log the result each time.
// CODE HERE
const counter = 0;

counter++;
console.log(counter); // 1

counter += 1;
console.log(counter); // 2

counter = counter + 1;
console.log(counter); // 3

// 23. Declare initialTemperature=20. Increase it by 5 and log the result.
// CODE HERE
const initialTemperature = 20;
const increasedTemperature = initialTemperature + 5;
console.log('increasedTemperature: ', increasedTemperature);

// 24. Declare numberEx9=6. Increment it using the prefix ++ operator and log both the variable and the incremented value.
// CODE HERE
const numberEx9 = 6;
const incrementNumberEx9 = ++numberEx9;
console.log('numberEx9: ', numberEx9, 'incrementNumberEx9:', incrementNumberEx9);

// 25. Declare numberEx10=8. Increment it using the postfix ++ operator and log both the original variable and the incremented value.
// CODE HERE
const numberEx10 = 8;
const incrementNumberEx10 = numberEx10++;
console.log('numberEx10: ', numberEx10, 'incrementNumberEx10:', incrementNumberEx10);

// 26. Declare numberEx11=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
// CODE HERE

const numberEx11 = -3;
const incrementNumberEx11 = ++numberEx11;
const finalValue = incrementNumberEx11 * 2;
console.log(' finalValue:', finalValue);
// 27. Declare a=2 and b=3. Increment a using the prefix ++ operator, then add b to the result and log it.
// CODE HERE
const a = 2;
const b = 3;
const incrementedA = ++a;
const result = incrementedA + b;
console.log('result:', result);
