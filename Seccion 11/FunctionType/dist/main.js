"use strict";
/* Funciones Genericas Type */
function regresarObject(param) {
    return param;
}
var superman = {
    nombre: "Superman",
    nombreReal: "Clark Kent",
    poder: "Super Fuerza",
};
console.log(regresarObject(superman).nombreReal);
console.log(regresarObject(superman).poder);
