"use strict";
/* Mejor forma de declarar propiedades y usar metodo super*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avenger = /** @class */ (function () {
    function Avenger(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
        console.log("Constructor Avenger llamado");
    }
    Avenger.prototype.getNombre = function () {
        console.log("getNombre Avenger (protegido)");
        return this.nombre;
    };
    return Avenger;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen(a, b) {
        var _this = this;
        console.log("Constructor Xmen llamado");
        _this = _super.call(this, a, b) || this;
        return _this;
    }
    Xmen.prototype.getNombre = function () {
        console.log("getNombre Xmen (publico)");
        return _super.prototype.getNombre.call(this);
    };
    return Xmen;
}(Avenger));
var ciclope = new Xmen("Ciclope", "Scott");
console.log(ciclope.getNombre());
