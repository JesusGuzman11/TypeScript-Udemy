/* Class Generics */

class Cuadrado<T extends number | string> {
  base!: T;
  altura!: T;
  area(): number {
    return +this.base * +this.altura;
  }
}

let cuadrado = new Cuadrado<number | string>();

cuadrado.base = "10";
cuadrado.altura = 10;

console.log(cuadrado.area());
