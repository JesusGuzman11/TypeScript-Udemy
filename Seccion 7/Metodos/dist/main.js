"use strict";
/* Metodos Public, Protected y Private */
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "";
        this.equipo = "";
        this.nombreReal = "";
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    Avenger.prototype.infoAvenger = function () {
        var mensaje = this.nombre + " su nombre real es " + this.nombreReal + " y pertenece al equipo " + this.equipo;
        console.log(mensaje);
    };
    Avenger.prototype.cambiarEquipoPublico = function (nuevoEquipo) {
        return this.cambiarEquipo(nuevoEquipo);
    };
    Avenger.prototype.cambiarEquipo = function (nuevoEquipo) {
        if (nuevoEquipo === this.equipo) {
            return false;
        }
        else {
            return true;
        }
    };
    return Avenger;
}());
var antman = new Avenger("Antman", "Cap", "Scott Lang");
antman.infoAvenger();
console.log(antman.cambiarEquipoPublico("Cap"));
