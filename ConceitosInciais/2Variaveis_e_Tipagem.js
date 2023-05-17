var x = 3
let y = 4

// var x = 30
// let y = 40

// existem diferencas entre var e let

console.log(x,y)

x = 500
y = 11354

console.log(x,y)

const c = 100

// c = 100


// Como trabalhamos com varios tipos de dados, ao desenvolver uma linguagem e escolhido uma forma de tipagem dos dados 
// Js Utiliza a tipagem dinamica ou seja e fracamente tipada,C++ e uma linguagem fortemente tipada

let qualquerCoisa = 'legal'

console.log(qualquerCoisa)
console.log(typeof(qualquerCoisa))

qualquerCoisa = 100

console.log(qualquerCoisa)
console.log(typeof(qualquerCoisa))


// como JS e fracamente tipada temos uma grande importancia para escolher bons nomes 
let valor = 30
let idadeDoAtleta = 30


/*
    Tipos numeriscos
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


