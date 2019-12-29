// Refactor the following by using template strings.
// function doubleMessage(number) {
//   return "Your number doubled is " + (2 * number);
// }
function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}

const number = 10;
console.log(`Number: ${number}`);
console.log(`Doubled: ${doubleMessage(number)}`);
