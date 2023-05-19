//  Em JavaScript, as funções são blocos de código 
// reutilizáveis que podem ser definidos e chamados em diferentes partes de um programa.

function calculoDaMedia(n1,n2){
    console.log(n1/n2)

}

// E importante saber o contexto ja que as variaveis basicas são passadas como valor e as variaveis que são objetos são passadas 
// como referencia

let n1 = 5

let n2 = 5

function passagemPorValor(n1,nteste = 1){
    n1 = 6
    console.log(n1)

}
passagemPorValor(n1)
console.log(n1)


arr = [0,1,2,3]

function removerElementoDoArray(array){
    array.pop()
    console.log(array)
}
removerElementoDoArray(arr)
console.log(arr)


// conseguimos tbm colocar funcões em variaveis 
const soma = function(a, b) {
    return a + b;
  };
var resultadoSoma = soma(n1,n2)

console.log(resultadoSoma)

  