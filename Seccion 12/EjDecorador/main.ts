/* Example Decorators */

function planDominarMundo(constructor: Function) {
  // Crear funcion en clase con prototype

  constructor.prototype.imprimirPlan = function () {
    console.log(`El plan de ${this.nombre} es dominar el mundo`);
  };
}

@planDominarMundo
class Villano {
  constructor(public nombre: string) {}
}

let lex = new Villano("Lex Luthor");
(<any>lex).imprimirPlan();
