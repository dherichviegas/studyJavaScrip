/**
 *  Functions
 
 - funcions Scope
 
*/

// Exemplo 1:
// *** Os dois retornam o 'create video' ****
let subject = 'create video'

function createThink(subject) {
  return subject
}

console.log(subject)
console.log(createThink(subject))

// *********************************************** //

// Exemplo 2:
let subject = 'create video'

function createThink(subject) {
  subject = 'study'
  return subject
}

console.log(createThink(subject)) // retorna o 'study' pq está dentro da function e passando o parametro subject
console.log(subject) // retorna o 'create vídeo' pq está no scope maior

// ************************************************************* //

// Exemplo 2:
let subject = 'create video'

function createThink() {
  subject = 'study'
  return subject
}

console.log(createThink()) // sem passar o parametro subject a function subscreve o let, retorna 'study'
console.log(subject) // retorna o 'study'

// Exemplo 3:
let subject

function createThink() {
  subject = 'study'
  return subject
}

console.log(subject) // sem declarar o valor no let o subject fica undefined
console.log(createThink()) // sem passar o parametro subject  e a function retorna 'study'
console.log(subject) // subject atualizado depois de passar na function, retornando o study
