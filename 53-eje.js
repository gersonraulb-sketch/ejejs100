function buscar(array, elemento) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemento) return i;
    }
    return -1;
}

console.log(buscar([10,20,30,40], 30));
console.log(buscar([10,20,30,40], 50));