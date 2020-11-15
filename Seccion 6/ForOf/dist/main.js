"use strict";
var superman = {
    nombre: "Clark Kent",
    poder: "Super Fuerza",
};
var batman = {
    nombre: "Bruce Wayne",
    poder: "Dinero",
};
var flash = {
    nombre: "Barry Allen",
    poder: "Super Velocidad",
};
var justiceLeague = [superman, batman, flash];
// Forma tradicional
for (var i = 0; i < justiceLeague.length; i++) {
    var element = justiceLeague[i];
    console.log("For Normal:", element);
}
// For in
for (var i in justiceLeague) {
    var element = justiceLeague[i];
    console.log("For In:", element);
}
// For of
for (var _i = 0, justiceLeague_1 = justiceLeague; _i < justiceLeague_1.length; _i++) {
    var hero = justiceLeague_1[_i];
    console.log("Hero:", hero.nombre);
    console.log("Power:", hero.poder);
}
