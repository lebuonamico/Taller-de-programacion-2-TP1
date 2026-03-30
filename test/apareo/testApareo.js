import apareo from "../../src/apareo.js"
import util from "../util.js"

function runAll() {
    console.log("INICIO - Test Apareo")
    util.espacioUno()
    testCombinarDosArrays()
    util.espacioUno()
    testCombinarNArrays()
    util.espacioUno()
    console.log("FIN - Test Apareo")
}

function testCombinarDosArrays() {
    const arrA = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
    const arrB = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]
    const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
    console.log("-----TEST 1: Combina dos arrays de numeros ordenados -------")
    const arrApareo = apareo.combinarDosArrays(arrA, arrB)
    if (util.arraysIguales(result, arrApareo)) {
        util.printOk("TEST OK");
    } else {
        util.printError("ERROR");
    }

    util.separador()
}

function testCombinarNArrays() {
    const arrA = [1, 5, 9, 13]
    const arrB = [2, 6, 10, 14]
    const arrC = [3, 7, 11, 15]
    const arrD = [4, 8, 12, 16]
    const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    console.log("-----TEST 2: Combina N arrays de numeros ordenados -------")
    const arrApareo = apareo.combinarNArrays([arrA, arrB, arrC, arrD])
    if (util.arraysIguales(result, arrApareo)) {
        util.printOk("TEST OK");
    } else {
        util.printError("ERROR");
    }

    util.separador()
}
export default { runAll }