/**
 *  Manipulando Strings e Arrays
 *
 *
  Separe um texto que contem espaços, em um novo Array onde cada texto é uma posição do Array. Depois disso,       transforme o Array em um texto e onde eram espaços coloque _ (underline)
 * 
 */

let phrase = 'The next level is real'
let myArray = phrase.split(' ') //transforma de String para Array (Split) em cada palavra
console.log(myArray)

let phraseWithUnderline = myArray.join('_') //transforma de Array para String (Join) adionando _ entre as palavras
console.log(phraseWithUnderline)
