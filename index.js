import fileUtils from './src/utils/fileUtils.js'
import transformUtils from './src/utils/transformUtils.js'
import apareo from './src/apareo.js'

const separador = ','
// leo los 4 archivos a memoria
const setA = fileUtils.leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setA).in')
const setB = fileUtils.leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setB).in')
const setC = fileUtils.leerArchivoComoString('./in/imparesOrdenadosEntre1y999.in')
const setD = fileUtils.leerArchivoComoString('./in/paresOrdenadosEntre2y1000.in')
console.log('Los cuatro sets fueron asignados');

// preparo los 4 arrays a partir de los archivo leidos
const arrA = transformUtils.transformarStringEnArrayDeNumeros(setA, separador)
const arrB = transformUtils.transformarStringEnArrayDeNumeros(setB, separador)
const arrC = transformUtils.transformarStringEnArrayDeNumeros(setC, separador)
const arrD = transformUtils.transformarStringEnArrayDeNumeros(setD, separador)
console.log('Los cuatro arrays fueron asignados');


// combino los primeros dos arrays
const dosArrComb = apareo.combinarDosArrays(arrA, arrB)
const textoCombinadoDosArr = transformUtils.transformarArrayDeNumerosAUnSoloString(dosArrComb, separador)
fileUtils.escribirTextoEnArchivo('./out/combinado.out', textoCombinadoDosArr, true)
console.log('Los primeros dos arrays fueron combinados en el archivo combinado.out');

// combino los cuatro arrays
const nArrComb = apareo.combinarNArrays([arrA, arrB, arrC, arrD])
const textoCombinadoNArr = transformUtils.transformarArrayDeNumerosAUnSoloString(nArrComb, separador)
fileUtils.escribirTextoEnArchivo('./out/combinado2.out', textoCombinadoNArr, true)
console.log('Los cuatro arrays fueron combinados en el archivo combinado2.out');

