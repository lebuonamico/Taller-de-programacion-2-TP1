function espacioDos(){
console.log()
console.log()
}
function espacioUno(){
console.log()
}
function separador(){
console.log("--------------------------------------------------------")
espacioUno()
}

function printError(texto){
console.log("\x1b[31m%s\x1b[0m", texto); // rojo
}
function printOk(texto){
    console.log("\x1b[32m%s\x1b[0m", texto); // verde
}

function arraysIguales(a, b) {
    let iguales = true

    if (a.length !== b.length) {
        iguales = false
    } else {
        let i = 0
        while (i < a.length && iguales) {
            if (a[i] !== b[i]) {
                iguales = false
            }
            i++
        }
    }

    return iguales
}

export default{espacioUno,espacioDos,separador,printError,printOk,arraysIguales}