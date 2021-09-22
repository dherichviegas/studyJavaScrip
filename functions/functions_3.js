/**
 *  Functions
 
 - Exemplo 3. Rodando valores dentro da função
 
*/

let total = 0

// function expression
// number1 e 2 são Parâmetros - Parameters
const sum = function (number1, number2) {
  let total = number1 + number2
  return total
}

let number1 = 34
let number2 = 35

// console.log(`o numero 1 é ${number1}`)
// console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total) // let fora do scope
