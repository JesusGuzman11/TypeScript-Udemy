"use strict";
/* NameSpaces */
var Validaciones;
(function (Validaciones) {
    function validarTexto(texto) {
        if (texto.length > 3) {
            return true;
        }
        return false;
    }
    Validaciones.validarTexto = validarTexto;
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        else {
            return true;
        }
    }
    Validaciones.validarFecha = validarFecha;
})(Validaciones || (Validaciones = {}));
var hoy = new Date();
console.log(Validaciones.validarFecha(hoy));
console.log(Validaciones.validarTexto("Barry Allen"));
