//  cookie = a small text file stored on your computer 
//           used to remember information about the user
//           saved in name=value pairs

// console.log(navigator.cookieEnabled);

// document.cookie = "firstName=Patrick; expires=Sun, 1 January 2030 12:00 UTC; path=/";
// document.cookie = "lastName=Star; expires=Sun, 1 January 2030 12:00 UTC; path=/";
// console.log(document.cookie)

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookiesBtn = document.querySelector("#cookiesBtn");
const delCookie = document.querySelector("#delCookie");
const deleteCookieBtn = document.querySelector("#deleteCookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
})
cookiesBtn.addEventListener("click", () => {
    console.log(getCookie("firstName"));
    console.log(getCookie("lastName"))
})
deleteCookieBtn.addEventListener("click", () => {
    deleteCookie(delCookie.value)
})

// setCookie('email', 'guilhermepenso@gmail.com', 365);
// setCookie("firstName", "Guilherme", 20);
// setCookie("lastName", "Penso", 20);

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setDate(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// deleteCookie("email")
// deleteCookie("firstName")
// deleteCookie("lastName")

function deleteCookie(name){
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;  
}

// console.log(getCookie("email"));
// console.log(getCookie("firstName"));
// console.log(getCookie("lastName"));

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split('; ');
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })

    return result;
}

// console.log(document.cookie);