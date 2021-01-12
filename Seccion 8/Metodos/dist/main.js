"use strict";
/* Metodos en las interfaces */
function enviarMision(heroe) {
    console.log("Enviando a " + heroe.nombre + " a la mision");
    heroe.regenerar("Clark Kent");
}
var superman = {
    nombre: "Superman",
    regenerar: function (nombreReal) {
        console.log("Se ha regenerado " + nombreReal);
    }
};
enviarMision(superman);
