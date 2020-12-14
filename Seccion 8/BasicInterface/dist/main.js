"use strict";
/* Interface Basica */
function enviarMision(heroe) {
    console.log("Enviando a " + heroe.nombre + " a la mision");
}
function enviarCuartel(heroe) {
    console.log("Enviando a " + heroe.nombre + " al cuartel");
}
var superman = {
    nombre: "Superman",
    poder: "Super Fuerza",
};
enviarMision(superman);
enviarCuartel(superman);
