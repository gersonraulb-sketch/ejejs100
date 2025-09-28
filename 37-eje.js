function calcularCalorias(actividad, tiempo) {
    switch(actividad) {
        case 'correr': return "Quemaste: " + tiempo * 10 + " calorias";
        case 'nadar': return "Quemaste: " + tiempo * 8 + " calorias";
        case 'ciclismo': return "Quemaste: " + tiempo * 7 + " calorias";
        case 'caminar': return "Quemaste: " + tiempo * 5 + " calorias";
        default: return "Actividad no válida";
    }
}

console.log(calcularCalorias('correr', 30));
console.log(calcularCalorias('nadar', 45)); 
console.log(calcularCalorias('caminar', 60)); 