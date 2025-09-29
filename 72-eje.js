function paresQueSuman(arr, objetivo) {
    const pares = [];
    const vistos = new Set();
    
    for (let num of arr) {
        const complemento = objetivo - num;
        if (vistos.has(complemento)) {
            pares.push([complemento, num]);
        }
        vistos.add(num);
    }
    
    return pares;
}

console.log(paresQueSuman([1, 2, 3, 4, 5], 6));