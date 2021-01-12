"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerError = void 0;
var MENSAJES = ["El texto es muy largo", "El texto es muy corto"];
function obtenerError(numError) {
    if (numError > MENSAJES.length) {
        return "El código del mensaje no existe";
    }
    return MENSAJES[numError];
}
exports.obtenerError = obtenerError;
