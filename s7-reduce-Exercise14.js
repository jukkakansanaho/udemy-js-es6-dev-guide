var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance = trips.reduce(function(previous, trip) {
  return previous + trip.distance;
}, 0);
console.log('Trips: ' + JSON.stringify(trips));
console.log('Total distance: ' + totalDistance);
