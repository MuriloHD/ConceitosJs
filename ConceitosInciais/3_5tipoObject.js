const produt = {}

//coleção de chave - valore
produt.nome =  'celular '
produt.preco = 3333
produt.versoes = [ 3.1,3.4,4.1]
produt.vendedores = [
    {
        nome:"adilson",
        idade:25
    },
    {
        nome:"Batista",
        idade:44
    }

]

console.log(produt.vendedores[0].nome)

console.log(produt)
//json - JavaScript Object Notation formato textual muito utilzado para comunicação entre sistemas
nome = 
`
{
    "nome":"amanda",
    "idade":25
}
`
console.log(JSON.parse(nome))