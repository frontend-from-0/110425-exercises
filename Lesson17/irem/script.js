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

  for (let i = 1; i < numbers.length; i++) {
    const nextNumber = numbers[i + 1];
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
  let current = start;
  while (current <= end) {
    sum += current;
    current++;
  }
  console.log(`Sum from ${start} to ${end} is: ${sum}`);
}
sumRange(1, 5);
sumRange(10, 15);
sumRange(-2, 2);
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
reverseArray(['john', '45,', true, false, NaN]);
console.log(`---------------------------------`);

/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/
function filterNegative(numbers) {
  const positiveNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      positiveNumbers.push(numbers[i]);
    }
  }
  console.log(`Filtered positive numbers: ${positiveNumbers}`);
}
filterNegative([1, -2, 3, -4, 5, 0]);
filterNegative([-10, -5, -1]);
console.log(`---------------------------------`);

/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/
function doubleValues(numbers) {
  const doubled = [];
  for (const number of numbers) {
    doubled.push(number * 2);
  }
  console.log(`Doubled values: ${doubled}`);
}
doubleValues([1, 2, 3, 4, 5]);
doubleValues([10, 20, 30]);
console.log(`---------------------------------`);

/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
function printCharacters(str) {
  console.log(`Characters of "${str}":`);
  for (const char of str) {
    console.log(char);
  }
}
printCharacters("Hello");
printCharacters("irem");
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
console.log(`---------------------------------`);

/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/
function printObjectKeys(obj) {
  console.log('Object keys:');
  for (const key in obj) {
    console.log(key);
  }
}
printObjectKeys({ name: "Alice", age: 25 });
printObjectKeys({ city: "Istanbul", country: "Turkey", population: 15000000 });
console.log(`---------------------------------`);

/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/
function sumWithDoWhile(numbers) {
  let sum = 0;
  let i = 0;
  do {
    sum += numbers[i];
    i++;
  } while (i < numbers.length);
  console.log(`Sum using do-while: ${sum}`);
}
sumWithDoWhile([1, 2, 3, 4, 5]);
sumWithDoWhile([10, 20, 30]);
console.log(`---------------------------------`);

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/
function removeDuplicates(arr) {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  console.log(`Array without duplicates: ${unique}`);
}
removeDuplicates([1, 2, 2, 3, 3, 4, 5, 5]);
removeDuplicates(['apple', 'banana', 'apple', 'orange', 'banana']);
console.log(`---------------------------------`);

/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(`Factorial of ${n} is: ${result}`);
}
factorial(5);
factorial(4);
factorial(0);
console.log(`---------------------------------`);

/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/
function reverseWords(sentence) {
  const words = sentence.split(' ');
  const reversed = [];
  for (let i = words.length - 1; i >= 0; i--) {
    reversed.push(words[i]);
  }
  const reversedSentence = reversed.join(' ');
  console.log(`Reversed sentence: "${reversedSentence}"`);
}
reverseWords("Hello world from JavaScript");
reverseWords("I love programming");
console.log(`---------------------------------`);

/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
function filterLongWords(words, minLength) {
  const longWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      longWords.push(words[i]);
    }
  }
  console.log(`Words with length >= ${minLength}: ${longWords}`);
}
filterLongWords(['cat', 'dog', 'elephant', 'bird', 'butterfly'], 4);
filterLongWords(['JavaScript', 'HTML', 'CSS', 'React'], 5);
console.log(`---------------------------------`);

/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
function logElementsWithIndex(arr) {
  console.log('Array elements with indices:');
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
  }
}
logElementsWithIndex(['apple', 'banana', 'cherry']);
logElementsWithIndex([10, 20, 30, 40]);
console.log(`---------------------------------`);

/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
function findMin(numbers) {
  let minNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minNumber) {
      minNumber = numbers[i];
    }
  }
  console.log(`Minimum number is: ${minNumber}`);
}
findMin([5, 2, 8, 1, 9]);
findMin([-3, -1, -5, -2]);
console.log(`---------------------------------`);

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/
function countOccurrences(arr, word) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      count++;
    }
  }
  console.log(`"${word}" appears ${count} times in the array`);
}
countOccurrences(['apple', 'banana', 'apple', 'orange', 'apple'], 'apple');
countOccurrences(['cat', 'dog', 'bird', 'cat'], 'cat');
console.log(`---------------------------------`);

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
function removeFalsyValues(arr) {
  const truthyValues = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      truthyValues.push(arr[i]);
    }
  }
  console.log(`Array without falsy values: ${truthyValues}`);
}
removeFalsyValues([1, 0, "hello", "", true, false, null, undefined, NaN]);
removeFalsyValues([0, false, "", "text", 42]);
console.log(`---------------------------------`);

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
function sumDigits(str) {
  let sum = 0;
  for (const char of str) {
    if (!isNaN(char) && char !== ' ') {
      sum += parseInt(char);
    }
  }
  console.log(`Sum of digits in "${str}": ${sum}`);
}
sumDigits("abc123");
sumDigits("hello4world5");
sumDigits("no digits here");
console.log(`---------------------------------`);

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
function averageArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const average = sum / numbers.length;
  console.log(`Average of ${numbers} is: ${average}`);
}
averageArray([1, 2, 3, 4, 5]);
averageArray([10, 20, 30, 40]);
console.log(`---------------------------------`);

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
function flattenArray(twoDArray) {
  const flattened = [];
  for (let i = 0; i < twoDArray.length; i++) {
    for (let j = 0; j < twoDArray[i].length; j++) {
      flattened.push(twoDArray[i][j]);
    }
  }
  console.log(`Flattened array: ${flattened}`);
}
flattenArray([[1, 2], [3, 4], [5, 6]]);
flattenArray([['a', 'b'], ['c', 'd'], ['e']]);
console.log(`---------------------------------`);

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
function findWordsWithLetter(words, letter) {
  const wordsWithLetter = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(letter)) {
      wordsWithLetter.push(words[i]);
    }
  }
  console.log(`Words containing "${letter}": ${wordsWithLetter}`);
}
findWordsWithLetter(['apple', 'banana', 'cherry', 'date'], 'a');
findWordsWithLetter(['hello', 'world', 'javascript', 'coding'], 'o');
console.log(`---------------------------------`);

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
  console.log(`Original array: ${arr}`);
  arr.push(itemToPush);
  console.log(`After push: ${arr}`);
  const poppedElement = arr.pop();
  console.log(`Popped element: ${poppedElement}`);
  console.log(`Final array: ${arr}`);
}
pushPopExample([1, 2, 3], 4);
pushPopExample(['a', 'b'], 'c');
console.log(`---------------------------------`);

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
  console.log(`Original queue: ${queue}`);
  queue.push(newPerson);
  console.log(`After adding ${newPerson}: ${queue}`);
  const removedPerson = queue.shift();
  console.log(`Removed person: ${removedPerson}`);
  console.log(`Final queue: ${queue}`);
}
manageQueue(['Alice', 'Bob'], 'Charlie');
manageQueue(['John', 'Jane', 'Mike'], 'Sarah');
console.log(`---------------------------------`);

/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  console.log(`Current todo list: ${todoList}`);
  const removedTasks = todoList.splice(startIndex, deleteCount);
  console.log(`Removed tasks: ${removedTasks}`);
  for (const task of newTasks) {
    todoList.push(task);
  }
  console.log(`Updated todo list: ${todoList}`);
}

const todoList = ['Study JS', 'Eat breakfast', 'Walk dog'];
updateTodoList(todoList, 1, 1, 'Go shopping', 'Call mom');
console.log(`---------------------------------`);

const todoList2 = ['Read book', 'Exercise', 'Cook dinner'];
updateTodoList(todoList2, 0, 2, 'Watch movie');