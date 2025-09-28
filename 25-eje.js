function calcFigura(figura, dato) {
    switch(figura) {
        case 'cuadrado':
            return {
                area: dato * dato,
                perimetro: 4 * dato
            };
        case 'circulo':
            return {
                area: 3.1416 * dato * dato,
                perimetro: 2 * 3.1416 * dato
            };
        default: return "Invalido";
    }
}

console.log(calcFigura('cuadrado', 5));
console.log(calcFigura('circulo', 3));