type Heroe = {
  nombre: string;
  edad: number;
  poderes: string[];
  getNombre: () => string;
};

type Charles = {
  poder: string;
  estatura: number;
};

type Apocalipsis = {
  lider: boolean;
  miembros: string[];
};

type Automovil = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;
  disparar?: () => void;
};

type Villano = {
  nombre: string;
  edad: number;
  mutante: boolean;
};

export { Heroe, Apocalipsis, Automovil, Charles, Villano };
