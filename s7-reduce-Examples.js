var numbers = [10, 20, 30];
var sum = 0;
// =================================================
// Eaxample-1.1:
console.log('--- Example-1.1: ---');
for (i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log('Numbers: ' + numbers);
console.log('Sum-1.1: ' + sum);
// =================================================
// Eaxample-1.2:
console.log('--- Example-1.2: ---');
var sum2 = numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);
console.log('Numbers: ' + numbers);
console.log('Sum-1.2: ' + sum2);

// =================================================
// Eaxample-2:
console.log('--- Example-2: ---');
var primaryColors = [{ color: 'red' }, { color: 'yellow' }, { color: 'blue' }];
colorValues = primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color);

  return previous;
}, []);
console.log('Color Values: ' + colorValues);

// =================================================
// Eaxample-3:
console.log('--- Example-3: ---');
function balancedParens(string) {
  return !string.split('').reduce(function(previous, char) {
    if (previous < 0) {
      return previous;
    }
    if (char === '(') {
      return ++previous;
    }
    if (char === ')') {
      return --previous;
    }
    return previous;
  }, 0);
}

console.log("String is balanced ('()()'): " + balancedParens('()'));
console.log("String is balanced (')('): " + balancedParens(')('));
console.log("String is balanced ('((('): " + balancedParens('((('));
