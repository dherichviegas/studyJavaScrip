/**
 *  Manipulando Arrays
 *
 */
let techs = ['html', 'css', 'js']
//adicionar um item no fim
techs.push('nodejs')

//adicionar no começo
techs.unshift('sql')

//remover do fim
techs.pop()

//remover do começo
techs.shift()

// pegar somente alguns elementos do array
console.log(techs.slice(1, 3)) //primeiro argunmento responde a posição no array, o segundo argumento responde a posição final do array (até onde ele vai, final do array)

//remover 1 ou mais itens em qlqr posição do array
techs.splice(1, 2) //primeiro argumento é do index do array, e o segundo quantos elementos quer tirar do array

// encontrar a posição de um elemento do array
let index = techs.indexOf('css')

console.log(techs)
