// Add getName() function that returns the name of the person.
// const profile = {
//     name: 'Alex'
// };

const profile = {
  name: 'Alex',
  getName: function() {
    return this.name;
  },
};
console.log(`Profile: ${JSON.stringify(profile)}`);
console.log(`Get profile name: ${profile.getName()}`);

// Arrow function soluiton below does not work!
// Explanation:
// *this* inside fat arrows function reference the outer level object,
// thus, in this case the this is referencing Window which is outer level of profile.
const profile2 = {
  name: 'Alex',
  getName: () => {
    return this.name;
  },
};
console.log(`Profile-2: ${JSON.stringify(profile2)}`);
console.log(`Get profile2 name: ${profile2.getName()}`);
