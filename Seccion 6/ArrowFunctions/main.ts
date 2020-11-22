/* 
function sumar(a: number, b: number): number {
  return a + b;
}
*/
const sumar = (a: number, b: number): number => a + b;

console.log(sumar(2, 2));

/*
function darOrden(orden: string) {
  return `Hulk ${orden}`;
}
*/

const darOrden = (orden: string) => `Hulk ${orden}`;

console.log(darOrden("Smash!!!"));

type Capitan = {
  vengador: string;
  mensaje: () => void;
};

let capitanAmerica: Capitan = {
  vengador: "Hulk",
  mensaje: function (): void {
    setTimeout(() => {
      console.log(this.vengador + " Smash!!!");
    }, 1000);
  },
};

capitanAmerica.mensaje();
