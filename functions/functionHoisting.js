/**
 *  Functions
 
 - funcion hoisting
 
*/

// é como se a funcition estivess antes da chamado do sayMyName(), sofrendo assim a eleção
// Obs: não podemos declarar um const, let ou var para recebecer a function pois terá erro de referencia.

sayMyName()

function sayMyName() {
  console.log('Viegas')
}
