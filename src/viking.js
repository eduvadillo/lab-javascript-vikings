// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health = this.health - damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let indiceViking = Math.floor(Math.random() * this.vikingArmy.length);
    let indiceSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let saxon = this.saxonArmy[indiceSaxon];
    let viking = this.vikingArmy[indiceViking];

    let golpe = viking.strength;

    let mensaje = saxon.receiveDamage(golpe);

    if (saxon.health <= 0) {
      this.saxonArmy.splice(indiceSaxon, 1);
    }

    return mensaje;
  }

  saxonAttack() {
    let indiceViking = Math.floor(Math.random() * this.vikingArmy.length);
    let indiceSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let saxon = this.saxonArmy[indiceSaxon];
    let viking = this.vikingArmy[indiceViking];

    let golpe = saxon.strength;

    let mensaje = viking.receiveDamage(golpe);

    if (viking.health <= 0) {
      this.vikingArmy.splice(indiceViking, 1);
    }

    return mensaje;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
