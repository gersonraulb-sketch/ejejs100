function interes(capital, tasa, tiempo) {
    return capital * (tasa / 100) * tiempo;
}

console.log(interes(1000, 5, 2));
console.log(interes(5000, 10, 3));