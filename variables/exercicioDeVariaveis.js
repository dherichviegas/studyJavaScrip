/*
 Exercicio 
*/

// 1. Declare uma variável de nome weight
let weight

// 2. Que tipode de dado é essa variável?
weight = 62

console.log(typeof weight)

/**
 * 3. Declare uma variável e atribua valores para cada um dos dados:
 * name: string
 * age: Number (interget)
 * stars: Number (Float)
 * isSubscribed: Boolean
 */

var name = 'Dherich'
var age = 31
var stars = 1.5
var isSubscribed = false

/**
 * 4. A variavel student abaixo é de que tipo de dados?
 *
 * 4.1. Atribua a ela as mesma propriedades e valores do exercício 3.
 *
 * 4.2. Mostre no console a seguinte mensagem:
 *  <name> de idade <age> pesa <weight> kg.
 *
 *  Atenção, sustitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
 */

let student = {
  name: 'Dherich',
  age: 31,
  weight: 62,
  isSubscribed: false
}
console.log(typeof student)

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} Kg`)

/**
 * 5. Declare uma variavel do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente Array vazio
 */

let students = []

/**
 * 6. Reatribua valor para a variavel acima, colocando dentro dela o objeto student da questão 4. Não copiar e colocar o objeto, mas usar o objeto criado e inserir ele no Array.
 */

students = [student]

console.log(students)

/**
 * 7. Coloque no console o valor da posição zero do Array acima
 */
console.log(students[0])

/**
 * 8. Crie um novo student e coloque na posição 1 do Array students
 */

const joao = {
  name: joao,
  age: 23,
  weight: 70,
  isSubscribed: true
}

students[1] = joao
console.log(students)

/**
 * 9. Sem rodar o código responda qual é a resposta do código abaixo e pq? Após sua resposta, rode o código e veja se vc acertou.
 *
 *  console.log(a)
 *  var a = 1
 *
 * R: resultado undefined , pois a delaração seja feita antes dela.
 */
