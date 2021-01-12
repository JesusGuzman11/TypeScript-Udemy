/* Interfaces en las classes */

interface Xmen {
  nombre: string;
  nombreReal?: string;
  regenerar(nombre: string): void;
}

class Mutantes implements Xmen {
  regenerar(nombre: string) {
    console.log(`Hola ${nombre}`);
  }
  constructor(public nombre: string, public poder?: string) {}
}

let wolverine = new Mutantes("Wolverine");

wolverine.regenerar("Logan");
