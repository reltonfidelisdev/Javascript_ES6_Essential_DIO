// (...) Operador Spread
// Utilizado para incluir um array dentro de outro

var partes = ['ombro', 'joelho'];
var musica = ['cabeca', ...partes, 'e', 'pés'];
// musica = ['cabeca', 'ombro', 'joelho', 'e', 'pés']

function fn(x, y, z) {
    console.log( x, y, z )
}
    var args = [0, 1, 3];

   fn(...args);