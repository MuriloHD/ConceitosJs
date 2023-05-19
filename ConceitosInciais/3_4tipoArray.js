const valores = [5.1, 33, 22, 21]

//Estrutura por indice 
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10


valores[10] = 20

console.log(valores)

console.log(valores.length)

valores.push(" texto")
valores.push(true,NaN)

console.log(valores)

//remover ultimo elemento
console.log(valores.pop())

delete valores[0]
