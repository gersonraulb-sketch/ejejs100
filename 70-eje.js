function elementosFaltantes(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const faltantes = [];
    
    for (let i = min; i <= max; i++) {
        if (!arr.includes(i)) {
            faltantes.push(i);
        }
    }
    
    return faltantes;
}

console.log(elementosFaltantes([1, 2, 4, 6, 7]));