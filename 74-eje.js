function filtrar(arr, criterio) {
    return arr.filter(criterio);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filtrar(numeros, num => num % 2 === 0)); 

console.log(filtrar(numeros, num => num > 5)); 

const palabras = ["Ana", "Juan", "María", "Pedro"];
console.log(filtrar(palabras, palabra => palabra.startsWith("A")));