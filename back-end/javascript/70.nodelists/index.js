// NodeLists = Static collection of HTML elements by (id, class, element)
//              Can be created by using querySelectorAll()
//              Similar to an array, but no (map, filter, reduce)
//              NodeList won't update to automatically reflect changes

// let buttons = document.querySelectorAll("button"); // element
// let buttons = document.querySelectorAll("#myButton"); // id
let buttons = document.querySelectorAll(".myButtons"); // class

// console.log(buttons);

// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent += " :D";
// });

// //CLICK EVENT LISTENER

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         if (event.target.style.backgroundColor === "tomato"){
//             event.target.style.backgroundColor = "green";
//         } else (
//             event.target.style.backgroundColor = "tomato"
//         );
        
//     });
// });

// // MOUSEOVER + MOUSEOUT event listener

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "orange";
//     });
// });
// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "green";
//     });
// });    

// // ADD AN ELEMENT

// const newButton = document.createElement("button"); // STEP 1

// newButton.textContent = "Button 5"; // STEP 2
// newButton.classList = "myButtons";
// document.body.appendChild(newButton);

// console.log(buttons);

// buttons  = document.querySelectorAll(".myButtons");

// console.log(buttons);

// REMOVE AN ELEMENT

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
})

