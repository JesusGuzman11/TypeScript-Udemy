import "jquery";
import Swal from "sweetalert2";

console.log("Hola mundo");

$(document).ready(function () {
  console.log("Pagina Cargada y lista");
  $("h1").text("Hola desde TypeScript");
  $("p").text("Texto desde TypeScript");
  $("h1").css("color", "red");
});

$("#botAlerta").on("click", function () {
  Swal.fire({
    title: "Escribe tu usuario de Github",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Ver usuario",
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      return fetch(`//api.github.com/users/${login}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .catch((error) => {
          let mensajeError: string = "";
          error.message === "Not Found"
            ? (mensajeError = "Usuario no encontrado")
            : (mensajeError = error.message);

          Swal.showValidationMessage(`Respuesta fallida: ${mensajeError}`);
        });
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${result.value.login}`,
        imageUrl: result.value.avatar_url,
      });
    }
  });
});
