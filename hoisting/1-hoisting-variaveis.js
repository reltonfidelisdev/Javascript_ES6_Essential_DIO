

function fn() {

    // O hoisting - É como se a variável text estivesse sendo declarada aqui.

    console.log(text); 
    
    // A variável existe mas o valor é undefined
    // Por que?
    // R: Porque no momento que a função console.log chama a variável,
    // não existe um valor atribuído a ela
    // e nós só sabemos o tipo de ima variável depois que atribuímos um valor a ela
    //...
    // Em outras linguagens como java, recebíamos um erro como ReferenceError ou algo do tipo.

    var text = 'Exemplo';

    console.log(text);
}

fn();