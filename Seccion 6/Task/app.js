// Convierta este archivo de ES5 a ES6 - JavaScript 2015
// OJO: No es a TypeScript, solo JAVASCRIPT

// ==============================
//  Spiderman info
// ==============================
// Constantes?
const HEROE = "Spiderman";

// Declaracion de variables?
let spiderman = "Peter Parker";
let venom = "Eddie Brock";

// Destructuracion de arreglos?
let versiones = ["Spider-Man 2099", "Spider-Girl", "Ultimate Spider-Man"];

let [spiderman2099, spidergirl, ultimate] = versiones;

console.log(spiderman2099);
console.log(spidergirl);
console.log(ultimate);

// Destructuracion de objetos?
let villanos = {
  venom: "Eddie Brock",
  carnage: "Cletus Kasady",
  sandman: "William Baker",
};

let { venom: venomObject, carnage, sandman } = villanos;

console.log(venomObject);
console.log(carnage);
console.log(sandman);

// Ciclo for Of?
/* for(let i=0; i<= versiones.length - 1; i++){
  let spider = versiones[i];
  console.log(spider);
} */

for (const version of versiones) {
  console.log(version);
}
