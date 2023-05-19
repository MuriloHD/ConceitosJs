/*
Promises são objetos em JavaScript que representam a conclusão (ou falha) assíncrona de uma operação. 
Elas são usadas para lidar com operações assíncronas de forma mais limpa e eficiente, 
evitando o uso excessivo de callbacks aninhados. 
O conceito de Promises é uma parte essencial do JavaScript moderno e é amplamente utilizado para tratar tarefas assíncronas, 
como chamadas de API, manipulação de arquivos e operações de rede.
*/

let minhaPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      // Simulando uma operação assíncrona que leva 2 segundos
      let resultado = "Dados processados";
      resolve(resultado);
    }, 2000);
  });
  
  minhaPromise.then((resutado) => resutado + " d")
  .then((result) => console.log(result))
  .catch(function(erro) {
    console.log("Ocorreu um erro: " + erro);
  });

  