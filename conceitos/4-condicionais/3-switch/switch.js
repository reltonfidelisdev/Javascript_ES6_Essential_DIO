/*
    Bloco de condicional de repetiçao utilizado para testar valores quando sabemos as possibilidades
*/

/*
    Sintaxe
    switch (expressao) {
        case calor1:
            break;
        case calor2:
            break;
        default:
        break;
    }
*/

const fruit = 'uva'

switch (fruit) {
    case 'pera':
        console.log(`A fruta é ${fruit}`);
        break;
    case 'maçã':
        console.log(`A fruta é ${fruit}`);
        break;
    case 'uva':
        console.log(`A fruta é ${fruit}`);
    default:
        console.log('O bloco default sempre é executado se o bloco switch nao colocar um break')
    break;
};