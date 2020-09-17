"use strict";
function nombreCompleto(nombre, apellido) {
    if (apellido) {
        return nombre + " " + apellido;
    }
    return "" + nombre;
}
var nombre = nombreCompleto("Barry", "Allen");
console.log(nombre);
