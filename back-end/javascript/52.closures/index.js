// closure =    A function defined inside of another function, the inner function has access to the variables and scope of the outer function.
//              Allow for private variables and state maintence
//              Used frequently in JS frameworks: React, Vue, Angular


// EXAMPLE 1

function outer(){

    let message = "Hello";

    function inner(){
        console.log(message); // Any variable inside of the inner function is considered private
    }

    inner();
}

message = "Goodbye"; //  doesn't change, because each one has different scope

outer();

console.log(message);

// EXAMPLE 2

// let count = 0; // using outside the function, turns the variable non secure
// count = 1000000; // it can also be changed by mistake

function incrementDoneWrong(){

    let count = 0;
    count++;
    console.log(`Count increased to ${count}`);
}

incrementDoneWrong();
incrementDoneWrong(); // each time we call it, it reset the counter, as the first line declare as 0

function createCounter(){

    let count = 0;

    function increment(){ // by using a closure, we can mantain the counter state
        count++;
        console.log(`Count increased to ${count}`)
    }

    function getCount(){
        return count;
    }

    return {increment, getCount} // we're enabling access from outside to the result inside the inner function, we can do {increment:increment} or the shorthand {increment}
}

const counter = createCounter(); // we declare the function createCounter to a variable
counter.increment(); // and we use it the access the .increment() method
counter.increment();
counter.increment();
counter.increment();
counter.increment();

// counter.count = 0;
// console.log(count) // wil be undefined

console.log(counter.count); // wil be undefined as it's hidden inside the inner function

console.log(`The current count is ${counter.getCount()}`);

// EXAMPLE 3


let score = 0;

function increaseScore(points){
    score += points;
    console.log(`+${points}pts`);
}

function decreaseScore(points){
    score -= points;
    console.log(`-${points}pts`);
}

function getScore(){
    return score;
}

score = 10000000000000; // not safe, as it can be accessed easily

increaseScore(5);
increaseScore(6);
decreaseScore(3);

console.log(`The final score is ${getScore()}`);

function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore}
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);

console.log(`The final score is ${game.getScore()}`);