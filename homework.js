/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript (uncommented)
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
Create an array containing the first 5 positive numbers.
*/

let fivePositiveNumber = [1, 2, 3, 4, 5];

writeLine("EXERCISE 2");
/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

let myProfile = {
  name: "Kenneth",
  surname: "Obi",
  age: 30,
  emailAddress: "kenneth@gmail.com",
};

writeLine("EXERCISE 3");

/* EXERCISE 3
Add to the previously created object a boolean value to represent whether you have or not a driving license.
*/

myProfile.hasADrivingLicence = true;
console.log(myProfile);

writeLine("EXERCISE 4");

/* EXERCISE 4
Remove from the previously created object the age property.
*/

delete myProfile.age;

console.log(myProfile);

writeLine("EXERCISE 5");

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

let mySecondProfile = {
  name: "yusuf",
  surname: "abiodun",
  emailAddress: "yusuf@gmail.com",
};
console.log(mySecondProfile);
let isEmailTheSame = myProfile.emailAddress === mySecondProfile.emailAddress;
console.log(isEmailTheSame);

writeLine("EXERCISE 6");

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

let customerShoppingCartTotal = 100;
let shippingCost = 10;
if (customerShoppingCartTotal > 50) {
  console.log(
    `your total cost is ${customerShoppingCartTotal} you are eligible for a free shipping`
  );
} else {
  console.log(
    `you are paying for the delivery and your total cost is ${
      customerShoppingCartTotal + shippingCost
    }`
  );
}

writeLine("EXERCISE 7");
/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

//  so today is a black friday
let discountForCustomerShoppingCartTotal =
  (20 / 100) * customerShoppingCartTotal;
console.log("your discount is: ", discountForCustomerShoppingCartTotal);
let customerTotalCost =
  customerShoppingCartTotal - discountForCustomerShoppingCartTotal;

if (customerTotalCost > 50) {
  console.log(
    `your total cost after discount is ${customerTotalCost} you are eligible for a free shipping`
  );
} else {
  console.log(
    `you are paying for the delivery and your total cost is now ${
      customerTotalCost + shippingCost
    }`
  );
}

writeLine("EXERCISE 8");

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

let car = {
  brand: "toyota",
  model: "camry2009",
  licensePlate: "LT-1276",
};
let car2 = {};
Object.assign(car2, car);
car2.licensePlate = "DE-5342";

let car3 = {};
Object.assign(car3, car);
car3.licensePlate = "EE-5462";

let car4 = {};
Object.assign(car4, car);
car4.licensePlate = "NG-5772";

let car5 = {};
Object.assign(car5, car);
car5.licensePlate = "FR-9999";

console.log(car);
console.log(car2);
console.log(car3);
console.log(car4);
console.log(car5);

writeLine("EXERCISE 9");

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

let carsForRent = [car, car2, car3, car4, car5];

writeLine("EXERCISE 10");

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

let lastItemRemoved = carsForRent.pop();
console.log(carsForRent);
console.log(`the removed item was`, lastItemRemoved);
let firstItemRemoved = carsForRent.shift();
console.log(carsForRent);
console.log(`the removed item was`, firstItemRemoved);
console.log(
  `this is the remaining cars after removing the first and the last items`,
  carsForRent
);

writeLine("EXERCISE 11");

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

console.log(typeof car.licensePlate);
console.log(typeof car.model);
console.log(typeof car.brand);

writeLine("EXERCISE 12");

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

let carsForSale = [
  { brand: "porche", model: "spider09", licensePlate: "SK-TTTT" },
  { brand: "KIV", model: "under23", licensePlate: "DD666" },
  { brand: "lamborgini", model: "revoke", licensePlate: "HYPER233" },
];
let totalCars = {
  carsForRent: carsForRent.length,
  carsForSale: carsForSale.length,
};
console.log(totalCars);

writeLine("EXERCISE 13");

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

console.log(carsForSale);
/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/
// let i = 0;
// while (i < 10) {
//   i++;
//   console.log(`this is the ${i} mistake`);
// }
