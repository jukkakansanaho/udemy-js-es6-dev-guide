// Refactor to use only rest operator.
// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }
function unshift0(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}

function unshift(array, ...args) {
  return [...args, ...array];
}

const array = [1, 2, 3];
const a = 'aa';
const b = 'bb';
const c = 'cc';
const d = 'dd';
const e = 'ee';
const f = 'ff';
console.log(`Unshift-0: ${unshift0(array, a, b, c, d, e)}`);
console.log(`Unshift: ${unshift(array, a, b, c, d, e)}`);
