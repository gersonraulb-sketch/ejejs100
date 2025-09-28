function fibonacci(n) {
    let secuencia = [0, 1];
    
    for (let i = 2; i < n; i++) {
        secuencia[i] = secuencia[i-1] + secuencia[i-2];
    }
    
    return secuencia.slice(0, n);
}

console.log(fibonacci(5));
console.log(fibonacci(8));