// element selectors =  Methods used to target and manipulate HTML elements
//                      They allow you to select one or multiple HTML elements from the DOM (Document Object Model)

// 1. document.getElementById()         // ELEMENT OR NULL

const myHeading = document.getElementById('my-heading'); // return the element, or in case of misspell on name, returns null
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

// 2. document.getElementClassName()    // HTML COLLECTION

const fruits = document.getElementsByClassName("fruits");
console.log(fruits);

fruits[0].style.backgroundColor = "orange";

for(let fruit of fruits){ // we can iterate, as the class name return an array
    fruit.style.backgroundColor = "yellow";
}
// fruits.forEach(); // HTML collection don't have a forEach() method

Array.from(fruits).forEach(fruit => { // we can use Array.from() to use forEach()
    fruit.style.backgroundColor = "orange";
});

// 3. document.getElementsByTagName()   // HTML COLLECTION

const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements);

h4Elements[0].style.backgroundColor = "purple";

for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "lightblue";
}

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "purple";
});

const liElements = document.getElementsByTagName("li");
console.log(liElements);

for(let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen";
}

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "grey";
});

// 4. document.querySelector()          // FIRST ELEMENT OR NULL

const element = document.querySelector(".fruits");
console.log(element);

element.style.backgroundColor = "green"; // can select a class or tag name and takes the first element it finds, or null if misspelled

// 5. document.querySelectorAll()       // NODELIST

const foods = document.querySelectorAll("li");// nodelist are static, so they don't update automatically on the DOM
console.log(foods);

foods[1].style.backgroundColor = "blue";

foods.forEach(food => {
    food.style.backgroundColor = "lightblue";
});