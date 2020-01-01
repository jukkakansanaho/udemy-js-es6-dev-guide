// Convert below array-of-arrays into array-of-objects:
const classes = [
  ['Chemistry', '9AM', 'Mr. Darnick'],
  ['Physics', '10:15AM', 'Mrs. Lithun'],
  ['Math', '11:30AM', 'Mrs. Vitalis'],
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
  return { subject, time, teacher };
});

console.log(`Array-of-Arrays: ${JSON.stringify(classes)}`);
console.log(`Array-of-Objects: ${JSON.stringify(classesAsObject)}`);
