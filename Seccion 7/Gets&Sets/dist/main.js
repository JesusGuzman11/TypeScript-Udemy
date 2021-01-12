"use strict";
/* Gets y Sets */
var Avenger = /** @class */ (function () {
    function Avenger(nombre) {
        this._nombre = nombre;
    }
    Object.defineProperty(Avenger.prototype, "nombre", {
        get: function () {
            if (this._nombre) {
                return this._nombre;
            }
            else {
                return "No tiene un nombre el avenger ";
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Avenger.prototype, "newNombre", {
        set: function (nombre) {
            console.log("Se llamo el set newNombre");
            if (nombre.length <= 3) {
                throw new Error("Nombre con 3 letras o menos");
            }
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Avenger;
}());
var ironman = new Avenger();
console.log(ironman.nombre);
ironman.newNombre = "Iro";
console.log(ironman.nombre);
