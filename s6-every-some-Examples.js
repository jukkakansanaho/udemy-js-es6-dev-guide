var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 },
];
// Example 1.1:
console.log('--- Example-1.1: ---');
var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];
  if (computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

console.log('Computers: ' + JSON.stringify(computers));
console.log('allComputersCanRunProgram: ' + allComputersCanRunProgram);
console.log(
  'onlySomeComputersCanRunProgram: ' + onlySomeComputersCanRunProgram
);

// Example 1.2:
console.log('--- Example-1.2: ---');
var allComputersCanRunProgram_2 = computers.every(function(computer) {
  return computer.ram > 16;
});

console.log('Computers: ' + JSON.stringify(computers));
console.log('allComputersCanRunProgram_2: ' + allComputersCanRunProgram_2);

// Example 1.3:
console.log('--- Example-1.3: ---');
var onlySomeComputersCanRunProgram_2 = computers.some(function(computer) {
  return computer.ram > 16;
});
console.log('Computers: ' + JSON.stringify(computers));
console.log(
  'onlySomeComputersCanRunProgram_2: ' + onlySomeComputersCanRunProgram_2
);

// Example 2.1:
console.log('--- Example-2.1: ---');
var names = ['Alexandria', 'Matthew', 'Joe'];

var everyNameGreatarThan4 = names.every(function(name) {
  return name.length > 4;
});
console.log('Names: ' + names);
console.log('everyNameGreaterThan4: ' + everyNameGreatarThan4);

console.log('--- Example-2.2: ---');
var someNameGreaterThan4 = names.some(function(name) {
  return name.length > 4;
});
console.log('Names: ' + names);
console.log('someNameGreaterThan4: ' + someNameGreaterThan4);

// Example-3:
console.log('--- Example-3: ---');
function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
};

var username = new Field('2cool');
var password = new Field('my_password');
var birthdate = new Field('2010/01/05');
console.log('Validate username: ' + username.validate());
console.log('Validate password: ' + password.validate());
console.log(
  'Validate username && password: ' +
    (username.validate() && password.validate())
);
console.log('Validate birthdate: ' + birthdate.validate());

var fields = [username, password, birthdate];

var formIsValid = fields.every(function(field) {
  return field.validate();
});
console.log('Fields: ' + JSON.stringify(fields));
console.log('formIsValid: ' + formIsValid);

if (formIsValid) {
  // Allow user to Submit!
  console.log('OK to login!');
} else {
  // Show user an error message.
  console.log('Some of the form fields is empty, Please correct.');
}
