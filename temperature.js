const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

rl.question('Enter the temperature unit (C for Celsius or F for Fahrenheit): ', (unit) => {
  if (unit.toUpperCase() === 'C') {
    rl.question('Enter the temperature in Celsius (max 100°C): ', (celsius) => {
      const celsiusValue = parseFloat(celsius);
      if (celsiusValue > 100) {
        console.log('Error: Celsius temperature cannot exceed 100°C.');
      } else {
        const fahrenheit = celsiusToFahrenheit(celsiusValue);
        console.log(`${celsiusValue}°C is ${fahrenheit}°F.`);
      }
      rl.close();
    });
  } else if (unit.toUpperCase() === 'F') {
    rl.question('Enter the temperature in Fahrenheit (max 212°F): ', (fahrenheit) => {
      const fahrenheitValue = parseFloat(fahrenheit);
      if (fahrenheitValue > 212) {
        console.log('Error: Fahrenheit temperature cannot exceed 212°F.');
      } else {
        const celsius = fahrenheitToCelsius(fahrenheitValue);
        console.log(`${fahrenheitValue}°F is ${celsius}°C.`);
      }
      rl.close();
    });
  } else {
    console.log('Invalid input. Please enter C for Celsius or F for Fahrenheit.');
    rl.close();
  }
});
