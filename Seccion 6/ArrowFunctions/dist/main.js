"use strict";
/*
function sumar(a: number, b: number): number {
  return a + b;
}
*/
var sumar = function (a, b) { return a + b; };
console.log(sumar(2, 2));
/*
function darOrden(orden: string) {
  return `Hulk ${orden}`;
}
*/
var darOrden = function (orden) { return "Hulk " + orden; };
console.log(darOrden("Smash!!!"));
var capitanAmerica = {
    vengador: "Hulk",
    mensaje: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.vengador + " Smash!!!");
        }, 1000);
    },
};
capitanAmerica.mensaje();
