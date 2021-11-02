const myNumber = 12.4032;

// Transforma numero para string
const numberAsString = myNumber.toString();
console.log('Numero transformado em string: ', myNumber);
console.log(typeof(numberAsString));

// Retorna numero com uma quantidade de casa decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimals);

// Transforma uma stgring em float
console.log('\nString parseada para float', parseFloat('30.22'));
// Lembrando que se a ultima casa decimal for zero o oarseFloat omite ela
// caso seja necessário retornar também o '0' podemos utilizar a função toFixed()

// Transforma uma string em int
console.log('\nString parseada para int', parseInt('31.55'));