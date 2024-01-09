//  type conversion = change the datatype of a value to another
//                    (strings, numbers, booleans)

/*
let age = window.prompt("How old are you?");
age = Number(age);
age += 1;

console.log(age, typeof age);
*/

/*
let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // changes to number, but doesn't have a value, called NaN
console.log(y, typeof y); // don't change cuz it's already a string
console.log(z, typeof z); // changes to boolean as true
*/

/*
let x = "0";
let y = "0";
let z = "0";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // changes to number, but doesn't have a value, called NaN
console.log(y, typeof y); // don't change cuz it's already a string
console.log(z, typeof z); // changes to boolean as true
*/

/*
let x = "";
let y = "";
let z = "";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // changes to number as 0
console.log(y, typeof y); // don't change cuz it's already a string
console.log(z, typeof z); // changes to boolean as false
*/


let x;
let y;
let z;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // changes to number, but doesn't have a value, called NaN
console.log(y, typeof y); // turns into undefined string
console.log(z, typeof z); // changes to boolean as false