/*
    O While é um laço que executa um loop enquanto uma condição for verdadeira.
*/

    //Sintaxe
    /*
    while(condição){
        codigo..
    }
    */

    var whileControl = 0;
    var log = 0;

    while (whileControl < 10) {
        whileControl++; // Se não incrementar essa variável o while vai entrar em loop infinito!
        console.log(log+=whileControl);
    }