function calc100tifica(n1, n2, op) {
    switch(op) {
        case 'raiz': return Math.sqrt(n1);
        case 'potencia': return Math.pow(n1, n2);
        case 'log': return Math.log(n1);
        case 'seno': return Math.sin(n1);
        case 'coseno': return Math.cos(n1);
        default: return "Operación no válida";
    }
}

console.log(calc100tifica(16, 2, 'raiz')); 
console.log(calc100tifica(2, 3, 'potencia')); 
console.log(calc100tifica(10, 0, 'log'));