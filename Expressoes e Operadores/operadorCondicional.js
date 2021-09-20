/*
 * Operadores Condicional (Ternário)
 */

// Dependendo da condição, nós recebemos valores diferentes - Condição então valor 1 se não valor 2

// condition  ?  value1   :   value2
//          então faça1  senão faça2

//exemplo 1: AND && (café da manhã top)
let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? 'café top' : 'café ruim'

// Exemplo2 : OR ||
const niceBreakfast = pao || queijo ? 'café top' : 'café ruim'

// Maior de 18
let age = 16

const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive) // rotorna "can't drive"
