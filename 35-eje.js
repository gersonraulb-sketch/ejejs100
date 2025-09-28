function calcularPago(horas, tipoContrato) {
    switch(tipoContrato) {
        case 'tiempoCompleto': return "Su pago es: " + horas * 25;
        case 'medioTiempo': return "Su pago es: " + horas * 15;
        case 'temporal': return "Su pago es: " + horas * 12;
        default: return "Tipo de contrato no válido";
    }
}

console.log(calcularPago(40, 'tiempoCompleto'));
console.log(calcularPago(20, 'medioTiempo'));
console.log(calcularPago(30, 'temporal')); 