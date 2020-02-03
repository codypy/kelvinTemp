// The temp in kelvin
const kelvin = 293;
// Converts the temp in kelvin to celsius
const celsius = kelvin - 273;
// Converts celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Converts fahrenheit to a rounded down integer
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)