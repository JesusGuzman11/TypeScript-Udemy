/* Funciones Genericas Type */

function regresarObject<T>(param: T) {
  return param;
}

type Hero = {
  nombre: string;
  nombreReal: string;
};

type Villain = {
  nombre: string;
  poder: string;
};

const superman = {
  nombre: "Superman",
  nombreReal: "Clark Kent",
  poder: "Super Fuerza",
};

console.log(regresarObject<Hero>(superman).nombreReal);
console.log(regresarObject<Villain>(superman).poder);
