/**
 *  Manipulando Arrays
 *
 * Contar elementos de um Array
 */

console.log(['a', 'b', 'c'].length)

//vários tipos de elementos dentro do Array
console.log([
  'a', //string
  { type: Array }, //obejto
  function () {
    return 'Olá'
  } //função
])
