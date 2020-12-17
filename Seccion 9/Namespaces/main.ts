/* NameSpaces */

namespace Validaciones {
  export function validarTexto(texto: string): boolean {
    if (texto.length > 3) {
      return true;
    }
    return false;
  }

  export function validarFecha(fecha: Date) {
    if (isNaN(fecha.valueOf())) {
      return false;
    } else {
      return true;
    }
  }
}

let hoy = new Date();

console.log(Validaciones.validarFecha(hoy));
console.log(Validaciones.validarTexto("Barry Allen"));
