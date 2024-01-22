//  forEach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element

//  array.forEach(callback) = creates something similar to a for loop, increasing the index until the end of the array

//  element(content from the index position), index(position inside the array), array(name of the array) are provided from the array

// EXAMPLES 1

let numbers = [1, 2, 3, 4, 5];

//numbers.forEach(double);
//numbers.forEach(triple);
//numbers.forEach(square);
numbers.forEach(cube);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2; //would be the same as numbers[i] = element(items inside the array) * 2, repeating similarly as a for loop
}

function triple(element, index, array){
    array[index] = element * 3;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}

function display(element){
    console.log(element);
}

// EXAMPLES 2

let fruits = ["apple", "orange", "banana", "coconut"];

//fruits.forEach(upperCase);
//fruits.forEach(lowerCase);
fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}