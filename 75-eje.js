function mapear(arr, transformacion) {
    return arr.map(transformacion);
}

const numeros = [1, 2, 3, 4, 5];

console.log(mapear(numeros, x => x * 2));

console.log(mapear(numeros, x => x ** 2)); 

console.log(mapear(numeros, x => ({ valor: x })));