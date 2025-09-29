function elementos(arr) {
    const frecuencia = {};
    
    arr.forEach(elemento => {
        frecuencia[elemento] = (frecuencia[elemento] || 0) + 1;
    });
    
    return arr.filter(elemento => frecuencia[elemento] === 1);
}

console.log(elementos([1, 2, 2, 3, 4, 4, 5]));