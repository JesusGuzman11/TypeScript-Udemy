function sumar(a: number, b: number): number {
  return a + b;
}

function saludar(nombre: string): string {
  return `I'm ${nombre}`;
}

function salvarMundo(): void {
  return console.log("El mundo está salvado!");
}

let myFunction: () => void;

/* myFunction = 10;

myFunction = sumar;
console.log(myFunction(5, 5));

myFunction = saludar;
console.log(myFunction("Jesús")); */

myFunction = salvarMundo;
myFunction();
