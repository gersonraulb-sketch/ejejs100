function cribaEratostenes(n) {
    let primos = Array(n + 1).fill(true);
    primos[0] = primos[1] = false;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (primos[i]) {
            for (let j = i * i; j <= n; j += i) {
                primos[j] = false;
            }
        }
    }
    
    return primos.reduce((result, esPrimo, index) => {
        if (esPrimo) result.push(index);
        return result;
    }, []);
}
console.log(cribaEratostenes(30));