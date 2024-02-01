// DOM =    DOCUMENT OBJECT MODEL
//          Object{} that represents the page you see in the web browser and provides you with an API to interact with it.
//          Web browser constructs the DOM when it loads an HTML document, and structures all the elements in a tree-like represetation.
//          JavaScript can access the DOM to dynamically change the content, structure, and style of an web page.

// document.getElementById(""); // it contains nested objects and other methods inside the DOM
console.log(document);
console.dir(document);

document.title = "Another Website"; // we can access the DOM and change it's data

document.body.style.backgroundColor = "hsl(0, 0%, 15%)"; // can be used for dark mode

const username = "Guilherme Penso";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? `Guest` : username;

