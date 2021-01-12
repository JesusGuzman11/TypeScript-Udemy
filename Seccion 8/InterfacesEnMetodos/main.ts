/* Interfaces para los metodos */

interface FuncionDeDosNumeros {
  (number1: number, number2: number): number;
}

let sumar: FuncionDeDosNumeros = (a: number, b: number) => a + b;

let restar: FuncionDeDosNumeros = (number1: number, number2: number) => {
  return number1 - number2;
};
