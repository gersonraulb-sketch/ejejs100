function estacion(mes) {
    switch(mes) {
        case 12: case 1: case 2: return "Invierno";
        case 3: case 4: case 5: return "Primavera";
        case 6: case 7: case 8: return "Verano";
        case 9: case 10: case 11: return "Otoño";
        default: return "Mes no válido";
    }
}

console.log(estacion(1));   
console.log(estacion(6)); 
console.log(estacion(10));  
console.log(estacion(13));