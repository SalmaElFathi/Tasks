const kelvin=293;
// i declared the variable kelvin as a constant equal to 293
const celsius=kelvin-273;
// i declared the variable celius as a constant equal to the value of kelvin-273
let Fahrenheit = Math.floor(celsius * (9/5) + 32);
// calculate the value of fahrenheit and store it to a variable fahrenheit 
// round the down the Fahrenheit temperature
console.log("the temperature is "+Fahrenheit+" degrees Fahrenheit");
//the 0 kelvin is -460 degrees Fahrenheit
let Newton = Math.floor(celsius * (33/100));
console.log("the temperature is "+Newton+" degrees Newton");