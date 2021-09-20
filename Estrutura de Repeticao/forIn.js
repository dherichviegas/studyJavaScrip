/**

  Estrutura de Repetição: FOR...IN

*/

// criar um loop em cima de um objeto, pegando as propriedades do objeto

let person = {
  name: 'Viegas',
  age: 31,
  weight: 66
}

for (let proprety in person) {
  console.log(proprety)
}
/*
  Retorna: 
    name
    age
    weight
*/

// Exemplo 2: Acessar uma propriedade de person
let person = {
  name: 'Viegas',
  age: 31,
  weight: 66
}

for (let proprety in person) {
  console.log(person['age']) //opção 1
  console.log(person.name) //  opção 2
  console.log(person[proprety]) // opção 3
}
