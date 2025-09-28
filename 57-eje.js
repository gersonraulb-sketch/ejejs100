function frecuencia(a) {
    let frecuencia = {};
    for (let i = 0; i < a.length; i++) {
        frecuencia[a[i]] = (frecuencia[a[i]] || 0) + 1;
    }
    return frecuencia;
}

console.log(frecuencia(['a','b','a','c','b','a']))