function promedio(a) {
    let suma = 0;
    for (let i = 0; i < a.length; i++) {
        suma += a[i];
    }
    return suma / a.length;
}

console.log(promedio([10,20,30,40]));