
// O object permite que sejam definidos atributos para ele
// Ele segue uma estrutura do tipo chave: valor

let user = {
    name: 'Relton'
};

// Alterando a propriedade de um objeto
user['name'] = 'Outro nome bonito';
user['name'] = 'Outro nome mais bonito ainda';

const prop = 'name'
user[prop] = 'Mais um nome aqui'

// Adicionando uma nova propriedade a um objeto
user.lastName = 'Fidelis';
console.log(`\nO objeto "user" está assim:`, user);

// Deletando uma propriedade
delete user.name;

console.log(`Depois de deletar uma propriedade, \nO objeto "user" ficou assim:`, user);