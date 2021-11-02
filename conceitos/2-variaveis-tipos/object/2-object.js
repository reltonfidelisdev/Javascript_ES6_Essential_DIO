const user = {
    name: 'Relton',
    lastName: 'Fidelis'
};

// Recupera as chaves do objeto
console.log('\nPropridede "KEY" do objeto user:', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('\nOs valores das propriedades do objeto user:', Object.values(user));

// Retorna um array de arrays contendo [name_ prop , valor_prop]
console.log('\nLista de propriedades e valores', Object.entries(user));

// Fazer um merge na propriedade de um objeto
Object.assign(user, {fullName: 'Relton Fidelis Ferreira Lima'});
console.log('\nAdiciona propriedade "fullName" no objeto user', user);
console.log('\nRetorna um novo objeto fazendo um merge entre dois objetos\n', Object.assign({}, user, {age: 34}));
// Recebe dois parâmetros. O primeiro é o objeto que já temos
// O segundo são "N" objetos com as propriedades que queremos adicionar, ou seja, fazer o merge.

// Previne todas as alterações em um objeto
const newObject = {foo: 'bar'};
Object.freeze(newObject);
newObject.foo = 'Changes';
console.log(newObject);
delete newObject.foo;

// Permite apenas alterações de propriedades existentes no objeto
const person = {
    name: 'Rlton'
};
Object.seal(person); // Não permite criar nem deletar atributos de um objeto mas permite alterar os que já existem

person.name =  'Relton Fidelis';
delete person.name;
person.age = 34; // Por conta do "seal()" não conseguimos adicionar a propriedade age ao objeto person
console.log('\nA variavel "person" após as alteração: ', person);