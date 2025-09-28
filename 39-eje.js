function convertirBase(num, de, a) {
    switch(de + '_' + a) {
        case 'binario_decimal': return parseInt(num, 2);
        case 'decimal_binario': return num.toString(2);
        case 'decimal_hexadecimal': return num.toString(16);
        case 'hexadecimal_decimal': return parseInt(num, 16);
        default: return "Conversión no válida";
    }
}

console.log(convertirBase('1010', 'binario', 'decimal')); 
console.log(convertirBase(10, 'decimal', 'binario')); 
console.log(convertirBase(255, 'decimal', 'hexadecimal'));
console.log(convertirBase('ff', 'hexadecimal', 'decimal'));