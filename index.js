let quien = ["mi perro", "mi gato", "mi hijo", "mi mamá", "mi vecino"];
let que = ["la comió", "se sentó en ella", "la botó","la aplastó","la rompió"];
let cuando = ["ayer", "justo antes de comenzar la clase", "mientras almorzaba", "cuando estaba en misa", "por la noche, mientras dormía"]

function excuseGenerator (arregloQuien, arregloQue, arregloCuando) {
    let aleatorioQuien = Math.floor(Math.random() * arregloQuien.length);
    let aleatorioQue = Math.floor(Math.random() * arregloQue.length);
    let aleatorioCuando = Math.floor(Math.random() * arregloCuando.length);

    return quien[aleatorioQuien] + " " + que[aleatorioQue] + " " + cuando[aleatorioCuando] + "."
}

let randomExcuse = excuseGenerator(quien, que, cuando)
console.log (randomExcuse)

const parrafo = document.querySelector("#excuse");
parrafo.innerHTML = randomExcuse
