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

// let e const

// const e let são locais e só funcionam no scopo onde foi criada
{
  // console.log('> existe y?', y)
  //Não irá funcionar antes mesmo estando dentro do bloco

  let y = 0
  console.log('> existe y?', y)
}
