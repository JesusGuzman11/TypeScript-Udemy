"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery");
var sweetalert2_1 = require("sweetalert2");
console.log("Hola mundo");
$(document).ready(function () {
    console.log("Pagina Cargada y lista");
    $("h1").text("Hola desde TypeScript");
    $("p").text("Texto desde TypeScript");
    $("h1").css("color", "red");
});
$("#botAlerta").on("click", function () {
    sweetalert2_1.default.fire({
        title: "Escribe tu usuario de Github",
        input: "text",
        inputAttributes: {
            autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Ver usuario",
        showLoaderOnConfirm: true,
        preConfirm: function (login) {
            return fetch("//api.github.com/users/" + login)
                .then(function (response) {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
                .catch(function (error) {
                var mensajeError = "";
                error.message === "Not Found"
                    ? (mensajeError = "Usuario no encontrado")
                    : (mensajeError = error.message);
                sweetalert2_1.default.showValidationMessage("Respuesta fallida: " + mensajeError);
            });
        },
        allowOutsideClick: function () { return !sweetalert2_1.default.isLoading(); },
    }).then(function (result) {
        if (result.isConfirmed) {
            sweetalert2_1.default.fire({
                title: "" + result.value.login,
                imageUrl: result.value.avatar_url,
            });
        }
    });
});
