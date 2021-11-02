

//Corrying:
/*
É a técnica de a gente tranformar uma função com "n" parâmetros 
onde, para cada parâmetro, que nós recebemos, devemos criar uma função
*/

//ex:

function soma(a,b) {
    return a + b;
}

console.log(soma(2, 1));
console.log(soma(2, 2));
console.log(soma(2, 3));
console.log(soma(2, 4));
console.log(soma(2, 5));

// Perceba que sempre passamos o parâmetro (a) e que ele sempre tem o mesmo valor
// Podemos fazer com que esse parâmetro seja memorizado da seguinte forma

function soma(a) {
    return function(b) {
        return a + b;
    }
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));

// Hoisting = Levantar, Içar, Suspender algo
// Existem hoisting de variáveis e de funções
