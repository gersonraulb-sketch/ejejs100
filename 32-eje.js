function calcTarifa(medio, distancia) {
    switch(medio) {
        case "bus": return "Le cuesta: " + distancia * 0.5;
        case "taxi": return "Le cuesta: " + distancia * 1.5;
        case "uber": return "Le cuesta: " + distancia * 2.0;
        default: return "Invalido";
    }
}

console.log(calcTarifa("bus", 10));
console.log(calcTarifa("taxi", 10));
console.log(calcTarifa("uber", 10)); 