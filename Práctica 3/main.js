import { restar } from "./utils";

console.log("5 - 3 =", restar(5, 3));
console.log("79 - 10 =", restar(79, 10));
console.log("778 - 1 =", restar(778, 1));


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