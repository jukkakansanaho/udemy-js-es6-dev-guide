// =================================================
// Eaxample-0:
console.log('--- Example-0: ---');
var color = 'red';
console.log('Color:' + color);

// =================================================
// Eaxample-1:
// ES5
console.log('--- Example-1.1 (ES5): ---');
var name_0 = 'Jane';
var title_0 = 'Software Engineer';
var hourlyWage_0 = 40;

console.log('Name: ' + name_0);
console.log('Title: ' + title_0);
console.log('HourlyWage: ' + hourlyWage_0);

// ES6
console.log('--- Example-1.2 (ES6): ---');
const name = 'Jane'; // const == variable not going to change.
let title = 'Software Engineer'; // let == variable is going to change
let hourlyWage = 40;

console.log('Name: ' + name);
console.log('Title: ' + title);
console.log('HourlyWage: ' + hourlyWage);
// Some time later...
console.log('Some time later...');
title = 'Senior Software Engineer';
hourlyWage = 45;

console.log('Name: ' + name);
console.log('Title: ' + title);
console.log('HourlyWage: ' + hourlyWage);

// =================================================
// Eaxample-2:
console.log('--- Example-2: ---');
function count(targetString) {
  // var characters = ['a', 'e', 'i', 'o', 'u'];
  // var number = 0;
  const characters = ['a', 'e', 'i', 'o', 'u']; // Won't change
  let number = 0; // Will change

  for (var i = 0; i < targetString.length; i++) {
    if (characters.includes(targetString[i])) {
      number++;
    }
  }

  return number;
}
console.log('targetString: ' + 'aeiobzxceiaipbiox');
console.log('Count(a,e,i,o,u): ' + count('aeiobzxceiaipbiox'));
