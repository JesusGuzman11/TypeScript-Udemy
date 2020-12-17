namespace Validaciones {
  export function validarFecha(fecha: Date) {
    if (isNaN(fecha.valueOf())) {
      return false;
    } else {
      return true;
    }
  }
}
