"use strict";
var nombre = "Jesus";
var edad = 30;
function imprimir(nombre, edad) {
    nombre = nombre.toLowerCase();
    edad = edad + 10;
    return "Tu nombre es: " + nombre + " y la edad es " + edad;
}
var mensaje = imprimir(nombre, edad);
console.log(mensaje);
//# sourceMappingURL=main.js.map