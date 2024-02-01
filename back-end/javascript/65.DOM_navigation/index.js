// DOM Navigation = The process of navigating through the structure of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// --- .firstElementChild ---

const elementFC = document.getElementById("desserts");
const firstElementChild = elementFC.firstElementChild;
firstElementChild.style.backgroundColor = "red";

const ulElementsFC = document.querySelectorAll("ul"); // using querySelectorAll to select all ul elements

ulElementsFC.forEach(ulElement => { // iterate all elements with forEach method
    const firstChild = ulElement.firstElementChild; // save only the first child element of each ul element
    firstChild.style.backgroundColor = "yellow";
});

// --- .lastElementChild ---

const elementLC = document.getElementById("fruits");
const lastElementChild = elementLC.lastElementChild;
lastElementChild.style.backgroundColor = "orange";

const ulElementsLC = document.querySelectorAll("ul");

ulElementsLC.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "orange";
});

// --- .nextElementSibling ---

const elementNS = document.getElementById("carrots"); // selecting an element that has a sibling, or a sequence
const nextSibling = elementNS.nextElementSibling; // the sibling is the next element of the same type of the element
nextSibling.style.backgroundColor = "green";

// --- .previousElementSibling ---

const elementPS = document.getElementById("banana");
const prevSibling = elementPS.previousElementSibling;
prevSibling.style.backgroundColor = "lightblue"

// --- .parentElement ---

const element = document.getElementById("pie");
const parent = element.parentElement;
parent.style.backgroundColor = "purple";

// --- .children ---

const elementChild = document.getElementById("fruits");
const child = elementChild.children; 

console.log(child); // don't have a built in method

Array.from(child).forEach(child => {
    child.style.backgroundColor = "grey";
});

child[2].style.backgroundColor = "blue";