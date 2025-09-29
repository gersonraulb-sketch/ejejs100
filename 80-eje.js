function caminos(filas, columnas) {
    const dp = Array.from({ length: filas }, () => new Array(columnas).fill(1));
    
    for (let i = 1; i < filas; i++) {
        for (let j = 1; j < columnas; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    
    return dp[filas-1][columnas-1];
}

console.log(caminos(3, 3)); 
console.log(caminos(2, 2)); 