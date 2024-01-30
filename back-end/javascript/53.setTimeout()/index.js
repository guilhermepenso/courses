// setTimeout() =   function in JavaScript that allows you to schedule the execution of a function after an amount of time (milliseconds)
//                  Times are approximate (varies based on the workload of the JavaScript runtime env.)

// setTimeout(callback, delay);

function sayHello(){
    console.log("Hello");
}

setTimeout(sayHello, 3000)

setTimeout(function(){console.log("World");}, 3000)

setTimeout(()=> console.log("!"), 3000)

// clearTimeout(timeoutId) = can cancel a timeout before it triggers

const timeoutIdTest = setTimeout(()=> console.log("This is my first line of code"), 3000);

clearTimeout(timeoutIdTest);

let timeoutId;

function startTimer(){
    timeoutId = setTimeout(()=> window.alert("Hello!"), 3000);
    console.log("STARTED");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
}