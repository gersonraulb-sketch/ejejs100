function sumaMatrices(matriz1, matriz2) {
    let resultado = [];
    for (let i = 0; i < matriz1.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matriz1[i].length; j++) {
            resultado[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }
    return resultado;
}

console.log(sumaMatrices([[1,2],[3,4]], [[5,6],[7,8]]));