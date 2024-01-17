// variable scope = where a variable is recognized and accessible (local vs global)

//let x = 1;
//let x = 2;

function function1(){
    let x = 1; // LOCAL
    console.log(x);
}

function function2(){
    let x = 2; // LOCAL
    console.log(x);
}

function1();
function2();

function function3(){
    let x = 3;
    console.log(y); // function3 has no idea where is variable y, because y is a local variable inside function 4
}

function function4(){
    let y = 4;
    console.log(x); // function4 has no idea where is variable x, because x is a local variable inside function 3
}

// function3();
// function4();

let x = 5; // GLOBAL

function function5(){
    console.log(x);
}

function function6(){
    let x = 6; // IF THERE'S A GLOBAL AND LOCAL VARIABLE WITH THE SAME NAME, IT WILL SHOW LOCAL INSIDE THE FUNCTION
    console.log(x);
}
    
function5();
function6();