/* Constructor Private*/

class Apocalipsis {
  static instancia: Apocalipsis;

  private constructor(public nombre: string) {}

  static llamarApocalipsis() {
    if (!Apocalipsis.instancia) {
      Apocalipsis.instancia = new Apocalipsis("Soy Apocalipsis... El Unico!");
    }

    return Apocalipsis.instancia;
  }
}

/*
  let apocalipsis = new Apocalipsis("Soy Apocalipsis...El unico!")
  El errror de la siguiente declaracion es:
  Constructor of class 'Apocalipsis' is private and only accessible within the class declaration.
*/

let apocalipsis = Apocalipsis.llamarApocalipsis();

console.log(apocalipsis);
