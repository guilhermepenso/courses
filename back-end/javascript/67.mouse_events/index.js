// eventListener =  Listen for specific events to create interactive web pages.
//                  events: click, mouseover, mouseout
//                  .addEventListener(event, callback / anounymous function / arrow function);

const myBox = document.getElementById("myBox");

/* FUNCTION
function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 🤕"
}

myBox.addEventListener("click", changeColor); // event don't need to be passed as an argumnt, because the web browser already do it
*/

/* ARROW FUNCTION

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato"; // event.target is reffering to the element we're adding the listener to
    event.target.textContent = "OUCH! 🤕";
});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it 😲";
});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "CLICK ME! 😀";
});
*/
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🤕";
});

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 😲";
});

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "CLICK ME! 😀";
});