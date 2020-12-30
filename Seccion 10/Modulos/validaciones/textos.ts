const MENSAJES: string[] = ["El texto es muy largo", "El texto es muy corto"];

function obtenerError(numError: number): string {
  return MENSAJES[numError];
}
