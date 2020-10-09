"use strict";
function nombreCompleto(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = false; }
    if (capitalizado) {
        return capitalizar(nombre) + " " + capitalizar(apellido);
    }
    return nombre + " " + apellido;
}
function capitalizar(palabra) {
    return (palabra.charAt(0).toLocaleUpperCase() +
        palabra.substr(1).toLocaleLowerCase());
}
var nombre = nombreCompleto("clark", "kent", true);
console.log(nombre);
