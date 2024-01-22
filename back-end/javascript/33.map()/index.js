// .map() = accepts a callback and applies that function to each element of an array, then return a new array


//                          DIFFERENCE
//          .forEach()          X          .map()

//          replace array                  create a new array   

// EXAMPLES 1

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(numbers);
console.log(squares);
console.log(cubes);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

// EXAMPLES 2

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];

const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(students);
console.log(studentsUpper);
console.log(studentsLower);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}

// EXAMPLES 3

const dates = ["2024-01-10", "2025-02-20", "2026-03-30"];

formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}