import { restar } from "./utils";

function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        if (usuario === "admin") {
            resolve("Acceso concedido");
        } else {
            reject("Acceso denegado");
        }
    });
}

verificarUsuario("admin")
    .then(res => console.log(res))
    .catch(err => console.log(err));

verificarUsuario("caleb")
    .then(res => console.log(res))
    .catch(err => console.log(err));


    function simularPeticionAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos obtenidos correctamente");
        }, 2000);
    });
}

async function ObtenerDatos() {
    console.log("Aguante... estan cargando los datos...");
    const resultado = await simularPeticionAPI();
    console.log(resultado);
}

ObtenerDatos();