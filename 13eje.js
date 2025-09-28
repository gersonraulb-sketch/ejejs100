function sumaDig(num) {
    let suma = 0;
    let dig = num.toString();
    
    for (let i = 0; i < dig.length; i++) {
        suma += parseInt(dig[i]);
    }
    
    return suma;
}

console.log(sumaDig(123))
console.log(sumaDig(543))