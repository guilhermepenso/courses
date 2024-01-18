// array = a variable like structure that can hold more than 1 value

 let fruits = ["apple", "orange", "banana"];
 //positions =    0   ,    1    ,    2      

fruits[3] = "coconut";

fruits.push("lemon"); // add the element in the last position
fruits.pop(); // remove the element from the last position
fruits.unshift("mango"); // add the element ON the first position and move foward to following elements ahead
fruits.shift(); // remove the element from the first position

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]); // when there's no element on the position, it appears as undefined

let numOfFruits = fruits.length;
console.log(numOfFruits);

let index = fruits.indexOf("coconut");
console.log(index);

let index1 = fruits.indexOf("mango"); // when not found, the position returned will be -1
console.log(index1);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for(let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}

fruits.sort();

for(let fruit of fruits){
    console.log(fruit)
}

fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit)
}