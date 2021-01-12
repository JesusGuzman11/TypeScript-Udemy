/* Mejor forma de declarar propiedades y usar metodo super*/

class Avenger {
  constructor(public nombre: string, private nombreReal: string) {
    console.log("Constructor Avenger llamado");
  }
  protected getNombre(): string {
    console.log("getNombre Avenger (protegido)");
    return this.nombre;
  }
}

class Xmen extends Avenger {
  constructor(a: string, b: string) {
    console.log("Constructor Xmen llamado");
    super(a, b);
  }
  public getNombre(): string {
    console.log("getNombre Xmen (publico)");
    return super.getNombre();
  }
}

const ciclope = new Xmen("Ciclope", "Scott");

console.log(ciclope.getNombre());
