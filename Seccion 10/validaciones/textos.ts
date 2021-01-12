const MENSAJES: string[] = ["El texto es muy largo", "El texto es muy corto"];

function obtenerError(numError: number): string {
  if (numError > MENSAJES.length) {
    return "El código del mensaje no existe";
  }
  return MENSAJES[numError];
}

export { obtenerError };
