// ES5
// =================================================
// Eaxample-1.1:
console.log('--- Example-1.1 (ES5): ---');
function getMessage() {
  const year = new Date().getFullYear();

  return 'The year is ' + year;
}
console.log('Message: ' + getMessage());

// =================================================
// Eaxample-1.2:
console.log('--- Example-1.1 (ES6): ---');
function getMessage2() {
  const year = new Date().getFullYear();

  return `The year is ${year}`;
}
console.log('Message: ' + getMessage2());

// =================================================
// Eaxample-2:
console.log('--- Example-2: ---');
// PHP
// $data = '{"device_id": "'.$device_id.'", "guiid": "'.$guiid.'", "username": "'.$username.'", '"}';

const device_id = 4;
const guid = 20;
const username = 'Hello';
//JS
const data1 =
  '{"device_id": "' +
  device_id +
  '", "guid": "' +
  guid +
  '", "username": "' +
  username +
  '", "}';
console.log(`DATA-1: ${data1}`);

const data2 = `{"device_id": "${device_id}", "guid": "${guid}", "username": "${username}", "}`;
console.log(`DATA-2: ${data2}`);
