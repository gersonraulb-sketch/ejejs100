function mcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function mcm(a, b) {
    return (a * b) / mcd(a, b);
}

console.log(mcd(48, 18));
console.log(mcd(56, 42));
console.log(mcm(12, 18));  
console.log(mcm(15, 20));