// destructuring =  extract values from arrays and objects, then assign them to variables in a convenient way
//                  [] = to perform array destructuring    
//                  {} = to perform object destructuring
//                  5 examples

// EXAMPLE 1 (SWAP THE VALUE OF TWO VARIABLES)

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// EXAMPLE 2 (SWAP ELEMENTS IN AN ARRAY)

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// EXAMPLE 3 (ASSIGN ARRAY ELEMENTS TO VARIABLES)

const fruits = ["apple", "banana", "coconut", "orange", "lemon"];

console.log(fruits);

const [firstFruit, secondFruit, thirdFruit, ...extraFruits] = fruits;

console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);
console.log(extraFruits);

// EXAMPLE 4 (EXTRACT VALUES FROM OBJECTS)

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName1: "Patrick",
    lastName1: "Star",
    age1: 34,
}

const {firstName, lastName, age, job} = person1;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

const {firstName1, lastName1, age1, job1="Unemployed"} = person2; // we can set a default value for a key property that it's not defined in the object, but it will be replaced if there's already an value for that property

console.log(firstName1); // properties need to be the same name from the object
console.log(lastName1);
console.log(age1);
console.log(job1);

// EXAMPLE 5  (DESTRUCTURE IN FUNCTION PARAMETERS)

class Person{
    constructor(firstName, lastName, age, job){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.job = job;
    }
}

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}   

const person3 = new Person("Guilherme", "Penso", 25)

const person4 = new Person("Cristiano","Ronaldo", 37, "Football Player")

displayPerson(person3);
displayPerson(person4);