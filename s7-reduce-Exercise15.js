var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' },
];

var deskTypes = desks.reduce(
  function(previous, desk) {
    if (desk.type === 'sitting') {
      previous.sitting++;
    }
    if (desk.type === 'standing') {
      previous.standing++;
    }

    return previous;
  },
  { sitting: 0, standing: 0 }
);
console.log('Desks: ' + JSON.stringify(desks));
console.log('Desk types: ' + JSON.stringify(deskTypes));
