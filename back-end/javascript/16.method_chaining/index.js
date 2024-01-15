// Method Chaining = Calling one method after another
//                                    in one continuous line of code.


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");

// ----- NO METHOD CHAINING -----


mySubmit.onclick = function(){
    let username = myText.value;
    
    username = username.trim();
    letter = username.charAt(0);
    letter = letter.toUpperCase();
    
    let extraChars = username.slice(1);
    extraChars = extraChars.toLowerCase();
    
    username = letter + extraChars;
    
    console.log(username);
}


// ------  METHOD CHAINING ------

mySubmit.onclick = function(){
    let username1 = myText.value;

    username1 = username1.trim().charAt(0).toUpperCase() + username1.trim().slice(1).toLowerCase();
    console.log(username1);
}
