//  .filter() = creates a new array by filtering out elements

// EXAMPLES 1

let numbers = [1, 2, 3, 4, 5, 6, 7];

let evenNumbers = numbers.filter(isEven);
let oddNumbers = numbers.filter(isOdd);

console.log(evenNumbers);
console.log(oddNumbers);

function isEven(element){
    return element % 2 === 0; // filter by boolean value
}

function isOdd(element){
    return element % 2 !== 0; 
}

// EXAMPLES 2

const ages = [16, 17, 18, 18, 20, 60];

let Adults = ages.filter(isAdult);
let Underage = ages.filter(isUnderage);

console.log(Adults);
console.log(Underage);

function isAdult(element){
    return element >= 18;
}

function isUnderage(element){
    return element < 18;
}

// EXAMPLES 3

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

let shortWords = words.filter(getShortWords);
let longWords = words.filter(getLongWords);

console.log(shortWords);
console.log(longWords);

function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
}