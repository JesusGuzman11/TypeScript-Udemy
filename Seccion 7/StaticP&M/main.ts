/* Metodos y Propiedades Estaticos */

class Xmen {
  static nombre: string = "Wolverine";

  constructor() {}

  static crearXmen() {
    console.log("Se creo usando un metodo static");
    return new Xmen();
  }
}

console.log(Xmen.nombre);
let wolverine2 = Xmen.crearXmen();
console.log(wolverine2);
