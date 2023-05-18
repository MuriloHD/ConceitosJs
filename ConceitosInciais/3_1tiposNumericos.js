/*
    Tipos numericos
*/

const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1,peso2)

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const n1 = 5.3333
const n2 = 8.3000

// a multiplicação e a divisao tem prioridade sobre a soma e a 
const soma = (n1*6 + n2*4)/2 
console.log(soma)

//infinity
console.log(4/0)

console.log('3' + 2)
console.log('3' - 2)

//conversão de string em numero
console.log("10"/2)
console.log("10,2"/2)

// Lendidão em ponto flutuante
console.log(0.1 + 0.7)

// Conversão para numeros 
//console.log(10.toSting())
console.log((10).toString)


// Math para operacoes matematicas
console.log( Math.PI * Math.pow(3,2))



