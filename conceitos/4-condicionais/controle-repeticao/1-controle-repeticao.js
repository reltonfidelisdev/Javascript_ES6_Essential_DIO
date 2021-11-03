// break
console.log('Exemplo de como utilizar o break e continue em loops e condicionais');

var indice = 0;

// Brack
while(true){
    indice++;

    if(indice > 2) {
        break;
    }
    console.log(indice);
}

// Continue
const myArray = [1, 2, 3, 4, 5]
for (let indice = 0; indice < myArray.length; indice++) {
    const element = myArray[indice];

    if(element % 2 === 0) {
        continue
    }

    console.log(element);
}