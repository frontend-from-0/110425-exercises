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
    if (numbers[i] > maxNumber) {
  maxNumber = numbers[i];
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
  let sum=0;
   while (start<=end){
    sum=sum+start;
    start++;
   }
    console.log(`The sum all integers from start to end is: ${sum}`);
 }
  sumRange(1,5);
  sumRange(3,7);
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
  const newArr =[];
  for (let i=0; i<numbers.length; i++){
    if (numbers[i]>=0){
      newArr.push(numbers[i]);
    }
  }
  console.log(`Filtered numbers: ${newArr}`);
 }
 filterNegative([4, -5, 6, -3, 0, -8, 2]);
 filterNegative([1, 2, 3, -3, -0, 9, -2]);
 filterNegative([-1, -2, -3]);
 console.log(`---------------------------------`);
/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/
 function doubleValues(numbers){
  const newArray =[];
  for (const num of numbers){
    newArray.push(num*2);
  }
  console.log(`Doubled values: ${newArray}`);
 } 
 doubleValues([1,2,3,4,5]);
 doubleValues([10,0,-5,3]);
 console.log(`---------------------------------`);
/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
function printCharacters(str) {
  for (const letter of str) {
    console.log(letter);
  }
}
printCharacters('Hello');
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
console.log(`---------------------------------`);
/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/
 function printObjectKeys(obj){
  for(const key in obj){
    console.log(key);
  }
 }
 printObjectKeys({ name: "Alice", age: 25 });
 printObjectKeys({a:1, b:2, c:3, d:4});
 console.log(`---------------------------------`);
/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/
 function sumWithDoWhile(numbers){
  let sum=0;
  let index =0;
  do{
    sum +=numbers[index];
    index++;  
  } while (index<numbers.length); 
    console.log(`The sum of arrays is: ${sum}`);
 }
 sumWithDoWhile([1,5,6,2,3]);
 sumWithDoWhile([10,20,30]);
 console.log(`---------------------------------`);
/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/
 function removeDuplicates(arr){
  const newArr=[];
  for (let i=0; i<arr.length; i++){
    if (!newArr.includes(arr[i])){
      newArr.push(arr[i]);
    }
  }
  console.log(`Array without duplicates: ${newArr}`);
 }
 removeDuplicates([1,2,2,5,6,6,4,1,3]);
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
  let result=1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(`Factorial of ${n} is: ${result}`);
 }
  factorial(4);
  factorial(5); 
  factorial(6);
  console.log(`---------------------------------`);
/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/
 function reverseWords(sentence){
  const words = sentence.split(' ');
  const reversedWords = words.reverse();
  const reversedSentence = reversedWords.join(' ');
  console.log(`Reversed sentence: ${reversedSentence}`);
 }
reverseWords('Hello. My name is Ayjan.');
reverseWords('JavaScript is fun');
console.log(`---------------------------------`);
/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
  function filterLongWords(words, minLength){
    const longWords = [];
    for( let i=0; i<words.length; i++){
      if (words[i].length >= minLength){
        longWords.push(words[i]);
      }
    }
    console.log(longWords); 
  }
  filterLongWords(['apple', 'banana', 'kiwi', 'pear', 'grapefruit'], 6);
  filterLongWords(['short', 'tiny', 'small', 'big', 'large'], 5);
  console.log(`---------------------------------`);
/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
 function logElementsWithIndex(arr){
  for (let i=0; i<arr.length; i++){
    console.log(`Index: ${i}, Value: ${arr[i]}`);
  }
 }
logElementsWithIndex(['a', 'b', 'c']);
logElementsWithIndex([10, 20, 30, 40]);
console.log(`---------------------------------`);
/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
function findMin(numbers){
  let minNumber = numbers[0];
  for(let i=0; i<numbers.length; i++){
    if (numbers[i]<minNumber){
      minNumber = numbers[i];
    } 
  }
  console.log(`The smallest number is: ${minNumber}`);
}
findMin([3,5,1,9,0,-2]);
findMin([10,20,30,5,15]);
console.log(`---------------------------------`);

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/
 function countOccurrences(arr, word){
  let count=0;
  for (let i=0; i<arr.length; i++){
    if (arr[i]===word){
      count++;
    }
  }
  console.log(`The word ${word} appears ${count} times.`);  
 }
  countOccurrences(['apple', 'banana', 'apple', 'orange', 'banana', 'apple'], 'apple');
  countOccurrences(['cat', 'dog', 'cat', 'mouse'], 'dog');  
  console.log(`---------------------------------`);

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
 function removeFalsyValues(arr){
  const truthyValues =[];
  for (let i=0; i<arr.length; i++){
    if (arr[i]){
      truthyValues.push(arr[i]);
    }
  }
  console.log(`A new array without falsy values: ${truthyValues}`);
 }
  removeFalsyValues([0, 1, false, 2, '', 3, null, undefined, NaN, 'hello']);
  removeFalsyValues([false, null, '', 0]);
  console.log(`---------------------------------`);

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
 function sumDigits(str){
  let sum = 0;
  for(let i=0; i<str.length; i++){
    const char = str[i];
    const digit = parseInt(char, 10);
    if (!isNaN(digit)){
      sum += digit;
    }

  }
  console.log(`The sum of all digits in the string is: ${sum}`);
  
 }
  sumDigits('abc123');
  sumDigits('4 apples and 5 bananas');
  sumDigits('no digits here');
  console.log(`---------------------------------`);
/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
function averageArray(numbers){
  let sum=0;
  for (let i=0; i<numbers.length; i++){
    sum += numbers[i];
  }
  const average = sum / numbers.length;
  console.log(`The average is: ${average}`);
}
averageArray([1, 2, 3, 4, 5, 6]);
averageArray([10, 20, 30]);
console.log(`---------------------------------`);
/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
function flattenArray(twoDArray){
  const flattenedArr = [];
  for (let i=0; i<twoDArray.length; i++){
    for(let j=0; j<twoDArray[i].length; j++){
      flattenedArr.push(twoDArray[i][j]);
    }
  }
  console.log(`Flattened array: ${flattenedArr}`);
}
flattenArray([[1,2],[3,4],[5,6]]);
flattenArray([['a','b'],['c','d']]);
console.log(`---------------------------------`);
/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
 function findWordsWithLetter(words, letter){
  const filteredArray=[];
  for (let i=0; i<words.length; i++){
    if (words[i].includes(letter)){
      filteredArray.push(words[i]);
    }
  }
  console.log(`Words containing the letter "${letter}": ${filteredArray}`);
 }
 findWordsWithLetter(['apple', 'banana', 'kiwi', 'pear', 'grapefruit'], 'a');
 findWordsWithLetter(['cat', 'dog', 'elephant', 'tiger'], 'e');
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
 function pushPopExample(arr, itemToPush){
   const pushedArray = [...arr];
   pushedArray.push(itemToPush);
   console.log(`Array after push: ${pushedArray}`);
   const poppedItem = pushedArray.pop();
   console.log(`Popped item: ${poppedItem}`);
   console.log(`Final array after pop: ${pushedArray}`);
 }
 pushPopExample([1,2,3], 4);
 pushPopExample(['a','b','c'], 'd');
 console.log(`---------------------------------`);

 function pushPopExample(arr, itemToPush) {
  console.log('Before pushing:', arr);
  arr.push(itemToPush);
  console.log('Array after push:', arr);
  arr.pop();
  console.log('Popped item:', arr);
}

let arr = [1, 2, 3];
pushPopExample(arr, 4);
console.log(`---------------------------------`);
/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/ function manageQueue(queue, newPerson){
  console.log('Before pushing:', queue);
  queue.push(newPerson);
  console.log(`updated queue: ${queue}`);
  const removedPerson = queue.shift();
  console.log(`Removed person: ${removedPerson}`);
  console.log(`Final queue: ${queue}`); 
}
manageQueue(['Alice', 'Bob', 'Charlie'], 'David');
manageQueue(['John', 'Jane'], 'Doe');
console.log(`---------------------------------`);

/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
function updateTodoList(todoList, startIndex, deleteCount, ...newTasks){
  console.log(`Current list of tasks: ${todoList}`);
  todoList.splice(startIndex, deleteCount);
  todoList.push(...newTasks);
  console.log(`Updated list of tasks: ${todoList}`)
}
updateTodoList(['Study JS', 'Eat breakfast', 'Walk dog'], 1, 1, 'Read book', 'Exercise');
updateTodoList(['Task1', 'Task2', 'Task3'], 0, 2, 'NewTask1');
console.log(`---------------------------------`);
//
