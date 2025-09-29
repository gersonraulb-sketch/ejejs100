function rotarMatriz90(matriz) {
    const n = matriz.length;
    const rotada = Array.from({ length: n }, () => new Array(n));
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotada[j][n - 1 - i] = matriz[i][j];
        }
    }
    
    return rotada;
}

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(rotarMatriz90(matriz));
