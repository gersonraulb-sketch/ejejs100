function suma(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][i];
    }
    return suma;
}

const matriz = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
console.log(suma(matriz));