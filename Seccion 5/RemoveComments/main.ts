/* -------------------------- Este es un comentario ------------------------- */
let nombre: string = "Jesus";
let edad: number = 30;
/* ---------------------- Funcion que retorna un string --------------------- */
function imprimir(nombre: string, edad: number): string {
  return `Tu nombre es: ${nombre} y la edad es ${edad}`;
}
/* -------------------------------------------------------------------------- */
let mensaje: string = imprimir(nombre, edad);
/* ------------------------- Console Log de mensaje ------------------------- */
console.log(mensaje)
