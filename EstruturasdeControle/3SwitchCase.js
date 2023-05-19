/*Claro! Em JavaScript, o switch case é uma estrutura condicional que permite testar uma expressão 
em várias condições diferentes. 
Ele funciona da seguinte maneira: */
var diaDaSemana = 1;
var mensagem;

switch (diaDaSemana) {
  case 1:
    mensagem = "Hoje é segunda-feira.";
    break;
  case 2:
    mensagem = "Hoje é terça-feira.";
    break;
  case 3:
    mensagem = "Hoje é quarta-feira.";
    break;
  case 4:
    mensagem = "Hoje é quinta-feira.";
    break;
  case 5:
    mensagem = "Hoje é sexta-feira.";
    break;
  case 6:
    mensagem = "Hoje é sábado.";
    break;
  case 7:
    mensagem = "Hoje é domingo.";
    break;
  default:
    mensagem = "Dia inválido.";
    break;
}

console.log(mensagem);