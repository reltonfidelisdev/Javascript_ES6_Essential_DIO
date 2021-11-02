var teste = 'example';

(() => {
    console.log(`Valor dentro da da função "${teste}"`);

    // O que está acontecendo na verdade é que, por contra do hoisting, a variável "teste"
    // está sendo declarada aqui fora do if, por baixo dos panos
    if(true) {
        // Por conta do hoisting a variável "teste" vai ser elevada
        // var não entende escopo de bloco, logo, não respeira esse perímetro
        var teste = 'example';
        console.log(`Valor dentro do if "${teste}"`)
    }

    console.log(`Valor após a execução do if "${teste}"`);
})()