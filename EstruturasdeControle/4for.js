/*
For
Inicialização: 
    A parte de inicialização é executada apenas uma vez antes do início do loop. Geralmente,
    é onde você declara e inicializa uma variável de controle do loop, como um contador. 
    Por exemplo, var i = 0; define a variável i com o valor inicial 0.

Condição: 
    A condição é avaliada antes de cada iteração do loop. 
    Se a condição for verdadeira, o bloco de código dentro do for é executado. 
    Se for falsa, o loop é encerrado e a execução continua com a próxima instrução após o for. 
    Por exemplo, i < 10; define a condição para o loop continuar enquanto o valor de i for menor que 10.

Expressão final: 
    A expressão final é executada após cada iteração do loop. 
    Geralmente, é usada para atualizar a variável de controle do loop. 
    Por exemplo, i++ incrementa o valor de i em 1 após cada iteração 
    */

    for (var i = 0; i < 5; (i = i+2 +1 -1) ) {
        console.log("O valor de i é: " + i);
      }    


 /* 
  For in
Variável: 
    É uma variável que representa a propriedade atual do objeto em cada iteração. 
    Ela pode ser qualquer nome de variável válido em JavaScript.

Objeto: 
    É o objeto sobre o qual o for...in será iterado. 
    Pode ser um objeto literal, 
    um objeto criado por uma função construtora ou qualquer objeto em JavaScript.

Código a ser executado para cada propriedade: 
    É o bloco de código que será executado para cada propriedade do objeto. 
    Dentro deste bloco, você pode acessar a propriedade atual usando a variável definida no for...in. */     

    var pessoa = {
        nome: "João",
        idade: 30,
        profissao: "Engenheiro"
      };
      
      for (var propriedade in pessoa) {
        console.log(propriedade + ": " + pessoa[propriedade]);
      }