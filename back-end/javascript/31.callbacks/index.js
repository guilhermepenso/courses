// callback = a function that is passed as an argument to another function

//            used to handle asynchronous operations:
//            1. Reading a file
//            2. Network request
//            3. Interacting with databases

//            "Hey, when you're done, call this next."

// EXAMPLES 1

hello(wait);    // we give the function argument we want to callback inside the function
leave(goodbye, comeback);

function hello(callback){  // we name it callback
    console.log("Hello!");
    callback(); // and call it as a function in the end of this function
}

function wait(){
    console.log("Wait!");
}

function leave(callback1, callback2){   // the name callback is a mere example, what's important is that the name given before to the function is a reference to the actual function we want to execute inside
    console.log("Leave!");
    callback1();
    callback2();
}

function goodbye(){
    console.log("Goodbye!");
}

function comeback(){
    console.log("Come Back!");
}

// EXAMPLES 2

let x = 2;
let y = 5;

sum(displayConsole, displayPage, x, y)

function sum(callback1, callback2, x, y){
    let result = x + y;
    callback1(result);
    callback2(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}