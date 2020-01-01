// Use array destructuring, recursion, rest/spread operators
// to create a function that returns a new array
// with all values multiplied by two.
// DO NOT use any array helper!!
//
// const numbers = [1, 2, 3];
//
// function double() {
//
// }

const numbers = [1, 2, 3];

// enter first number and 'others' as two arguments
function double([number, ...rest]) {
  // if there are no 'others' left, double number
  if (rest.length === 0) return [number * 2];
  //  double number and recur rest of array
  else {
    return [number * 2, ...double(rest)];
  }
}

console.log(`Numbers: ${JSON.stringify(numbers)}`);
console.log(`Numbers Doubled: ${JSON.stringify(double(numbers))}`);
