function concatNombres(nombre: string, ...rest: string[]): string {
  return `${nombre} ${rest.join(" ")}`;
}

let superman: string = concatNombres("Clark", "Joseph", "Kent");
let ironman: string = concatNombres("Antony", "Edward", "Tony", "Stark");

console.log(superman);
console.log(ironman);
