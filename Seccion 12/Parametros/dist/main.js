/* Params Decorators */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function parametro(target, name, index) {
    /* Es una funcion con 3 parametros donde:
    1- Constructor de la funcion si es clase estatica o el prototype de la clase si es un miembro de una instancia.
    2- Nombre del miembro.
    3- Index o posicion del parametro.*/
    console.log(target);
    console.log(name);
    console.log(index);
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano.prototype.imprimirPlan = function (plan, mensaje) {
        if (plan) {
            console.log("El plan es: " + mensaje);
        }
        else {
            console.log(mensaje);
        }
    };
    __decorate([
        __param(1, parametro)
    ], Villano.prototype, "imprimirPlan", null);
    return Villano;
}());
var lex = new Villano("Lex Luthor");
lex.imprimirPlan(true, "Dominar el mundo");
