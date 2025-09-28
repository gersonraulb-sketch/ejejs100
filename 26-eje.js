function calificacion(nota){
    switch(true){
        case (nota >= 90): return nota + " A";
        case (nota >= 75): return nota + " B";
        case (nota >= 60): return nota + " C";
        case (nota >= 50): return nota + " D";
        default: return nota + " F"
    }
}
console.log(calificacion(95)); 
console.log(calificacion(85)); 
console.log(calificacion(65)); 
console.log(calificacion(50)); 
console.log(calificacion(45));