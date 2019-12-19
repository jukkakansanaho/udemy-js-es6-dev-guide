var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
];

var speeds = trips.map(function(trip) {
  return trip.distance / trip.time;
});

console.log('--- Exercise-4: ---');
console.log('Trips: ' + JSON.stringify(trips));
console.log('Speeds: ' + speeds);
