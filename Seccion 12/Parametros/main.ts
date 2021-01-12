/* Params Decorators */

function parametro(target: boolean, name: string, index: number) {
  /* Es una funcion con 3 parametros donde:
  1- Constructor de la funcion si es clase estatica o el prototype de la clase si es un miembro de una instancia.
  2- Nombre del miembro.
  3- Index o posicion del parametro.*/
  console.log(target);
  console.log(name);
  console.log(index);
}

class Villano {
  constructor(public nombre: string) {}

  imprimirPlan(plan: boolean, @parametro mensaje: string): void {
    if (plan) {
      console.log(`El plan es: ${mensaje}`);
    } else {
      console.log(mensaje);
    }
  }
}

let lex = new Villano("Lex Luthor");

lex.imprimirPlan(true, "Dominar el mundo");
