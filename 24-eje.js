function areaCirculo(radio) {
    return 3.1416 * radio * radio;
}
function perimetroCirculo(radio) {
    return 2 * 3.1416 * radio;
}


function areaCuadrado(lado) {
    return lado * lado;
}
function perimetroCuadrado(lado) {
    return 4 * lado;
}


function areaRectangulo(base, altura) {
    return base * altura;
}
function perimetroRectangulo(base, altura) {
    return 2 * (base + altura);
}

console.log(areaCirculo(5));           
console.log(perimetroCuadrado(10));
console.log(areaRectangulo(8, 6));  