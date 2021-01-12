/* Multiple Decorators */

function planDominarMundo(constructor: Function) {
  // Crear funcion en clase con prototype
  constructor.prototype.imprimirPlan = function () {
    console.log(`El plan de ${this.nombre} es dominar el mundo`);
  };
}

function imprimible(constructor: Function) {
  constructor.prototype.imprimir = function () {
    console.log(this);
  };
}
// Decoradores anidados - El orden esta definido por una composicion matematica (f*g)(x)
@imprimible
@planDominarMundo
class Villano {
  constructor(public nombre: string, public poder: string) {}
}

let lex = new Villano("Lex Luthor", "Super Mente");
(<any>lex).imprimirPlan();
(<any>lex).imprimir();
