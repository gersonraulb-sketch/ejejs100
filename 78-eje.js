function esMatrizSimetrica(matriz) {
    const n = matriz.length;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matriz[i][j] !== matriz[j][i]) {
                return false;
            }
        }
    }
    return true;
}

const simetrica = [[1, 2, 3], [2, 4, 5], [3, 5, 6]];
const noSimetrica = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(esMatrizSimetrica(simetrica));
console.log(esMatrizSimetrica(noSimetrica));