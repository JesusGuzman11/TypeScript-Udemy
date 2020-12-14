/* Metodos en las interfaces */

interface Hero {
  nombre: string;
  regenerar(nombreReal:string):void
}

function enviarMision(heroe: Hero) {
  console.log(`Enviando a ${heroe.nombre} a la mision`);
  heroe.regenerar("Clark Kent")
}

let superman: Hero = {
  nombre: "Superman",
  regenerar(nombreReal:string){
    console.log(`Se ha regenerado ${nombreReal}`)
  }
};

enviarMision(superman);

