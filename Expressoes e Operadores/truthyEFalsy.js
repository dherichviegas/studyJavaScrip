/*
 * Type conversion (typecasting) VS type coersion
 */

console.log(Number('9') + 5)

/*
    FALSY
    Quando um valor é considerado false em contexto onde um booleano é obrigatório (condicionais e loops)
    Ternários.

    Ex:
    false
    0
    -0
    ""
    null
    undefined
    NaN
*/
console.log(0 ? 'verdadeiro' : 'falso') // todos os exemplos acima retornam false

/*
    TRUTHY
    Quando o valor é considerado True em contextos onde um booleano é obrigatório (condicionais e loops) Ternários.

    Ex:
    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log({} ? 'verdadeiro' : 'falso') // todos os exemplos acima retornam true
