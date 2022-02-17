/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/
console.log("\n--------------< EXERCISE 1 >--------------");

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

let array = [1, 2, 3, 4, 5, 6, 7];
// array.reverse();
// console.log(array);

console.log("\n--------------< EXERCISE 2 >--------------");

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

// console.log(Math.max(...array));

console.log("\n--------------< EXERCISE 3 >--------------");
/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

// console.log(Math.min(...array));

console.log("\n--------------< EXERCISE 4 >--------------");

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

for (i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    console.log(array[i]);
  } else {
  }
  continue;
}

// array.splice(0, array.length);
// console.log(array);
/* EXERCISE 5
Write the code to delete even entries from an array.
*/
let evenNumber = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
  }
  evenNumber.push(array[i]);
  console.log(evenNumber);
}
/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/