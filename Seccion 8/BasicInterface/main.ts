/* Interface Basica y propiedades opcionales */

interface Hero {
  nombre: string;
  poder?: string;
}

function enviarMision(heroe: Hero) {
  console.log(`Enviando a ${heroe.nombre} a la mision`);
}

function enviarCuartel(heroe: Hero) {
  console.log(`Enviando a ${heroe.nombre} al cuartel`);
}

let superman: Hero = {
  nombre: "Superman",
};

enviarMision(superman);
enviarCuartel(superman);
