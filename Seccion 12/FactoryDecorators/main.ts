/* Factory Decorators */

function consola(constructor: Function) {
  console.log(constructor);
}

function imprimirConsola(imprimir: boolean): Function {
  if (imprimir) {
    return consola;
  } else {
    return () => {};
  }
}

@imprimirConsola(true)
class Villano {
  constructor(public nombre: string) {}
}
