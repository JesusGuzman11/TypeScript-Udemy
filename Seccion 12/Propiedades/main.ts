/* Properties Decorators */

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

function editableProp(isEditable: boolean): Function {
  /* Retorna una funcion con 2 parametros donde:
  1- Constructor de la funcion si es clase estatica o el prototype de la clase si es un miembro de una instancia.
  2- Nombre del miembro.
  Esta propiedad sera de solo lectura por lo que no se mostrara en el objeto cuando se imprima
  .*/
  return function (target: any, nameProperty: string):any {
    let descriptor:PropertyDescriptor = {
      writable: isEditable
    }
    return descriptor;
  };
}

class Villano {
  @editableProp(false)
  public nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  @editable(false)
  plan(): void {
    console.log("Dominar el mundo");
  }
}

let lex = new Villano("Lex Luthor");

console.log(lex)