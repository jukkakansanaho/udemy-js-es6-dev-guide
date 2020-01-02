// =================================================
// Example-1.1:
// ES5
console.log('--- Example-1.1: ---');
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return 'vroom';
};

const car = new Car({ title: 'Focus' });
console.log(`Car-1: ${JSON.stringify(car)}`);
console.log(`Car-1 says: ${JSON.stringify(car.drive())}`);
// -----------

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;
Toyota.prototype.honk = function() {
  return 'beep';
};

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
console.log(`Car-2: ${JSON.stringify(toyota)}`);
console.log(`Car-2.drive(): ${JSON.stringify(toyota.drive())}`);
console.log(`Car-2.honk(): ${JSON.stringify(toyota.honk())}`);
// =================================================
// Example-1.2:
// Refactored Exampole-1.1 (ES5) code above into ES6.
// ES6
console.log('--- Example-1.2: ---');
class CarES6 {
  constructor({ title }) {
    this.title = title;
  }
  drive() {
    return 'vroom';
  }
}

class ToyotaES6 extends CarES6 {
  constructor(options) {
    // Call inherited Class' (CarES6) same name method
    // === CarES6.constructor();
    super(options);
    this.color = options.color;
  }

  honk() {
    return 'beep';
  }
}

const carES6 = new CarES6({ title: 'Toyota' });
console.log(`Car-ES6: ${JSON.stringify(carES6)}`);
console.log(`Car-ES6.drive(): ${JSON.stringify(carES6.drive())}`);

const toyotaES6 = new ToyotaES6({ color: 'red', title: 'Daily Driver' });
console.log(`ToyotaES6: ${JSON.stringify(toyotaES6)}`);
console.log(`ToyotaES6.honk(): ${toyotaES6.honk()}`);
console.log(`ToyotaES6.drive(): ${toyotaES6.drive()}`);
