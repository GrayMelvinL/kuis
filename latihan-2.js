class Enemys {
  constructor(name) {
    this.name = name;
    this.speed = 2;
    this.attackPower = 5;
    this.health = 100;
    this.defend = 2;
  }

  attack() {
    console.log(`${this.name} attack!, attack = ${this.attackPower}`);
  }

  walk() {
    console.log(`${this.name} walk, speed = ${this.speed}`);
  }

  dash() {
    console.log(`${this.name} dash, speed = 5`);
  }

  getInformation() {
    console.log(
      `${this.name} memiliki speed=${this.speed}, attack=${this.attackPower}, health=${this.health}, dan defend=${this.defend}`
    );
  }
}

const enemy1 = new Enemys("kucing");
enemy1.attack();
enemy1.walk();
enemy1.dash();
enemy1.getInformation();