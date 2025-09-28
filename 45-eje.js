function primos(n) {
    let primos = [];
    let numero = 2;
    
    while (primos.length < n) {
        let esPrimo = true;
        
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
        
        if (esPrimo) primos.push(numero);
        numero++;
    }
    
    return primos;
}


console.log(primos(5));