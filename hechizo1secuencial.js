const leer = require("prompt-sync")();

const NOMBRE_INGREDIENTE_1 = "escarabajos de ojo de tigre";
const NOMBRE_INGREDIENTE_2 = "raíces de mandrágora";

function main() {
    let cantIngrediente1 = -1;
    let cantIngrediente2 = -2;

    console.log("Ingresa cantidad de "+NOMBRE_INGREDIENTE_1);
    cantIngrediente1 = Number(leer());
    console.log("Ingresa cantidad de "+NOMBRE_INGREDIENTE_2);
    cantIngrediente2 = Number(leer());

    console.log("El total de ingredientes es: "+ (cantIngrediente1 + cantIngrediente2));
}

main();