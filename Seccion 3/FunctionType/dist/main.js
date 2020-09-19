"use strict";
function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "I'm " + nombre;
}
function salvarMundo() {
    return console.log("El mundo está salvado!");
}
var myFunction;
/* myFunction = 10;

myFunction = sumar;
console.log(myFunction(5, 5));

myFunction = saludar;
console.log(myFunction("Jesús")); */
myFunction = salvarMundo;
myFunction();
