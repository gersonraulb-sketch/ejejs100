function calc(n1, n2, op){
    switch(op){
        case "+": return n1 + n2;
        case "-": return n1 - n2;
        case "*": return n1 * n2;
        case "/": return n2 !== 0 ? n1 / n2 : "Error: División por cero";
        default: return "Invalido";
    }
}

console.log(calc(10, 8, "+"))
console.log(calc(10, 8, "-"))
console.log(calc(10, 8, "*"))
console.log(calc(10, 8, "/"))