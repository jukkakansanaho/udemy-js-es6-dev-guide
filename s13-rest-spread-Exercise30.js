// Refactor the following to use spread operator:
// function join(array1, array2) {
//   return array1.concat(array2);
// }

function join(array1, array2) {
  return [...array1, ...array2];
}

const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
console.log(`Join: ${join(array1, array2)}`);
