class Heroe {
  constructor(nombre, poder) {
    this.nombre = nombre;
    this.poder = poder;
  }
}

class HeroeVolador extends Heroe {
  constructor(nombre, poder) {
    super(nombre, poder);
    this.vuela = true;
  }
}

const batman = new Heroe("Bruce", "Dinero");
const superman = new HeroeVolador("Clark", "Super Fuerza");

console.log(batman);
console.log(superman);
