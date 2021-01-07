/* Properties Decorators */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function editable(isEditable) {
    /* Retorna una funcion con 3 parametros donde:
    1- Constructor de la funcion si es clase estatica o el prototype de la clase si es un miembro de una instancia.
    2- Nombre del miembro.
    3- Property Descriptor donde es Object.defineProperty y esto recibe 3 parametros como argumento
    y tiene varias propiedades para ese objeto en este caso se utiliza el writable de esta manera
    aseguramos que dependiendo del valor pasado a la funcion editable se pueda o no modificar el plan.*/
    return function (target, nameProperty, descriptor) {
        if (!isEditable) {
            console.warn("No me haran cambiar de plan");
        }
        descriptor.writable = isEditable;
    };
}
function editableProp(isEditable) {
    /* Retorna una funcion con 2 parametros donde:
    1- Constructor de la funcion si es clase estatica o el prototype de la clase si es un miembro de una instancia.
    2- Nombre del miembro.
    Esta propiedad sera de solo lectura por lo que no se mostrara en el objeto cuando se imprima
    .*/
    return function (target, nameProperty) {
        var descriptor = {
            writable: isEditable
        };
        return descriptor;
    };
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano.prototype.plan = function () {
        console.log("Dominar el mundo");
    };
    __decorate([
        editableProp(false)
    ], Villano.prototype, "nombre", void 0);
    __decorate([
        editable(false)
    ], Villano.prototype, "plan", null);
    return Villano;
}());
var lex = new Villano("Lex Luthor");
console.log(lex);
