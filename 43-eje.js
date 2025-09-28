function factorial(n){
    let resul = 1;
    for(let i = 2; i <= n; i++){
        resul *= i;
    }
    return resul;
}

console.log(factorial(5))