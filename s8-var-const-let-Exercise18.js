// Originakl code:
// var statuses = [
//   { code: 'OK', response: 'Request successful' },
//   { code: 'FAILED', response: 'There was an error with your request' },
//   { code: 'PENDING', response: 'Your reqeust is still pending' }
// ];
// var message = '';
// var currentCode = 'OK';
//
// for (var i = 0; i < statuses.length; i++) {
//   if (statuses[i].code === currentCode) {
//     message = statuses[i].response;
//   }
// }

// Re-factored code:
const statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' },
];
let message = '';
let currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}

console.log('Statuses: ' + JSON.stringify(statuses));
console.log('CurrentCode: ' + currentCode);
console.log('Message: ' + message);
