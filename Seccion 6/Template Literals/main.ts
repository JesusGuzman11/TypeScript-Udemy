let nombre: string = "Jesús";
let nombre2: string = "Annie";

function getNombres(): string {
  return `${nombre} X ${nombre2}`;
}

let mensaje: string = `1.Esta es una linea normal.
2.Hola ${nombre}.
3.Amor verdadero : ${getNombres()}
4.${5 + 7}
`;
console.log(mensaje);
