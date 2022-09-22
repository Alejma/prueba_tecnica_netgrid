let numeros = [1, 3, 1, 4, 5, 6, 3, 2];
let sort_numeros = numeros.slice().sort();
let cant_duplicados = [];

function countDuplicate () {
    for (var i = 0; i < sort_numeros.length - 1; i++) {
        if (sort_numeros[i + 1] == sort_numeros[i]) {
            cant_duplicados.push(sort_numeros[i]);
        }
    }
    console.log(numeros);
    console.log(cant_duplicados.length);
};

countDuplicate()