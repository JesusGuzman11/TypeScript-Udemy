function nombreCompleto(
  nombre: string,
  apellido: string,
  capitalizado: boolean = false
): string {
  if (capitalizado) {
    return `${capitalizar(nombre)} ${capitalizar(apellido)}`;
  }
  return `${nombre} ${apellido}`;
}

function capitalizar(palabra: string): string {
  return (
    palabra.charAt(0).toLocaleUpperCase() +
    palabra.substr(1).toLocaleLowerCase()
  );
}

let nombre = nombreCompleto("clark", "kent", true);

console.log(nombre);
