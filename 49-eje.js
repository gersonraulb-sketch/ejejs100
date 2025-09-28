function invertirNumero(numero) {
    let texto = numero.toString();
    let invertido = '';
    
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }
    
    return parseInt(invertido);
}

console.log(invertirNumero(123));0