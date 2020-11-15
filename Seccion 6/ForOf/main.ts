type JusticeLeague = {
  nombre: string;
  poder: string;
};

let superman: JusticeLeague = {
  nombre: "Clark Kent",
  poder: "Super Fuerza",
};
let batman: JusticeLeague = {
  nombre: "Bruce Wayne",
  poder: "Dinero",
};
let flash: JusticeLeague = {
  nombre: "Barry Allen",
  poder: "Super Velocidad",
};

let justiceLeague: JusticeLeague[] = [superman, batman, flash];


// Forma tradicional
for (let i = 0; i < justiceLeague.length; i++) {
  const element = justiceLeague[i];
  console.log("For Normal:",element)
  
}

// For in
for (let i in justiceLeague) {
  const element = justiceLeague[i];
  console.log("For In:",element)
}

// For of
for (const hero of justiceLeague) {
  console.log("Hero:",hero.nombre);
  console.log("Power:",hero.poder);
}