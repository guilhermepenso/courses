//  arithmetic operators =  operands (values, variables, etc.)
//                          operators (+ - * /)
//                          ex. 11 = x + 5;

// let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2;
// let extraStudents = students % 3;


// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students**= 2;
// students %= 2;

// students++;
// students--;

// console.log(`There are ${students} students`);

/* 
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/

// let result = 1 + 2 * 3 + 4 ** 2;
//              1 + 2 * 3 + 16;
//              1 + 6 + 16;
//              7 + 16;
//              23;

// let result = 12 % 5 + 8 / 2;
//              2 + 8 / 2;
//              2 + 4;
//              6;

let result = 6 / 2 ** (2 + 5);
//           6 / 2 ** 7;
//           6 / 128;
//           0,046875;
console.log(result);