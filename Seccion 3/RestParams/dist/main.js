"use strict";
function concatNombres(nombre) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return nombre + " " + rest.join(" ");
}
var superman = concatNombres("Clark", "Joseph", "Kent");
var ironman = concatNombres("Antony", "Edward", "Tony", "Stark");
console.log(superman);
console.log(ironman);
