// =================================================
// Eaxample-1:
console.log('--- Example-1: ---');
var expense = {
  type: 'Business',
  amount: '$45 USD',
};

// ES5
var type1 = expense.type;
var amount1 = expense.amount;
console.log(`ES5: Expense.type: ${type1}, Expense.amount: ${amount1}`);
// -------
// ES6
// const { type } = expense;
// const { amount } = expense;
const { type, amount } = expense;
console.log(`ES6: Expense.type: ${type}, Expense.amount: ${amount}`);

// =================================================
// Eaxample-2:
console.log('--- Example-2: ---');
var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040,
};
var properties = {
  color: 'red',
};

function fileSummary1(file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}
console.log(`fileSummary-1: ${fileSummary1(savedFile)}`);

function fileSummary2({ name, extension, size }, { color }) {
  return `The file ${name}.${extension} is of size ${size} and its color is ${color}`;
}
console.log(`fileSummary-2: ${fileSummary2(savedFile, properties)}`);

// =================================================
// Eaxample-3:
console.log('--- Example-3: ---');
const companies = ['Google', 'Facebook', 'Uber'];
const firstCompany = companies[0];
const secondCompany = companies[1];
const thirdCompany = companies[2];
const [name1, name2, name3] = companies;

const [company1, ...rest] = companies;

console.log(`Company-1.1: ${firstCompany}`);
console.log(`Company-1.2: ${secondCompany}`);
console.log(`Company-1.3: ${thirdCompany}`);

console.log(`Company-2.1: ${name1}`);
console.log(`Company-2.2: ${name2}`);
console.log(`Company-2.3: ${name3}`);

console.log(`Company-3.1: ${company1}`);
console.log(`Rest of the Companies: ${rest}`);

// =================================================
// Eaxample-4:
console.log('--- Example-4: ---');
const companies_2 = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' },
];

// ES5
var location1 = companies_2[0].location;
console.log(`(ES5) Location of Google: ${location1}`);

// ES6
const [{ location }] = companies_2;
console.log(`(ES6) Location of Google: ${location}`);

// =================================================
// Eaxample-5:
console.log('--- Example-5: ---');
const Google = {
  locations: ['Mountain View', 'New York', 'London'],
};

const {
  locations: [location_2],
} = Google;
console.log(`Google's location-1: ${location_2}`);

// =================================================
// Eaxample-6:
console.log('--- Example-6: ---');

function signup(username, password, email, dateOfBirth, city) {
  // create a new user
  console.log('Creating a new user...Version-1');
  const user = {
    username,
    password,
    email,
    dateOfBirth,
    city,
  };
  return user;
}

// Other Code...
// Other Code...
// Other Code...
// ...
// Other Code...
// Other Code...

console.log(
  `Signup: ${JSON.stringify(
    signup(
      'myname',
      'mypassword',
      'myemail@example.com',
      '1990/01/01',
      'New York'
    )
  )}`
);
// -- Another way... --------------
const user = {
  username: 'myname',
  password: 'mypassword',
  email: 'myemail@example.com',
  dateOfBirth: '1990/01/01',
  city: 'New York',
};
function signup2({ username, password, email, dateOfBirth, city }) {
  // create a new user
  console.log('Creating a new user...Version-2');
  return user;
}
console.log(`Signup-2: ${JSON.stringify(signup2(user))}`);

// =================================================
// Eaxample-7:
console.log('--- Example-7: ---');

// Lert's say that an API returns this (array of arrays):
const points = [[4, 5], [10, 1], [0, 40]];

// The goal is to transcode API result into this (array of objects):
const points2 = [{ x: 4, y: 5 }, { x: 10, y: 1 }, { x: 0, y: 40 }];

let array_of_objects = points.map(([x, y]) => {
  return { x, y };
});
console.log(`Points (array-of-arrays): ${JSON.stringify(points)}`);
console.log(`Points (array-of-objects): ${JSON.stringify(array_of_objects)}`);
