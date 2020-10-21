"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* ----------------------------- Objetos Basicos ---------------------------- */
var flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Super velocidad", "Viajar en el tiempo"],
};
// flash.padres = []
/* flash = {
  nombre: "Clark Kent",
  edad: 500,
  poderes: ["Super fuerza"]
} */
/* --------------------------- Objetos Especificos -------------------------- */
var superman = {
    nombre: "Clark Kent",
    edad: 35,
    poderes: ["Super fuerza", "Volar"],
    getNombre: function () {
        return this.nombre;
    },
};
superman.getNombre;
var batman = {
    nombre: "Bruce Wayne",
    edad: 30,
    poderes: ["Dinero", "Ingenieria"],
    getNombre: function () {
        return this.nombre;
    },
};
batman.getNombre;
