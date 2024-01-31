// synchronous =    Excutes line by line consecutively in a sequential manner
//                  Code that waits for an operation to complete

// asynchronous =   Allows multiple operations to be performed concurrently without waiting
//                  Doesn't block the execution flow and allows the program to continue
//                  (I/O operations, network requests, fetching data)
//                  Handled with: Callbacks, Promises, Async/Await



function func1(callback){ // by making a callback function from a async functio, we can transform it into a sync sequential manner to another function
    setTimeout(() => {console.log("Task 1");
                      callback()}, 3000); // setTimeout is asynchronous (doesn't block the execution of other operations in sequence, performing concurrently)
}

function func2(){
    console.log("Task 2"); // generally all variables and functions are synchronous (blocks the execution of other operations, performing is a sequential manner)
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);