"use strict";
/* Interfaces en las classes */
var Mutantes = /** @class */ (function () {
    function Mutantes(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
    Mutantes.prototype.regenerar = function (nombre) {
        console.log("Hola " + nombre);
    };
    return Mutantes;
}());
var wolverine = new Mutantes("Wolverine");
wolverine.regenerar("Logan");
