//  function declaration =  define a reusable block of code that performs a specific task

function hello1(){
    console.log("Hello");
}

hello1();

//  function expressions =  a way to define functions as values or variables 

const hello2 = function(){
    console.log("Hello");
}

hello2();

setTimeout(hello1, 3000); // give a delay time based on milliseconds from the function name to be executed

setTimeout(function(){  // or create a entire function inside it with the delay separated by a comma
    console.log("Hello");
}, 3000)


const numbers = [1, 2, 3, 4, 5, 6];

// FUNCTION DECLARATION

const squares = numbers.map(square);

console.log(squares);


function square(element){
  return Math.pow(element, 2);
}

// FUNCTION EXPRESSION

const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});

console.log(cubes);

const evenNumbers = numbers.filter(function(element){
    return element % 2 === 0;
});

console.log(evenNumbers);

const oddNumbers = numbers.filter(function(element){
    return element % 2 !== 0;
});

console.log(oddNumbers);

const sum = numbers.reduce(function(accumulator, element){
    return accumulator + element;
})

console.log(sum);