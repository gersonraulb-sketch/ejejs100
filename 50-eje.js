function esPalindromo(texto) {
    let str = texto.toString();
    
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return "No es palindromo";
        }
    }
    return "Es palindromo";
}

console.log(esPalindromo("ana")); 
console.log(esPalindromo(12321));
console.log(esPalindromo("hola"));