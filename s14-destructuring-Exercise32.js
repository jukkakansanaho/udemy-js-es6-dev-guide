// Refactor code below using destructuring:
// const profile = {
//   title: 'Engineer',
//   department: 'Engineering'
// };
//
// function isEngineer(profile) {
//   var title = profile.title;
//   var department = profile.department;
//   return title === 'Engineer' && department === 'Engineering';
// }

const profile = {
  title: 'Engineer',
  department: 'Engineering',
};

function isEngineer({ title, department }) {
  return title === 'Engineer' && department === 'Engineering';
}

const worker = {
  title: 'Engineer',
  department: 'Engineering',
};
const worker2 = {
  title: 'Product Manager',
  department: 'Product Management',
};

console.log(`Worker-1: ${JSON.stringify(worker)}`);
console.log(`Is Engineer: ${isEngineer(worker)}`);
console.log(`Worker-2: ${JSON.stringify(worker2)}`);
console.log(`Is Engineer: ${isEngineer(worker2)}`);
