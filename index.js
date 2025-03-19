// Conversion functions
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

// Fahrenheit and Celsius temperatures
const tempFahrenheitArray = [
    32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76
];

const tempCelsiusArray = [
    25, 18, 15, 28, 20, 23, 30, 22, 26, 24, 21, 27, 19, 17, 29
];

// ✅ Convert Fahrenheit to Celsius for total in Celsius
const allTempsInCelsius = [
    ...tempCelsiusArray,
    ...tempFahrenheitArray.map(fahrenheitToCelsius)  // Convert F to C
];

// ✅ Convert Celsius to Fahrenheit for total in Fahrenheit
const allTempsInFahrenheit = [
    ...tempFahrenheitArray,
    ...tempCelsiusArray.map(celsiusToFahrenheit)  // Convert C to F
];

// ✅ Sum before rounding
let tot_temperature_in_fahrenheit = allTempsInFahrenheit.reduce((total, temp) => total + temp, 0);
let tot_temperature_in_celsius = allTempsInCelsius.reduce((total, temp) => total + temp, 0);

// ✅ Round totals
tot_temperature_in_fahrenheit = Math.round(tot_temperature_in_fahrenheit * 100) / 100;
tot_temperature_in_celsius = Math.round(tot_temperature_in_celsius * 100) / 100;

// ✅ Calculate averages
const avg_temperature_in_fahrenheit = Math.round(
    (tot_temperature_in_fahrenheit / allTempsInFahrenheit.length) * 100
) / 100;

const avg_temperature_in_celsius = Math.round(
    (tot_temperature_in_celsius / allTempsInCelsius.length) * 100
) / 100;

// ✅ Display results
console.log("\nTotal Temperature in Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Total Temperature in Celsius:", tot_temperature_in_celsius);
console.log("Average Temperature in Fahrenheit:", avg_temperature_in_fahrenheit);
console.log("Average Temperature in Celsius:", avg_temperature_in_celsius);
