function combinarArraysOrdenados(arr1, arr2) {
    const resultado = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            resultado.push(arr1[i]);
            i++;
        } else {
            resultado.push(arr2[j]);
            j++;
        }
    }
    
    return [...resultado, ...arr1.slice(i), ...arr2.slice(j)];
}

console.log(combinarArraysOrdenados([1, 3, 5], [2, 4, 6]));