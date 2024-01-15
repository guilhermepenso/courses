// string slicing = creating a substring from a portion of another string
//                                               string.slice(start, end)

const fullName = "Guilherme Penso";

let firstName = fullName.slice(0, 9);
let lastName = fullName.slice(10);

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);

let firstName1 = fullName.slice(0, fullName.indexOf(" "));
let lastName1 = fullName.slice(fullName.indexOf(" ") + 1)

console.log(firstName1);
console.log(lastName1);

const email = "guilhermepenso@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);
