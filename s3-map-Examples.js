var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = [];

// Eaxample-1.2:
console.log('--- Example-1.1: ---');
for (i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

console.log('Numbers-1.1: ' + numbers);
console.log('DoubleNUmbers-1.1: ' + doubledNumbers);
// =================================================
console.log('--- Example-1.2: ---');
// Eaxample-1.2:
var doubled = numbers.map(function(number) {
  return number * 2;
});
console.log('Numbers-1.2: ' + numbers);
console.log('DoubleNUmbers-1.2: ' + doubled);

// =================================================
// Eaxample-2:
console.log('--- Example-2: ---');
var cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'EXPENSIVE' },
];

var prices = cars.map(function(car) {
  return car.price;
});
console.log('Cars:  ' + JSON.stringify(cars));
console.log('Prices:  ' + prices);
