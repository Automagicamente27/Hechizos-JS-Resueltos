const leer = require("prompt-sync")();

const NOMBRE_MATERIAL_1 = "varita";
const NOMBRE_MATERIAL_2 = "libro";
const MULTIPLICADOR_VARITA = 3;
const MULTIPLICADOR_LIBROS = 2;

function main() {
    let cantEstudiantes = "def cant estudiantes";
    let cantMaterial1 = -1;
    let cantMaterial2 = -1;

    console.log("Ingresa cantidad de estudiantes");
    cantEstudiantes = Number(leer());
    console.log("Ingresa cantidad de "+NOMBRE_MATERIAL_1+"s");
    cantMaterial1 = Number(leer());
    console.log("Ingresa cantidad de "+NOMBRE_MATERIAL_2+"s");
    cantMaterial2 = Number(leer());
    
    console.log("Cantidad de estudiantes hoy: "+cantEstudiantes);
    console.log("Total de materiales para hoy: "+(cantMaterial1 * MULTIPLICADOR_VARITA + cantMaterial2 * MULTIPLICADOR_LIBROS));
}

main();