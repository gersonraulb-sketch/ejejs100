function Matrices(matriz1, matriz2) {
    let resultado = [];
    for (let i = 0; i < matriz1.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matriz2[0].length; j++) {
            resultado[i][j] = 0;
            for (let k = 0; k < matriz1[0].length; k++) {
                resultado[i][j] += matriz1[i][k] * matriz2[k][j];
            }
        }
    }
    return resultado;
}

console.log(Matrices([[1,2],[3,4]], [[2,0],[1,2]]));