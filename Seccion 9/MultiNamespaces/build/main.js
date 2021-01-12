var Validaciones;
(function (Validaciones) {
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        else {
            return true;
        }
    }
    Validaciones.validarFecha = validarFecha;
})(Validaciones || (Validaciones = {}));
var Validaciones;
(function (Validaciones) {
    function validarTexto(texto) {
        if (texto.length > 3) {
            return true;
        }
        return false;
    }
    Validaciones.validarTexto = validarTexto;
})(Validaciones || (Validaciones = {}));
/* Multiple NameSpaces */
var hoy = new Date();
if (Validaciones.validarFecha(hoy)) {
    console.log("Fecha Aceptada");
}
else {
    console.log("Fecha No Aceptada");
}
if (Validaciones.validarTexto("Barry Allen")) {
    console.log("Texto Aceptado");
}
else {
    console.log("Texto No Aceptado");
}
