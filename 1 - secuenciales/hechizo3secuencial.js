const leer = require("prompt-sync")();

const MIN_GRAMOS = 5;
const MAX_GRAMOS = 10;
const TIEMPO_EXACTO = 3;

function main() {
    let gramosUsados = -1;
    let tiempoPreparacion = -1;
    let gramosCorrecto = false;
    let tiempoCorrecto = false;
    console.log("Ingresa cantidad de gramos usados del ingrediente principal");
    gramosUsados = Number(leer());
    console.log("Ingresa el tiempo de preparacion final");
    tiempoPreparacion = Number(leer());

    gramosCorrecto =(gramosUsados >= MIN_GRAMOS && gramosUsados <= MAX_GRAMOS)
    tiempoCorrecto = tiempoPreparacion === TIEMPO_EXACTO;

    console.log("Apto para consumo: "+ (gramosCorrecto && tiempoCorrecto));
}

main();