/* Multiple NameSpaces */

let hoy = new Date();

if (Validaciones.validarFecha(hoy)) {
  console.log("Fecha Aceptada");
} else {
  console.log("Fecha No Aceptada");
}

if (Validaciones.validarTexto("Barry Allen")) {
  console.log("Texto Aceptado");
} else {
  console.log("Texto No Aceptado");
}
