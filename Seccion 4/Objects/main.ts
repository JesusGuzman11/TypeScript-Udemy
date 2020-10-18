import { Heroe } from "../utils/types";
/* ----------------------------- Objetos Basicos ---------------------------- */
let flash = {
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
let superman: Heroe = {
  nombre: "Clark Kent",
  edad: 35,
  poderes: ["Super fuerza", "Volar"],
  getNombre() {
    return this.nombre;
  },
};
superman.getNombre;

let batman: Heroe = {
  nombre: "Bruce Wayne",
  edad: 30,
  poderes: ["Dinero", "Ingenieria"],
  getNombre() {
    return this.nombre;
  },
};
batman.getNombre;

