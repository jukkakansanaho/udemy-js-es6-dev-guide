// Create a Monster class, initialise it with health = 100 and a name given via options.
class Monster {
  constructor({ name }) {
    this.health = 100;
    this.name = name;
  }
}

const monster = new Monster({ name: 'Bad Ass Monster' });
console.log(`Monster: ${JSON.stringify(monster)}`);
