/*
 Scope
  - Escopo determina a visibilidad de alguma variável no JS
 
*/

/* # Block statement 
  
  { //Abrindo um bloco
    
    Aqui dentro é um bloco e podemos colocar qualquer código

  } //Fechando o bloco

  O bloco tbm criará um novo scopo chamdo "Block-scoped"
*/

console.log('> existe x antes do bloco?', x)
// var é global e local
// hoisting (elevação)
{
  var x = 0
}

console.log('> existe x depois do bloco?', x)
