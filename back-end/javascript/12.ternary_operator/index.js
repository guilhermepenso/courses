// ternary operator = a shortcut to if{} and else{} statements
//                                  helps to assign a variable based on a condition
//                                  condition ? codeIfTrue : codeIfFalse;

let age = 21;

let message = age >= 18 ? "You're an adult" : "You're a minor"
console.log(message);

// Instead of:
 
let age1 = 13;
let message1;

if(age1 >= 18){
    message1 = "You're an adult";
}
else{
    message1 = "You're a minor";
}
console.log(message1);

let time = 19;

let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting);

let isStudent = false;

let message2 = isStudent ? "You are a student" : "You are NOT a student";
console.log(message2);

let purchaseAmount = 113;
let discount = purchaseAmount > 100 ? 10 : 0;
console.log(`You're gonna pay $${purchaseAmount - purchaseAmount * (discount / 100)}`)