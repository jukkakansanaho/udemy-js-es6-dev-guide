// Refactor the function to use template strings.
// function fullName(firstName, lastName) {
//   return firstName + lastName;
// }

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

const firstname = 'John';
const lastname = 'Doe';

console.log(`Firstname: ${firstname}, Lastname: ${lastname}`);
console.log(`Fullname: ${fullName(firstname, lastname)}`);
