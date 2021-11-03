let arr = [3, 5, 7];

arr.foo = 'hello';

for (let i in arr) {
    console.log(i); // Loga no console "0", "1", "2", "foo"
}

for(let i of arr) { // Não itera atributos que não sejam numeros
    console.log(i); // Logs "3", "5" "7"
}