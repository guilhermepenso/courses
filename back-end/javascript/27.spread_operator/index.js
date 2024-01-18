// spread operator = ... allows an iterable such as an array or string to be expanded into separate elements (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];

let maximum = Math.max(numbers); // wil be NaN as the content inside the array is not expanded
console.log(maximum);

maximum = Math.max(...numbers); // returns in number because the content is separated and can be counted by the Math.max() function
console.log(maximum);

let minimum = Math.min(...numbers); 
console.log(minimum);

let username = "Guilherme Penso";
let letters = [...username]; // unpack the elements from the string, element by element and put inside an array
console.log(letters);

letters = [...letters].join("-");
console.log(letters);

let fruits = ["apple", "orange", "banana"];
console.log(fruits);

let newFruits = [...fruits]; // as the elements are unpacked, it can be used inside another array as an copy
console.log(newFruits);

let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"]; // you can join togheter 
console.log(foods);