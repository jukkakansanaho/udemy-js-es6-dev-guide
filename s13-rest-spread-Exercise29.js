// Refactor the following to use rest operator:
// function product(a, b, c, d, e) {
//   var numbers = [a,b,c,d,e];
//
//   return numbers.reduce(function(acc, number) {
//     return acc * number;
//   }, 1)
// }

function product(...numbers) {
  var numbers = [...numbers];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1);
}

console.log(`Product of numbers: ${product(1, 2, 3, 4, 5)}`);
