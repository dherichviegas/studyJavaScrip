/*
    If - Else

    - Mudam o fluxo da aplicação
*/

//Exemplo 1:

let temperature = 36.5

if (temperature >= 37) {
  console.log('Febre')
} else {
  console.log('saudável')
}

//Exemplo 2:

let temperature = 37.5

if (temperature >= 37) {
  console.log('Febre')
} else if (temperature < 37.7 && temperature >= 37) {
  console.log('Febre moderada')
} else {
  console.log('saudável')
}

//Exemplo 3: Tranformando as condicionais em variáveis

let temperature = 37.5
let highTemperature = temperature >= 37
let mediumTemperature = temperature < 37.7 && temperature >= 37

if (highTemperature) {
  console.log('Febre')
} else if (mediumTemperature) {
  console.log('Febre moderada')
} else {
  console.log('saudável')
}

// Exemplo 4: if e else aceitam valores truthy e falsy

if (0) {
  //exemplo de valor falsy
  console.log('Febre')
} else {
  console.log('saudável')
}

if ({}) {
  //exemplo de valor truthy
  console.log('Febre')
} else {
  console.log('saudável')
}
