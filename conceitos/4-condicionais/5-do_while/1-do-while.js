/*
    O doWhile é um laço que executa um loop enquanto uma condição for verdadeira.
    Diferente do While, o doWhile executa pelo meno uma vez o bloco de codigo.
    Antes de verificar se a condição é verdadeira ou falsa.
*/

    //Sintaxe
    /*
    do{
        codigo..
    } while (condição);
    */
    var myDoWhileControl = 0;
    do {
        console.log('Passei pelo doWhile antes de verificar a condição!', myDoWhileControl)
        myDoWhileControl++;
        break;
    }while (myDoWhileControl < 5);