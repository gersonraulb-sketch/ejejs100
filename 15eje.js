function fac(num){
    let resultado = 1;

    for (let i = 2; i <= num; i++){
        resultado *= i;
    }

    return resultado;
}

console.log(fac(5));
console.log(fac(7));