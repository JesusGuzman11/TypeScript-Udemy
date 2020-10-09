function nombreCompleto(nombre: string, apellido?: string): string {
  if (apellido) {
    return `${nombre} ${apellido}`;
  }
  return `${nombre}`;
}

let nombre = nombreCompleto("Barry", "Allen");

console.log(nombre);
