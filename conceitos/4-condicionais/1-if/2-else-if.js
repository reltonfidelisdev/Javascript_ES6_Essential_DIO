
/*
    Condicional que direciona o fluxo de uma aplicação com base em trestes com resultados booleanos
    Se uma condição for verdadeira faça isso, 
    Senao, se essa outa condiçao for verdade, faça isso, 
    Senão faça isso.
*/

    // Sintaxe
    /*
    if (condiction){
        
    }else if () {

    }else{

    }
    */

    const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 25]

    myArray.forEach(item => {
        if(item % 2 === 0) {
            // O Resto é 0
            console.log(`O numero ${item} é divisível por 2.`);
        } else if (item % 3 === 0) {
            console.log(`O numero ${item} é divisível por 3.`);
        }else if(item % 5 === 0) {
            console.log(`O numero ${item} é divisível por 5.`);
        }
    }); // Nesse caso se a condição é atendida o fluxo é direcionado para dentro do bloco
        // ignorando os outros blocos mesmo se também atendere a condição como é o caso do
        // numero 6 (presente na posição 5 do array) que é divisível por 2 e por 3

        // Para contornar esse problema podemos fazer os testes apenas com blocos if, sem o else.
        myArray.forEach(item => {
        if(item % 2 === 0) {
            // O Resto é 0
            console.log(`O numero ${item} é divisível por 2.`);
        }
        if (item % 3 === 0) {
            console.log(`O numero ${item} é divisível por 3.`);
        }
        if(item % 5 === 0) {
            console.log(`O numero ${item} é divisível por 5.`);
        }
    })