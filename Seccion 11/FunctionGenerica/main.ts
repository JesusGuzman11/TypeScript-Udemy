/* Funciones Genericas */

function regresar<T>(param: T) {
  return param;
}

console.log(regresar(15.123456).toFixed(2));
console.log(regresar("Jesus Guzman").toUpperCase());
console.log(regresar(new Date()).toLocaleDateString());
