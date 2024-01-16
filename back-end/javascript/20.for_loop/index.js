// for loop = repeat some code a LIMITED amount of times

for(let i = 0; i <= 2; i++){
    console.log("Hello");
}

console.log("---------------");

for(let i = 1; i <= 10; i++){
    console.log(i);
}

console.log("---------------");

for(let i = 2; i <= 10; i+=2){
    console.log(i)
}

console.log("---------------");

for(let i = 10; i > 0; i--){
    console.log(i);
}
console.log("HAPPY NEW YEAR!");

console.log("---------------");

for(let i = 10; i > 0; i-=2){
    console.log(i);
}

console.log("---------------");

for(let i = 1; i <= 20; i++){
    if(i == 13){
        continue; // skip only the if statement
    }
    else{
        console.log(i);
    }
}

console.log("---------------");

for(let i = 1; i <= 20; i++){
    if(i == 13){
        break; // get out of the for loop
    }
    else{
        console.log(i);
    }
}
