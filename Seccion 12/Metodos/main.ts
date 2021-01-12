/* Methods Decorators */

function editable(isEditable: boolean): Function {
  /* Retorna una funcion con 3 parametros donde:
  1- Constructor de la funcion si es clase estatica o el prototype de la clase si es un miembro de una instancia.
  2- Nombre del miembro.
  3- Property Descriptor donde es Object.defineProperty y esto recibe 3 parametros como argumento
  y tiene varias propiedades para ese objeto en este caso se utiliza el writable de esta manera 
  aseguramos que dependiendo del valor pasado a la funcion editable se pueda o no modificar el plan.*/
  return function (
    target: any,
    nameProperty: string,
    descriptor: PropertyDescriptor
  ) {
    if (!isEditable) {
      console.warn("No me haran cambiar de plan");
    }
    descriptor.writable = isEditable;
  };
}

class Villano {
  constructor(public nombre: string) {}
  @editable(false)
  plan(): void {
    console.log("Dominar el mundo");
  }
}

let lex = new Villano("Lex Luthor");

lex.plan = function () {
  console.log("Ayudar a las personas");
};

lex.plan();
