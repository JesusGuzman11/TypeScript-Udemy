let nombre: string = "Jesus";
let edad: number = 30;

function imprimir(nombre: string, edad: number): string {
  nombre = nombre.toLowerCase();
  edad = edad + 10;
  return `Tu nombre es: ${nombre} y la edad es ${edad}`;
}

let mensaje: string = imprimir(nombre, edad);

console.log(mensaje)
