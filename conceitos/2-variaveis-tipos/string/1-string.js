// retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

// Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nAaary com as posições separadas pelo delimitador:', splittedText);

// Busca um valor e substitui por outro
const replacedTest = 'Texto'.replace('Text', 'txeT') 
// O primeiro parâmetro é o que nós quermos procurar
// O segundo é o que nós queremos substituir
// Aceita Regex
console.log('\nSubstituição de valor:', replacedTest);

// Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string:', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira até a penutima:', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda até a última:', secondToEnd);

const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
// O primeiro argumento é o de onde queremos começar
// o segundo diz até onde partindo do começo
console.log('\nAs duas primeiras letras são:', twoCharsBeforeFirstPos);

