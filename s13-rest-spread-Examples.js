// =================================================
// Eaxample-1:
console.log('--- Example-1: ---');
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}
console.log(`Numbers: ${addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`);
// =================================================
// Eaxample-2:
console.log('--- Example-2: ---');
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

console.log(
  `Colors: ${[...defaultColors, ...userFavoriteColors, ...fallColors]}`
);
// =================================================
// Eaxample-3:
console.log('--- Example-3: ---');
function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
    return ['milk', ...items];
  }
  return items;
}

console.log(
  `Shopping List: ${validateShoppingList('oranges', 'bread', 'eggs')}`
);

// =================================================
// Eaxample-4:
console.log('--- Example-4: ---');
const MathLibrary = {
  calculateProduct(...rest) {
    console.log('Please use multiply() method instead.');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  },
};

console.log(
  `MathLibrary.calculateProduct(): ${MathLibrary.calculateProduct(2, 3)}`
);
console.log(`MathLibrary.multiply(): ${MathLibrary.multiply(2, 3)}`);
