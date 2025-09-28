function calVelocidad(distancia, tiempo) {
    return distancia / tiempo + " km/h";
}

function calDistancia(velocidad, tiempo) {
    return velocidad * tiempo + " km";
}

function calTiempo(distancia, velocidad) {
    return distancia / velocidad + " Horas";
}

console.log(calVelocidad(100, 2));
console.log(calDistancia(60, 3));
console.log(calTiempo(300, 75));