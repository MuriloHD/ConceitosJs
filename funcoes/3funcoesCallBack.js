/*
    Funções de callback são funções que são passadas como argumentos para outras funções e são executadas posteriormente, geralmente em resposta a algum evento ou quando uma operação assíncrona é concluída. 
    Elas permitem que o código seja executado de forma assíncrona e sejam tomadas ações com base nos resultados obtidos.
*/

function fazerAlgoAsync(callback) {
    setTimeout(function() {
      // Simulando uma operação assíncrona que leva 2 segundos
      var resultado = "Dados processados";
      callback(resultado);
    }, 2000);
  }
  
  function callbackFuncao(resultado) {
    console.log("O resultado é: " + resultado);
  }
  
  fazerAlgoAsync(callbackFuncao);

  arr  = [3,2,1,0]
  let soma = 0
  arr.forEach((element,index) => {
        soma = soma + element
        console.log(index)

  });
  console.log(soma)

