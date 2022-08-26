let quien = ["mi perro", "mi gato", "mi hijo", "mi mamá", "mi vecino"];
let que = ["la comió", "se sentó en ella", "la botó","la aplastó","la rompió"];
let cuando = ["ayer", "justo antes de comenzar la clase", "mientras almorzaba", "cuando estaba en misa", "por la noche, mientras dormía"]

function excuseGenerator (){
    return ((quien[Math.floor(Math.random() * quien.length)]) +" "+ (que[Math.floor(Math.random() * que.length)]) +" "+ (cuando[Math.floor(Math.random() * cuando.length)]) +".")
}

console.log (excuseGenerator())