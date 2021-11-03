/*
    laço de repetição For
    Utilizado para percorrer objetos, arrays listas e etc.
*/
    // Sintax
    /*
    for([expressaoInicial], [condição], [incremento]) {
        bloco de código / declaração
    }
    */

    const myArray = ['one', 'two', 'tree', 'four' ];

    for (let index = 0; index < myArray.length; index++){
        const element = myArray[index];
        console.log(`Element #${index}: ${element}.`)
    }