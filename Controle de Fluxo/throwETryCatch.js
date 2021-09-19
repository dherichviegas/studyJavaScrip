/*
    Throw e Try/Catch
    - capturar erros na aplicação.
*/

// Throw (desparar, lançar)
function sayMyName(name = '') {
  if (name === '') {
    throw new Error('Nome é obrigatório')
  }
  console.log('depois do erro')
}

//Try (tentar) ... catch (pegar,capturar)

try {
  sayMyName() // se rodar fora do try dá erro por não pegar o erro.
} catch (e) {
  console.log(e)
}

console.log('depois do try catch')

/*##########################
Com o nome na função:
*/
function sayMyName(name = '') {
  if (name === '') {
    throw new Error('Nome é obrigatório')
  }
  console.log(name)
}

//Try (tentar) ... catch (pegar,capturar)
try {
  sayMyName('viegas') // se rodar a função fora do try dá erro.
} catch (e) {
  console.log(e)
}

console.log('depois do try catch')
