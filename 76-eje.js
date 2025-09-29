function reducir(arr, funcion, valorInicial) {
    return arr.reduce(funcion, valorInicial);
}

const numeros = [1, 2, 3, 4, 5];

console.log(reducir(numeros, (sum, num) => sum + num, 0));

console.log(reducir(numeros, (prod, num) => prod * num, 1)); 

const palabras = ["Hola", "Mundo", "!"];
console.log(reducir(palabras, (texto, palabra) => texto + " " + palabra, ""));