const users = ['Relton', 'Fábio', 'Josy'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
};

persons = [ 
    {
        name: 'Relton', 
        age: 34, 
        gender: gender.MAN
    },
    {
        name: 'Fabio', 
        age: 7, 
        gender: gender.MAN
    },
    {
        name: 'Josy', 
        age: 51, 
        gender: gender.WOMAN
    }
];

// Retorna a quantidade de itens de um array
console.log(`\nO array persons tem ${persons.length} itens`);

// Verifica se é um array
persons.forEach((persons, index, arr)=> { // podemos pegar também o index do array e o próprio array
    console.log(`Nome: ${persons.name}`);
});

// Filtrar um array
const mens = persons.filter(persons => persons.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens);

// Retornar um novo
const personWithCourse = persons.map(persons => {
    persons.course = 'Introdução ao Javascript';
    return persons;
})

console.log('\nPessoas com a adição do curso:', personWithCourse);

// Transforma um array em outro tipo de dado
const totalAge = persons.reduce((age, persons) => {
    age += persons.age;
    return age
}, 0);

// soma da idade das pessoas
console.log('\nSoma de idade das pessoas:', totalAge);

// Juntando operações
const totalEvenAges = persons
                        .filter(persons => persons.age % 2 === 0)
                        .reduce((age, persons) => {
                            age += persons.age;
                            return age;
                        },0)

console.log('\nSoma de idade das pessoas que possuem idade par', totalEvenAges);