"use strict";
var nombre = "Jesús";
var nombre2 = "Annie";
function getNombres() {
    return nombre + " X " + nombre2;
}
var mensaje = "1.Esta es una linea normal.\n2.Hola " + nombre + ".\n3.Amor verdadero : " + getNombres() + "\n4." + (5 + 7) + "\n";
console.log(mensaje);
