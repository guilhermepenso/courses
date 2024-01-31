// Error =  An Object that is created to represent a problem that occurs
//          Occur often with user input or establishing a connection

// try { } = Enclose code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//                  ex. close files, close connections, release resources


try{ // USE IF THERE'S ANY CODE THAT IS DANGEROUS OR PROBABLY CAUSE ERROR
    // console.lag("Hello"); // any type of error interrupts the rest of the execution
    console.log("Hello");
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
    
}catch(error){ //It doesn't interrupt the program
    console.error(error);
}
finally{
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always execute");
}
console.log("You have reached the end");


// DANGEROUS EXAMPLE
try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));
    
    if(divisor == 0){
        throw new Error("You can't divide by zero");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    console.log(result);
}catch(error){
    console.error(error);
}

console.log("You have reached the end of DANGEROUS EXAMPLE");