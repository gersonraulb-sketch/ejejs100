function suma(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(suma([1, 2, 3, 4, 5]));