const user = {
    firstName:  'Reltomn',
    lastName:   'Lima'
};

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.firstName} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName, user);

// Nesse código nós vemos a utilização de duas novidades do ECMAScript ES6/2018
// O Spead Opereator (... -> Para cada propriedade do objeto user, ele coloca junto do novo objeto )
// no caso acima, esperamos que a função "getUserWithFullName" retorne um novo objeto, com as mesmas propriedades
// + a nova propriedade que foi adicionada
// E a String Literal ( Uma forma mais elegante de concatenar strings e variáveis)

// Perceba que no log mostramos o objeto user e ele não sefreu alteração alguma
