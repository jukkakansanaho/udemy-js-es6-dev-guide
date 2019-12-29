// Eaxample-1.1:
// Common JS function:
console.log('--- Example-1.2 (ES5): ---');
const a = 1;
const b = 2;

const add = function(a, b) {
  return a + b;
};
console.log(`a: ${a}, b: ${b}`);
console.log(`ADD-1.1: ${add(a, b)}`);

// Eaxample-1.2:
// ES6 arrow function:
console.log('--- Example-1.2 (ES6 arrow function): ---');
const add2 = (a, b) => {
  return a + b;
};
console.log(`a: ${a}, b: ${b}`);
console.log(`ÀDD-1.2: ${add2(a, b)}`);

// Eaxample-1.3:
// ES6 arrow function (when only single expression in function):
console.log('--- Example-1.3 (ES6 arrow function): ---');
const add3 = (a, b) => a + b; // Implicit return of a function (when only one expression).

console.log(`a: ${a}, b: ${b}`);
console.log(`ÀDD-1.3: ${add3(a, b)}`);

// =================================================
// Eaxample-2.1:
console.log('--- Example-2.1 (ES5): ---');
const number = 8;

const double1 = function(number) {
  return 2 * number;
};
console.log(`Number: ${number}`);
console.log(`Double-2.1: ${double1(number)}`);

// Eaxample-2.2:
console.log('--- Example-2.2 (ES6): ---');
const double2 = number => {
  return 2 * number;
};
console.log(`Number: ${number}`);
console.log(`Double-2.2: ${double2(number)}`);

// Eaxample-2.3:
console.log('--- Example-2.3 (ES6): ---');
const double3 = number => 2 * number;

console.log(`Number: ${number}`);
console.log(`Double-2.3: ${double3(number)}`);

// =================================================
// Eaxample-3.1:
console.log('--- Example-3.1: ---');
const numbers = [1, 2, 3];

let doubleNumbers = numbers.map(function(number) {
  return 2 * number;
});
console.log(`Numbers: ${numbers}`);
console.log(`DoubleNumbers-3.1: ${doubleNumbers}`);

// Eaxample-3.2:
console.log('--- Example-3.2: ---');
const doubleNumbers2 = numbers.map(number => 2 * number);

console.log(`Numbers: ${numbers}`);
console.log(`DoubleNumbers-3.2: ${doubleNumbers2}`);

// =================================================
// Eaxample-4.1:
console.log('--- Example-4.1: ---');
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    // this === team
    return this.members.map(member => {
      return `${member} is on team ${this.teamName}.`;
    });
  },
};

console.log(`Team: ${JSON.stringify(team)}`);
console.log(`TeamSummary: ${team.teamSummary()}`);
