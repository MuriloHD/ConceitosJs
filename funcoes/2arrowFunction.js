/*
 A partir do ECMAScript 6 (ES6), também é possível usar as arrow functions (funções de seta) para definir funções de forma mais concisa. 
 Elas têm uma sintaxe reduzida e um comportamento ligeiramente diferente em relação às funções tradicionais.
*/

 const arrowFunction =  (a) => {
    return "arrow function"
 } 

 const arrowFunctionRetornoInplicito = () => "retorno implicito"
console.log(arrowFunctionRetornoInplicito())
 // As arrows functions tem uma diferencia de contexto em relação a outra forma de declaração certas definicoes como this