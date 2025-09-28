function clasificarTriangulo(a, b, c) {
    switch(true) {
        case (a === b && b === c): return "Equilátero";
        case (a === b || a === c || b === c): return "Isósceles";
        default: return "Escaleno";
    }
}

console.log(clasificarTriangulo(5, 5, 5));
console.log(clasificarTriangulo(5, 5, 3));
console.log(clasificarTriangulo(3, 4, 5));