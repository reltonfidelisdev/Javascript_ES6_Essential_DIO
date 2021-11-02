// Funções são objetos que permitem ser schamados "Callable"
function fn() {
    return 'Code here';
}

const arrowFunctionOne = () => 'Code here';
const arrowFunctionTwo = () => {
    // mais uma expressão
    if (true) {
        console.log('Uma condicional dentro da arrowFunctionTwo');
    }
    return console.log('Saindo da errow function');
}
arrowFunctionTwo();

// Funções também são objetos
fn.prop = 'Posso criar propriedades nas funções';
console.log(fn());
console.log(fn.prop);

// Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funções
const controlFnExec = () => fnParam => allowed => {
    if(allowed){
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);
handleFnExecution(true);
handleFnExecution();

// controlFnExec como função
function controlFnExec(fnParam) {
return function(allowed){
    if(allowed){
        fnParam();
    }
}
}

