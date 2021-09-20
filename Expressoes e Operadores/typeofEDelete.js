/* 
* Operador unários
  - typeof
  - delete
*/

let name = 'viegas'
console.log(typeof name) //retorna o tipo de dado => String

// delete
const person = {
  name: 'viegas',
  age: 25
}

delete person.age //deleta uma propriedade do person

console.log(person)

// Retorna: {name: "viegas"}
