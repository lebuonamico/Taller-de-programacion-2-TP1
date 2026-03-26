import { leerArchivoComoString, escribirTextoEnArchivo } from './src/utils/fileUtils.js'
import transformUtils from './src/utils/transformUtils.js'

let setA, setB, setC, setD
let arrA, arrB, arrC, arrD
const separador = ','
// leo los 4 archivos a memoria
setA = leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setA).in')
setB = leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setB).in')
setC = leerArchivoComoString('./in/imparesOrdenadosEntre1y999.in')
setD = leerArchivoComoString('./in/paresOrdenadosEntre2y1000.in')

// preparo los 4 arrays a partir de los archivo leidos
arrA = transformUtils.transformarStringEnArrayDeNumeros(setA, separador)
arrB = transformUtils.transformarStringEnArrayDeNumeros(setB, separador)
arrC = transformUtils.transformarStringEnArrayDeNumeros(setC, separador)
arrD = transformUtils.transformarStringEnArrayDeNumeros(setD, separador)


// combino los primeros dos arrays

// combino los cuatro arrays
