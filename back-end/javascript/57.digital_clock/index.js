// DIGITAL CLOCK PROGRAM

function updateClock(){
    
    const clock = document.getElementById('clock');

    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; 
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);

    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;

    clock.textContent = timeString;
}

// INSTEAD OF
// setTimeout(updateClock, 1000);

//USE
setInterval(updateClock, 1000);