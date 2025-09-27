function esBisiesto(año) {
    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
        return (año + " Es bisiesto");
    } else {
        return (año + " No es bisiesto");
    }
}

console.log(esBisiesto(2024));
console.log(esBisiesto(2023));
console.log(esBisiesto(2000));
console.log(esBisiesto(1900)); 