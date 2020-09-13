"use strict";
// Tipos
var batman = "Bruce";
var superman = "Clark";
var existe = false;
// Tuplas
var parejaHeroes = [batman, superman];
var villano = ["Lex Lutor", 5, true];
// Arreglos
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
//Enumeraciones
var Fuerza;
(function (Fuerza) {
    Fuerza[Fuerza["aquaman"] = 0] = "aquaman";
    Fuerza[Fuerza["batman"] = 1] = "batman";
    Fuerza[Fuerza["flash"] = 5] = "flash";
    Fuerza[Fuerza["superman"] = 100] = "superman";
})(Fuerza || (Fuerza = {}));
var fuerzaFlash = Fuerza.flash;
var fuerzaSuperman = Fuerza.superman;
var fuerzaBatman = Fuerza.batman;
var fuerzaAquaman = Fuerza.aquaman;
// Retorno de funciones
function activar_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
// Aserciones de Tipo
var poder = "100";
var largoDelPoder = poder.length;
console.log(largoDelPoder);
//Alternative
var poder2 = 100;
var largoDelPoder2 = poder2.toString().length;
console.log(largoDelPoder2);
