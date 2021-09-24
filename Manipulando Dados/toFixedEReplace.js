/**
 *  Manipulando Strings e Numeros
 *
 *
 *  Transformar um number quebrado com 2 casas decimais e trocar o ponto por vífugla
 */

let number = 546.464465

console.log(number.toFixed(2).replace('.', ','))

// toFixed(2) para fixar duas casas depois do ponto (e tbm transforma o number em string)
// replace para trocar o ponto por vírgula
// o number só é number se tiver o ponto, com a virgula ele type conversion em string
