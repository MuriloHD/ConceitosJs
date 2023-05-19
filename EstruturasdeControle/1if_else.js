// Uma estrutrua simples que para uma condicão executa um bloco de codigo diferente

let nota = 6

if(nota >= 6 ){
    console.log("aprovado")
}



// Existe tambem o else que caso a condição do if nao seja verdadeira e executado um bloco de codigo diferente

if(nota >= 7){
    console.log("Aprovado direto")
}else{
    console.log("Reprovado")
}


// existe tambem o Else If que e quando temos varios blocos de codigo diferentes para serem executados

nota = 5.5

if(nota >= 7){
    console.log("Aprovado direto")
}else if(nota >= 5){
    console.log("Aprovado por pouco")
}else{
    console.log("reprovado")
}

// podemos concatenar varios operadores logicos dentro de um if

let n1 = 5.5
let n2 = 6
let n3 = 7

if(n1 >= 5 && (n2 >= 5 || n3 >= 6)){

}

if(n1 >= 5 && n2 >= 5 || n3 >= 6){

}

/*  && operador end
    p | q | p && q
    V | V |  V
    F | V |  F
    V | F |  F
    F | F |  F
 
*/

/*  || operador OU
    p | q | p && q
    V | V |  V
    F | V |  V
    V | F |  V
    F | F |  F

*/
if('3' == 3){
    console.log(true)
}
if('3' === 3){
    console.log(1)
}else{
    console.log("no")
}

/* 
    Temos tambem os operadores logicos
    > - maior
    < - menor
    == igual (Comparação)
    === igual (Comparacoa rigorosa)
    >= - maior igual
    <= - menor igual
    != diferente
*/

