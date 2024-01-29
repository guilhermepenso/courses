// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
fruits.sort();
console.log(fruits);

let numbers = [1, 2, 9, 3, 10, 8, 12, 4, 42, 7, 5, 6, 25, 92, 108]; // it just see a string, so 1 and 10 comes before 2
numbers.sort();
console.log(numbers);

let crescentOrder = [1, 2, 9, 3, 10, 8, 4, 7, 5, 6,];
crescentOrder.sort((a, b) => a - b); // crescent order // we use the minus comparison from previous and next element to sort correctly the numbers above one digit
console.log(crescentOrder);

let decrescentOrder = [1, 2, 9, 3, 10, 8, 4, 7, 5, 6,];
decrescentOrder.sort((a, b) => b - a); // decrescent order
console.log(decrescentOrder);

const people = [{name: "Spongebob", age: 30, gpa: 3.0}, 
                {name: "Patrick", age: 37, gpa: 1.5}, 
                {name: "Squidward", age: 51, gpa: 2.5}, 
                {name: "Sandy", age: 27, gpa: 4.0}]

// people.sort((a, b) => a.age - b.age); //

// REVERSE ORDER 
// people.sort((a, b) => b.age - a.age);
// console.log(people);

// people.sort((a, b) => a.name - b.name); // when you need to sort a string we need a different method
// console.log(people);

people.sort((a, b) => a.name.localeCompare(b.name)); // as a string sort inside a object, we'll need to use .localeCompare()
console.log(people);