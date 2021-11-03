/*
    Condicional que direciona o fluxo de uma aplicação com base em trestes com resultados booleanos
    Se uma condição for verdadeira faça isso, senao, faça isso.
*/

    // Sintaxe
    /*
    if (condiction){
        
    }
    */
    var condictionOne = true;
    if (condictionOne == true) {
        console.log('A condição é verdadeira. Execute os comandos abaixo', condictionOne);
    }

    const arr = [0, 1, 2, 3, 4, 5]

    arr.forEach(item => {
        if(item % 2 == 0) {
            console.log(`O número ${item} é par`)
        }else{
            console.log(`O número ${item} é ímpar`)
        }
    });