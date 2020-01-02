// Create a sub-class of Moster called Snake with bite() method.
// Snake instance (given as argument) should have health deducated by 10.
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
  constructor(options) {
    super(options);
  }
  bite(snake) {
    snake.health = 0.9 * snake.health;
    return snake;
  }
}

const snake1 = new Snake({ name: 'Big Snake' });
const snake2 = new Snake({ name: 'Little Snake' });
console.log(`Snake-1: ${JSON.stringify(snake1)}`);
console.log(`Snake-2: ${JSON.stringify(snake2)}`);

console.log(`Snake-2.bite(snake1): ${JSON.stringify(snake2.bite(snake1))}`);
console.log(`Snake-1: ${JSON.stringify(snake1)}`);
console.log(`Snake-2: ${JSON.stringify(snake2)}`);
