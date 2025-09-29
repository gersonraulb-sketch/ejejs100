function subarraymax(arr) {
    let maxActual = arr[0];
    let maxGlobal = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        maxActual = Math.max(arr[i], maxActual + arr[i]);
        maxGlobal = Math.max(maxGlobal, maxActual);
    }
    
    return maxGlobal;
}

console.log(subarraymax([-2, 1, -3, 4, -1, 2, 1, -5, 4])); 