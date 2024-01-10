// const = a variable that can't be changed

let radius;
let circumference;

// let pi = 3.14159;
// pi = 420.69; // can change at any point, not safe at some cases

const PI = 3.14159; // it's a good practice to use uppercase JUST in numbers and booleans when using const for the variable name
// PI = 420.69; // won't change and dev tools will show a error when trying to change

/*
radius = window.prompt('Enter the radius of a circle');
radius = Number(radius);

circumference = 2 * pi * radius;

console.log(circumference);
*/

document.getElementById("submit").onclick = function(){
    radius = document.getElementById("radius").value;
    radius = Number(radius);

    circumference = 2 * PI * radius;

    document.getElementById("result").textContent = `The circunference of the radius ${radius} is: ${circumference + "cm"}`;
}