// Refactor to use default function arguments:
// function sum(a, b) {
//   if (a === undefined) {
//     a = 0;
//   }
//
//   if (b === undefined) {
//     b = 0;
//   }
//
//   return a + b;
// }

function sum(a = 0, b = 0) {
  return a + b;
}
