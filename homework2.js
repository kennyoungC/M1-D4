/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/
let writeLine = function (title) {
  console.log(`\n>-----------------< ${title} >-----------------<`);
};
writeLine("EXERCISE 1");

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

let array = [1, 2, 3, 4, 5, 6, 7];
array.reverse();
console.log(array);

writeLine("EXERCISE 2");

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

console.log(Math.max(...array));

writeLine("EXERCISE 3");
/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

console.log(Math.min(...array));

writeLine("EXERCISE 4");

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/
let arr = [3, 6, 7, 9, 2, "window", "ball"];
let evenNumbers = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0 && typeof arr[i] === "number") {
    evenNumbers.push(arr[i]);
    console.log(evenNumbers);
  }
}

writeLine("EXERCISE 5");

/* EXERCISE 5
Write the code to delete even entries from an array.
*/

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0 && typeof arr[i] === "number") {
    arr.splice(i, 1);
    i--;

    console.log(arr);
  }
}
writeLine("EXERCISE 6");

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/
let str = "house";
let noVowels = str.replace(/[aeiou]/gi, "");
// for (let i = 0; i < str.length; i++)
// if (
//   str[i] === "a" ||
//   str[i] === "e" ||
//   str[i] === "i" ||
//   str[i] === "o" ||
//   str[i] === "u"
// )
console.log(noVowels);

writeLine("EXERCISE 7");

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

let numericValue = [4, 5, 6, 7, 3, 2];
console.log(numericValue);
for (let i = 0; i < numericValue.length; i++) console.log(numericValue[i] + 1);

writeLine("EXERCISE 8");

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

let str1 = ["strive", "is", "great"];
for (let i = 0; i < str1.length; i++) str1[i] = str1[i].length;
console.log(str1);

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/
