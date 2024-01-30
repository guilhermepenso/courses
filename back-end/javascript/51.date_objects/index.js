// Date objects =   Objects that contain values that represent dates and times
//                  These date objects can be changed and formatted

// Data(Year, Month, Day, Hour, Minute, Second, Ms)
const date = new Date(); // Already created data
console.log(date);

const dateCustom = new Date(2024, 0, 1, 2, 3, 4, 5); // Month start from 0, so january is 0, and december is 11
console.log(dateCustom);

const dateString = new Date("2024-01-01T12:00:00Z"); // T for time, and Z for time zone
console.log(dateString);

const dateMS = new Date(1700000000000); // take the milliseconds and add to the system state time
console.log(dateMS);

// EXTRACT INFORMATIONS FROM DATE

const year = date.getFullYear();
console.log(year);

const month = date.getMonth() + 1;
console.log(month);

const day = date.getDate();
console.log(day);

const dayOfWeek = date.getDay(); // sunday(0), monday(1), tuesday(2), wednesday(3), thursday(4), friday(5), saturday(6) 
console.log(dayOfWeek);

const hour = date.getHours();
console.log(hour);

const minute = date.getMinutes();
console.log(minute);

const second = date.getSeconds();
console.log(second);

const millisecond = date.getMilliseconds();
console.log(millisecond);

// SET DATE

const dateSet = new Date();

dateSet.setFullYear(2026);
dateSet.setMonth(7);
dateSet.setDate(2);
dateSet.setHours(7);
dateSet.setMinutes(30);
dateSet.setSeconds(57);
dateSet.setMilliseconds(910);

console.log(dateSet);

// COMPARE DATE

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1){
    console.log("Happy New Year!")
}