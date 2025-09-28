function prim(num){
    if (num <= 1) return "Invalido";

    for (let i = 2; i < num; i++){
        if (num % i === 0) return "No es primo";
    }
    return num + " Es primo";
}

console.log(prim(7));
console.log(prim(10));
console.log(prim(2));