function calcPuntos(compra) {
    switch(true) {
        case (compra >= 1000): return Math.floor(compra / 100) * 20;
        case (compra >= 500): return Math.floor(compra / 100) * 10;
        case (compra >= 100): return Math.floor(compra / 100) * 5;
        default: return 0;
    }
}

console.log(calcPuntos(1200)); 
console.log(calcPuntos(600)); 
console.log(calcPuntos(250));
console.log(calcPuntos(50)); 