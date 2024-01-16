// function =   A section of reusable code.
//              Declare code once, use it whenever you want.
//              Call the function to execute that code.

function happyBirthday(username, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} year old`);
}

happyBirthday("Guilherme", 25);
happyBirthday("Spongebob", 30);
happyBirthday("Patrick", 37);

// EXAMPLES USING RETURN
//ADD
function add(x, y){
    let result = x + y;
    return result;
}
let answer = add(2, 3);
console.log(answer);
// OR 
function add1(x, y){
    return x + y;
}
console.log(add1(10, 5));
//SUB
function subtract(x, y){
    return x - y;
}
console.log(subtract(10, 11));
//MUL
function multiply(x, y){
    return x * y;
}
console.log(multiply(2, 3));
//DIV
function divide(x, y){
    return x / y;
}
console.log(divide(2, 3));

//IS EVEN
function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(11));
// OR
function isEven1(number){
    return number % 2 === 0 ? true : false;
}
console.log(isEven1(15));

function isValidEmail(email){
    if(email.includes(`@`)){
        return true;
    }
    else{
        return false;
    }
}
console.log(isValidEmail(`guilherme@fake.com`));
console.log(isValidEmail(`ElonMusk.com`));
// OR
function isValidEmail1(email){
    return email.includes(`@`) ? true : false;
}
console.log(isValidEmail(`zuckerborg@meta.com`));
console.log(isValidEmail(`jeffbezo.com`));