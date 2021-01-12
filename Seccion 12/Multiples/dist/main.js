"use strict";
/* Multiple Decorators */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function planDominarMundo(constructor) {
    // Crear funcion en clase con prototype
    constructor.prototype.imprimirPlan = function () {
        console.log("El plan de " + this.nombre + " es dominar el mundo");
    };
}
function imprimible(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
// Decoradores anidados - El orden esta definido por una composicion matematica (f*g)(x)
var Villano = /** @class */ (function () {
    function Villano(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
    Villano = __decorate([
        imprimible,
        planDominarMundo
    ], Villano);
    return Villano;
}());
var lex = new Villano("Lex Luthor", "Super Mente");
lex.imprimirPlan();
lex.imprimir();
