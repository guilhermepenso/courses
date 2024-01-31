// CALCULATOR PROGRAM

const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value); // eval() function turns string equations such as "1+3/6*9" and calculate, returning the result
    }
    catch(error){
        display.value = "Error";
    }
}