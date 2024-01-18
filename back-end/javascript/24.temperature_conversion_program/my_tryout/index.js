// TEMPERATURE CONVERSION PROGRAM

const textBox = document.getElementById("textBox");
const celsiusFahrenheit = document.getElementById("celsiusFahrenheit");
const fahrenheitCelsius = document.getElementById("fahrenheitCelsius");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

mySubmit.onclick = function(){
    degree = textBox.value
    degree = Number(degree);
    if(celsiusFahrenheit.checked){
        converted = (degree * 9/5) + 32;
        converted = `${converted.toFixed(1)}°F`;
    }
    else if(fahrenheitCelsius.checked){
        converted = (degree - 32) * 5/9;
        converted = `${converted.toFixed(1)}°C`;
    }
    result.textContent = converted
}   