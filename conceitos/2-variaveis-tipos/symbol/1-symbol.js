const symbolOne = Symbol();
const symbolTwo = Symbol();

// Symbols são únicos!
console.log('symbolOne é igual a symbolTwo?', symbolOne === symbolTwo);

// Previnir conflito entre nomes de propriedades
const nameSymbolOne = Symbol('name');
const nameSymbolTwo = Symbol('name');

const user = {
    [nameSymbolOne]: 'Relton',
    [nameSymbolTwo]: 'Outro Nome',
    lastName:        'Fidelis'
};

for ( const key in user) {
    if(user.hasOwnProperty(key)){
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log('Caves do objeto user: ', Object.keys(user));
console.log('Valor das chaves do objeto user: ', Object.values(user));

// Exibir symbols de um objeto
console.log('Symbos registrados no objeto user:', Object.getOwnPropertySymbols(user));

// Acessando todas as propriedades do objeto
console.log('Todas as propriedades do objeto user: ', Reflect.ownKeys(user));

// Criar um enum
const directions = {
    UP: Symbol('UP'),
    DWON: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
}