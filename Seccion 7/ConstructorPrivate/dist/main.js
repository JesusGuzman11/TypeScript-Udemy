"use strict";
/* Constructor Private*/
var Apocalipsis = /** @class */ (function () {
    function Apocalipsis(nombre) {
        this.nombre = nombre;
    }
    Apocalipsis.llamarApocalipsis = function () {
        if (!Apocalipsis.instancia) {
            Apocalipsis.instancia = new Apocalipsis("Soy Apocalipsis... El Unico!");
        }
        return Apocalipsis.instancia;
    };
    return Apocalipsis;
}());
/*
  let apocalipsis = new Apocalipsis("Soy Apocalipsis...El unico!")
  El errror de la siguiente declaracion es:
  Constructor of class 'Apocalipsis' is private and only accessible within the class declaration.
*/
var apocalipsis = Apocalipsis.llamarApocalipsis();
console.log(apocalipsis);
