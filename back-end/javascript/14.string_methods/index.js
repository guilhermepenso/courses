// string methods = allow you to manipulate and work tiwh text (string)

let userName = "Guilherme Penso";

// .charAt() (show the char from the number from the index position)
console.log(userName.charAt(0));

// .indexOf() and .lastIndexOf() (show number of the index position from the char)
console.log(userName.indexOf("e"));
console.log(userName.lastIndexOf("e"));

// .lenght (count total index on the string)
console.log(userName.length);

// .trim() (removes whitespace before and after) **don't remove between**
userName = "      Guilherme Penso        "
console.log(userName);
userName = userName.trim();
console.log(userName);

// .toUpperCase() and .toLowerCase() (change to lower or upper case)
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());

// .repeat() (repeats amount of times given inside the parentheses)
console.log(userName.repeat(4))

// .startsWith()
let result = userName.startsWith("G");
console.log(result);

if(result){
    console.log("Your username can't begin with 'G'")
}
else{
    console.log(userName);
}

// .endsWith()
let result1 = userName.endsWith("G");
console.log(result1);

if(result1){
    console.log("Your username can't end with 'G'")
}
else{
    console.log(userName);
}

// .includes()
let result2 = userName.includes(" ");
console.log(result2);

if(result2){
    console.log("Your username can't include ' '")
}
else{
    console.log(userName);
}

// .replaceAll()
let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber);

// .padStart() fill at the start when giving first the number of total index for the string, then the string value to fill in case the string has less than the total index given before. 
let phoneNumber1 = "123-456-7890";
phoneNumber1 = phoneNumber1.padStart(15, "0");
console.log(phoneNumber1);

// .padEnd() fill at the end when giving first the number of total index for the string, then the string value to fill in case the string has less than the total index given before.
let phoneNumber2 = "123-456-7890";
phoneNumber2 = phoneNumber2.padEnd(15, "0");
console.log(phoneNumber2);