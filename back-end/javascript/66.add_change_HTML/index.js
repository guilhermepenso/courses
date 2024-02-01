/*
// EXAMPLE 1
// 1. Create the element
const newH1 = document.createElement("h1");

// 2. Add attributes/properties
newH1.textContent = "I like pizza";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// 3. Append element to DOM
//document.body.prepend(newH1); // append as first child
//document.body.append(newH1); // append as last child

// WITH ID

document.getElementById("box1").prepend(newH1);

const box2 = document.getElementById("box2");
//document.body.insertBefore(newH1, box2); // we can use insertBefore(newElement, previousElement) to put an element in the middle or before an element

// WITHOUT ID

const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newH1, boxes[2]);

// Remove HTML element

//document.body.removeChild(newH1);

// INSIDE TAGS

document.getElementById("box1").removeChild(newH1); // select the parent of the element, and remove the element as an argument
*/

//EXAMPLE 2
// 1. Create the element
const newListItem = document.createElement("li");

// 2. Add attributes/properties
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight= "bold";
newListItem.style.backgroundColor = "lightgreen";

// 3. Append element to DOM
//document.body.prepend(newListItem);

// WITH ID

//document.getElementById("fruits").prepend(newListItem);

const banana = document.getElementById("banana");

// document.getElementById("fruits").insertBefore(newListItem, banana);


// WITHOUT ID

const lists = document.querySelectorAll("#fruits li"); // dot for class, hashtag for id, we can say the type of the tag that is child of the main element we selected
document.getElementById("fruits").insertBefore(newListItem, lists[2]);

// Remove HTML element

document.getElementById("fruits").removeChild(newListItem);