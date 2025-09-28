function cajeroAutomatico(opcion, monto) {
    let saldo = 10000;
    switch(opcion) {
        case "consultar": return saldo;
        case "retirar": return saldo >= monto ? saldo - monto : "Fondos insuficientes";
        case "depositar": return saldo + monto;
        default: return "Operación no válida";
    }
}

console.log(cajeroAutomatico("consultar")); 
console.log(cajeroAutomatico("retirar", 1000)); 
console.log(cajeroAutomatico("depositar", 1000));
console.log(cajeroAutomatico("retirar", 11000)); 