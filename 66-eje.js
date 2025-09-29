function matrizt(matriz) {
    return matriz[0].map((_, colIndex) => 
        matriz.map(fila => fila[colIndex])
    );
}

const matriz = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
console.log(matrizt(matriz));