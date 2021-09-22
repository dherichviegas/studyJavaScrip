/**
 *  Functions () constructor
 
 - expressão new: Retorna um objeto
 - criar um novo objeto: com suas propriedades
 - this keyword: faz o molde desse novo objeto
 
*/

// Exemplo 1:

function Person(name) {
  this.name = name
}

const dherich = new Person('viegas') //modelo para criar vários objetos //instanciando novo objeto
const diele = new Person('Andrade')

console.log(dherich)
console.log(diele)

// Exemplo 2:
function Person(name) {
  this.name = name
  this.walk = function () {
    return 'andando'
  }
}

const dherich = new Person('Viegas') //modelo para criar vários objetos //instanciando novo objeto
const diele = new Person('Andrade')

console.log(dherich.walk())
console.log(diele.walk())

// Exemplo 3:
function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + ' está andando' // retorna: viegas está andando
    // retorna: andrade está andando
  }
}

const dherich = new Person('Viegas') //modelo para criar vários objetos //instanciando novo objeto
const diele = new Person('Andrade')

console.log(dherich.walk())
console.log(diele.walk())
