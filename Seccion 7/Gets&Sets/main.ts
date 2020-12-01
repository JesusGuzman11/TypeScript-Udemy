/* Gets y Sets */

class Avenger {
  private _nombre: string | undefined;
  constructor(nombre?: string) {
    this._nombre = nombre;
  }

  public get nombre(): string {
    if (this._nombre) {
      return this._nombre;
    } else {
      return "No tiene un nombre el avenger ";
    }
  }

  public set newNombre(nombre:string) {
    console.log("Se llamo el set newNombre")
    if (nombre.length <= 3) {
      throw new Error("Nombre con 3 letras o menos");
    }
    this._nombre = nombre
  }
}

const ironman = new Avenger();
console.log(ironman.nombre);
ironman.newNombre = "Iro"
console.log(ironman.nombre);
