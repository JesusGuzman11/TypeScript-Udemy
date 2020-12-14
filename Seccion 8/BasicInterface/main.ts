/* Interface Basica */

interface Hero {
  nombre: string;
  poder: string;
}

function enviarMision(heroe: Hero) {
  console.log(`Enviando a ${heroe.nombre} a la mision`);
}

function enviarCuartel(heroe: Hero) {
  console.log(`Enviando a ${heroe.nombre} al cuartel`);
}

let superman: Hero = {
  nombre: "Superman",
  poder: "Super Fuerza",
};

enviarMision(superman);
enviarCuartel(superman);
