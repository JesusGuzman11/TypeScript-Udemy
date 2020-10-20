import { Heroe } from "../utils/types";

let test: string | number | Heroe = "Jesus";

test = 10;

test = {
  nombre: "Annie",
  edad: 26,
  poderes: ["Super Mujer", "Inteligencia"],
  getNombre() {
    return `Annie`;
  },
};

test.getNombre;
