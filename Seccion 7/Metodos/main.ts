/* Metodos Public, Protected y Private */

class Avenger {
  public nombre: string = "";
  protected equipo: string = "";
  private nombreReal: string = "";

  private puedePelear: boolean = false;
  private peleasGanadas: number = 0;

  constructor(nombre: string, equipo: string, nombreReal: string) {
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
  }
  
  public infoAvenger(): void {
    let mensaje = `${this.nombre} su nombre real es ${this.nombreReal} y pertenece al equipo ${this.equipo}`;
    console.log(mensaje);
  }

  public cambiarEquipoPublico(nuevoEquipo:string):boolean{
    return this.cambiarEquipo(nuevoEquipo)
  }

  private cambiarEquipo(nuevoEquipo: string): boolean {
    if (nuevoEquipo === this.equipo) {
      return false;
    } else {
      return true;
    }
  }
}

let antman: Avenger = new Avenger("Antman", "Cap", "Scott Lang");

antman.infoAvenger();
console.log(antman.cambiarEquipoPublico("Cap"))

