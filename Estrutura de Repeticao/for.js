/**

  Estrutura de Repetição: FOR

*/

for (let i = 0; i < 10; i++) {
  console.log(i) //retorna 1,2,3,4,5,6,7,8,9
}

// Break para a execução do loop
for (let i = 10; i > 0; i--) {
  if (i === 5) {
    break // a contagem para no 5.
  }
  console.log(i) //retorna 10, 9, 8, 7, 6
}

// Continue pula a execução do momento
for (let i = 10; i > 0; i--) {
  if (i === 5) {
    continue // a contagem pula o numero 5.
  }
  console.log(i) //retorna 10, 9, 8, 7, 6, 4, 3, 2, 1
}
