let esSuperman: boolean = true;
let esBatman: boolean;
let esAcuaman: boolean = true;

if (esSuperman) {
  console.log("Estamos salvados")
} else {
  console.log("Opps")
}

esSuperman = convertirClark()

if (esSuperman) {
  console.log("Estamos salvados")
} else {
  console.log("Opps")
}

function convertirClark() {
  return false
}