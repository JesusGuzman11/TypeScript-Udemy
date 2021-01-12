"use strict";
/* Interface Basica y propiedades opcionales */
function enviarMision(heroe) {
    console.log("Enviando a " + heroe.nombre + " a la mision");
}
function enviarCuartel(heroe) {
    console.log("Enviando a " + heroe.nombre + " al cuartel");
}
var superman = {
    nombre: "Superman",
};
enviarMision(superman);
enviarCuartel(superman);
