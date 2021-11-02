(() => {
    let teste = 'valor da funcao';
    console.log(`Valor dentro da função: "${teste}"`);

    if(true) {

        // let e const respeitam o escopoo de bloco 
        // dessa forma, a variável teste criada na linha 2 só aparecerá no log da linha 15
        // da mesma forma, a variável teste criada na linha 10 só existe no log da linha 12

        let teste = 'valor if';
        console.log(`Valor dentro do if: "${teste}"`);
    }

    console.log(`Valor após a execução do if: ${teste}`)

})();