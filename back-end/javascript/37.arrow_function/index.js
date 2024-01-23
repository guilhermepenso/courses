//  arrow functions =   A concise way to write function expressions
//                      Good for simple functions that you use only once 
//                      (parameters) => some code

// FUNCTION DECLARATION

function hello(){
    console.log("hello");
}

hello();

// FUNCTION EXPRESSION

const world = function (){
    console.log("world");
}

world();

// ARROW FUNCTION

// EXAMPLE 1

const exclamation = () => console.log("!");

exclamation();

const helloName = (name, age) => { // more than one line of code need to be inside {}
    console.log(`Hello ${name}!`);
    console.log(`You are ${age} years old`);
}

helloName("Guilherme", 25);

// EXAMPLE 2

setTimeout(hello, 3000);

function hello(){
    console.log(`Hello`);
}
// OR
setTimeout(function(){
    console.log(`Hello`);
}, 3000);
// OR
setTimeout( () => console.log(`Hello`), 3000);

// EXAMPLE 3

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const isOdd = numbers.filter((element) => element % 2 !== 0); // return not necessary in a one line code inside a arrow function
const isEven = numbers.filter((element) => element % 2 === 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);


console.log(squares);
console.log(cubes);
console.log(isOdd);
console.log(isEven);
console.log(total);