// Crear interfaces
interface Automovil {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil(auto: Automovil): void {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

let batimovil: Automovil = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... run!!!");
  },
};

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Villano {
  reir: boolean;
  comer?: boolean;
  llorar?: boolean;
}

let guason: Villano = {
  reir: true,
  comer: true,
  llorar: false,
};

function reir(guason: Villano): void {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
}

// Cree una interfaz para la siguiente funcion

interface ListaCiudadanos {
  (ciudadanos: string[]): number;
}

let ciudadGotica: ListaCiudadanos = (ciudadanos: string[]) => ciudadanos.length;

/* function ciudadGotica(ciudadanos: string[]): number {
  return ciudadanos.length;
} */

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Biografia {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

class Biography implements Biografia {
  constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: string
  ) {}
  imprimirBio() {
    console.log(
      `${this.nombre} tiene ${this.edad} es ${this.sexo} y está ${this.estadoCivil}`
    );
  }
}
