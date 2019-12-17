// Udemy - ES6 Javascript Developer's Guide

// Eaxample-1:
console.log('--- Example-1: ---');
// "forEach" Helper
var colors = ['red', 'blue', 'green'];

// Old-school way:
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

console.log('-----');

// ES6-way:
colors.forEach(function(color) {
  console.log(color);
});
// =================================================
// Eaxample-2.1:
console.log('--- Example-2.1: ---');
// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Crea a variable to hold the sum
var sum = 0;
// Loop over the array, incrementing the sum variable
numbers.forEach(function(number) {
  sum += number;
});
// Print the sum variable
console.log('SUM: ' + sum);

// Eaxample-2.2:
console.log('--- Example-2.2: ---');
// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Crea a variable to hold the sum
var sum = 0;

function adder(number) {
  sum += number;
}
// Loop over the array, incrementing the sum variable
numbers.forEach(adder);
// Print the sum variable
console.log('SUM: ' + sum);
// =================================================
// Eaxample-3:
