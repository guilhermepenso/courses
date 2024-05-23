//  cookie = a small text file stored on your computer 
//           used to remember information about the user
//           saved in name=value pairs

// console.log(navigator.cookieEnabled);

// document.cookie = "firstName=Patrick; expires=Sun, 1 January 2000 12:00:00 UTC; path=/ ";
// document.cookie = "lastName=Star; expires=Sun, 1 January 2000 12:00:00 UTC; path=/ ";

// console.log(document.cookie);

// setCookie('email', 'Sponge@gmail.com', 365);

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/ `;
};

deleteCookie('firstName');
deleteCookie('lastName');
deleteCookie('email');

function deleteCookie(name){
    setCookie(name, null, null)
};

console.log(document.cookie);