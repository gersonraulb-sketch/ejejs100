function numperfect(limite) {
    let perfectos = [];
    for (let i = 1; i <= limite; i++) {
        let suma = 0;
        for (let j = 1; j < i; j++) {
            if (i % j === 0) suma += j;
        }
        if (suma === i) perfectos.push(i);
    }
    return perfectos;
}

console.log(numperfect(1000));