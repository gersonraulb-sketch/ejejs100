function contarVocales(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if ('aeiouAEIOU'.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}

console.log(contarVocales("Hola Mundo"));
console.log(contarVocales("JavaScript"));
console.log(contarVocales("xyz"));