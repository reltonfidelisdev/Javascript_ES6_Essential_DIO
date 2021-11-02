const name = 'Relton';

// Nao podemos alterar o valor de uma constante
//name = 'RELTON'; //TypeError: Assignment to constant variable.

const user = {
    name: 'Relton'
};

// mas se for um objeto, podemos alterar o valor da suas propriedades
user.name = 'RELTON';

// Não podemos fazer o objeto "apontar" pra outro lugar
user = { //TypeError: Assignment to constant variable.
    name: 'Relton'
};

const persons = ['Relton', 'Josy', 'Fábio'];

//Podemos adicionar novos itens
persons.push('Ellen');

// Podemos remover algum item
persons.shift();


// Podemos alterar diretamente uma posição do array
persons[2] = "Rian";

// Mas também não podemos "apontar" pra outro endereço na memória
persons = ['foo', 'bar']; //TypeError: Assignment to constant variable.