// variable = A container that stores a value.
//            behaves as if it were the value it contains.

// 1. declaration    let x;
// 2. assignment     x = 100;

// let x = 123; // declaratio & assignment
// console.log(x);

// NUMBERS

/*
let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(typeof age);
console.log(age);
console.log(price);
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is: ${gpa}`);
*/

// STRING
/*
let firstName = "Guilherme";
let favoriteFood = "Coxinha";
let email = "Guilherme123@gmail.com";

console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favoriteFood}`);
console.log(`Your email is ${email}`);
*/

//BOOLEANS
/*
let online = false;
let forSale = true;
let isStudent = true;

console.log(typeof online);
console.log(`Guilherme is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);
*/

let fullName = "Guilherme Penso";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Your are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;