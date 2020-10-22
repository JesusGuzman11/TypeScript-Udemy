/* -------------------------- Este es un comentario ------------------------- */
let nombre2: string = "Jesus";
let edad2: number = 30;
/* ---------------------- Funcion que retorna un string --------------------- */
function imprimir(nombre: string, edad: number): string {
  return `Tu nombre es: ${nombre} y la edad es ${edad}`;
}
/* -------------------------------------------------------------------------- */
let mensaje2: string = imprimir(nombre2, edad2);
/* ------------------------- Console Log de mensaje ------------------------- */
console.log(mensaje2)
