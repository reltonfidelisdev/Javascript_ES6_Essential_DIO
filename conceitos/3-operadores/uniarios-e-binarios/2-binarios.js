// Operador IN
// something in somethingItems

// Arrays
var arvores = new Array('pau-brasil', 'loreiro', 'cedro', 'carvalho', 'sicômoro');
console.log(0 in arvores); // Retona true
console.log(4 in arvores); // Retona true
console.log(6 in arvores); // Retona false
console.log("cedro" in arvores); // Retona false, devemos o indice

// Objetos predefinidos
console.log("PI" in Math);
var myString = new String('Uma string qualquer');
console.log("length" in myString) // true

// Objetos personalizados
var meucarro =  {marca: 'Ford', modelo: 'Fiesta', ano: 2022}
console.log('marca' in meucarro);

// instanceOf
// objeto instanceof tipoObijeto

var dia = new Date(2021, 10, 02)
if(dia instanceof Date) {
    console.log(dia)
}
