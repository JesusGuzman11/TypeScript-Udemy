"use strict";
/* Metodos y Propiedades Estaticos */
var Xmen = /** @class */ (function () {
    function Xmen() {
    }
    Xmen.crearXmen = function () {
        console.log("Se creo usando un metodo static");
        return new Xmen();
    };
    Xmen.nombre = "Wolverine";
    return Xmen;
}());
console.log(Xmen.nombre);
var wolverine2 = Xmen.crearXmen();
console.log(wolverine2);
