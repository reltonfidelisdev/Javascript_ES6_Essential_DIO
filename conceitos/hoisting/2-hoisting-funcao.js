
/*
    No caso das funções, o hoisting eleva a função como um todo
    de modo que, mesmo que a função seja chamada antes da sua criação,
    ela é execultada sem nenhum problema.
 */

function fn() {
    log('Hoisting de Função');

    function log(value){
        console.log(value);
    }
}

fn();

// Por debaixo dos panos o hoisting faz:
/**
 function fn() {
     function log(value) {
         console.log(value);
     }
 }
 */

// Uma boa prática é sempre configurar o nosso linter pra não permitir isso
// dessa forma melhoramos a qualidade do nosso código
// Em um senário real os arquivos podem ter 100, 200 ou até mais linhas
// Então, nós sempre devemos sempre criar as funções antes de fazer uma chamada