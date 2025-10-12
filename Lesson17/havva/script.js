/*
1. Sum Array Elements with a For Loop
   - Define a function `sumArray(numbers)` that uses a for loop
     to sum all elements in an array of numbers.
   - Log the final sum.
*/
const numbers = [0, 0, 0, 0, 0];

function sumArray(numbers) {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum = sum + numbers[index];
  }
  console.log(`The sum of ${numbers} is: ${sum}`);
}

sumArray([1, 3, 5, 9, 10]);
sumArray([1, 1, 1]);
sumArray(numbers);
console.log(`---------------------------------`);

/*
2. Find Maximum Number in an Array
   - Define a function `findMax(numbers)` that uses a for loop to iterate
     through an array and find the largest value.
   - Log the largest value.
*/
function findMax(numbers) {
  let maxNumber = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    const nextNumber = numbers[i];
    if (maxNumber < nextNumber) {
      maxNumber = nextNumber;
    }
  }

  console.log('Maximum number is:', maxNumber);
}

findMax([1, 3, 5, 9, 10]);
findMax([100, 3, -50, 9, 10]);
console.log(`---------------------------------`);

/*
3. Count Odd and Even Numbers
   - Define a function `countOddEven(numbers)` that loops through an array
     of numbers and counts how many are odd and how many are even.
   - Log the counts in the format: "Odd: X, Even: Y"
*/
function countOddEven(numbers) {
  let oddCount = 0;
  let evenCount = 0;
  for (let i = 0; i < numbers.length; i++) {
    const reminder = numbers[i] % 2;
    if (reminder === 0) {
      evenCount += 1;
    } else {
      oddCount += 1;
    }
  }
  console.log(`Odd: ${oddCount}, Even: ${evenCount} `);
}
countOddEven([1, 3, 5, 9, 10]);
countOddEven([1, 2, 5, 9, 10, -11, 3, 0, -9, 10]);
console.log(`---------------------------------`);

/*
4. Sum of Numbers in a Range (While Loop)
   - Define a function `sumRange(start, end)` that uses a while loop
     to sum all integers from `start` to `end` (inclusive).
   - Log the final sum.
*/

function sumRange(start, end) {
  let sum = 0;
  let currentNumber = start;
  while (currentNumber <= end) {
    sum += currentNumber;
    currentNumber++;
  }

  console.log(`Sum from ${start} to ${end} is: ${sum}`)
}

sumRange(1, 5);
sumRange(3, 7);
console.log(`---------------------------------`);


/*
5. Reverse an Array
   - Define a function `reverseArray(arr)` that reverses the elements
     of an array manually using a for loop (without using .reverse()).
   - Log the reversed array.
*/
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  console.log(`Reversed array: ${reversed}`);
}

reverseArray([1, 2, 3, 4, 5]);
reverseArray(['john', '45', true, false, NaN]);

console.log(`---------------------------------`);

/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/

function filterNegative(numbers) {
  let positiveNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveNumbers.push(numbers[i]);
    }
  }
  return positiveNumbers;

}

filterNegative([1, -3, 5, -9, 10]);
console.log(filterNegative([1, -3, 5, -9, 10]));
console.log(filterNegative([-1, -3, -5, -9, -10]));
console.log(`---------------------------------`);

/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/

function doubleValues(numbers) {
  let doubled = [];
  for (let number of numbers) {
    doubled.push(number * 2);
  }
  return doubled;
}

doubleValues([1, 2, 3, 4, 5]);
console.log(doubleValues([1, 2, 3, 4, 5]));
console.log(doubleValues([-1, -2, -3, -4, -5]));
console.log(`---------------------------------`);
/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/

function printCharacters(str) {
  for (let char of str) { // char is each character in the string, for-of loop iterates over characters in a string
    console.log(char);
  }
  return;
}

printCharacters('Hello');
console.log(`---------------------------------`);
printCharacters('JavaScript');
console.log(`---------------------------------`);

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/

function sumObjectValues(obj) {
  let sum = 0;
  for (const k in obj) {
    if (typeof obj[k] === 'number') {
      sum = sum + obj[k];
    } else {
      console.log('Current value is not a number, skipping it', obj[k]);
    }
  }
  console.log('Sum of values is:', sum);
  console.log(`Sum of values is: ${sum}`);
}

const exampleArray = [1, 2, 3, 4, 2, 23];

const exampleObejct = {
  a: 123,
  b: 2131,
  name: 'John',
  surname: 'Doe',
};

sumObjectValues({ a: 10, b: 20, c: 5 });
sumObjectValues(exampleObejct);
sumObjectValues({ a: 10, b: '20', c: 5 });
console.log(`---------------------------------`);

/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/

function printObjectKeys(obj) {
  for (k in obj) { // k is the key, obj[k] is the value. for-in loop iterates over keys in an object
    console.log(k);
  }
  return;
}

printObjectKeys({ a: 5, b: 6 });
console.log(`---------------------------------`);

/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/

function sumWithDoWhile(numbers) {
  let sum = 0;
  let index = 0;
  do { // at least one iteration
    sum += numbers[index];
    index++;
  }
  while (index < numbers.length);

  return sum;
}

console.log(sumWithDoWhile([1, 2, 3, 4, 5]));
console.log(sumWithDoWhile([-1, -2, -3, -4, -5]));
console.log(`---------------------------------`);



/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/

function removeDuplicates(arr) {
  let withoutDuplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (!withoutDuplicates.includes(arr[i])) { // if the array does not include the current element
      withoutDuplicates.push(arr[i])
    }
  }
  return withoutDuplicates;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates(['apple', 'banana', 'apple', 'orange', 'banana']));
console.log(`---------------------------------`)

/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/

function factorial(n) {
  let factorialResult = 1;
  for (i = n; i > 0; i--) {
    factorialResult = factorialResult * i;
  }

  return factorialResult;
}

console.log(factorial(5));
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(3)); // 6
console.log(`---------------------------------`)


/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/

function reverseWords(sentence) {
  sentence = sentence.split(' ');
  let reversed = [];
  for (i = sentence.length - 1; i >= 0; i--) { // to find the last index we do length - 1
    reversed.push(sentence[i]);
  }
  return reversed.join(' ');
}

console.log(reverseWords('Hello World from JavaScript'));
console.log(`---------------------------------`)


/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/

function filterLongWords(words, minLength) {
  let longWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > minLength) {
      longWords.push(words[i])
    }
  }
  return longWords;
}

console.log(filterLongWords(['apple', 'banana', 'kiwi', 'cherry', 'blueberry'], 5));
console.log(`---------------------------------`)


/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/

function logElementsWithIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
  }
  return;
}

logElementsWithIndex(['a', 'b', 'c', 'd']);
console.log(`---------------------------------`)

/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/

function findMin(numbers) {
  let minNumber = numbers[0]; // Assume first number is the smallest initially, our baseline. 
  for (let i = 0; i < numbers.length; i++) {
    const nextNumber = numbers[i]; // Get the next number in the array. current index is our next number. 
    if (nextNumber < minNumber) {
      minNumber = nextNumber; // Update minNumber if we found a smaller number.
    }
  }
  return minNumber;
}
console.log(findMin([3, 1, 4, 1, 5, 9, -2]));
console.log(`---------------------------------`)

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/

function countOccurences(arr, word) {
  let count = 0; // Initialize count to 0, our array is empty in the beginning.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == word) { // If the current element matches the word we are looking for
      count++; // then we increase the count by 1
    }
  }
  return count;
}

console.log(countOccurences(['apple', 'banana', 'apple', 'orange', 'banana', 'apple'], 'apple'));
console.log(`---------------------------------`)

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/

function removeFalsyValues(arr) {
  let notFalsy = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) { // if the value is truthy.
      // do something 
      notFalsy.push(arr[i]);
    }
  }
  return notFalsy;
}

console.log(removeFalsyValues([0, 1, false, 2, '', 3, null, undefined, NaN, 'hello']));
console.log(`---------------------------------`)


/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/

function sumDigits(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) { // if the character is a number  
      sum = sum + parseInt(str[i]); // convert string to number and add to sum
    }
  }
  return sum;
}

console.log(sumDigits('abc123'));
console.log(sumDigits('5 apples and 10 bananas'));
console.log(`---------------------------------`)

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/

function averageArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  let average = sum / numbers.length;
  return average;
}
console.log(averageArray([1, 2, 3, 4, 5]));
console.log(`---------------------------------`)

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/

function flattenArray(twoDArray) {
  let newArray = [];
  for (let i = 0; i < twoDArray.length; i++) { // loop through each sub-array
    for (let j = 0; j < twoDArray[i].length; j++) { // loop through each element in the sub-array
      newArray.push(twoDArray[i][j]) // push each element to the new array
    }
  }
  return newArray;
}

console.log(flattenArray([[1, 2], [3, 4], [5, 6]]));
console.log(flattenArray([['a', 'b'], ['c', 'd'], ['e', 'f']]));
console.log(`---------------------------------`)

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/

function findWordsWithLetter(words, letter) {
  let filteredArray = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(letter)) {
      filteredArray.push(words[i])
    }
  }
  return filteredArray;
}

console.log(findWordsWithLetter(['apple', 'banana', 'cherry', 'date'], 'a'));
console.log(findWordsWithLetter(['apple', 'banana', 'cherry', 'date'], 'e'));
console.log(`---------------------------------`)


/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/

function pushPopExample(arr, itemToPush) {
  arr.push(itemToPush);
  console.log(arr);
  console.log(arr.pop());
  console.log(arr)
  return arr;
}

pushPopExample([1, 2, 3], 4);
console.log(`---------------------------------`)


/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/

function manageQueue(queue, newPerson) {
  queue.push(newPerson);
  console.log(queue);
  console.log(queue.shift());
  console.log(queue);
  return queue;
}

manageQueue(['Alice', 'Bob', 'Charlie'], 'David');
console.log(`---------------------------------`)

/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/

const todoList = ['Study JS', 'Eat breakfast', 'Walk dog'];

function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  console.log(todoList);
  todoList.splice(startIndex, deleteCount, ...newTasks);
  console.log(todoList);
}
updateTodoList(todoList, 1, 1, 'Read book', 'Go shopping');
updateTodoList(todoList, 0, 2, 'Exercise');
